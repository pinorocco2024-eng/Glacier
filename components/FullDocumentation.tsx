
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronRight, Book, Code, Terminal, Zap, Puzzle, Lock, Copy } from 'lucide-react';
import { DOC_CATEGORIES } from './Documentation';

export const FullDocumentation: React.FC = () => {
  const [activeSection, setActiveSection] = useState(DOC_CATEGORIES[0].title);

  const activeDoc = DOC_CATEGORIES.find(d => d.title === activeSection) || DOC_CATEGORIES[0];

  return (
    <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 pb-32">
      {/* Sidebar Navigation */}
      <aside className="lg:w-72 shrink-0">
        <div className="sticky top-32 space-y-12">
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Search Knowledge</h4>
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              <input 
                type="text" 
                placeholder="Find a node..." 
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Documentation</h4>
            <nav className="space-y-1">
              {DOC_CATEGORIES.map((cat) => (
                <button
                  key={cat.title}
                  onClick={() => setActiveSection(cat.title)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    activeSection === cat.title 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                      : 'text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={activeSection === cat.title ? 'text-white' : 'text-slate-400'}>
                      {/* Fixed: Cast cat.icon to React.ReactElement<any> to allow the className prop in cloneElement */}
                      {React.cloneElement(cat.icon as React.ReactElement<any>, { className: 'w-4 h-4' })}
                    </span>
                    {cat.title}
                  </div>
                  {activeSection === cat.title && <ChevronRight className="w-4 h-4" />}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6 bg-slate-900 rounded-[32px] text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/20 blur-[40px] rounded-full" />
            <h5 className="text-sm font-bold mb-2">Need help?</h5>
            <p className="text-xs text-slate-400 font-light mb-4 leading-relaxed">Our support team is available 24/7 for Enterprise users.</p>
            <button className="text-[10px] font-black uppercase tracking-widest text-blue-400 hover:text-blue-300 transition-colors">Contact Engineers</button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 max-w-3xl">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="p-3 bg-blue-50 rounded-2xl text-blue-600">
              {activeDoc.icon}
            </span>
            <div className="h-px flex-1 bg-slate-100" />
          </div>

          <h1 className="text-5xl font-bold text-slate-900 tracking-tighter mb-6">{activeDoc.title}</h1>
          <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
            {activeDoc.description}
          </p>

          <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Implementation Steps</h2>
              <div className="grid gap-6">
                {activeDoc.guide.steps.map((step, i) => (
                  <div key={i} className="flex gap-6 p-8 rounded-[32px] bg-slate-50 border border-slate-100">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0">
                      0{i+1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">{step.label}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{step.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Code Reference</h2>
              <div className="bg-slate-900 rounded-[40px] p-10 relative group shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                  </div>
                  <button className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors flex items-center gap-2">
                    <Copy className="w-3 h-3" />
                    Copy Snippet
                  </button>
                </div>
                <pre className="text-blue-400 font-mono text-base overflow-x-auto leading-relaxed">
                  <code>{activeDoc.guide.code}</code>
                </pre>
              </div>
            </section>

            <section className="pt-16 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-400 mb-1">Previous</h4>
                  <p className="font-bold text-slate-900">Platform Overview</p>
                </div>
                <div className="text-right">
                  <h4 className="text-sm font-bold text-slate-400 mb-1">Next Up</h4>
                  <p className="font-bold text-blue-600 flex items-center gap-2 justify-end">
                    Advanced Debugging
                    <ChevronRight className="w-4 h-4" />
                  </p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
};
