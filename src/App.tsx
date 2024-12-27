import React from 'react';
import { Terminal } from './components/Terminal';
import { Code2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Matrix-like background animation */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative">
        {/* Header */}
        <header className="border-b border-green-900/30 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Code2 className="w-8 h-8 text-green-400" />
                <span className="text-xl font-mono font-bold">Developer@Portfolio:~$</span>
              </div>
              <nav className="hidden md:flex space-x-6 font-mono">
                <a href="#about" className="hover:text-green-400 transition-colors">/about</a>
                <a href="#skills" className="hover:text-green-400 transition-colors">/skills</a>
                <a href="#projects" className="hover:text-green-400 transition-colors">/projects</a>
                <a href="#contact" className="hover:text-green-400 transition-colors">/contact</a>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold font-mono mb-8 text-center">
              <span className="text-green-400">&gt; </span>
              Welcome to my Portfolio
              <span className="animate-pulse">_</span>
            </h1>
            
            <Terminal />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;