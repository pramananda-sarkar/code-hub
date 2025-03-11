import React from 'react'



const Navbar = () => {
  return (
    <div className='flex justify-between p-4 bg-gray-900 text-white text-2xl'>
        <h1 className='text-3xl font-bold'>Code Hub</h1>
        <div className='flex gap-4 text-xl'>
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
        </div>
    </div>
  )
}

export default Navbar