import React from 'react';
import { useNavigate } from 'react-router-dom';

type Project = {
    id: string;
    name: string;
    description: string;
    codebaseLink: string;
};

const Projects = () => {
    const navigate = useNavigate();

    const projects: Project[] = [
        { id: '10001', name: 'Project 1', description: 'Description of Project 1', codebaseLink: 'https://github.com/username/project1' },
        { id: '10002', name: 'Project 2', description: 'Description of Project 2', codebaseLink: 'https://github.com/username/project2' },
        { id: '10003', name: 'Project 3', description: 'Description of Project 3', codebaseLink: 'https://github.com/username/project3' },
        { id: '10004', name: 'Project 4', description: 'Description of Project 4', codebaseLink: 'https://github.com/username/project4' }
    ];

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div 
                        key={project.id} 
                        className="border rounded-lg p-4 shadow-lg hover:bg-gray-100 cursor-pointer"
                        onClick={() => navigate(`/projects/${project.id}`)} // Navigate to project page
                    >
                        <h2 className="text-xl font-semibold">{project.name}</h2>
                        <p className="text-gray-600">{project.description}</p>
                        <a 
                            href={project.codebaseLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-500 hover:underline"
                        >
                            View Codebase
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
