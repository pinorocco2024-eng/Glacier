
import React from 'react';
import { Check, ShieldCheck, Zap, Server, Globe, Lock, Code, Info, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HOW_WE_WORK = [
  { 
    icon: <Globe className="w-5 h-5" />, 
    title: "Global Distributed Nodes", 
    text: "We execute logic closest to your data source using an edge-first philosophy that reduces round-trip latency by up to 80%." 
  },
  { 
    icon: <Lock className="w-5 h-5" />, 
    title: "Zero Trust Architecture", 
    text: "Security isn't a feature; it's the foundation. Your credentials and sensitive logic never leave our encrypted, hardware-isolated vault." 
  },
  { 
    icon: <Code className="w-5 h-5" />, 
    title: "Raw Execution Power", 
    text: "Glacier processes workflows as compiled machine instructions, not interpreted scripts. This means pure, unadulterated speed for every task." 
  },
];

const BILLING_EXPLANATION = [
  { title: "What you pay for", content: "We charge based on 'Execution Units' (EU). One EU equals one completed step in any workflow. There are no hidden fees for bandwidth or storage." },
  { title: "No Abstraction Tax", content: "Unlike competitors who charge for 'active minutes', we only bill for the actual value delivered: successful logic completion." },
  { title: "Scalable Infrastructure", content: "As your volume grows, your per-task cost decreases. Our Platform tier offers fixed-cost infrastructure for massive workloads." }
];

const PLANS = [
  {
    name: "Base",
    icon: <Zap className="w-6 h-6" />,
    price: "$49",
    billing: "per month",
    description: "Ideal for individual developers and small automated side projects.",
    features: [
      "1,000 Execution tasks",
      "Standard Webhook access",
      "Visual Logic Designer",
      "Shared Execution pool",
      "Community support"
    ]
  },
  {
    name: "Advanced",
    icon: <ShieldCheck className="w-6 h-6" />,
    price: "$199",
    billing: "per month",
    featured: true,
    description: "Designed for high-growth startups and complex digital ecosystems.",
    features: [
      "High-priority Execution",
      "Custom API Connectors",
      "Audit Logging & Security",
      "Multi-user Workspace",
      "Direct Engineer chat",
      "Quantum Encryption ready"
    ]
  },
  {
    name: "Platform",
    icon: <Server className="w-6 h-6" />,
    price: "Custom",
    billing: "billed annually",
    description: "For global enterprises requiring localized on-premise execution.",
    features: [
      "Unlimited Execution",
      "On-Premise Node support",
      "Dedicated Infrastructure",
      "Custom SLA & Compliance",
      "24/7 Global response team",
      "White-label options"
    ]
  }
];

export const Pricing: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h4 className="text-xs font-black uppercase tracking-[0.4em] text-blue-600 mb-6">Transparency by Design</h4>
        <h2 className="text-5xl font-bold text-slate-900 tracking-tight mb-8">Value-Driven Architecture.</h2>
        <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
          We don't just sell software. We provide the infrastructure for your digital evolution. 
          Our pricing reflects the raw computational value we provide.
        </p>
      </motion.div>

      {/* SEO Section: How we work */}
      <div className="mb-32">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[2px] flex-1 bg-slate-100" />
          <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-300">How we work</h3>
          <div className="h-[2px] flex-1 bg-slate-100" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {HOW_WE_WORK.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[40px] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h5 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{item.title}</h5>
              <p className="text-slate-500 font-light leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Plans Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
        {PLANS.map((plan, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`relative p-12 rounded-[56px] border ${
              plan.featured 
                ? 'bg-slate-900 text-white border-slate-800 shadow-[0_64px_128px_-16px_rgba(0,0,0,0.15)] md:scale-105 z-10' 
                : 'bg-white border-slate-200/60 text-slate-900 hover:shadow-xl'
            } transition-all duration-700 overflow-hidden group`}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 blur-[64px] rounded-full opacity-20 -mr-10 -mt-10 ${plan.featured ? 'bg-blue-400' : 'bg-slate-200'}`} />

            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${plan.featured ? 'bg-blue-500' : 'bg-slate-100 text-slate-900'}`}>
              {plan.icon}
            </div>

            <div className="mb-4">
              <span className="text-5xl font-bold tracking-tighter">{plan.price}</span>
              {plan.price !== 'Custom' && <span className={`text-sm font-medium ml-2 ${plan.featured ? 'text-slate-400' : 'text-slate-500'}`}>{plan.billing}</span>}
            </div>

            <h3 className="text-2xl font-bold mb-4 tracking-tight">{plan.name} Edition</h3>
            <p className={`text-sm mb-10 font-light leading-relaxed ${plan.featured ? 'text-slate-400' : 'text-slate-500'}`}>
              {plan.description}
            </p>
            
            <div className="h-[1px] w-full bg-current opacity-10 mb-10" />

            <ul className="space-y-5 mb-12">
              {plan.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-4 text-sm font-medium">
                  <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.featured ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-500'}`}>
                    <Check className="w-3 h-3" />
                  </div>
                  <span className={plan.featured ? 'text-slate-300' : 'text-slate-600'}>{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-5 rounded-full font-bold transition-all flex items-center justify-center gap-2 group/btn ${
              plan.featured 
                ? 'bg-white text-slate-900 hover:bg-slate-100' 
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}>
              Get Started
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ))}
      </div>

      {/* SEO Section: Billing explanation */}
      <div className="bg-slate-900 rounded-[56px] p-16 md:p-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-black uppercase tracking-[0.3em] mb-8">
              <Info className="w-4 h-4" />
              Billing Mechanics
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter">No Abstraction Tax.</h3>
            <p className="text-xl text-slate-400 font-light leading-relaxed mb-10">
              Glacier's billing model is built for scale. We only charge for successful node execution, ensuring your interests are perfectly aligned with our infrastructure's performance.
            </p>
            <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-500 transition-all flex items-center gap-2">
              Learn about EU Credits
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-8">
            {BILLING_EXPLANATION.map((item, i) => (
              <div key={i} className="p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-sm">
                <h6 className="text-lg font-bold text-white mb-3 tracking-tight">{item.title}</h6>
                <p className="text-slate-400 text-sm font-light leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
