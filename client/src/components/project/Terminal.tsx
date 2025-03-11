import React, { useState } from 'react';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);

  const handleCommand = (command: string) => {
    let newOutput = [...output, `$ ${command}`];

    switch (command.trim().toLowerCase()) {
      case 'help':
        newOutput = [
          ...newOutput,
          'Available commands:',
          'help - Show this help message',
          'clear - Clear the terminal',
          'start - Start the project',
          'build - Build the project',
          'test - Run tests',
          'exit - Close the terminal',
        ];
        break;

      case 'clear':
        setOutput([]);
        return;

      case 'start':
        newOutput = [...newOutput, 'Starting the project...'];
        break;

      case 'build':
        newOutput = [...newOutput, 'Building the project...'];
        break;

      case 'test':
        newOutput = [...newOutput, 'Running tests...'];
        break;

      case 'exit':
        newOutput = [...newOutput, 'Closing terminal...'];
        break;

      default:
        newOutput = [...newOutput, `Command not found: ${command}`];
        break;
    }

    setOutput(newOutput);
    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <div className='bg-black text-white font-mono p-4 h-48 overflow-y-auto'>
      <div className='mb-4'>
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <div className='flex'>
        <span className='text-green-400'>$</span>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className='bg-transparent border-none outline-none flex-1 ml-2 text-white'
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;