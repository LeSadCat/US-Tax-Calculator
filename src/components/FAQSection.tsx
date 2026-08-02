import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/taxData';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { AdBannerSlot } from './AdBannerSlot';

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');
  const [showAll, setShowAll] = useState<boolean>(false);

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) => activeCategory === 'ALL' || item.category === activeCategory
  );

  const displayedFaqs = showAll ? filteredFaqs : filteredFaqs.slice(0, 6);

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq-section" className="w-full py-12 border-t border-[#28342c]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Accordions Left (8/12) */}
        <div className="lg:col-span-8 space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#dde4dd] tracking-tight mb-1">
              Frequently Asked Intelligence
            </h2>
            <p className="text-sm text-[#bbcabf]">
              Quick answers to complex fiscal queries.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {['ALL', 'BASICS', 'TAXES', 'PLANNING'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 text-xs font-mono font-medium rounded-full border transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#4edea3] text-[#0e1511] border-[#4edea3] font-bold'
                    : 'bg-[#0e1511] text-[#bbcabf] border-[#28342c] hover:border-[#3c4a42]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordions List */}
          <div className="space-y-3">
            {displayedFaqs.map((faq) => {
              const isOpen = expandedId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`glass-card rounded-xl transition-all ${
                    isOpen ? 'border-[#4edea3]/60 shadow-[0_0_15px_rgba(78,222,163,0.05)]' : ''
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#28342c] text-[#4edea3]">
                        {faq.category}
                      </span>
                      <span className="font-semibold text-sm sm:text-base text-[#dde4dd]">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-[#86948a] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#4edea3]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 pt-0 sm:px-5 sm:pb-5 text-xs sm:text-sm text-[#bbcabf] leading-relaxed border-t border-[#28342c]/40 mt-1">
                      <p className="pt-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Show More Button */}
          {filteredFaqs.length > 6 && (
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#161d19] border border-[#28342c] hover:border-[#4edea3] font-mono text-xs text-[#dde4dd] hover:text-[#4edea3] transition-colors cursor-pointer"
              >
                <span>{showAll ? 'Show Less' : 'Show More'}</span>
                <ChevronDown className={`w-3.5 h-3.5 ${showAll ? 'rotate-180' : ''}`} />
              </button>
            </div>
          )}
        </div>

        {/* Right Contextual Ad Slot (4/12) */}
        <div className="lg:col-span-4 lg:sticky lg:top-20">
          <AdBannerSlot label="300X250 CONTEXTUAL AD" className="h-[250px]" />
        </div>
      </div>
    </section>
  );
};
