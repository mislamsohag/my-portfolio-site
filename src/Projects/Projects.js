import React from 'react';

const project = [
    { 'name': 'St-Wholsale BD' }
]

const Projects = () => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><iframe src="https://simble-firebase-authentication.web.app/" alt="Shoes" ></iframe></figure>
                <div class="card-body">
                    <h2 class="card-title">St-Wholsale BD</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;