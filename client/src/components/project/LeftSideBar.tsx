import React from 'react';

const LeftSideBar = () => {
  const files = ['index.html', 'styles.css', 'script.js', 'README.md'];

  return (
    <div className='w-64 bg-gray-800 text-white p-4 overflow-y-auto'>
      <h2 className='text-lg font-bold mb-4'>Project Files</h2>
      <ul>
        {files.map((file, index) => (
          <li key={index} className='py-2 hover:bg-gray-700 rounded-md px-2'>
            {file}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;