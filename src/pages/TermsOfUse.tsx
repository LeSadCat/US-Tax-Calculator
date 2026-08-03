import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft } from 'lucide-react';

export const TermsOfUse: React.FC = () => {
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
          <FileText className="w-4 h-4" />
          Usage Terms & Legal Conditions
        </div>
        <h1 className="text-3xl font-extrabold text-[#dde4dd]">Terms of Use</h1>
        <p className="text-xs font-mono text-[#86948a]">
          Last Updated: August 3, 2026
        </p>
      </div>

      {/* Main Content Body */}
      <div className="glass-card rounded-xl p-6 sm:p-8 space-y-6 text-sm text-[#bbcabf] leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#dde4dd]">1. Estimates Only – Not Financial or Tax Advice</h2>
          <p>
            The paycheck calculation results, net pay figures, tax withholding models, and retirement savings projections provided by <strong className="text-[#dde4dd]">PaycheckCalculatorUS</strong> are strictly for informational and educational purposes.
          </p>
          <p>
            The outputs produced by this calculator do not constitute legal, tax, accounting, or certified financial advice. Individual tax liabilities depend on individual financial circumstances, municipal tax codes, employer benefits structures, and IRS regulations. Users must consult a licensed tax professional (CPA) or reference official Internal Revenue Service (IRS) guidelines for binding tax filings.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#dde4dd]">2. Accuracy Disclaimer</h2>
          <p>
            While PaycheckCalculatorUS strives to keep all tax bracket tables, FICA caps, and state withholding logic fully updated to reflect 2026 IRS regulations, we offer no guarantee or warranty of absolute accuracy, completeness, or timeliness. Tax laws and municipal rules change frequently.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#dde4dd]">3. Acceptable Use</h2>
          <p>
            You agree to use PaycheckCalculatorUS solely for lawful purposes. You are strictly prohibited from attempting to compromise the website's infrastructure, sending automated mass queries, scraping site elements improperly, or interfering with other users' access to the service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#dde4dd]">4. Limitation of Liability</h2>
          <p>
            Under no circumstances shall PaycheckCalculatorUS, its developers, or its operators be held liable for any direct, indirect, incidental, special, or consequential damages resulting from the use of, or inability to use, this tool or reliance upon its estimated outputs.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#dde4dd]">5. Governing Law</h2>
          <p>
            These Terms of Use shall be governed by and construed in accordance with the laws of <strong className="text-[#dde4dd]">[Your State/Country]</strong>, without regard to its conflict of law provisions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#dde4dd]">6. Contact Information</h2>
          <p>
            For questions regarding these Terms of Use, please reach out to us at:
          </p>
          <p className="font-mono text-xs text-[#4edea3]">
            contact@paycheckcalculatorus.com
          </p>
        </section>
      </div>
    </div>
  );
};
