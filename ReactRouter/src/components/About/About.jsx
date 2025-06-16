import React from 'react';

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center ">
                    <div className="md:1/12 lg:w-4/12 flex flex-col gap-2">
                        <img
                            src="https://github.com/asishmehata48/SecureTech/blob/main/logo.png?raw=true "
                            className='lg:w-12/12 rounded-2xl shadow-lg'
                            alt="image"
                            style={{ backgroundImage: 'linear-gradient(to right, #11998e, #38ef7d)' }}
                        />
                    </div>
                    <div className="md:12/12 lg:w-12/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Project SecureTech is a student-led initiative dedicated to enhancing cybersecurity awareness and combating cyber threats.
                        </h2>
                        <p className="mt-6 text-gray-600">
                        With the increasing reliance on digital technologies, securing personal and organizational data has become crucial. SecureTech aims to provide accessible tools, educational resources, and practical solutions to help individuals and communities understand and protect themselves against cybercrimes.

                        Our platform offers a comprehensive suite of features including:

                        <ol>
                            <li>Cybersecurity best practices and guidelines</li>
                            <li>Real-time alerts on emerging cyber threats</li>
                            <li>Tools for secure communication and data protection</li>
                            <li>Awareness campaigns and training modules for diverse audiences</li>
                        </ol>
                        Built using modern web technologies like React and Vite, SecureTech focuses on delivering an intuitive and secure user experience while promoting digital safety.

                        Join us in building a safer digital world through education, innovation, and community collaboration.   
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}