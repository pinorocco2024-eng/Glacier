
import React from 'react';
import { Snowflake, Twitter, Github, Linkedin } from 'lucide-react';
import { ViewState } from '../App';

interface FooterProps {
  setView: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="border-t border-slate-100 bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div 
              onClick={() => setView('home')}
              className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900 mb-6 cursor-pointer"
            >
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Snowflake className="text-white w-5 h-5" />
              </div>
              GLACIER
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-[200px]">
              Defining the next standard of digital orchestration.
            </p>
            <div className="flex gap-4">
              <Twitter className="w-5 h-5 text-slate-400 hover:text-blue-500 cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-slate-400 hover:text-slate-900 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-blue-700 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Platform</h4>
            <ul className="space-y-4">
              <li><button onClick={() => setView('features')} className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Features</button></li>
              <li><button onClick={() => setView('architect')} className="text-sm text-slate-500 hover:text-blue-600 transition-colors">AI Architect</button></li>
              <li><button onClick={() => setView('pricing')} className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Visual Editor</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Resources</h4>
            <ul className="space-y-4">
              <li><button onClick={() => setView('documentation')} className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Documentation</button></li>
              <li><button onClick={() => setView('documentation')} className="text-sm text-slate-500 hover:text-blue-600 transition-colors">API Reference</button></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
          <p>© 2024 Glacier Automations Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
