import React, { useState } from 'react';
import { TaxCalculationInputs, TaxCalculationResult } from '../types';
import { US_STATES } from '../data/taxData';
import { formatCurrency, formatDecimalCurrency } from '../utils/taxCalculator';
import { X, Download, Check, FileText } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  inputs: TaxCalculationInputs;
  results: TaxCalculationResult;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  inputs,
  results
}) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const selectedState = US_STATES.find((s) => s.id === inputs.stateId) || US_STATES[0];

  const handleDownloadReport = () => {
    const content = `====================================================
TAXSNAP FINANCIAL ENGINEERING PROTOCOL REPORT
Fiscal Year 2026 // Take-Home Pay Analysis
Generated: ${new Date().toLocaleDateString('en-US')}
====================================================

1. COMPENSATION & FILING INPUTS
----------------------------------------------------
Gross Annual Salary: ${formatCurrency(results.grossSalary)}
State Jurisdiction:  ${selectedState.name} (${selectedState.code})
Filing Status:       ${inputs.filingStatus.toUpperCase()}
401(k) Contribution: ${inputs.k401Percent}% (${formatCurrency(results.ledger.k401PreTax)})
Pay Frequency:       ${inputs.payFrequency.toUpperCase()}

2. TAX & PRE-TAX DEDUCTION BREAKDOWN
----------------------------------------------------
Pre-Tax 401(k) Shield: -${formatCurrency(results.ledger.k401PreTax)}
Taxable Income Base:   ${formatCurrency(results.taxableIncome)}

Federal Income Tax:   -${formatCurrency(results.federalTax)}
State Income Tax:     -${formatCurrency(results.stateTax)}
FICA Payroll Tax:     -${formatCurrency(results.ficaTax)}
----------------------------------------------------
TOTAL ANNUAL TAXES:   -${formatCurrency(results.totalTax)}

3. TAKE-HOME PAY CALCULATIONS
----------------------------------------------------
ESTIMATED ANNUAL NET PAY: ${formatCurrency(results.netPay)}
TAKE-HOME PER PAY PERIOD: ${formatDecimalCurrency(results.payPeriodAmount)} (${results.payPeriodLabel})

Effective Tax Rate:    ${results.effectiveRate}%
Marginal Tax Bracket:  ${results.marginalRate}%

====================================================
TaxSnap // Cyber-Fintech Protocol v2.0.26
====================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `TaxSnap_2026_Report_${results.grossSalary}_${selectedState.code}.txt`;
    link.click();
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0e1511]/85 backdrop-blur-md animate-fade-in">
      <div className="glass-card rounded-2xl max-w-lg w-full p-6 space-y-6 relative border border-[#28342c] shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#0e1511] border border-[#28342c] flex items-center justify-center text-[#bbcabf] hover:text-[#4edea3] hover:border-[#4edea3] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#4edea3]/20 border border-[#4edea3]/40 flex items-center justify-center text-[#4edea3]">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-[#dde4dd]">
              Export Fiscal Report
            </h3>
            <p className="text-xs text-[#bbcabf]">
              Download high-precision 2026 tax calculation summary.
            </p>
          </div>
        </div>

        {/* Preview Summary Box */}
        <div className="bg-[#0e1511] border border-[#28342c] rounded-lg p-4 font-mono text-xs space-y-2 text-[#dde4dd]">
          <div className="flex justify-between border-b border-[#28342c] pb-2">
            <span className="text-[#86948a]">Gross Salary</span>
            <span className="font-bold">{formatCurrency(results.grossSalary)}</span>
          </div>
          <div className="flex justify-between border-b border-[#28342c] pb-2">
            <span className="text-[#86948a]">State Jurisdiction</span>
            <span>{selectedState.name} ({selectedState.code})</span>
          </div>
          <div className="flex justify-between border-b border-[#28342c] pb-2">
            <span className="text-[#86948a]">Total Annual Tax</span>
            <span className="text-[#ffb4ab]">-{formatCurrency(results.totalTax)}</span>
          </div>
          <div className="flex justify-between pt-1">
            <span className="text-[#4edea3] font-bold">Estimated Take-Home</span>
            <span className="font-bold text-[#4edea3]">{formatCurrency(results.netPay)}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 rounded-md bg-[#0e1511] border border-[#28342c] text-xs font-semibold text-[#bbcabf] hover:text-[#dde4dd] hover:border-[#3c4a42] transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleDownloadReport}
            className="flex-1 py-2.5 rounded-md bg-[#4edea3] text-[#0e1511] font-bold text-xs hover:bg-[#32c98a] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(78,222,163,0.2)] cursor-pointer"
          >
            {downloaded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Report Downloaded!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Download Report</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
