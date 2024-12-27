import React from 'react';
import { Command } from './Command';
import { experience } from '../data/experience';

export const Experience: React.FC = () => (
  <Command
    command="cat experience.json"
    output={
      <pre className="text-blue-400 overflow-x-auto animate-fadeIn">
        {JSON.stringify(experience, null, 2)}
      </pre>
    }
  />
);