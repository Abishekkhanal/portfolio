import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const SocialLinks: React.FC = () => (
  <div className="mt-6 flex gap-4 text-gray-400">
    <a href="#" className="hover:text-green-400 transition-colors">
      <Github className="w-5 h-5" />
    </a>
    <a href="#" className="hover:text-green-400 transition-colors">
      <Linkedin className="w-5 h-5" />
    </a>
    <a href="#" className="hover:text-green-400 transition-colors">
      <Mail className="w-5 h-5" />
    </a>
  </div>
);