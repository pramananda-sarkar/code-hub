import { useEffect, useState } from 'react';
import MonacoEditor from '@monaco-editor/react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

const App = () => {
  const [code, setCode] = useState('// Start coding\n');
  const [output, setOutput] = useState('');
  const sessionId = 'test-session'; // Hardcoded for simplicity

  useEffect(() => {
    socket.emit('join-session', sessionId);

    socket.on('code-update', (newCode: string) => setCode(newCode));
    socket.on('run-output', ({ success, result, error }) => {
      setOutput(success ? String(result) : `Error: ${error}`);
    });

    return () => {
      socket.off('code-update');
      socket.off('run-output');
    };
  }, []);

  const handleCodeChange = (value: string | undefined) => {
    if (value) {
      setCode(value);
      socket.emit('code-change', { sessionId, code: value });
    }
  };

  const runCode = () => socket.emit('run-code', { sessionId });

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 p-4">
        <MonacoEditor
          height="70vh"
          language="javascript"
          theme="vs-dark"
          value={code}
          onChange={handleCodeChange}
          options={{ minimap: { enabled: false } }}
        />
        <button
          onClick={runCode}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Run Code
        </button>
      </div>
      <div className="w-1/3 p-4 bg-white shadow">
        <h3 className="text-lg font-bold mb-2">Output</h3>
        <pre className="p-2 bg-gray-200 rounded h-64 overflow-auto">{output}</pre>
      </div>
    </div>
  );
};

export default App;