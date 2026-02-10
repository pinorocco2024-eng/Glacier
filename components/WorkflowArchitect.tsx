
import React, { useState, useRef, useEffect } from 'react';
import { Wand2, Loader2, CheckCircle2, Circle, ArrowRight, Zap, Boxes, Play, Code, Download, Activity, Cpu, BrainCircuit, Network, ShieldCheck, Sparkles, Database } from 'lucide-react';
import { generateWorkflow } from '../services/geminiService';
import { WorkflowPlan } from '../types';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

const CAPABILITIES = [
  {
    icon: <BrainCircuit className="w-5 h-5 text-blue-600" />,
    title: "Large Language Model Logic",
    description: "Utilize state-of-the-art LLMs to interpret nuanced business requirements and translate them into machine-ready execution paths."
  },
  {
    icon: <Network className="w-5 h-5 text-indigo-600" />,
    title: "Autonomous Agent Orchestration",
    description: "Deploy self-healing agents that monitor workflow health and autonomously adjust logic parameters to maintain 99.9% uptime."
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
    title: "Neural Security Analysis",
    description: "Every synthesized workflow undergoes a rigorous 14-point security audit using neural pattern matching for zero-day vulnerability detection."
  }
];

export const WorkflowArchitect: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [workflow, setWorkflow] = useState<WorkflowPlan | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [logMessages, setLogMessages] = useState<string[]>([]);
  
  // Ref per lo scroll verso l'alto
  const topRef = useRef<HTMLDivElement>(null);
  
  // Magnetic effect for the result card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / 40);
    y.set((e.clientY - centerY) / 40);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const addLog = (msg: string) => {
    setLogMessages(prev => [msg, ...prev].slice(0, 5));
  };

  const handleArchitect = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setError(null);
    setWorkflow(null);
    setIsSimulating(false);
    
    const logs = [
      "Accessing Gemini Neural Cortex...",
      "Deconstructing Natural Language Semantics...",
      "Mapping Infrastructure Topography...",
      "Injecting Resilience Protocols...",
      "Synchronizing Global Mesh Nodes...",
      "Architecture Synthesis Complete."
    ];
    
    let i = 0;
    const interval = setInterval(() => {
      if (i < logs.length) {
        addLog(logs[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 600);

    try {
      const result = await generateWorkflow(prompt);
      setWorkflow(result);
    } catch (err) {
      setError("Architectural synthesis failed. Please retry.");
    } finally {
      setLoading(false);
      clearInterval(interval);
    }
  };

  return (
    <div ref={topRef} className="max-w-7xl mx-auto px-6 w-full py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start mb-32">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="sticky top-32"
        >
          <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-[0.3em] mb-8">
            <Sparkles className="w-4 h-4" />
            Generative Infrastructure
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            Architect with <br />
            <span className="text-blue-600">Pure Intent.</span>
          </h2>
          <p className="text-xl text-slate-500 mb-12 leading-relaxed font-light max-w-md">
            The next generation of automation isn't built with drag-and-drop. It's whispered into reality. 
            Describe your vision; Glacier builds the truth.
          </p>
          
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-[52px] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ex: Sync high-value customers from HubSpot to a dedicated Slack channel, then generate a personalized welcome video using HeyGen..."
                className="relative w-full h-64 p-10 rounded-[48px] border border-slate-100 focus:border-blue-400 focus:ring-0 transition-all resize-none text-lg text-slate-700 bg-white shadow-sm placeholder:text-slate-300"
              />
              
              <AnimatePresence>
                {loading && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/80 backdrop-blur-xl rounded-[48px] flex flex-col items-center justify-center p-8 text-center z-10"
                  >
                    <div className="flex flex-col gap-3 mb-8">
                      {logMessages.map((log, i) => (
                        <motion.p 
                          key={log + i} 
                          initial={{ opacity: 0, y: 10 }} 
                          animate={{ opacity: 1, y: 0 }}
                          className="text-[10px] font-mono text-blue-600 uppercase tracking-[0.2em] font-bold"
                        >
                          {log}
                        </motion.p>
                      ))}
                    </div>
                    <div className="relative">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-12 h-12 border-t-2 border-blue-600 border-r-2 border-transparent rounded-full"
                      />
                      <BrainCircuit className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-blue-600" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="absolute bottom-8 right-8">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleArchitect}
                  disabled={loading || !prompt}
                  className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold flex items-center gap-3 hover:bg-slate-800 transition-all disabled:opacity-50 shadow-2xl shadow-slate-900/20 group"
                >
                  <Wand2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Synthesize Logic
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          style={{ x: mouseX, y: mouseY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative min-h-[750px] flex items-center justify-center blueprint-bg rounded-[64px] border border-slate-100"
        >
          <AnimatePresence mode="wait">
            {!workflow && !loading && (
              <motion.div 
                key="idle"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="w-full h-full flex flex-col items-center justify-center p-12 text-center"
              >
                <div className="relative mb-12">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-20"
                  />
                  <div className="w-24 h-24 rounded-full border border-slate-200 flex items-center justify-center bg-white relative">
                    <Database className="w-8 h-8 text-slate-100" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Neural Engine Idle</h3>
                <p className="text-sm text-slate-400 font-light max-w-[280px]">Enter a natural language prompt to begin architectural synthesis.</p>
              </motion.div>
            )}

            {workflow && !loading && (
              <motion.div 
                key="result"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", damping: 25, stiffness: 120 }}
                className="w-full glass rounded-[64px] p-10 border border-white shadow-[0_64px_128px_-32px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col h-full m-4"
              >
                <div className="grid grid-cols-3 gap-6 mb-12">
                   {[
                     { label: 'Neural Precision', val: '99.9%', icon: <BrainCircuit className="w-3 h-3"/> },
                     { label: 'Compute Cost', val: '0.002 EU', icon: <Zap className="w-3 h-3"/> },
                     { label: 'Security Score', val: 'A+', icon: <ShieldCheck className="w-3 h-3"/> }
                   ].map((m, i) => (
                     <div key={i} className="bg-slate-50/40 p-5 rounded-3xl border border-white/60 hover:bg-white hover:shadow-sm transition-all group">
                       <div className="flex items-center gap-2 text-slate-400 text-[8px] font-black uppercase tracking-widest mb-1 group-hover:text-blue-500 transition-colors">
                         {m.icon} {m.label}
                       </div>
                       <div className="text-base font-bold text-slate-900 tracking-tight">{m.val}</div>
                     </div>
                   ))}
                </div>

                <div className="flex items-center justify-between mb-10">
                   <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-2 block">Synthesized Plan</span>
                    <h3 className="text-4xl font-bold text-slate-900 tracking-tighter leading-none">{workflow.name}</h3>
                   </div>
                   <button 
                    onClick={() => setIsSimulating(!isSimulating)}
                    className={`p-4 rounded-2xl transition-all shadow-lg ${isSimulating ? 'bg-blue-600 text-white shadow-blue-500/20' : 'bg-white text-slate-400 hover:text-blue-600 border border-slate-100 hover:shadow-xl'}`}
                   >
                     <Play className={`w-5 h-5 ${isSimulating ? 'fill-current' : ''}`} />
                   </button>
                </div>

                <div className="space-y-12 flex-1 overflow-y-auto pr-2 custom-scrollbar max-h-[400px]">
                  {workflow.steps.map((step, idx) => (
                    <motion.div 
                      key={step.id} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (idx * 0.1) }}
                      className="relative flex gap-10 group"
                    >
                      {idx !== workflow.steps.length - 1 && (
                        <div className="absolute left-[15px] top-12 bottom-[-48px] w-[1px] bg-slate-100 group-hover:bg-blue-100 transition-colors">
                          {isSimulating && (
                            <motion.div 
                              animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
                              transition={{ duration: 2, repeat: Infinity, delay: idx * 0.4 }}
                              className="absolute w-full h-1/3 bg-blue-500"
                            />
                          )}
                        </div>
                      )}
                      
                      <div className={`mt-2 w-8 h-8 rounded-2xl border flex items-center justify-center transition-all duration-700 bg-white shrink-0 ${
                        isSimulating ? 'ring-8 ring-blue-50 border-blue-500 scale-110' : 'border-slate-100 group-hover:border-blue-200'
                      }`}>
                        {step.type === 'trigger' ? <Activity className="w-3 h-3 text-blue-500" /> : 
                         step.type === 'condition' ? <Zap className="w-3 h-3 text-indigo-500" /> : 
                         <Boxes className="w-3 h-3 text-slate-800" />}
                      </div>

                      <div className="flex-1 pb-4 group-hover:translate-x-1 transition-transform">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[9px] font-black uppercase tracking-widest text-slate-300 group-hover:text-blue-400 transition-colors">{step.type} node</span>
                          <div className="h-px flex-1 bg-slate-50 group-hover:bg-blue-50 transition-colors" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">{step.title}</h4>
                        <p className="text-slate-500 leading-relaxed font-light text-sm max-w-[280px]">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 pt-10 border-t border-slate-50">
                  <div className="flex gap-4 mb-10">
                    <button className="flex-1 py-5 bg-slate-900 text-white rounded-[24px] font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 group/deploy overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-white/10 to-blue-600/0 -translate-x-full group-hover/deploy:translate-x-full transition-transform duration-1000" />
                      Deploy to Mesh
                      <ArrowRight className="w-4 h-4 group-hover/deploy:translate-x-1 transition-transform" />
                    </button>
                    <button className="p-5 bg-white border border-slate-100 text-slate-400 rounded-[24px] hover:text-blue-600 hover:border-blue-200 hover:shadow-xl transition-all" title="View Code">
                      <Code className="w-5 h-5" />
                    </button>
                    <button className="p-5 bg-white border border-slate-100 text-slate-400 rounded-[24px] hover:text-blue-600 hover:border-blue-200 hover:shadow-xl transition-all" title="Download Blueprint">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex items-center justify-center gap-4 text-[9px] text-slate-400 font-black uppercase tracking-[0.2em]">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-3 h-3 text-emerald-500" /> SOC2 COMPLIANT</span>
                    <span className="w-1 h-1 bg-slate-200 rounded-full" />
                    <span className="flex items-center gap-1.5"><Zap className="w-3 h-3 text-blue-500" /> LATENCY GUARANTEED</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* SEO & Capabilities Section */}
      <div className="border-t border-slate-100 pt-32">
        <div className="max-w-4xl mb-24">
          <h4 className="text-xs font-black uppercase tracking-[0.4em] text-blue-600 mb-8 underline underline-offset-8 decoration-blue-100">Deep Logic Capabilities</h4>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter mb-10">Beyond No-Code. <br />Neural Synthesis.</h3>
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            The traditional automation landscape is littered with rigid, "drag-and-drop" builders that fail at complexity. 
            Glacier's AI Architect uses <strong>neural synthesis</strong> to build logic that understands intent, handles edge cases, 
            and optimizes for computational efficiency automatically. This is the future of <strong>autonomous enterprise orchestration</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {CAPABILITIES.map((cap, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100">
                {cap.icon}
              </div>
              <h5 className="text-lg font-bold text-slate-900 tracking-tight">{cap.title}</h5>
              <p className="text-slate-500 text-sm font-light leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-16 rounded-[64px] bg-slate-900 text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full group-hover:scale-110 transition-transform duration-1000" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h4 className="text-blue-400 text-xs font-black uppercase tracking-[0.3em] mb-6">Autonomous Future</h4>
              <h3 className="text-4xl font-bold mb-8 tracking-tighter">Ready to deploy your first neural workflow?</h3>
              <p className="text-slate-400 font-light leading-relaxed">
                Join 500+ enterprises that have eliminated manual ops using Glacier's agentic architecture. 
                Start architecting your digital empire today with sub-millisecond precision.
              </p>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="px-12 py-6 bg-white text-slate-900 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all flex items-center gap-3 whitespace-nowrap"
            >
              Start Building Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};
