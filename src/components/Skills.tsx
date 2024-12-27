import React from 'react';
import { Command } from './Command';
import { skills } from '../data/skills';

export const Skills: React.FC = () => (
  <Command
    command="ls skills/"
    output={
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {skills.map((skill, index) => (
          <span 
            key={skill}
            className="text-yellow-400 animate-slideIn"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {skill}
          </span>
        ))}
      </div>
    }
  />
);