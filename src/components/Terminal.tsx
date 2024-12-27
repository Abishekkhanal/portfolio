import React from 'react';
import { TerminalHeader } from './TerminalHeader';
import { About } from './About';
import { Skills } from './Skills';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { SocialLinks } from './SocialLinks';

export const Terminal: React.FC = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm md:text-base overflow-hidden shadow-xl border border-gray-800">
      <TerminalHeader />
      <div className="space-y-6">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <SocialLinks />
      </div>
    </div>
  );
};