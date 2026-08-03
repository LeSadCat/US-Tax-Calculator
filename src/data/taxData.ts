import { StateTaxInfo, FAQItem, ArticleItem } from '../types';

export const US_STATES: StateTaxInfo[] = [
  {
    id: 'AL',
    name: 'Alabama',
    code: 'AL',
    type: 'GRADUATED',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 5.0,
    standardDeductionSingle: 3000,
    description: 'Graduated tax rate from 2% to 5%. Full federal tax deduction offset allowed up to cap.'
  },
  {
    id: 'AK',
    name: 'Alaska',
    code: 'AK',
    type: 'NONE',
    isNoTax: true,
    isHighTax: false,
    topRatePercent: 0.0,
    standardDeductionSingle: 0,
    description: 'No state individual income tax. Financed primarily through natural resource royalties.'
  },
  {
    id: 'AZ',
    name: 'Arizona',
    code: 'AZ',
    type: 'FLAT',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 2.5,
    flatRatePercent: 2.5,
    standardDeductionSingle: 14600,
    description: 'Flat 2.5% income tax rate across all taxable income tiers.'
  },
  {
    id: 'AR',
    name: 'Arkansas',
    code: 'AR',
    type: 'GRADUATED',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 4.4,
    standardDeductionSingle: 2340,
    description: 'Graduated state brackets topping at 4.4% for standard income tiers.'
  },
  {
    id: 'CA',
    name: 'California',
    code: 'CA',
    type: 'HIGH',
    isNoTax: false,
    isHighTax: true,
    topRatePercent: 13.3,
    standardDeductionSingle: 5540,
    description: 'Highest progressive state tax in US, ranging from 1% up to 13.3% plus 1.1% SDI.'
  },
  {
    id: 'CO',
    name: 'Colorado',
    code: 'CO',
    type: 'FLAT',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 4.4,
    flatRatePercent: 4.4,
    standardDeductionSingle: 14600,
    description: 'Flat 4.4% income tax rate indexed with federal standard deduction.'
  },
  {
    id: 'CT',
    name: 'Connecticut',
    code: 'CT',
    type: 'GRADUATED',
    isNoTax: false,
    isHighTax: true,
    topRatePercent: 6.99,
    standardDeductionSingle: 15000,
    description: 'Progressive rate structure from 3% to 6.99% with phase-out tax recapture.'
  },
  {
    id: 'DE',
    name: 'Delaware',
    code: 'DE',
    type: 'GRADUATED',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 6.6,
    standardDeductionSingle: 3250,
    description: 'Graduated tax structure topping out at 6.6% for income over $60,000.'
  },
  {
    id: 'FL',
    name: 'Florida',
    code: 'FL',
    type: 'NONE',
    isNoTax: true,
    isHighTax: false,
    topRatePercent: 0.0,
    standardDeductionSingle: 0,
    description: 'Zero state individual income tax guaranteed by Florida state constitution.'
  },
  {
    id: 'GA',
    name: 'Georgia',
    code: 'GA',
    type: 'FLAT',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 5.39,
    flatRatePercent: 5.39,
    standardDeductionSingle: 12000,
    description: 'Transitioned to flat 5.39% single rate with planned stepdowns.'
  },
  {
    id: 'HI',
    name: 'Hawaii',
    code: 'HI',
    type: 'HIGH',
    isNoTax: false,
    isHighTax: true,
    topRatePercent: 11.0,
    standardDeductionSingle: 2200,
    description: 'High progressive structure reaching 11% for high earnings brackets.'
  },
  {
    id: 'ID',
    name: 'Idaho',
    code: 'ID',
    type: 'FLAT',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 5.695,
    flatRatePercent: 5.695,
    standardDeductionSingle: 14600,
    description: 'Flat rate tax system at 5.695% aligned with federal standard deduction.'
  },
  {
    id: 'IL',
    name: 'Illinois',
    code: 'IL',
    type: 'FLAT',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 4.95,
    flatRatePercent: 4.95,
    standardDeductionSingle: 2775,
    description: 'Flat 4.95% constitutional flat rate across all individual net income.'
  },
  {
    id: 'IN',
    name: 'Indiana',
    code: 'IN',
    type: 'FLAT',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 3.05,
    flatRatePercent: 3.05,
    standardDeductionSingle: 1000,
    description: 'Low flat rate at 3.05% state level plus county income tax adjustments.'
  },
  {
    id: 'IA',
    name: 'Iowa',
    code: 'IA',
    type: 'GRADUATED',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 3.8,
    flatRatePercent: 3.8,
    standardDeductionSingle: 14600,
    description: 'Flat 3.8% rate implementation underway for 2025/2026 tax cycles.'
  },
  {
    id: 'KS',
    name: 'Kansas',
    code: 'KS',
    type: 'GRADUATED',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 5.7,
    standardDeductionSingle: 3500,
    description: 'Three bracket system maxing at 5.7% for individual filers.'
  },
  {
    id: 'KY',
    name: 'Kentucky',
    code: 'KY',
    type: 'FLAT',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 4.0,
    flatRatePercent: 4.0,
    standardDeductionSingle: 3160,
    description: 'Flat 4.0% state rate with statutory targets for future reductions.'
  },
  {
    id: 'LA',
    name: 'Louisiana',
    code: 'LA',
    type: 'GRADUATED',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 4.25,
    standardDeductionSingle: 4500,
    description: 'Graduated state rate capping at 4.25% for taxable brackets over $50k.'
  },
  {
    id: 'ME',
    name: 'Maine',
    code: 'ME',
    type: 'GRADUATED',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 7.15,
    standardDeductionSingle: 14600,
    description: 'Progressive rates up to 7.15% with full standard deduction parity.'
  },
  {
    id: 'MD',
    name: 'Maryland',
    code: 'MD',
    type: 'GRADUATED',
    isNoTax: false,
    isHighTax: true,
    topRatePercent: 5.75,
    standardDeductionSingle: 2550,
    description: 'State rate up to 5.75% plus mandatory county tax (up to 3.2%).'
  },
  {
    id: 'MA',
    name: 'Massachusetts',
    code: 'MA',
    type: 'FLAT',
    isNoTax: false,
    isHighTax: true,
    topRatePercent: 5.0,
    flatRatePercent: 5.0,
    standardDeductionSingle: 4400,
    description: 'Flat 5.0% base rate plus 4% surtax on income over $1 million.'
  },
  {
    id: 'MI',
    name: 'Michigan',
    code: 'MI',
    type: 'FLAT',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 4.25,
    flatRatePercent: 4.25,
    standardDeductionSingle: 5600,
    description: 'Flat 4.25% income tax rate across all personal earnings tiers.'
  },
  {
    id: 'MN',
    name: 'Minnesota',
    code: 'MN',
    type: 'HIGH',
    isNoTax: false,
    isHighTax: true,
    topRatePercent: 9.85,
    standardDeductionSingle: 14575,
    description: 'Top tier progressive system reaching 9.85% on top earnings.'
  },
  {
    id: 'MS',
    name: 'Mississippi',
    code: 'MS',
    type: 'FLAT',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 4.0,
    flatRatePercent: 4.0,
    standardDeductionSingle: 2300,
    description: 'Flat 4.0% single rate on all taxable income above threshold.'
  },
  {
    id: 'MO',
    name: 'Missouri',
    code: 'MO',
    type: 'GRADUATED',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 4.8,
    standardDeductionSingle: 14600,
    description: 'Graduated state rate capping at 4.8% on top income brackets.'
  },
  {
    id: 'MT',
    name: 'Montana',
    code: 'MT',
    type: 'GRADUATED',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 5.9,
    standardDeductionSingle: 14600,
    description: 'Two-bracket system maxing at 5.9% conforming with federal AGI.'
  },
  {
    id: 'NE',
    name: 'Nebraska',
    code: 'NE',
    type: 'GRADUATED',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 5.84,
    standardDeductionSingle: 7900,
    description: 'Graduated rates scaling down towards target 3.99% by 2027.'
  },
  {
    id: 'NV',
    name: 'Nevada',
    code: 'NV',
    type: 'NONE',
    isNoTax: true,
    isHighTax: false,
    topRatePercent: 0.0,
    standardDeductionSingle: 0,
    description: 'Zero state individual income tax. Revenue generated via gaming & commerce.'
  },
  {
    id: 'NH',
    name: 'New Hampshire',
    code: 'NH',
    type: 'NONE',
    isNoTax: true,
    isHighTax: false,
    topRatePercent: 0.0,
    standardDeductionSingle: 0,
    description: 'No tax on earned wage income. Interest & dividends tax phasing out to 0%.'
  },
  {
    id: 'NJ',
    name: 'New Jersey',
    code: 'NJ',
    type: 'HIGH',
    isNoTax: false,
    isHighTax: true,
    topRatePercent: 10.75,
    standardDeductionSingle: 1000,
    description: 'Progressive system reaching 10.75% for income exceeding $1M.'
  },
  {
    id: 'NM',
    name: 'New Mexico',
    code: 'NM',
    type: 'GRADUATED',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 5.9,
    standardDeductionSingle: 14600,
    description: 'Graduated rate structure topping at 5.9% on highest tier.'
  },
  {
    id: 'NY',
    name: 'New York',
    code: 'NY',
    type: 'HIGH',
    isNoTax: false,
    isHighTax: true,
    topRatePercent: 10.9,
    standardDeductionSingle: 8000,
    description: 'Progressive rates up to 10.9% plus NYC local tax (3.88%) if applicable.'
  },
  {
    id: 'NC',
    name: 'North Carolina',
    code: 'NC',
    type: 'FLAT',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 4.5,
    flatRatePercent: 4.5,
    standardDeductionSingle: 12750,
    description: 'Flat 4.5% rate with annual statutory reductions towards 3.99%.'
  },
  {
    id: 'ND',
    name: 'North Dakota',
    code: 'ND',
    type: 'GRADUATED',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 2.5,
    standardDeductionSingle: 14600,
    description: 'Ultra-low progressive rate structure topping out at 2.5%.'
  },
  {
    id: 'OH',
    name: 'Ohio',
    code: 'OH',
    type: 'GRADUATED',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 3.5,
    standardDeductionSingle: 0,
    description: 'Streamlined bracket system capping at 3.5% with zero tax under $26k.'
  },
  {
    id: 'OK',
    name: 'Oklahoma',
    code: 'OK',
    type: 'GRADUATED',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 4.75,
    standardDeductionSingle: 6350,
    description: 'Graduated system peaking at 4.75% for earnings above $7,200.'
  },
  {
    id: 'OR',
    name: 'Oregon',
    code: 'OR',
    type: 'HIGH',
    isNoTax: false,
    isHighTax: true,
    topRatePercent: 9.9,
    standardDeductionSingle: 2745,
    description: 'High progressive rate reaching 9.9% plus local Metro supportive housing surtaxes.'
  },
  {
    id: 'PA',
    name: 'Pennsylvania',
    code: 'PA',
    type: 'FLAT',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 3.07,
    flatRatePercent: 3.07,
    standardDeductionSingle: 0,
    description: 'Flat 3.07% rate across gross taxable income with no standard deduction.'
  },
  {
    id: 'RI',
    name: 'Rhode Island',
    code: 'RI',
    type: 'GRADUATED',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 5.99,
    standardDeductionSingle: 10500,
    description: 'Three tier progressive system topping at 5.99%.'
  },
  {
    id: 'SC',
    name: 'South Carolina',
    code: 'SC',
    type: 'GRADUATED',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 6.4,
    standardDeductionSingle: 14600,
    description: 'Graduated state rate capping at 6.4% on top taxable brackets.'
  },
  {
    id: 'SD',
    name: 'South Dakota',
    code: 'SD',
    type: 'NONE',
    isNoTax: true,
    isHighTax: false,
    topRatePercent: 0.0,
    standardDeductionSingle: 0,
    description: 'No state personal income tax. Highly favorable business tax jurisdiction.'
  },
  {
    id: 'TN',
    name: 'Tennessee',
    code: 'TN',
    type: 'NONE',
    isNoTax: true,
    isHighTax: false,
    topRatePercent: 0.0,
    standardDeductionSingle: 0,
    description: 'Zero personal income tax on wages, interest, or stock dividends.'
  },
  {
    id: 'TX',
    name: 'Texas',
    code: 'TX',
    type: 'NONE',
    isNoTax: true,
    isHighTax: false,
    topRatePercent: 0.0,
    standardDeductionSingle: 0,
    description: 'Zero state individual income tax constitutionally protected in Texas.'
  },
  {
    id: 'UT',
    name: 'Utah',
    code: 'UT',
    type: 'FLAT',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 4.55,
    flatRatePercent: 4.55,
    standardDeductionSingle: 14600,
    description: 'Flat 4.55% rate with Utah tax credit offsetting standard deduction.'
  },
  {
    id: 'VT',
    name: 'Vermont',
    code: 'VT',
    type: 'GRADUATED',
    isNoTax: false,
    isHighTax: true,
    topRatePercent: 8.75,
    standardDeductionSingle: 14600,
    description: 'Progressive rates from 3.35% to 8.75% across four income brackets.'
  },
  {
    id: 'VA',
    name: 'Virginia',
    code: 'VA',
    type: 'GRADUATED',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 5.75,
    standardDeductionSingle: 8500,
    description: 'Four bracket progressive tax topping out at 5.75% above $17k.'
  },
  {
    id: 'WA',
    name: 'Washington',
    code: 'WA',
    type: 'NONE',
    isNoTax: true,
    isHighTax: false,
    topRatePercent: 0.0,
    standardDeductionSingle: 0,
    description: 'No state individual wage income tax (7% capital gains tax applies above $262k).'
  },
  {
    id: 'WV',
    name: 'West Virginia',
    code: 'WV',
    type: 'GRADUATED',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 5.12,
    standardDeductionSingle: 0,
    description: 'Graduated state rate scaling down towards top rate of 5.12%.'
  },
  {
    id: 'WI',
    name: 'Wisconsin',
    code: 'WI',
    type: 'GRADUATED',
    isNoTax: false,
    isHighTax: false,
    topRatePercent: 7.65,
    standardDeductionSingle: 13810,
    description: 'Four progressive tax brackets topping at 7.65% for high filers.'
  },
  {
    id: 'WY',
    name: 'Wyoming',
    code: 'WY',
    type: 'NONE',
    isNoTax: true,
    isHighTax: false,
    topRatePercent: 0.0,
    standardDeductionSingle: 0,
    description: 'Zero personal income tax funded by mineral severance taxes.'
  }
];

