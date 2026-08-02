import React from 'react';
import { Zap, Landmark, Calendar, PieChart, ShieldCheck, TrendingUp } from 'lucide-react';

export const FeatureGrid: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-5 h-5 text-[#4edea3]" />,
      title: 'Real-time Recalibration',
      description: 'Live updates on every keystroke. See how a 1% shift in savings changes your daily liquidity instantly.'
    },
    {
      icon: <Landmark className="w-5 h-5 text-[#4edea3]" />,
      title: 'State-Specific Logic',
      description: 'Detailed tax algorithms for all 50 states, including localized standard deductions and graduated brackets.'
    },
    {
      icon: <Calendar className="w-5 h-5 text-[#4edea3]" />,
      title: '2026 Ready Protocol',
      description: 'Synchronized with 2026 IRS federal models and standard deduction updates for future-proof planning.'
    },
    {
      icon: <PieChart className="w-5 h-5 text-[#4edea3]" />,
      title: '401(k) Optimization',
      description: 'Calculates the precise tax shield provided by your contributions to maximize your wealth accumulation.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#4edea3]" />,
      title: 'FICA Calculation Engine',
      description: 'High-precision Social Security and Medicare logic, including wage base caps and additional Medicare surcharges.'
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#4edea3]" />,
      title: 'Marginal vs Effective',
      description: 'Stop looking at one number. Understand the difference between your highest tax tier and your overall bill.'
    }
  ];

  return (
    <section className="w-full py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((item, index) => (
          <div
            key={index}
            className="glass-card glass-card-hover rounded-xl p-5 space-y-3 group"
          >
            <div className="w-9 h-9 rounded-md bg-[#0e1511] border border-[#28342c] flex items-center justify-center group-hover:border-[#4edea3] transition-colors">
              {item.icon}
            </div>
            <h3 className="font-semibold text-base text-[#dde4dd] tracking-tight group-hover:text-[#4edea3] transition-colors">
              {item.title}
            </h3>
            <p className="text-xs text-[#bbcabf] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
