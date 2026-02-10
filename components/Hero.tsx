
import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { ViewState } from '../App';

interface HeroProps {
  setView: (view: ViewState) => void;
}

export const Hero: React.FC<HeroProps> = ({ setView }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
      } 
    }
  };

  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[160px] -z-10" 
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1], 
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-[140px] -z-10" 
      />

      <motion.div 
        className="max-w-7xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          variants={itemVariants} 
          whileHover={{ y: -2 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-[0.3em] mb-12 shadow-[0_8px_16px_-6px_rgba(0,0,0,0.05)] backdrop-blur cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Neural Orchestrator v3.0
        </motion.div>
        
        <motion.h1 
          variants={itemVariants} 
          className="text-7xl md:text-[120px] font-bold text-slate-900 tracking-tighter mb-12 leading-[0.85] md:leading-[0.8]"
        >
          Automate at the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-blue-900">speed of light.</span>
        </motion.h1 >
        
        <motion.p 
          variants={itemVariants} 
          className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-400 mb-16 leading-relaxed font-light"
        >
          Experience a refined architecture for digital operations. 
          Glacier integrates your entire stack into a singular, high-performance flow.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <motion.button 
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setView('architect')}
            className="w-full sm:w-auto px-12 py-6 bg-slate-900 text-white rounded-full text-lg font-bold hover:bg-slate-800 transition-all shadow-2xl shadow-slate-900/20 flex items-center justify-center gap-3 group"
          >
            Start Architecting
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setView('features')}
            className="w-full sm:w-auto px-12 py-6 bg-white text-slate-700 border border-slate-100 rounded-full text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-3 shadow-sm"
          >
            <Play className="w-5 h-5 fill-slate-900 text-slate-900" />
            Watch Demo
          </motion.button>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mt-32 relative max-w-6xl mx-auto px-4"
        >
          <div className="glass rounded-[64px] p-4 glow border border-white/60 shadow-[0_64px_128px_-16px_rgba(0,0,0,0.1)] animate-float overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=2000" 
                alt="Glacier Interface" 
                className="rounded-[48px] w-full object-cover aspect-[21/9] brightness-[1.02] grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