export const FEDERAL_BRACKETS_2026_SINGLE = [
  { rate: 0.10, min: 0, max: 11600, label: '10%' },
  { rate: 0.12, min: 11600, max: 47150, label: '12%' },
  { rate: 0.22, min: 47150, max: 100525, label: '22%' },
  { rate: 0.24, min: 100525, max: 191950, label: '24%' },
  { rate: 0.32, min: 191950, max: 243725, label: '32%' },
  { rate: 0.35, min: 243725, max: 609350, label: '35%' },
  { rate: 0.37, min: 609350, max: Infinity, label: '37%' }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How is take-home pay calculated?',
    answer: 'Take-home pay is calculated by taking your gross annual salary, subtracting pre-tax deductions like 401(k) and HSA contributions, applying federal standard deductions ($14,600 Single for 2026) and progressive tax brackets, calculating state income tax, and subtracting FICA taxes (6.2% Social Security up to $168,600 + 1.45% Medicare).',
    category: 'BASICS'
  },
  {
    id: 'faq-2',
    question: 'What percentage of my paycheck goes to taxes?',
    answer: 'Your total tax percentage (effective tax rate) typically ranges from 15% to 35% depending on your gross salary, state jurisdiction, filing status, and pre-tax retirement deductions. Higher incomes face higher marginal rates under US progressive taxation.',
    category: 'TAXES'
  },
  {
    id: 'faq-3',
    question: 'How much federal tax is taken out of my paycheck?',
    answer: 'Federal tax withholding is calculated using 2026 IRS progressive tax brackets ranging from 10% up to 37%. Taxes are applied only to your taxable income after subtracting your standard deduction ($14,600 Single / $29,200 Joint) and pre-tax 401(k) contributions.',
    category: 'TAXES'
  },
  {
    id: 'faq-4',
    question: 'Is a bonus taxed differently than salary?',
    answer: 'Supplemental wages like bonuses may be withheld at a flat 22% federal rate by your employer, but at tax time, all income is combined. Your bonus is ultimately taxed at your standard marginal tax bracket alongside your base gross salary.',
    category: 'PLANNING'
  },
  {
    id: 'faq-5',
    question: 'How do I calculate net pay from gross pay?',
    answer: 'Net pay equals Gross Pay minus Pre-tax Deductions (401k/HSA) minus Federal Income Tax minus State Income Tax minus FICA Payroll Taxes (Social Security + Medicare). Divide annual net pay by your pay frequency (bi-weekly, monthly, weekly) to see per-paycheck earnings.',
    category: 'BASICS'
  },
  {
    id: 'faq-6',
    question: 'Is this calculator accurate for 2026 tax brackets?',
    answer: 'Yes, PaycheckCalculatorUS simulates the exact 2026 IRS federal tax brackets, 2026 standard deduction models ($14,600 Single / $29,200 Joint), FICA wage caps ($168,600 Social Security cap + 1.45% Medicare + 0.9% Additional Medicare), and state tax rules across all 50 states.',
    category: 'BASICS'
  },
  {
    id: 'faq-7',
    question: 'Does it include state taxes?',
    answer: 'Yes, our US paycheck calculator supports all 50 states, including flat tax states, progressive bracket states like California and New York, and no income tax states like Texas, Florida, Washington, and Nevada.',
    category: 'TAXES'
  }
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'article-1',
    tag: 'TAX STRATEGY',
    tagCategory: 'TAX STRATEGY',
    title: 'The 2026 Sunset Clause: How to Prepare Your Portfolio',
    excerpt: 'Navigating the upcoming shifts in federal tax brackets as the TCJA provisions expire across multiple income tiers.',
    content: `The Tax Cuts and Jobs Act (TCJA) tax rate reductions enacted in 2017 are scheduled to sunset at the end of December 2025 unless reauthorized by Congress. For W-2 earners and high net-worth investors, this means federal marginal brackets could revert from 12%, 22%, 24%, 32%, 35%, and 37% back to pre-2018 levels of 15%, 25%, 28%, 33%, 35%, and 39.6%.

Key Tax Shield Strategies for 2026:
1. Maximize Roth Conversions in lower-rate years: If your current marginal rate is 22% or 24%, accelerating Roth 401(k) or Roth IRA conversions now locks in historically low tax rates before potential increases.
2. Optimize HSA and Health Care Offsets: Contributions to Health Savings Accounts (HSA) offer a triple tax advantage—contributions are pre-tax, growth is tax-free, and withdrawals for qualified medical expenses incur zero tax.
3. Tax-Loss Harvesting & Asset Placement: Re-evaluate fixed income placement in tax-advantaged accounts while maintaining tax-efficient equity index funds in taxable brokerage accounts.`,
    date: 'MAY 12, 2026',
    readTime: '6 MIN READ'
  },
  {
    id: 'article-2',
    tag: 'WEALTHBUILDING',
    tagCategory: 'WEALTHBUILDING',
    title: 'Maxing Out: HSA vs 401(k) for High Earners',
    excerpt: 'The mathematical hierarchy of contribution accounts to maximize your long-term net worth.',
    content: `When allocating surplus compensation above your baseline living expenses, optimizing the order of operations among retirement and health accounts yields a significant compound return over a 10-30 year horizon.

Optimal Order of Waterfall Contributions:
1. 401(k) Employer Match: Always contribute up to your employer's full match percentage first (e.g., 100% return on investment instantly).
2. HSA Max Out ($4,150 Single / $8,300 Family): The HSA is the only account offering triple tax protection (pre-tax deduction, tax-free growth, tax-free distributions).
3. 401(k) Unmatched Maximum ($23,000 for 2026): Shield high-income W-2 earnings from top 24%-35% marginal tax brackets.
4. Mega-Backdoor Roth 401(k) / Roth IRA: After-tax non-deductible 401(k) contributions converted into Roth balances up to the total $69,000 annual limit.`,
    date: 'MAY 08, 2026',
    readTime: '8 MIN READ'
  },
  {
    id: 'article-3',
    tag: 'CAREER PLANNING',
    tagCategory: 'CAREER PLANNING',
    title: 'Negotiating Net: Asking for Gross Salary Increases',
    excerpt: 'How to use take-home pay data as leverage in your next performance review or offer letter negotiation.',
    content: `Job candidates often negotiate gross salary figures without analyzing how state income taxes, FICA thresholds, and federal bracket jumps affect their net cash in hand.

How to Leverage Fiscal Engineering in Offer Negotiations:
1. Account for State Tax Differentials: Moving from Florida (0% tax) to California (up to 13.3% tax) on a $150,000 salary requires a gross compensation increase of approximately $18,500 just to maintain equal net purchasing power.
2. Negotiate Equity & Pre-Tax Perks: If a gross salary cap is reached during compensation reviews, request pre-tax commuting stipends, executive health coverage, or ISO/NSO stock options.
3. Present Take-Home Pay Projections: Use structured reports showing precise net pay breakdown metrics to justify compensation adjustments during mid-year reviews.`,
    date: 'APRIL 29, 2026',
    readTime: '5 MIN READ'
  }
];
