import React from 'react';

interface ProjectProps {
  name: string;
  desc: string;
  tech: string[];
}

export const Project: React.FC<ProjectProps> = ({ name, desc, tech }) => (
  <div className="border border-gray-700 p-3 rounded">
    <h3 className="text-purple-400">{name}</h3>
    <p className="text-gray-400 text-sm">{desc}</p>
    <div className="flex gap-2 mt-2">
      {tech.map((t) => (
        <span key={t} className="text-xs bg-gray-800 text-green-400 px-2 py-1 rounded">
          {t}
        </span>
      ))}
    </div>
  </div>
);