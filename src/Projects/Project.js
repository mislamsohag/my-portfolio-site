import React from 'react';
// import { Link } from 'react-router-dom';

const Project = ({ project }) => {

    const { name, details, image, link } = project;
    console.log(project)

    return (
        <div>
            <div className="card w-75 bg-base-100 shadow-xl">
                <div className="card-body">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt={name} className="max-w-sm rounded-lg shadow-2xl" /></figure>
                    <div>
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <p className="py-6">{details}</p>
                    </div>
                    <div>
                        {link.git_client && <a target='_blank' href={link.git_client} className="btn btn-ghost btn-xs">GitHub Client Link</a>}
                    </div>
                    <div>
                        {link.git_server && <a target='_blank' href={link.git_server} className="btn btn-ghost btn-xs">GitHub server Link</a>}
                    </div>
                    <div>
                        <a href={link.live_site} target='_blank' className="btn btn-primary card-actions justify-center items-center">Live Site</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;