import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center flex-col lg:flex-row gap-5">
                    <img src="https://i.ibb.co/ZmSpPNX/IMG20211017082810.jpg" className="max-w-md rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Hi! I'm Md. Mazharul Islam Sohag</h1>
                        <h5 className="text-xl mt-3 italic">Frontend Developer with React.js</h5>
                        <p className="py-6 text-justify">My goal is to participate in the challenging work of development and to advance my development work day by day to serve the country and the nation as well as to improve myself. I always like technical work. Alhamdulillah I have come a long way towards this goal, for example, I have completed a full stack web development course with Programming Hero. I can now proudly say what I have learned, HTML 5, CSS 3, Tailwind CSS, Bootstrap, JavaScript (ES6), React.JS, React Router, Daisy UI, Node.JS, Express.JS, JWT Token, and MongoDB, etc. . So I want to take myself and the nation far and wide by becoming a partner of the fourth industrial revolution (IT industrial revolution) in the challenging world of the future.</p>
                        <Link to='/contact' className="btn btn-primary">Contact Me</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;