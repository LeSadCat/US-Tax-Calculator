import { TaxCalculationInputs, TaxCalculationResult } from '../types';
import { US_STATES, FEDERAL_BRACKETS_2026_SINGLE } from '../data/taxData';

export function calculateTax(inputs: TaxCalculationInputs): TaxCalculationResult {
  const { grossSalary, stateId, filingStatus, k401Percent, hsaAnnual, payFrequency } = inputs;

  // 1. Pre-tax 401(k) and HSA shield calculations
  const k401Max = 23000; // 2026 IRS limit
  const raw401k = grossSalary * (k401Percent / 100);
  const k401PreTax = Math.min(raw401k, k401Max);
  const hsaPreTax = Math.min(hsaAnnual || 0, 4150);
  const totalPreTax = k401PreTax + hsaPreTax;

  const taxableIncome = Math.max(0, grossSalary - totalPreTax);

  // 2. Federal Income Tax calculation (2026 IRS Standard Deductions)
  let standardDeduction = 14600; // Single
  if (filingStatus === 'joint') standardDeduction = 29200;
  if (filingStatus === 'head') standardDeduction = 21900;
  if (filingStatus === 'separate') standardDeduction = 14600;

  const federalTaxableBase = Math.max(0, taxableIncome - standardDeduction);

  let federalTax = 0;
  let marginalRate = 0.10;

  let remainingBase = federalTaxableBase;
  for (const bracket of FEDERAL_BRACKETS_2026_SINGLE) {
    if (federalTaxableBase > bracket.min) {
      marginalRate = bracket.rate;
      const taxableInBracket = Math.min(federalTaxableBase - bracket.min, bracket.max - bracket.min);
      federalTax += taxableInBracket * bracket.rate;
    }
  }

  // 3. FICA Taxes (Social Security + Medicare + Additional Medicare Surcharge)
  const ssCap = 168600; // 2026 Social Security cap
  const ssEligibleGross = Math.min(grossSalary, ssCap);
  const socialSecurityTax = ssEligibleGross * 0.062;

  const medicareTax = grossSalary * 0.0145;

  let addMedicareThreshold = 200000;
  if (filingStatus === 'joint') addMedicareThreshold = 250000;
  
  const additionalMedicareTax = grossSalary > addMedicareThreshold
    ? (grossSalary - addMedicareThreshold) * 0.009
    : 0;

  const ficaTax = Math.round(socialSecurityTax + medicareTax + additionalMedicareTax);

  // 4. State Income Tax calculation
  const stateObj = US_STATES.find(s => s.id === stateId) || US_STATES.find(s => s.id === 'AL')!;
  let stateTax = 0;

  if (stateObj.isNoTax) {
    stateTax = 0;
  } else if (stateObj.flatRatePercent) {
    const stateTaxable = Math.max(0, taxableIncome - stateObj.standardDeductionSingle);
    stateTax = stateTaxable * (stateObj.flatRatePercent / 100);
  } else {
    // Graduated state tax approximation model
    const stateTaxable = Math.max(0, taxableIncome - stateObj.standardDeductionSingle);
    if (stateObj.id === 'CA') {
      // CA progressive curve
      if (stateTaxable <= 10099) stateTax = stateTaxable * 0.01;
      else if (stateTaxable <= 23942) stateTax = 101 + (stateTaxable - 10099) * 0.02;
      else if (stateTaxable <= 37788) stateTax = 378 + (stateTaxable - 23942) * 0.04;
      else if (stateTaxable <= 52443) stateTax = 932 + (stateTaxable - 37788) * 0.06;
      else if (stateTaxable <= 66295) stateTax = 1811 + (stateTaxable - 52443) * 0.08;
      else if (stateTaxable <= 338639) stateTax = 2919 + (stateTaxable - 66295) * 0.093;
      else stateTax = 28247 + (stateTaxable - 338639) * 0.113;
      // CA State Disability Insurance
      stateTax += grossSalary * 0.011;
    } else if (stateObj.id === 'NY') {
      if (stateTaxable <= 8500) stateTax = stateTaxable * 0.04;
      else if (stateTaxable <= 11700) stateTax = 340 + (stateTaxable - 8500) * 0.045;
      else if (stateTaxable <= 13900) stateTax = 484 + (stateTaxable - 11700) * 0.0525;
      else if (stateTaxable <= 80650) stateTax = 600 + (stateTaxable - 13900) * 0.0585;
      else if (stateTaxable <= 215400) stateTax = 4505 + (stateTaxable - 80650) * 0.0625;
      else stateTax = 12927 + (stateTaxable - 215400) * 0.0685;
    } else {
      // General graduated state calculation model based on topRate
      const effectiveStateRate = stateObj.topRatePercent * 0.72; // Effective average state rate
      stateTax = stateTaxable * (effectiveStateRate / 100);
    }
  }

  federalTax = Math.round(federalTax);
  stateTax = Math.round(stateTax);

  // 5. Net take home pay and totals
  const totalTax = federalTax + stateTax + ficaTax;
  const netPay = Math.max(0, grossSalary - totalPreTax - totalTax);

  const effectiveRate = grossSalary > 0
    ? Number(((totalTax / grossSalary) * 100).toFixed(1))
    : 0;

  // Pay period calculation
  let payPeriodsCount = 26; // default bi-weekly
  let payPeriodLabel = 'bi-weekly';

  if (payFrequency === 'monthly') {
    payPeriodsCount = 12;
    payPeriodLabel = 'monthly';
  } else if (payFrequency === 'weekly') {
    payPeriodsCount = 52;
    payPeriodLabel = 'weekly';
  } else if (payFrequency === 'semi-monthly') {
    payPeriodsCount = 24;
    payPeriodLabel = 'semi-monthly';
  }

  const payPeriodAmount = netPay / payPeriodsCount;

  return {
    grossSalary,
    preTaxDeductions: totalPreTax,
    taxableIncome,
    federalTax,
    stateTax,
    ficaTax,
    socialSecurityTax: Math.round(socialSecurityTax),
    medicareTax: Math.round(medicareTax),
    additionalMedicareTax: Math.round(additionalMedicareTax),
    totalTax,
    netPay,
    effectiveRate,
    marginalRate: Math.round(marginalRate * 100),
    payPeriodAmount,
    payPeriodLabel,
    payPeriodsCount,
    ledger: {
      federalTax,
      stateTax,
      ficaTax,
      k401PreTax,
      hsaPreTax
    }
  };
}

export function formatCurrency(val: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(val);
}

export function formatDecimalCurrency(val: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(val);
}
