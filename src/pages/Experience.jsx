import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import informations from '../informations/text'


const Experience = () => {
    const [selectedCompany, setSelectedCompany] = useState("1")

    return (
        <section className="relative overflow-hidden min-h-screen px-6 py-16 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#0f172a] text-white">
            {/* Animated Background Blobs */}


            {/* Title */}
            <div className="relative z-10 text-center mb-12">
                <motion.div
                initial={{opacity:0,y:-30}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.7}}
                 className="text-4xl font-extrabold text-white">
                    <span className="text-blue-400">My</span> Experience
                </motion.div>
            </div>

            {/* Experience Cards */}


            <div>
                {
                    informations.experience.map((item) => {
                        return (
                            <div>
                                {
                                    item.id == selectedCompany && (
                                        <div className="flex flex-wrap justify-between gap-6">
                                            {/* Left Aligned Box */}
                                            <motion.div
                                                initial={{ opacity: 0, x: -100 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6 }}
                                                className="bg-[#27364d] p-6 rounded-xl shadow-lg border border-blue-900/30 w-full md:max-w-[48%] self-start"
                                            >
                                                <div>
                                                    <div className="text-xl font-bold">Company</div>
                                                    <div className="text-blue-600 text-2xl font-bold">{item.company}</div>
                                                    <div className={`${item.status === "In" ? "text-green-600" : "text-red-500"}`}>{item.status}</div>
                                                    <div className="text-gray-400">{item.duration}</div>
                                                </div>
                                            </motion.div>

                                            {/* Right Aligned Box */}
                                            <motion.div
                                                initial={{ opacity: 0, x: 100 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6 }}
                                                className="bg-[#27364d] sm:mt-20 p-6 rounded-xl shadow-lg border border-blue-900/30 w-full md:max-w-[48%] self-end md:ml-auto"
                                            >
                                                <div>
                                                    <h1 className="text-xl font-bold mb-2 text-textBlue">What I Learned</h1>
                                                    <p className="text-gray-300">{item.description}</p>
                                                </div>
                                            </motion.div>


                                            <motion.div
                                                initial={{ opacity: 0, x: -100 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 1.8 }}
                                                className="bg-[#27364d] p-6 rounded-xl shadow-lg border border-blue-900/30 w-full md:max-w-[48%] self-start"
                                            >

                                                <div>
                                                    <h1 className="text-xl font-bold mb-2">Tech Stack</h1>
                                                </div>

                                                <div className='flex gap-2 max-sm:flex-col'>
                                                    {
                                                        item.techStack.map((item) => {
                                                            return (
                                                                <div className='text-xl font-bold text-textBlue'>
                                                                    {item},
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>

                                            </motion.div>



                                        </div>

                                    )
                                }
                            </div>
                        )
                    })
                }



            </div>

            <div className='flex items-center justify-center gap-2 mt-8'>
                {
                    informations.experience.map((item) => {
                        return (
                            <div className='mt-4 text-center flex items-center justify-center'>
                                <motion.div
                                    onClick={() => setSelectedCompany(item.id)}
                                    className={`rounded-lg h-[10px] cursor-pointer`}
                                    animate={{
                                        width: item.id === selectedCompany ? "30px" : "10px",
                                        backgroundColor: item.id === selectedCompany ? "#ffffff" : "#4b5563", // white or gray-700
                                    }}
                                    transition={{ duration: 0.5 }}
                                />

                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Experience
