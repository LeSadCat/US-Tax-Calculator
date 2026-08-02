import React, { useState } from 'react';
import { ARTICLES_DATA } from '../data/taxData';
import { ArticleItem } from '../types';
import { ArticleReaderModal } from './ArticleReaderModal';
import { Layers, TrendingUp, Briefcase } from 'lucide-react';

export const FinancialIntelligence: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  const getArticleIcon = (tag: string) => {
    if (tag.includes('TAX')) return <Layers className="w-8 h-8 text-[#4edea3]/80" />;
    if (tag.includes('WEALTH')) return <TrendingUp className="w-8 h-8 text-[#4edea3]/80" />;
    return <Briefcase className="w-8 h-8 text-[#4edea3]/80" />;
  };

  return (
    <section className="w-full py-12 border-t border-[#28342c]">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#dde4dd] tracking-tight mb-1">
            Financial Intelligence
          </h2>
          <p className="text-sm text-[#bbcabf]">
            Curated protocols for wealth optimization and career architecture.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES_DATA.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="glass-card glass-card-hover rounded-xl p-6 flex flex-col justify-between space-y-6 cursor-pointer group"
            >
              <div className="space-y-4">
                {/* Visual Icon Header Box */}
                <div className="w-full h-28 rounded-lg bg-[#0e1511] border border-[#28342c] flex items-center justify-center group-hover:border-[#4edea3]/50 transition-colors">
                  {getArticleIcon(article.tag)}
                </div>

                <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded bg-[#28342c] text-[#ffb95f] inline-block uppercase">
                  {article.tag}
                </span>

                <h3 className="font-bold text-base text-[#dde4dd] group-hover:text-[#4edea3] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-[#bbcabf] line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#28342c]/60 flex items-center justify-between font-mono text-[10px] text-[#86948a]">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      <ArticleReaderModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
};
