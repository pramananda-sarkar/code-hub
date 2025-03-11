import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'
import Project from './pages/Project'
import Navbar from './components/Navbar'



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<Project />} />
      </Routes>
    </div>
  )
}

export default App