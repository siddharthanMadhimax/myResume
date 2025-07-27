import React, { useRef } from 'react';
import gsap from 'gsap';
import Tilt from "react-parallax-tilt"
import { Code } from 'lucide-react';



const ProjectCard = ({ title, image, description, id, forCode,hoverDescription }) => {
    const cardRef = useRef(null);
    const titleRef = useRef(null);



    return (
        <div className='cursor-pointer '>
            <Tilt
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.05}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                ref={cardRef}

                className="max-w-md  cursor-pointer p-6 bg-[#1a1a1a] rounded-2xl shadow-xl hover:scale-105 transform transition duration-300"
            >
                <div className="relative group overflow-hidden rounded-xl">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className='flex items-center justify-center flex-col'>
                            <p className="text-white text-lg font-semibold">{hoverDescription}</p>
                            {/* <p className='font-bold'>Then Click it</p> */}
                        </div>
                    </div>
                </div>
                <div
                    ref={titleRef}
                    className="text-2xl font-bold text-white overflow-hidden"
                >
                    {title}
                </div>
                <p className="text-gray-400 mt-2">{description}</p>

                <div className='flex items-center justify-center'>
                    <a
                        href={forCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 mt-2 bg-gradient-to-br from-blue-700 to-pink-700 rounded-xl w-[180px] p-2 items-center justify-center text-white hover:opacity-90 hover:scale-105 transition-transform duration-200 transform"
                    >
                        <Code />
                        <span>View Code</span>
                    </a>

                </div>
            </Tilt>
        </div>
    );
};

export default ProjectCard;
