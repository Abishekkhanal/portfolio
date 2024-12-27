import React from 'react';
import { Command } from './Command';
import { Project } from './Project';
import { projects } from '../data/projects';

export const Projects: React.FC = () => (
  <Command
    command="ls projects/"
    output={
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className="animate-slideIn"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <Project {...project} />
          </div>
        ))}
      </div>
    }
  />
);