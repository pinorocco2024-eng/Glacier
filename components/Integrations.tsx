
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Slack, Database, Github, Send, Cloud, Twitter, Instagram, Framer, Code, Link } from 'lucide-react';

const APPS = [
  { name: 'Slack', icon: <Slack className="w-8 h-8" /> },
  { name: 'GitHub', icon: <Github className="w-8 h-8" /> },
  { name: 'Database', icon: <Database className="w-8 h-8" /> },
  { name: 'Email', icon: <Mail className="w-8 h-8" /> },
  { name: 'Telegram', icon: <Send className="w-8 h-8" /> },
  { name: 'AWS', icon: <Cloud className="w-8 h-8" /> },
  { name: 'Twitter', icon: <Twitter className="w-8 h-8" /> },
  { name: 'Instagram', icon: <Instagram className="w-8 h-8" /> },
  { name: 'Framer', icon: <Framer className="w-8 h-8" /> },
  { name: 'Stripe', icon: <Link className="w-8 h-8" /> },
  { name: 'VS Code', icon: <Code className="w-8 h-8" /> },
  { name: 'Notion', icon: <Code className="w-8 h-8" /> },
];

export const Integrations: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest mb-6">
          Integrations
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">Connect your entire stack.</h2>
        <p className="text-lg text-slate-400 max-w-xl mx-auto font-light">
          Glacier supports over 5,000 native integrations and direct API calls.
        </p>
      </motion.div>

      <div className="relative">
        {/* Decorative circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-slate-100 rounded-full -z-10 opacity-50" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-10">
          {APPS.map((app, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, type: "spring", stiffness: 100 }}
              whileHover={{ 
                scale: 1.25, 
                backgroundColor: "rgba(59, 130, 246, 0.08)",
                borderColor: "rgba(59, 130, 246, 0.6)",
                boxShadow: "0 32px 64px -16px rgba(59, 130, 246, 0.25)"
              }}
              className="aspect-square glass rounded-[40px] flex flex-col items-center justify-center gap-4 border border-slate-100 cursor-pointer group transition-all duration-300"
            >
              <div className="text-slate-400 group-hover:text-blue-600 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-all duration-300 transform group-hover:scale-110">
                {app.icon}
              </div>
              <span className="text-[11px] font-black text-slate-400 opacity-0 group-hover:opacity-100 group-hover:text-blue-600 transition-all uppercase tracking-widest">
                {app.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
