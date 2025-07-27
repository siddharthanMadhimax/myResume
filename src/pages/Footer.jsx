// components/Footer.tsx
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Branding */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-2">Siddharth</h2>
          <p className="text-sm text-gray-400">
  Passionate Full Stack Developer turning ideas into seamless digital experiences with React & Node.js.
</p>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-medium mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </motion.div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-lg font-medium mb-3">Connect</h3>
          <div className="flex space-x-4 text-xl text-gray-300">
            <a href="https://github.com/siddharthanMadhimax" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/siddharth-m-570699247/" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaLinkedin /></a>
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaTwitter /></a> */}
            <a href="mailto:siddharthan.madhiyalagan@gmail.com" className="hover:text-white"><FaEnvelope /></a>
          </div>
        </motion.div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()}  All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
