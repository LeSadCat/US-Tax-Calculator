import React from 'react';
import { Link } from 'react-router-dom';
import { Info, ArrowLeft, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
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
          <Info className="w-4 h-4" />
          Mission & Overview
        </div>
        <h1 className="text-3xl font-extrabold text-[#dde4dd]">About PaycheckCalculatorUS</h1>
        <p className="text-xs font-mono text-[#86948a]">
          High-Precision Financial Engineering Protocol
        </p>
      </div>

      {/* Main Content Body */}
      <div className="glass-card rounded-xl p-6 sm:p-8 space-y-6 text-sm text-[#bbcabf] leading-relaxed">
        <p className="text-base text-[#dde4dd] font-medium leading-relaxed">
          <strong>PaycheckCalculatorUS</strong> is a free, high-precision salary and payroll tax estimation platform engineered for modern W-2 workers across the United States. Our mission is to eliminate pay stub confusion by providing instant, transparent breakdowns of gross-to-net earnings.
        </p>

        <div className="space-y-4 pt-2">
          <h2 className="text-lg font-bold text-[#dde4dd]">Why We Built PaycheckCalculatorUS</h2>
          <p>
            Understanding your true take-home pay should not require navigating complex tax tables or waiting for your first pay stub. PaycheckCalculatorUS was created to solve this problem by simulating the exact 2026 IRS federal income tax brackets, standard deduction schedules ($14,600 Single / $29,200 Joint), FICA payroll taxes (Social Security wage caps and Medicare surcharges), and state tax rules across all 50 states.
          </p>
        </div>

        <div className="space-y-4 pt-2">
          <h2 className="text-lg font-bold text-[#dde4dd]">Who It's For</h2>
          <p>
            PaycheckCalculatorUS is designed for job seekers evaluating new salary offers, employees planning 401(k) and HSA contribution levels, freelancers transitioning to W-2 roles, and families budgeting for major life milestones. By processing all financial calculations directly inside your browser, we deliver lightning-fast estimates without compromising your personal privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#28342c]">
          <div className="p-4 bg-[#0e1511] rounded-lg border border-[#28342c]">
            <div className="flex items-center gap-2 text-[#4edea3] font-mono text-xs font-bold mb-1">
              <CheckCircle2 className="w-4 h-4" /> 100% Client-Side
            </div>
            <p className="text-xs text-[#86948a]">Your numbers are computed in-browser and never sent to a server.</p>
          </div>
          <div className="p-4 bg-[#0e1511] rounded-lg border border-[#28342c]">
            <div className="flex items-center gap-2 text-[#4edea3] font-mono text-xs font-bold mb-1">
              <CheckCircle2 className="w-4 h-4" /> 50-State Coverage
            </div>
            <p className="text-xs text-[#86948a]">Full support for progressive, flat, and zero income tax states.</p>
          </div>
          <div className="p-4 bg-[#0e1511] rounded-lg border border-[#28342c]">
            <div className="flex items-center gap-2 text-[#4edea3] font-mono text-xs font-bold mb-1">
              <CheckCircle2 className="w-4 h-4" /> 2026 Updated
            </div>
            <p className="text-xs text-[#86948a]">Updated with current IRS federal standard deductions & brackets.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
