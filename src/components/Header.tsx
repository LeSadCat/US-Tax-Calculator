import React from 'react';
import { Shield, ChevronRight } from 'lucide-react';

interface HeaderProps {
  onOpenSignIn: () => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSignIn }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0e1511]/90 backdrop-blur-md border-b border-[#28342c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-md bg-[#4edea3] text-[#0e1511] flex items-center justify-center font-mono font-bold text-sm shadow-[0_0_12px_rgba(78,222,163,0.3)] group-hover:scale-105 transition-transform">
            TS
          </div>
          <div className="flex items-baseline">
            <span className="font-bold text-xl tracking-tight text-[#dde4dd]">Tax</span>
            <span className="font-bold text-xl tracking-tight text-[#4edea3]">Snap</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#bbcabf]">
          <button 
            onClick={() => scrollToSection('hero-calculator')}
            className="hover:text-[#4edea3] transition-colors cursor-pointer"
          >
            Calculator
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="hover:text-[#4edea3] transition-colors cursor-pointer"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('faq-section')}
            className="hover:text-[#4edea3] transition-colors cursor-pointer"
          >
            FAQ
          </button>
          <button 
            onClick={() => scrollToSection('state-nodes')}
            className="hover:text-[#4edea3] transition-colors cursor-pointer"
          >
            States
          </button>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSignIn}
            className="px-4 py-2 text-sm font-semibold text-[#0e1511] bg-[#4edea3] rounded-md hover:bg-[#32c98a] transition-all shadow-[0_0_15px_rgba(78,222,163,0.2)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};
