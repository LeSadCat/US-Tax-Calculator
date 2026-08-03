import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowLeft, ShieldAlert } from 'lucide-react';

export const Disclaimer: React.FC = () => {
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
          <AlertTriangle className="w-4 h-4" />
          Financial & Governmental Notice
        </div>
        <h1 className="text-3xl font-extrabold text-[#dde4dd]">Disclaimer</h1>
        <p className="text-xs font-mono text-[#86948a]">
          Important Legal & Financial Disclosures
        </p>
      </div>

      {/* Main Content Body */}
      <div className="glass-card rounded-xl p-6 sm:p-8 space-y-6 text-sm text-[#bbcabf] leading-relaxed">
        <div className="p-4 bg-[#0e1511] border-l-4 border-[#4edea3] rounded-r-lg space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#4edea3] uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" /> Informational Use Only
          </div>
          <p className="text-xs text-[#dde4dd]">
            PaycheckCalculatorUS is an independent online calculation tool designed strictly for general estimation and educational purposes.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#dde4dd]">1. Not Professional Tax or Financial Advice</h2>
          <p>
            The calculations provided by PaycheckCalculatorUS do not constitute tax, accounting, legal, or certified financial advice.
            Tax codes are highly complex and depend on personal factors including federal filing status, municipal local tax rates, employer benefit structures, allowances, pre-tax deductions, and tax credits.
          </p>
          <p>
            This tool is not a substitute for professional guidance. Always consult a licensed Certified Public Accountant (CPA), Enrolled Agent (EA), or qualified financial advisor before making financial decisions or submitting official tax returns.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#dde4dd]">2. No Government Affiliation</h2>
          <p>
            <strong className="text-[#dde4dd]">PaycheckCalculatorUS is not affiliated with, authorized by, endorsed by, or in any way officially connected to</strong> the Internal Revenue Service (IRS), the United States Department of the Treasury, the Social Security Administration (SSA), or any state or local government agency or tax authority.
          </p>
          <p>
            Official forms, instructions, and tax tables can be obtained directly from the official IRS website at <a href="https://www.irs.gov" target="_blank" rel="noopener noreferrer" className="text-[#4edea3] hover:underline font-mono">www.irs.gov</a> or from your state's department of revenue.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#dde4dd]">3. Limitation of Liability</h2>
          <p>
            PaycheckCalculatorUS makes reasonable efforts to ensure the accuracy of the tax tables and mathematical models used. However, we assume no responsibility or liability for errors, omissions, or discrepancies in calculations, nor for any loss or inconvenience resulting from reliance on this calculator.
          </p>
        </section>
      </div>
    </div>
  );
};
