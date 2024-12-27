import React from 'react';

interface CommandProps {
  command: string;
  output: React.ReactNode;
}

export const Command: React.FC<CommandProps> = ({ command, output }) => (
  <div className="mb-4">
    <div className="flex items-center text-green-400">
      <span className="text-purple-400">➜</span>
      <span className="ml-2">{command}</span>
    </div>
    <div className="ml-4 mt-2">{output}</div>
  </div>
);