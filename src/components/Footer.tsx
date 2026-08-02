import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-[#28342c] bg-[#09100c] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Disclaimer (6/12) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-[#4edea3] text-[#0e1511] font-mono font-bold text-xs flex items-center justify-center">
                TS
              </div>
              <div className="flex items-baseline">
                <span className="font-bold text-lg text-[#dde4dd]">Tax</span>
                <span className="font-bold text-lg text-[#4edea3]">Snap</span>
              </div>
            </div>

            <p className="text-xs text-[#86948a] leading-relaxed max-w-lg">
              Disclaimer: Calculations provided are estimates for the 2026 fiscal year based on current projected tax laws. This tool is for educational purposes and does not constitute financial, legal, or professional tax advice. Consult with a qualified CPA for precise liability modeling.
            </p>
          </div>

          {/* Links Columns (6/12) */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8 font-mono text-xs">
            <div>
              <h4 className="font-bold text-[#dde4dd] uppercase tracking-wider mb-3">
                Protocol
              </h4>
              <ul className="space-y-2 text-[#bbcabf]">
                <li>
                  <a href="#hero-calculator" className="hover:text-[#4edea3] transition-colors">
                    API Documentation
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-[#4edea3] transition-colors">
                    Integration Guide
                  </a>
                </li>
                <li>
                  <a href="#hero-calculator" className="hover:text-[#4edea3] transition-colors flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#4edea3]"></span>
                    Uptime Status (100%)
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#dde4dd] uppercase tracking-wider mb-3">
                Company
              </h4>
              <ul className="space-y-2 text-[#bbcabf]">
                <li>
                  <a href="#faq-section" className="hover:text-[#4edea3] transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#faq-section" className="hover:text-[#4edea3] transition-colors">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#faq-section" className="hover:text-[#4edea3] transition-colors">
                    Discord Community
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-8 border-t border-[#28342c]/60 text-center font-mono text-[11px] text-[#5c6e62] tracking-wider uppercase">
          © 2026 TAXSNAP // CYBER-FINTECH PROTOCOL // V2.0.26
        </div>
      </div>
    </footer>
  );
};
