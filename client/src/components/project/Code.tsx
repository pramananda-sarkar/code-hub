import React from 'react';

const Code = () => {
  const code = `// Welcome to the Code Editor
function helloWorld() {
  console.log('Hello, World!');
}`;

  return (
    <div className='flex-1 bg-gray-900 text-white p-4 overflow-y-auto'>
      <textarea
        className='w-full h-full bg-transparent outline-none resize-none'
        defaultValue={code}
      />
    </div>
  );
};

export default Code;