// pages/Projects.tsx
import React from 'react';
import ProjectCard from './ProjectComponent';
import frontEndImage from "../../assets/images/frontendSkill.png"
import backendImage from "../../assets/images/imageBackEnd.png"
import information from "../../informations/text"
import {motion} from "framer-motion"

const Projects = () => {
  return (
    <section name="project" className='bg-black py-20 px-8 sm:px-20'>
      <div>
        <motion.h1
        initial={{opacity:0,x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1.3}}
         className='font-extrabold  text-4xl text-white text-center mb-4'><span className=' '>My</span> <span className='text-textBlue'>Projects</span></motion.h1>
      <div>
        <p className='text-gray-400 text-center max-w-3xl mx-auto mb-4'>
          Here are some of the applications I've built using the <span className="text-pink-600 font-bold text-md">MERN</span> stack and modern web technologies.
        </p>
       <motion.div
       initial={{opacity:0,x:100}}
       whileInView={{opacity:1,x:0}}
       transition={{duration:1.2}}
       className='flex items-center justify-center'>
         <h1 className='mb-14 px-4 py-1 text-center text-3xl rounded-lg font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent border  '>
            What i Did
        </h1>
       </motion.div>
      </div>
      </div>
      <motion.div
      initial={{opacity:0,y:100}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.8}}
       className='grid gap-12 md:grid-cols-2'>
        {information.projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>

    </section>
  );
};

export default Projects;
