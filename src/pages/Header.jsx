import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import navLinks from "../informations/menuConfig";
import logo from "../../src/assets/images/logo.jpeg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");

  const handleFunction = (name) => {
    setIsOpen(false);
    setActive(name);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold tracking-tight text-white"
        >
          <img className="w-[20px] h-[20px] rounded-full" src={logo} alt="logo" />
        </motion.h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map(({ name, path }) => (
            <li key={path} className={`cursor-pointer ${active === name ? "text-white" : "text-gray-400"}`}>
              <a
                href={path}
                onClick={() => handleFunction(name)}
                className="relative font-medium transition hover:text-cyan-400"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Side Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-black text-white z-50 shadow-lg flex flex-col px-6 py-10 gap-4 md:hidden"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)} className="text-white">
                <X size={28} />
              </button>
            </div>

            <ul className="flex flex-col gap-4 mt-6">
              {navLinks.map(({ name, path }) => (
                <li key={path}>
                  <a
                    href={path}
                    onClick={() => handleFunction(name)}
                    className={`block text-lg font-medium transition hover:text-cyan-400 ${
                      active === name ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
