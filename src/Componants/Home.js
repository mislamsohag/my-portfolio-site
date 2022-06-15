import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center flex-col lg:flex-row gap-5">
                    <img src="https://i.ibb.co/ZmSpPNX/IMG20211017082810.jpg" className="max-w-md rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Hi! I am Md. Mazharul Islam Sohag</h1>
                        <p className="py-6">In addition to my React development skills, I am also enough knowledge in HTML 5, CSS 3, Tailwind CSS, Bootstrap, JavaScript (ES 6), Node.JS, MongoDB and React Router. I am also familiar with webpack and other build tools. I have a deep understanding of the latest web development trends and technologies. I am confident that I can quickly adapt to new technologies and trends and can be a valuable asset to team work.</p>
                        <button className="btn btn-primary">Contact Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;