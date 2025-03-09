import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { VM } from 'vm2';

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

// Store session code in memory
const sessions: { [key: string]: string } = {};

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join-session', (sessionId: string) => {
    socket.join(sessionId);
    if (!sessions[sessionId]) sessions[sessionId] = '// Start coding\n';
    socket.emit('code-update', sessions[sessionId]);
  });

  socket.on('code-change', ({ sessionId, code }: { sessionId: string; code: string }) => {
    sessions[sessionId] = code;
    socket.to(sessionId).emit('code-update', code);
  });

  socket.on('run-code', ({ sessionId }: { sessionId: string }) => {
    const code = sessions[sessionId];
    try {
      const sandbox = new VM({ timeout: 1000, sandbox: {} });
      const output = sandbox.run(code);
      io.to(sessionId).emit('run-output', { success: true, result: output });
    } catch (error: any) {
      io.to(sessionId).emit('run-output', { success: false, error: error.message });
    }
  });
});

server.listen(3001, () => console.log('Server running on http://localhost:3001'));