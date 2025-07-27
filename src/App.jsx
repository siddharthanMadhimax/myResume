import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Projects from "./pages/projects/ProjectSection"
import Skills from "./pages/Skills"
import Experience from './pages/Experience'
import Footer from './pages/Footer'
import ContactForm from './pages/Contact'

const App = () => {
  return (
    <Routes>
      {/* Main scroll-based portfolio */}
      <Route path="/" element={
        <div className='bg-black text-white scroll-smooth overflow-x-hidden overflow-y-auto h-screen'>
          <Home />
          <Skills />
          <Projects/>
          <Experience/>
          <ContactForm/>
          <Footer/>
        </div>
      } />

      {/* <Route element={<ProjectDetails/>} path='project-details/:id'/> */}
    </Routes>
  )
}

export default App
