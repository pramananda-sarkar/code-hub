import React from 'react';
import LeftSideBar from '../components/project/LeftSideBar';
import Header from '../components/project/Header';
import Code from '../components/project/Code';
import Terminal from '../components/project/Terminal';

const Project = () => {
  return (
    <div className='h-screen flex flex-col bg-gray-100'>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className='flex flex-1 overflow-hidden'>
        {/* Left Sidebar */}
        <LeftSideBar />

        {/* Code Editor and Terminal */}
        <div className='flex-1 flex flex-col'>
          {/* Code Editor */}
          <Code />

          {/* Terminal */}
          <Terminal />
        </div>
      </div>
    </div>
  );
};

export default Project;