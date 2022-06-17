import React, { useEffect, useState } from 'react';
import Project from './Project';



const Projects = () => {

    const [projects, setProjects] = useState([]);


    useEffect(() => {
        fetch('fake-data.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);
    return (
        <div className='bg-blue-300 py-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-20'>
                {
                    projects.map((project, index) => (<Project key={index} project={project}></Project>))
                }
            </div>
        </div>
    );
};

export default Projects;