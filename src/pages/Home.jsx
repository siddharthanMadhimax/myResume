import React, { useEffect, useState } from 'react';
import myImage from "../assets/images/profileImage.png";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { Download } from 'lucide-react';
import information from "../informations/text"


const Home = () => {
    const [instroductionPara, setIntroductionPara] = useState(false)
    const [animationBox,setAnimationBox]=useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIntroductionPara(true)
            setAnimationBox(true)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])
    return (
        <div className="relative  min-h-screen bg-black flex items-center justify-between flex-col-reverse md:flex-row p-6">
            
            {/* Left Content */}
            <div className="flex flex-col items-start justify-center max-w-xl">
                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r max-sm:p-2  from-pink-500 to-blue-500 bg-clip-text text-transparent font-extrabold text-5xl max-sm:text-3xl md:text-6xl mb-4"
                >
                    Siddharthan M
                </motion.h1>


                {/* Typing Role */}
                <TypeAnimation
                    sequence={[
                        'Full Stack Developer', 2000,
                        'Frontend Developer', 2000,
                        'Backend Developer', 2000,
                        'MERN Stack Enthusiast', 2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    className="text-blue-600 text-3xl max-sm:text-xl font-bold"
                    repeat={Infinity}
                    style={{
                        textShadow: '0 0 8px rgba(65, 112, 213, 0.8), 0 0 16px rgba(37, 99, 235, 0.6)',
                    }}
                />

                <AnimatePresence>
                    {instroductionPara && (
                        <div>
                            <motion.div
                                key="intro"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                className="text-xl bg-white/4 backdrop-blur-md shadow-lg p-4 mt-2 rounded-lg text-white"
                            >
                               {information.aboutMe}
                            </motion.div>

                            <div className='flex items-center justify-center'>
                                <a
                                href="/myResume.pdf"
                                download
                                className="flex gap-2 mt-2 bg-gradient-to-br from-blue-700 to-pink-700 rounded-xl w-[180px] p-2 items-center justify-center text-white hover:opacity-90 hover:scale-105 transition-transform duration-200 transform"
                            >
                                <Download className="w-5 h-5" />
                                <span>Download Resume</span>
                            </a> 
                            </div>

                        </div>
                    )}
                </AnimatePresence>

                {/* download resume */}




            </div>

            {/* Right Image */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-4 md:mb-0  relative w-fit group"
            >
                {/* Decorative Box 1 */}
                <div className={`absolute  top-[200px] right-[200px] max-sm:right-[150px] w-[100px] h-[100px] md:w-[200px] md:h-[300px]
      bg-gradient-to-br from-blue-500 to-pink-500 rounded-xl rotate-2 z-0 shadow-2xl
      group-hover:right-[200px] transition-all duration-500 ${animationBox ? "right-[300px]":""} `}></div>

                {/* Decorative Box 2 */}
                <div className={`absolute top-[100px] left-[100px] w-[100px] h-[100px] md:w-[200px] md:h-[200px]
      bg-gradient-to-br from-blue-500 to-pink-500 rounded-xl rotate-2 z-0 shadow-2xl
      group-hover:top-[50px] transition-all duration-500  ${animationBox ? "top-[60px]":""}`}></div>

                {/* Profile Image */}
                <img
                    src={myImage}
                    alt="Profile"
                    className="w-[300px] max-sm:ml-4 h-[400px] md:w-[400px] md:h-[500px] object-cover rounded-xl shadow-lg relative z-10"
                />
            </motion.div>


        </div>
    );
};

export default Home;




// // components/ProjectCard.tsx
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const ProjectCard = ({ title, image, description }: any) => {
//   const cardRef = useRef(null);
//   const titleRef = useRef(null);

//   useEffect(() => {
//     // Card zoom and fade
//     gsap.from(cardRef.current, {
//       scrollTrigger: {
//         trigger: cardRef.current,
//         start: "top 90%",
//         toggleActions: "play none none none",
//       },
//       scale: 0.8,
//       opacity: 0,
//       duration: 1.2,
//       ease: "power4.out",
//     });

//     // Title Drawing Paint-In Effect
//     gsap.from(titleRef.current, {
//       scrollTrigger: {
//         trigger: titleRef.current,
//         start: "top 95%",
//       },
//       clipPath: "inset(0 100% 0 0)", // from right to left
//       duration: 1.5,
//       ease: "power4.out",
//     });
//   }, []);

//   return (
//     <div ref={cardRef} className="bg-[#1a1a1a] rounded-xl p-6 mb-10 shadow-lg">
//       <img src={image} className="w-full h-64 object-cover rounded-lg mb-4" />
//       <h2 ref={titleRef} className="text-2xl font-bold text-white overflow-hidden">
//         {title}
//       </h2>
//       <p className="text-gray-300 mt-2">{description}</p>
//     </div>
//   );
// };

// export default ProjectCard;
