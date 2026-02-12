import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { WorkflowArchitect } from './components/WorkflowArchitect';
import { Integrations } from './components/Integrations';
import { Footer } from './components/Footer';
import { Pricing } from './components/Pricing';
import { Documentation } from './components/Documentation';
import { FullDocumentation } from './components/FullDocumentation';
import { SupportChat } from './components/SupportChat';
import { motion, AnimatePresence } from 'framer-motion';


export type ViewState = 'home' | 'features' | 'architect' | 'pricing' | 'documentation';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');

  // Gestione del cambio vista con scroll automatico in cima
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  const renderContent = () => {
    switch (view) {
      case 'features':
        return <section className="py-32"><Features setView={setView} /></section>;
      case 'architect':
        return <section className="py-32 ice-gradient min-h-screen flex items-center"><WorkflowArchitect /></section>;
      case 'pricing':
        return <section className="py-32 bg-slate-50/30 min-h-screen"><Pricing /></section>;
      case 'documentation':
        return <section className="py-32 min-h-screen"><FullDocumentation /></section>;
      default:
        return (
          <>
            <section id="hero"><Hero setView={setView} /></section>
            <section id="features" className="py-32"><Features setView={setView} /></section>
            <section id="architect" className="py-32 ice-gradient"><WorkflowArchitect /></section>
            <section id="integrations" className="py-32"><Integrations /></section>
            <section id="pricing" className="py-32 bg-slate-50/30"><Pricing /></section>
            <section id="documentation" className="py-32"><Documentation setView={setView} /></section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900 bg-[#fcfcfd]">
      <Navbar currentView={view} setView={setView} />
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer setView={setView} />
      <SupportChat />
    </div>
  );
};
export default App;
