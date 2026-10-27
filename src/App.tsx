import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { FeatureGrid } from './components/FeatureGrid';
import { InteractiveSandbox } from './components/InteractiveSandbox';
import { ProcessTimeline } from './components/ProcessTimeline';
import { AiWorkflow } from './components/AiWorkflow';
import { UnconfirmedQuestions } from './components/UnconfirmedQuestions';
import { DesignSystemSpec } from './components/DesignSystemSpec';
import { Footer } from './components/Footer';

export default function App() {
  const [isSpecModalOpen, setIsSpecModalOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenSpecs={() => setIsSpecModalOpen(true)}
        onScrollTo={handleScrollTo}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section with Interactive Mac Window Mockup */}
        <Hero
          onScrollTo={handleScrollTo}
          onOpenSpecs={() => setIsSpecModalOpen(true)}
        />

        {/* 2. Problem & Solution Comparison */}
        <ProblemSolution />

        {/* 3. Core Capabilities Bento Feature Grid */}
        <FeatureGrid />

        {/* 4. Live Interactive Sandbox (Test It Yourself) */}
        <InteractiveSandbox />

        {/* 5. End-to-End 1-Person Process Timeline */}
        <ProcessTimeline />

        {/* 6. AI Prompt Architecture & Tool Workflows */}
        <AiWorkflow />

        {/* 7. Unconfirmed Requirements as Explicit Questions [?] */}
        <UnconfirmedQuestions />

        {/* 8. Design System Specification Table & Summary of Changes */}
        <DesignSystemSpec isInlineSection={true} />
      </main>

      {/* Footer */}
      <Footer
        onScrollTo={handleScrollTo}
        onOpenSpecs={() => setIsSpecModalOpen(true)}
      />

      {/* Standalone Spec Modal Dialog */}
      <DesignSystemSpec
        isOpenModal={isSpecModalOpen}
        onCloseModal={() => setIsSpecModalOpen(false)}
      />
    </div>
  );
}
