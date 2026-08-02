import React, { useState } from 'react';
import { TaxCalculationInputs, TaxCalculationResult, FilingStatus, PayFrequency } from '../types';
import { US_STATES } from '../data/taxData';
import { calculateTax, formatCurrency, formatDecimalCurrency } from '../utils/taxCalculator';
import { DollarSign, Percent, Copy, Check, Download, Info, Sliders, ChevronDown } from 'lucide-react';

interface HeroCalculatorProps {
  inputs: TaxCalculationInputs;
  setInputs: React.Dispatch<React.SetStateAction<TaxCalculationInputs>>;
  results: TaxCalculationResult;
  onOpenExport: () => void;
}

export const HeroCalculator: React.FC<HeroCalculatorProps> = ({
  inputs,
  setInputs,
  results,
  onOpenExport,
}) => {
  const [copied, setCopied] = useState(false);
  const [showStateDropdown, setShowStateDropdown] = useState(false);
  const [stateSearch, setStateSearch] = useState('');

  const selectedState = US_STATES.find((s) => s.id === inputs.stateId) || US_STATES[0];

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/[^0-9]/g, '');
    const num = parseInt(rawVal, 10);
    setInputs((prev) => ({
      ...prev,
      grossSalary: isNaN(num) ? 0 : num,
    }));
  };

  const handleQuickSalary = (amount: number) => {
    setInputs((prev) => ({ ...prev, grossSalary: amount }));
  };

  const handleCopyBreakdown = () => {
    const summary = `TaxSnap Salary Breakdown (2026 Fiscal Year)
Gross Annual Salary: ${formatCurrency(results.grossSalary)}
State: ${selectedState.name} (${selectedState.code})
Filing Status: ${inputs.filingStatus.toUpperCase()}

Pre-tax 401(k) Shield: ${formatCurrency(results.ledger.k401PreTax)}
Taxable Income: ${formatCurrency(results.taxableIncome)}

Federal Income Tax: ${formatCurrency(results.federalTax)}
State Income Tax: ${formatCurrency(results.stateTax)}
FICA Payroll Tax: ${formatCurrency(results.ficaTax)}
Total Annual Tax: ${formatCurrency(results.totalTax)}

Estimated Take-Home Pay: ${formatCurrency(results.netPay)}
Take-Home per Pay Period (${results.payPeriodLabel}): ${formatDecimalCurrency(results.payPeriodAmount)}
Effective Tax Rate: ${results.effectiveRate}%
Marginal Tax Bracket: ${results.marginalRate}%`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const filteredStates = US_STATES.filter(
    (s) =>
      s.name.toLowerCase().includes(stateSearch.toLowerCase()) ||
      s.code.toLowerCase().includes(stateSearch.toLowerCase())
  );

  // SVG Donut Calculations
  const taxRatio = results.grossSalary > 0 ? results.totalTax / results.grossSalary : 0;
  const netRatio = results.grossSalary > 0 ? results.netPay / results.grossSalary : 1;
  const preTaxRatio = results.grossSalary > 0 ? results.preTaxDeductions / results.grossSalary : 0;

  const netPercentRounded = Math.round(netRatio * 100);
  const taxPercentRounded = Math.round((taxRatio + preTaxRatio) * 100);

  // SVG circle geometry
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const netStrokeDashoffset = circumference - netRatio * circumference;

  return (
    <section id="hero-calculator" className="w-full pt-6 pb-12">
      {/* Top Headline Section */}
      <div className="text-center max-w-4xl mx-auto mb-10 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#dde4dd] leading-tight">
          Your offer letter says{' '}
          <span className="text-[#c0c1ff] font-mono border-b-2 border-[#c0c1ff]/40 px-1 inline-block">
            {formatCurrency(inputs.grossSalary)}
          </span>
          .
          <br />
          <span className="text-[#dde4dd]">Your bank account disagrees.</span>
        </h1>
      </div>

      {/* Main Grid: Input Form (Left 4/12) vs Calculated Results (Right 8/12) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: Input Controls */}
        <div className="lg:col-span-5 xl:col-span-4 glass-card rounded-xl p-5 sm:p-6 space-y-6">
          {/* Annual Gross Salary */}
          <div>
            <label className="block text-xs font-semibold font-mono tracking-wider text-[#bbcabf] uppercase mb-2">
              Annual Gross Salary
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#4edea3]">
                <span className="font-mono font-bold text-lg">$</span>
              </div>
              <input
                type="text"
                value={inputs.grossSalary === 0 ? '' : inputs.grossSalary.toLocaleString('en-US')}
                onChange={handleSalaryChange}
                placeholder="85,000"
                className="block w-full pl-9 pr-4 py-3 bg-[#0e1511] border border-[#28342c] rounded-md font-mono text-xl text-[#dde4dd] font-semibold focus:border-[#4edea3] focus:ring-1 focus:ring-[#4edea3] focus:outline-none transition-all placeholder-[#3c4a42]"
              />
            </div>
            {/* Quick preset buttons */}
            <div className="flex flex-wrap gap-1.5 mt-2.5">
              {[50000, 85000, 120000, 160000, 220000].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => handleQuickSalary(amt)}
                  className={`text-[11px] font-mono px-2.5 py-1 rounded border transition-colors cursor-pointer ${
                    inputs.grossSalary === amt
                      ? 'bg-[#4edea3]/20 border-[#4edea3] text-[#4edea3]'
                      : 'bg-[#121915] border-[#28342c] text-[#bbcabf] hover:border-[#3c4a42]'
                  }`}
                >
                  ${(amt / 1000).toFixed(0)}k
                </button>
              ))}
            </div>
          </div>

          {/* State Jurisdiction */}
          <div className="relative">
            <label className="block text-xs font-semibold font-mono tracking-wider text-[#bbcabf] uppercase mb-2">
              State Jurisdiction
            </label>
            <button
              type="button"
              onClick={() => setShowStateDropdown(!showStateDropdown)}
              className="w-full flex items-center justify-between px-3.5 py-2.5 bg-[#0e1511] border border-[#28342c] rounded-md text-left text-sm text-[#dde4dd] font-medium hover:border-[#3c4a42] transition-colors cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-[#28342c] text-[#4edea3]">
                  {selectedState.code}
                </span>
                <span>{selectedState.name}</span>
                {selectedState.isNoTax && (
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#10b981]/20 text-[#4edea3] border border-[#10b981]/30">
                    NO STATE TAX
                  </span>
                )}
              </span>
              <ChevronDown className="w-4 h-4 text-[#86948a]" />
            </button>

            {/* Dropdown Menu */}
            {showStateDropdown && (
              <div className="absolute z-50 mt-1 w-full bg-[#161d19] border border-[#28342c] rounded-md shadow-2xl max-h-60 overflow-y-auto p-2">
                <input
                  type="text"
                  placeholder="Search state..."
                  value={stateSearch}
                  onChange={(e) => setStateSearch(e.target.value)}
                  className="w-full px-3 py-1.5 bg-[#0e1511] border border-[#28342c] rounded text-xs text-[#dde4dd] mb-2 focus:outline-none focus:border-[#4edea3]"
                />
                <div className="space-y-0.5">
                  {filteredStates.map((st) => (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => {
                        setInputs((prev) => ({ ...prev, stateId: st.id }));
                        setShowStateDropdown(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded text-xs flex items-center justify-between cursor-pointer ${
                        inputs.stateId === st.id
                          ? 'bg-[#4edea3]/20 text-[#4edea3] font-semibold'
                          : 'text-[#dde4dd] hover:bg-[#28342c]/60'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="font-mono text-[10px] w-6">{st.code}</span>
                        <span>{st.name}</span>
                      </span>
                      <span className="font-mono text-[10px] text-[#bbcabf]">
                        {st.isNoTax ? '0%' : `Up to ${st.topRatePercent}%`}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Filing Status */}
          <div>
            <label className="block text-xs font-semibold font-mono tracking-wider text-[#bbcabf] uppercase mb-2">
              Filing Status
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'single', label: 'Single' },
                { id: 'joint', label: 'Married Joint' },
                { id: 'head', label: 'Head of Household' },
                { id: 'separate', label: 'Married Separate' },
              ].map((st) => (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => setInputs((prev) => ({ ...prev, filingStatus: st.id as FilingStatus }))}
                  className={`px-3 py-2 text-xs font-medium rounded-md border text-center transition-all cursor-pointer ${
                    inputs.filingStatus === st.id
                      ? 'bg-[#28342c] border-[#4edea3] text-[#4edea3] font-semibold'
                      : 'bg-[#0e1511] border-[#28342c] text-[#bbcabf] hover:border-[#3c4a42]'
                  }`}
                >
                  {st.label}
                </button>
              ))}
            </div>
          </div>

          {/* 401(k) Contribution Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold font-mono tracking-wider text-[#bbcabf] uppercase">
                401(k) Contribution
              </label>
              <span className="font-mono text-xs font-bold text-[#4edea3]">
                {inputs.k401Percent}% ({formatCurrency(results.ledger.k401PreTax)})
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="25"
              step="1"
              value={inputs.k401Percent}
              onChange={(e) => setInputs((prev) => ({ ...prev, k401Percent: parseInt(e.target.value, 10) }))}
              className="w-full h-1.5 bg-[#0e1511] rounded-lg appearance-none cursor-pointer accent-[#4edea3]"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#5c6e62] mt-1">
              <span>0%</span>
              <span>10%</span>
              <span>25% ($23k max)</span>
            </div>
          </div>

          {/* Pay Frequency Toggle */}
          <div>
            <label className="block text-xs font-semibold font-mono tracking-wider text-[#bbcabf] uppercase mb-2">
              Pay Frequency
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'bi-weekly', label: 'Bi-Weekly' },
                { id: 'monthly', label: 'Monthly' },
                { id: 'weekly', label: 'Weekly' },
                { id: 'semi-monthly', label: 'Semi-Monthly' },
              ].map((freq) => (
                <button
                  key={freq.id}
                  type="button"
                  onClick={() => setInputs((prev) => ({ ...prev, payFrequency: freq.id as PayFrequency }))}
                  className={`px-3 py-2 text-xs font-medium rounded-md text-center transition-all cursor-pointer ${
                    inputs.payFrequency === freq.id
                      ? 'bg-[#4edea3] text-[#0e1511] font-bold shadow-[0_0_12px_rgba(78,222,163,0.3)]'
                      : 'bg-[#0e1511] border border-[#28342c] text-[#bbcabf] hover:border-[#3c4a42]'
                  }`}
                >
                  {freq.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Calculated Take-Home Engine Dashboard */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-6">
          {/* Main Hero Card */}
          <div className="glass-card rounded-xl p-6 sm:p-8 border-t-4 border-t-[#4edea3] relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[#28342c]">
              <div>
                <span className="font-mono text-xs font-semibold text-[#86948a] uppercase tracking-wider block mb-1">
                  Estimated Take-Home Pay
                </span>
                <div className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4edea3] tracking-tight">
                  {formatCurrency(results.netPay)}
                </div>
                <div className="font-mono text-sm sm:text-base text-[#bbcabf] mt-1.5 flex items-center gap-2">
                  <span className="text-[#4edea3] font-semibold">
                    {formatDecimalCurrency(results.payPeriodAmount)}
                  </span>
                  <span>/ {results.payPeriodLabel}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap sm:flex-nowrap gap-3 self-stretch md:self-auto">
                <button
                  onClick={handleCopyBreakdown}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 py-2 rounded bg-[#0e1511] border border-[#28342c] hover:border-[#4edea3] text-xs font-medium text-[#dde4dd] hover:text-[#4edea3] transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#4edea3]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
                </button>
                <button
                  onClick={onOpenExport}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 py-2 rounded bg-[#28342c] hover:bg-[#324037] border border-[#3c4a42] text-xs font-medium text-[#dde4dd] transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#4edea3]" />
                  <span>Export Report</span>
                </button>
              </div>
            </div>

            {/* Middle Section: Donut Chart + Breakdown Ledger */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-6">
              {/* SVG Donut Chart (5/12) */}
              <div className="md:col-span-5 flex flex-col items-center justify-center">
                <div className="relative w-44 h-44 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                    {/* Background track (Total tax + 401k) */}
                    <circle
                      cx="60"
                      cy="60"
                      r={radius}
                      stroke="#242c27"
                      strokeWidth="12"
                      fill="transparent"
                    />
                    {/* Active Net Pay track */}
                    <circle
                      cx="60"
                      cy="60"
                      r={radius}
                      stroke="#4edea3"
                      strokeWidth="12"
                      fill="transparent"
                      strokeDasharray={circumference}
                      strokeDashoffset={netStrokeDashoffset}
                      strokeLinecap="round"
                      className="transition-all duration-700 ease-out"
                    />
                  </svg>
                  {/* Donut Center Display */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#bbcabf]">
                      Effective Rate
                    </span>
                    <span className="font-mono text-2xl font-bold text-[#dde4dd]">
                      {results.effectiveRate}%
                    </span>
                  </div>
                </div>

                {/* Donut Legend */}
                <div className="flex items-center gap-6 mt-4 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#4edea3]"></span>
                    <span className="text-[#dde4dd]">Net Pay {netPercentRounded}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#242c27] border border-[#3c4a42]"></span>
                    <span className="text-[#bbcabf]">Total Tax {100 - netPercentRounded}%</span>
                  </div>
                </div>
              </div>

              {/* Breakdown Ledger Table (7/12) */}
              <div className="md:col-span-7 bg-[#0e1511]/80 rounded-lg p-4 border border-[#28342c] space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#28342c]">
                  <span className="font-mono text-xs font-semibold text-[#86948a] uppercase tracking-wider">
                    Breakdown Ledger
                  </span>
                  <div className="flex items-center gap-1.5 bg-[#28342c] px-2 py-0.5 rounded text-[11px] font-mono text-[#c0c1ff]">
                    <span>Marginal Bracket:</span>
                    <span className="font-bold">{results.marginalRate}%</span>
                  </div>
                </div>

                <div className="space-y-2 font-mono text-sm">
                  {/* Federal Tax */}
                  <div className="flex items-center justify-between text-[#dde4dd]">
                    <span className="text-[#bbcabf] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#c0c1ff]"></span>
                      Federal Tax
                    </span>
                    <span className="text-[#ffb4ab]">
                      -{formatCurrency(results.ledger.federalTax)}
                    </span>
                  </div>

                  {/* State Tax */}
                  <div className="flex items-center justify-between text-[#dde4dd]">
                    <span className="text-[#bbcabf] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#ffb95f]"></span>
                      State Tax ({selectedState.code})
                    </span>
                    <span className="text-[#ffb4ab]">
                      -{formatCurrency(results.ledger.stateTax)}
                    </span>
                  </div>

                  {/* FICA */}
                  <div className="flex items-center justify-between text-[#dde4dd]">
                    <span className="text-[#bbcabf] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#86948a]"></span>
                      FICA (SS + Med)
                    </span>
                    <span className="text-[#ffb4ab]">
                      -{formatCurrency(results.ledger.ficaTax)}
                    </span>
                  </div>

                  {/* 401(k) Pre-tax */}
                  {results.ledger.k401PreTax > 0 && (
                    <div className="flex items-center justify-between text-[#dde4dd] pt-1 border-t border-[#28342c]/60">
                      <span className="text-[#bbcabf] flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#4edea3]"></span>
                        401(k) Pre-tax Shield
                      </span>
                      <span className="text-[#4edea3]">
                        -{formatCurrency(results.ledger.k401PreTax)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
