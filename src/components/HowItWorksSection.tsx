import React from 'react';
import { FEDERAL_BRACKETS_2026_SINGLE } from '../data/taxData';
import { AdBannerSlot } from './AdBannerSlot';

interface HowItWorksProps {
  taxableIncome: number;
}

export const HowItWorksSection: React.FC<HowItWorksProps> = ({ taxableIncome }) => {
  return (
    <section id="how-it-works" className="w-full py-12 border-t border-[#28342c]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: 3 Steps + Federal Bracket Table (8/12) */}
        <div className="lg:col-span-8 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#dde4dd] tracking-tight mb-2">
              Where does your paycheck actually go?
            </h2>
            <p className="text-sm text-[#bbcabf]">
              Understanding the architecture of US fiscal infrastructure in 3 steps.
            </p>
          </div>

          {/* 3 Step Explanation Cards */}
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex items-start gap-4 p-4 rounded-xl glass-card">
              <span className="w-8 h-8 rounded-md bg-[#4edea3] text-[#0e1511] font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                01
              </span>
              <div>
                <h3 className="font-semibold text-base text-[#dde4dd] mb-1">
                  The Pre-Tax Shield
                </h3>
                <p className="text-xs text-[#bbcabf] leading-relaxed">
                  We first deduct your 401(k) contributions from your gross salary. This lowering of your "taxable income" is the most powerful tool for wealth preservation.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4 p-4 rounded-xl glass-card">
              <span className="w-8 h-8 rounded-md bg-[#4edea3] text-[#0e1511] font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                02
              </span>
              <div>
                <h3 className="font-semibold text-base text-[#dde4dd] mb-1">
                  Standard Deductions
                </h3>
                <p className="text-xs text-[#bbcabf] leading-relaxed">
                  The IRS grants everyone a "free pass" on their first few thousand dollars. For 2026, this is $14,600 for single filers. We subtract this before calculating a single cent of federal tax.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4 p-4 rounded-xl glass-card">
              <span className="w-8 h-8 rounded-md bg-[#4edea3] text-[#0e1511] font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                03
              </span>
              <div>
                <h3 className="font-semibold text-base text-[#dde4dd] mb-1">
                  Bracket Sequencing
                </h3>
                <p className="text-xs text-[#bbcabf] leading-relaxed">
                  US taxes are progressive. You only pay 37% on the portion of income that exceeds the top threshold, not your entire salary. We calculate every tier with 100% precision.
                </p>
              </div>
            </div>
          </div>

          {/* 2026 Federal Rate Table */}
          <div className="glass-card rounded-xl overflow-hidden p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-[#28342c] pb-3 font-mono text-xs font-semibold uppercase tracking-wider text-[#bbcabf]">
              <span>2026 Federal Rate</span>
              <span>Income Threshold (Single)</span>
            </div>

            <div className="space-y-1 font-mono text-xs">
              {FEDERAL_BRACKETS_2026_SINGLE.map((b, idx) => {
                const isCurrentBracket =
                  taxableIncome > b.min && (b.max === Infinity || taxableIncome <= b.max);

                return (
                  <div
                    key={idx}
                    className={`flex items-center justify-between px-3 py-2 rounded transition-colors ${
                      isCurrentBracket
                        ? 'bg-[#4edea3]/20 border border-[#4edea3] text-[#4edea3] font-bold'
                        : 'text-[#dde4dd] hover:bg-[#28342c]/40'
                    }`}
                  >
                    <span className="w-16 font-semibold">{b.label}</span>
                    <span className="text-right">
                      {b.max === Infinity
                        ? `Over $${b.min.toLocaleString('en-US')}`
                        : `$${b.min.toLocaleString('en-US')} — $${b.max.toLocaleString('en-US')}`}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Sticky Sidebar (4/12) */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-20">
          <AdBannerSlot label="300X250 STICKY SIDEBAR AD" className="h-[200px]" />

          {/* Tax Explainer Card */}
          <div className="glass-card rounded-xl p-5 space-y-4">
            <h3 className="font-mono text-xs font-semibold text-[#4edea3] uppercase tracking-wider">
              Tax Explainer
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <span className="font-semibold text-[#dde4dd] block mb-0.5">
                  Marginal Rate
                </span>
                <p className="text-[#bbcabf] leading-relaxed">
                  The percentage of tax applied to your very last dollar earned.
                </p>
              </div>

              <div>
                <span className="font-semibold text-[#dde4dd] block mb-0.5">
                  Effective Rate
                </span>
                <p className="text-[#bbcabf] leading-relaxed">
                  The actual percentage of your total income that goes to taxes.
                </p>
              </div>

              <div>
                <span className="font-semibold text-[#dde4dd] block mb-0.5">
                  FICA Taxes
                </span>
                <p className="text-[#bbcabf] leading-relaxed">
                  Fixed 7.65% for Social Security and Medicare (up to caps).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
