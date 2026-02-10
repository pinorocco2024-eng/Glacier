
import React, { useState } from 'react';
import { Book, Code, Terminal, Zap, Puzzle, Lock, X, ChevronRight, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ViewState } from '../App';

interface DocumentationProps {
  setView?: (view: ViewState) => void;
}

export const DOC_CATEGORIES = [
  {
    icon: <Book className="w-6 h-6" />,
    title: "Quick Start",
    description: "Initialize your first automation node in under 5 minutes with our rapid deployment guide.",
    guide: {
      steps: [
        { label: "Install CLI", content: "Run npm install -g @glacier/cli to begin." },
        { label: "Authenticate", content: "Login using glacier auth login with your API key." },
        { label: "Create Workflow", content: "glacier create workflow 'welcome-bot'" }
      ],
      code: "glacier init --template default"
    }
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "API Reference",
    description: "Comprehensive documentation for Glacier REST and GraphQL endpoints for power users.",
    guide: {
      steps: [
        { label: "Authentication", content: "Use Bearer tokens in your request headers." },
        { label: "Execution", content: "POST /v1/execute/{workflow_id}" },
        { label: "Webhooks", content: "Configure custom endpoints in the dashboard." }
      ],
      code: "GET https://api.glacier.io/v1/status"
    }
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: "CLI Tooling",
    description: "Manage your digital empire directly from the terminal with the Glacier-CLI package.",
    guide: {
      steps: [
        { label: "Node Management", content: "Scale nodes using glacier node scale --count 5." },
        { label: "Deployments", content: "Push logic changes with glacier push." },
        { label: "Logs", content: "glacier logs --follow" }
      ],
      code: "glacier --help"
    }
  },
  {
    icon: <Puzzle className="w-6 h-6" />,
    title: "SDKs",
    description: "Native libraries for TypeScript, Python, and Go to integrate Glacier into your existing code.",
    guide: {
      steps: [
        { label: "TypeScript", content: "import { Glacier } from '@glacier/sdk'" },
        { label: "Python", content: "pip install glacier-python" },
        { label: "Go", content: "go get github.com/glacier/go-sdk" }
      ],
      code: "const g = new Glacier({ key: '...' });"
    }
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "IAM & Security",
    description: "Best practices for managing permissions and ensuring SOC2 compliance in your workflows.",
    guide: {
      steps: [
        { label: "RBAC", content: "Define roles and assign to team members." },
        { label: "Key Rotation", content: "Automate API key rotation every 90 days." },
        { label: "Audit Logs", content: "Export logs to S3 or Datadog." }
      ],
      code: "glacier iam set-policy admin"
    }
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Advanced Logic",
    description: "Learn how to use conditional branching, error handling, and parallel execution paths.",
    guide: {
      steps: [
        { label: "Parallelism", content: "Use the Split-Join node for concurrent tasks." },
        { label: "Error Handling", content: "Configure 'On-Failure' retry policies." },
        { label: "Edge Functions", content: "Write custom JS code for raw manipulation." }
      ],
      code: "workflow.onFailure({ retry: 3 })"
    }
  }
];

export const Documentation: React.FC<DocumentationProps> = ({ setView }) => {
  const [selectedDoc, setSelectedDoc] = useState<typeof DOC_CATEGORIES[0] | null>(null);

  const handleFullDocs = () => {
    if (setView) {
      setSelectedDoc(null);
      setView('documentation');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h2 className="text-5xl font-bold text-slate-900 tracking-tight mb-4">Documentation</h2>
        <p className="text-xl text-slate-400 font-light">Explore the depths of the Glacier architecture.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DOC_CATEGORIES.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => setSelectedDoc(cat)}
            className="group p-8 rounded-[40px] bg-white border border-slate-100 hover:border-blue-500 transition-all cursor-pointer shadow-sm hover:shadow-xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
              {cat.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{cat.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">{cat.description}</p>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest flex items-center gap-2">
              View Guide
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <ChevronRight className="w-4 h-4" />
              </motion.div>
            </span>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedDoc && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-end"
            onClick={() => setSelectedDoc(null)}
          >
            <motion.div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl h-full bg-white relative z-10 shadow-2xl p-12 overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedDoc(null)}
                className="p-3 hover:bg-slate-50 rounded-full transition-colors text-slate-400 mb-12"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                  {selectedDoc.icon}
                </div>
                <h3 className="text-3xl font-bold text-slate-900 tracking-tight">{selectedDoc.title}</h3>
              </div>

              <p className="text-lg text-slate-500 font-light mb-12">
                This guide covers the fundamental concepts of {selectedDoc.title.toLowerCase()} in Glacier.
              </p>

              <div className="space-y-10">
                {selectedDoc.guide.steps.map((step, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">0{i+1}</span>
                      <h4 className="font-bold text-slate-900">{step.label}</h4>
                    </div>
                    <p className="text-slate-500 text-sm pl-9">{step.content}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-8 border-t border-slate-100">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Snippet Preview</h4>
                <div className="bg-slate-900 rounded-3xl p-6 relative group overflow-hidden">
                  <pre className="text-blue-400 font-mono text-sm overflow-x-auto">
                    <code>{selectedDoc.guide.code}</code>
                  </pre>
                  <button className="absolute top-4 right-4 p-2 bg-white/10 rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleFullDocs}
                className="mt-12 w-full py-5 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
              >
                Open Full Docs
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
