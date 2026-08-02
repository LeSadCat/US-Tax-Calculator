export type FilingStatus = 'single' | 'joint' | 'separate' | 'head';

export type PayFrequency = 'bi-weekly' | 'monthly' | 'weekly' | 'semi-monthly';

export interface TaxCalculationInputs {
  grossSalary: number;
  stateId: string;
  filingStatus: FilingStatus;
  k401Percent: number; // e.g. 6 = 6%
  hsaAnnual: number;
  payFrequency: PayFrequency;
}

export interface BreakdownLedgerItem {
  label: string;
  amount: number;
  formattedAmount: string;
  percentage: number;
  isShield?: boolean;
  color?: string;
}

export interface TaxCalculationResult {
  grossSalary: number;
  preTaxDeductions: number;
  taxableIncome: number;
  federalTax: number;
  stateTax: number;
  ficaTax: number;
  socialSecurityTax: number;
  medicareTax: number;
  additionalMedicareTax: number;
  totalTax: number;
  netPay: number;
  effectiveRate: number; // e.g. 23.4%
  marginalRate: number; // e.g. 22%
  payPeriodAmount: number;
  payPeriodLabel: string;
  payPeriodsCount: number;
  ledger: {
    federalTax: number;
    stateTax: number;
    ficaTax: number;
    k401PreTax: number;
    hsaPreTax: number;
  };
}

export interface StateTaxInfo {
  id: string; // e.g. 'AL', 'CA', 'TX'
  name: string;
  code: string;
  type: 'GRADUATED' | 'FLAT' | 'NONE' | 'HIGH';
  isNoTax: boolean;
  isHighTax: boolean;
  topRatePercent: number;
  flatRatePercent?: number;
  standardDeductionSingle: number;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'BASICS' | 'TAXES' | 'PLANNING';
}

export interface ArticleItem {
  id: string;
  tag: string;
  tagCategory: 'TAX STRATEGY' | 'WEALTHBUILDING' | 'CAREER PLANNING';
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
}
