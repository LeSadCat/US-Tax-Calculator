import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, MessageSquare, Bug, HelpCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Back Link */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-xs font-mono text-[#86948a] hover:text-[#4edea3] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Return to Calculator
      </Link>

      {/* Header */}
      <div className="border-b border-[#28342c] pb-6 space-y-2">
        <div className="flex items-center gap-2 text-[#4edea3] font-mono text-xs font-semibold uppercase tracking-wider">
          <Mail className="w-4 h-4" />
          Get in Touch
        </div>
        <h1 className="text-3xl font-extrabold text-[#dde4dd]">Contact Us</h1>
        <p className="text-xs font-mono text-[#86948a]">
          Feedback, General Inquiries & Advertising
        </p>
      </div>

      {/* Main Content Body */}
      <div className="glass-card rounded-xl p-6 sm:p-8 space-y-8 text-sm text-[#bbcabf] leading-relaxed">
        <div className="p-6 bg-[#0e1511] border border-[#28342c] rounded-lg text-center space-y-3">
          <Mail className="w-8 h-8 text-[#4edea3] mx-auto" />
          <h2 className="text-base font-bold text-[#dde4dd]">Primary Electronic Mail Address</h2>
          <p className="text-xs text-[#86948a]">
            For all questions regarding calculator functionality, tax bracket updates, feedback, or advertising policies:
          </p>
          <a
            href="mailto:contact@paycheckcalculatorus.com"
            className="inline-block font-mono text-sm sm:text-base font-bold text-[#4edea3] hover:underline bg-[#161d19] px-4 py-2 rounded border border-[#28342c]"
          >
            contact@paycheckcalculatorus.com
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-[#0e1511] rounded-lg border border-[#28342c] space-y-2">
            <div className="flex items-center gap-2 text-[#c0c1ff] font-mono text-xs font-bold">
              <Bug className="w-4 h-4" /> Bug Reports & Bug Fixes
            </div>
            <p className="text-xs text-[#86948a]">
              Spotted a discrepancy in a state tax bracket or FICA cap? Let us know so our team can investigate and deploy a patch.
            </p>
          </div>

          <div className="p-4 bg-[#0e1511] rounded-lg border border-[#28342c] space-y-2">
            <div className="flex items-center gap-2 text-[#4edea3] font-mono text-xs font-bold">
              <MessageSquare className="w-4 h-4" /> Feature Feedback
            </div>
            <p className="text-xs text-[#86948a]">
              Have an idea for a new payroll feature, bonus calculator, or visual deduction chart? We welcome user suggestions.
            </p>
          </div>

          <div className="p-4 bg-[#0e1511] rounded-lg border border-[#28342c] space-y-2">
            <div className="flex items-center gap-2 text-[#bbcabf] font-mono text-xs font-bold">
              <HelpCircle className="w-4 h-4" /> Privacy & Ads
            </div>
            <p className="text-xs text-[#86948a]">
              Questions about Google AdSense integration, privacy policy, or cookie preferences can be directed to our contact inbox.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
