
import React, { useState } from 'react';
import { Zap, Shield, Cpu, Layers, Globe, MousePointer2, X, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ViewState } from '../App';

interface FeaturesProps {
  setView?: (view: ViewState) => void;
}

const FEATURE_LIST = [
  {
    icon: <Zap className="w-6 h-6" />,
    color: "bg-blue-500",
    title: "Instant Processing",
    description: "Our sub-millisecond execution engine ensures your automations trigger before the event even finishes.",
    details: {
      subtitle: "Latency-Zero Infrastructure",
      content: "Glacier utilizes a proprietary edge-routing algorithm that predicts incoming triggers. With an average execution time of 0.4ms, your workflows run at the speed of the hardware itself.",
      points: ["Global Edge Nodes", "Cold-start prevention", "Direct memory piping"]
    }
  },
  {
    icon: <Shield className="w-6 h-6" />,
    color: "bg-indigo-500",
    title: "Ironclad Security",
    description: "Enterprise-grade isolation protocols and quantum-ready encryption for every data packet.",
    details: {
      subtitle: "The Security Fortress",
      content: "Every byte is encrypted using post-quantum algorithms. We provide isolated VPC environments for enterprise customers, ensuring that even in a multi-tenant system, your data never leaves its secure lane.",
      points: ["SOC2 Type II Compliant", "AES-512 Quantum-Safe", "Hardware-level isolation"]
    }
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    color: "bg-cyan-500",
    title: "AI Optimization",
    description: "Neural networks that learn your workflow patterns to suggest structural efficiency gains.",
    details: {
      subtitle: "Intelligence at the core",
      content: "Glacier's AI doesn't just build; it learns. It analyzes millions of execution paths to identify bottlenecks you didn't know existed, suggesting modular refactors in real-time.",
      points: ["Neural path analysis", "Auto-healing nodes", "Predictive scaling"]
    }
  },
  {
    icon: <Layers className="w-6 h-6" />,
    color: "bg-slate-800",
    title: "Deep Composability",
    description: "Build logic blocks once and nest them infinitely across your entire workspace.",
    details: {
      subtitle: "Modular Architecture",
      content: "Stop repeating yourself. Build atomic functions and nest them like Lego blocks. Changes in a root block propagate instantly to all thousands of child workflows.",
      points: ["Versioned sub-flows", "Global state variables", "Atomic execution"]
    }
  },
  {
    icon: <Globe className="w-6 h-6" />,
    color: "bg-emerald-500",
    title: "Global Mesh",
    description: "A decentralized execution network that eliminates single points of failure automatically.",
    details: {
      subtitle: "Decentralized Resilience",
      content: "If a region goes down, Glacier redirects your logic to the nearest healthy node in less than 5ms. No downtime, no manual intervention required.",
      points: ["99.999% SLA Guarantee", "Multi-region failover", "Auto-geographic routing"]
    }
  },
  {
    icon: <MousePointer2 className="w-6 h-6" />,
    color: "bg-rose-500",
    title: "Direct Logic",
    description: "A professional design canvas that maps directly to API schemas without abstraction lag.",
    details: {
      subtitle: "The Visual Compiler",
      content: "Unlike other no-code tools, Glacier doesn't hide the complexity—it clarifies it. The canvas maps 1:1 with REST/GraphQL schemas for developer-grade precision.",
      points: ["Schema mapping", "Live data inspection", "Real-time debugging"]
    }
  }
];

export const Features: React.FC<FeaturesProps> = ({ setView }) => {
  const [selectedFeature, setSelectedFeature] = useState<typeof FEATURE_LIST[0] | null>(null);

  const handleTryNow = (featureTitle: string) => {
    if (setView) {
      setSelectedFeature(null);
      setView('architect');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-8">Built for Professionals.</h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
          The power of raw code combined with the elegance of a visual interface.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURE_LIST.map((feature, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            onClick={() => setSelectedFeature(feature)}
            className="group relative p-10 rounded-[40px] bg-white border border-slate-100 hover:border-blue-200 transition-all shadow-[0_8px_32px_-12px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer overflow-hidden"
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 text-white ${feature.color} shadow-lg shadow-current/10 group-hover:scale-110 transition-transform duration-500`}>
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{feature.title}</h3>
            <p className="text-slate-500 leading-relaxed text-base font-light mb-6">
              {feature.description}
            </p>
            <div className="pt-6 border-t border-slate-50 flex items-center text-sm font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
              Learn more
              <Zap className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedFeature && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-xl"
            onClick={() => setSelectedFeature(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-white rounded-[56px] shadow-2xl overflow-hidden relative"
            >
              <button 
                onClick={() => setSelectedFeature(null)}
                className="absolute top-8 right-8 p-3 hover:bg-slate-50 rounded-full transition-colors text-slate-400"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="p-12">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 text-white ${selectedFeature.color}`}>
                  {selectedFeature.icon}
                </div>
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 mb-3">{selectedFeature.details.subtitle}</h4>
                <h3 className="text-4xl font-bold text-slate-900 mb-8 tracking-tighter">{selectedFeature.title}</h3>
                
                <p className="text-xl text-slate-500 leading-relaxed font-light mb-12">
                  {selectedFeature.details.content}
                </p>

                <div className="space-y-4">
                  {selectedFeature.details.points.map((point, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      className={`flex items-center gap-4 p-3 rounded-2xl transition-all ${point === 'Direct memory piping' ? 'bg-blue-50/50 cursor-pointer hover:bg-blue-100 ring-1 ring-blue-100' : ''}`}
                      onClick={() => point === 'Direct memory piping' && handleTryNow('Instant Processing')}
                    >
                      <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className={`font-medium ${point === 'Direct memory piping' ? 'text-blue-700 underline underline-offset-4 decoration-blue-300' : 'text-slate-700'}`}>
                        {point}
                      </span>
                      {point === 'Direct memory piping' && <Zap className="w-3 h-3 text-blue-400 animate-pulse" />}
                    </motion.div>
                  ))}
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleTryNow(selectedFeature.title)}
                  className="mt-14 w-full py-5 bg-slate-900 text-white rounded-full font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10"
                >
                  Try {selectedFeature.title} Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
