
import React, { useState, useEffect } from 'react';
import { Snowflake, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ViewState } from '../App';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (view: ViewState) => {
    setView(view);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[150] transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className={`max-w-7xl mx-auto px-6 h-20 flex items-center justify-between glass border border-white/20 rounded-full mx-6 transition-all duration-500 ${
        scrolled ? 'shadow-2xl shadow-slate-900/5 translate-y-2' : ''
      }`}>
        <div 
          onClick={() => handleNav('home')} 
          className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900 cursor-pointer group"
        >
          <motion.div 
            whileHover={{ rotate: 180 }}
            className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center transition-all group-hover:bg-blue-600"
          >
            <Snowflake className="text-white w-5 h-5" />
          </motion.div>
          GLACIER
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          {[
            { id: 'features', label: 'Features' },
            { id: 'architect', label: 'AI Architect' },
            { id: 'pricing', label: 'Plans' },
            { id: 'documentation', label: 'Documentation' }
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => handleNav(item.id as ViewState)} 
              className={`text-sm font-semibold transition-all relative group ${
                currentView === item.id ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all ${
                currentView === item.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </button>
          ))}
        </div>

        <button 
          onClick={() => handleNav('architect')}
          className="px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-slate-800 transition-all flex items-center gap-2 group shadow-xl shadow-slate-900/10 active:scale-95"
        >
          Get Started
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </motion.nav>
  );
};
