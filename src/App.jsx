import React, { useEffect } from 'react';
import Home from "./pages/Home";
import Projects from "./pages/projects/ProjectSection";
import Skills from "./pages/Skills";
import Experience from './pages/Experience';
import Footer from './pages/Footer';
import ContactForm from './pages/Contact';
import Header from './pages/Header';

const App = () => {
  
  useEffect(() => {
    document.title = "siddhu";
  }, []);

  return (
    <div className="bg-black text-white scroll-smooth overflow-x-hidden overflow-y-auto h-screen">
      <Header />
      <main>
        <section id="home"><Home /></section>
        <section id="skills" className="scroll-mt-12"><Skills /></section>
      <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="contact"><ContactForm /></section>
        <Footer />
      </main>
    </div>
  );
};

export default App;
