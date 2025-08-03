import React, { useEffect, useRef } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import Home from "./pages/Home";
import Projects from "./pages/projects/ProjectSection";
import Skills from "./pages/Skills";
import Experience from './pages/Experience';
import Footer from './pages/Footer';
import ContactForm from './pages/Contact';
import Header from './pages/Header'

const App = () => {
  const hasSpokenRef = useRef(false);

  const speak = (text) => {
    const synth = window.speechSynthesis;
    const speakNow = () => {
      const utterance = new SpeechSynthesisUtterance(text);
      const voices = synth.getVoices();
      const voice = voices.find(v =>
        v.name.includes('Female') || v.name.includes('Google UK English Female')
      );
      if (voice) utterance.voice = voice;
      utterance.rate = 1;
      synth.speak(utterance);
    };
    if (synth.getVoices().length === 0) {
      synth.onvoiceschanged = () => speakNow();
    } else {
      speakNow();
    }
  };

  const commands = [
    {
      command: 'go to *',
      callback: (section) => {
        const sectionId = section.toLowerCase().trim();
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          speak(`Moving to ${sectionId}`);
        }
      }
    },
    {
      command: 'scroll down',
      callback: () => window.scrollBy({ top: 500, behavior: 'smooth' },speak("we Reached"))
    },
    {
      command: 'scroll up',
      callback: () => window.scrollBy({ top: -500, behavior: 'smooth' },speak("we Reached"))
    },
    {
      command: /^(hello|hi|hey)$/i,
      callback: () => speak('Hello! How can I help you?')
    },

    {
      command: 'reset',
      callback: () => resetTranscript()
    }
  ];


  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({ commands });

  useEffect(() => {
    if (!hasSpokenRef.current && browserSupportsSpeechRecognition) {
      speak("Hi! This portfolio is controlled by your voice. Say something like 'Go to contact' or 'Go to skills'.");
      SpeechRecognition.startListening({ continuous: true });
      hasSpokenRef.current = true;
    }
  }, [browserSupportsSpeechRecognition]);

  useEffect(() => {
    console.log(" Listening:", listening);
    console.log(" Transcript:", transcript);
  }, [listening, transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser does not support voice commands.</span>;
  }

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
