import React, { useState } from 'react'
import informations from "../informations/text"
import {motion} from "framer-motion"

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState("1")
    return (
        <section name="skills" className='mt-4 bg-skillBgColor p-2 min-h-screen '>
            <div className='flex items-center justify-center'>
                <h1 className=' text-3xl border border-textBlue p-2 rounded-lg text-white font-bold '>About me</h1>
            </div>

            <div>
                <p className="text-gray-400  max-sm:p-3 mt-2 max-w-xl mx-auto max-sm:p-2">
                    I specialize in building sleek frontend interfaces and powerful backend systems using the <span className="text-blue-400 font-semibold">MERN stack</span>. Code is my canvas, and I love turning concepts into real-world solutions.
                </p>
            </div>
            <div>
                <h1 
                className='text-center  text-textBlue text-3xl font-bold bg-gradient-to-r max-sm:p-2 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent'>What i do</h1>
            </div>

            {/* mini nav bar for shoking my skills */}

            <div className='flex items-center justify-center mt-4'>
                <div className='flex bg-black p-2 sm:px-4 rounded-lg max-w-md items-center justify-center gap-4'>
                    {informations.skills.map((item) => {
                        return (
                            <div className='' key={item.id}>
                                <div onClick={() => setSelectedSkill(item.id)} className={`text-gray-400 py-1 cursor-pointer px-2 rounded-lg ${selectedSkill == item.id ? "bg-textBlue text-white" : ""}`}>{item.name}</div>
                            </div>
                        )
                    })}
                </div>
            </div>


            {/* content of skills */}



            <div className='sm:p-10 flex items-center justify-center'>
                {
                    informations.skills.map((item) => {
                        return (
                            <motion.div
                            initial={{opacity:0,x:100}}
                            whileInView={{opacity:1,x:0}}
                            transition={{duration:0.8}}
                             className='' 
                             key={item.id}>
                                {
                                    item.id == selectedSkill && (
                                        <div className='  bg-skillsSubBgColor flex max-sm:flex-col gap-10 p-10'>
                                            {/* iamge  */}
                                            <motion.div
                                            initial={{opacity:0,x:-20}}
                                            whileInView={{opacity:1,x:0}}
                                            transition={{duration:0.8}}
                                            >
                                                <img className='w-[400px] h-[400px] max-sm:w-[200px] max-sm:h-[200px]' src={item.image} alt="" />
                                            </motion.div>


                                            {/* content */}

                                            <div>
                                                {/* heading */}
                                                <div className='text-3xl max-sm:text-center font-bold'>
                                                    <h1>{item.name}</h1>
                                                </div>

                                                {/* content */}
                                                <div className='mt-3 max-sm:text-center text-gray-400'>
                                                    {item.meInThat}
                                                </div>
                                                {/* skills */}

                                                <div className='grid sm:mt-10 sm:p-10 max-sm:mt-5  sm:gap-20 max-sm:gap-8 grid-cols-2'>
                                                    {item.skillImages.map((item) => {
                                                        // const Icon=item.icon
                                                        return (
                                                            <motion.div 
                                                            key={item.name}
                                                            initial={{opacity:0,y:100}}
                                                            whileInView={{opacity:1,y:0}}
                                                            transition={{duration:0.8}}
                                                            whileHover={{scale:1.10}}
                                                            className='flex max-sm:flex-col gap-4 bg-iconBgColor p-4 max-sm:px-10 items-center justify-center'>
                                                                {/* name */}
                                                                {/* <Icon className='text-4xl'/> */}
                                                                <div>
                                                                    <img src={item.images}  className='w-[60px] max-sm:hidden h-[60px] max-sm:h-[50px] max-sm:w-[50px] rounded-full animate-spinSlow' alt="" />
                                                                </div>
                                                                <div className='sm:text-xl font-bold'>{item.name}</div>
                                                                
                                                            </motion.div>
                                                        )
                                                    })}
                                                </div>
                                            </div>





                                        </div>


                                    )
                                }
                            </motion.div>
                        )
                    })
                }
            </div>


        </section>
    )
}

export default Skills