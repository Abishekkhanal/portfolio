import React from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

export const TerminalHeader: React.FC = () => (
  <div className="flex items-center justify-between mb-4 border-b border-gray-700 pb-2">
    <div className="flex items-center">
      <TerminalIcon className="w-5 h-5 text-green-400 mr-2" />
      <span className="text-gray-400">portfolio.exe</span>
    </div>
    <div className="flex gap-2">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
  </div>
);