import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Full-Stack Software Engineer';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 opacity-80"></div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
          <div className="inline-block p-3 bg-blue-500/20 rounded-full mb-6 animate-pulse-glow">
            <Code2 size={48} className="text-blue-400" />
          </div>
        </div>

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fadeInUp"
          style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Poli Bhanu Prakash Reddy
          </span>
        </h1>

        <div
          className="text-2xl sm:text-3xl lg:text-4xl text-slate-300 mb-8 h-12 flex items-center justify-center animate-fadeInUp"
          style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <span className="font-mono">
            {text}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
          </span>
        </div>

        <p
          className="text-lg sm:text-xl text-slate-400 mb-12 max-w-3xl mx-auto animate-fadeInUp"
          style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}
        >
          Designing and implementing scalable, low-latency applications using Node.js, React, and MongoDB.
          Passionate about Data Structures, Algorithms, and delivering high-quality software solutions.
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fadeInUp"
          style={{ animationDelay: '1s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <a
            href="https://github.com/bhanu-2208"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            <Github size={20} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bhanu-prakash-reddy-poli-ba2a25247/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/polibhanu/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            <ExternalLink size={20} />
            LeetCode
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <Mail size={20} />
            Contact Me
          </button>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600/20 hover:bg-blue-600/30 transition-colors"
          style={{ animationDelay: '1.2s' }}
        >
          <ChevronDown size={24} className="text-blue-400" />
        </button>
      </div>
    </section>
  );
}
