import React from 'react';
import { Command } from './Command';

export const About: React.FC = () => (
  <Command
    command="cat about.txt"
    output={
      <div className="text-gray-300 animate-fadeIn">
        Hi, I'm a Full Stack Developer passionate about building innovative solutions.
        With a strong foundation in both frontend and backend technologies,
        I create robust and scalable applications.
      </div>
    }
  />
);