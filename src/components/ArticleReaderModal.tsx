import React from 'react';
import { ArticleItem } from '../types';
import { X, Calendar, Clock, BookOpen } from 'lucide-react';

interface ArticleReaderModalProps {
  article: ArticleItem | null;
  onClose: () => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0e1511]/80 backdrop-blur-md animate-fade-in">
      <div className="glass-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 relative border border-[#28342c] shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#0e1511] border border-[#28342c] flex items-center justify-center text-[#bbcabf] hover:text-[#4edea3] hover:border-[#4edea3] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Tag & Metadata */}
        <div className="space-y-3">
          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#28342c] text-[#4edea3] inline-block uppercase">
            {article.tag}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#dde4dd] tracking-tight leading-tight">
            {article.title}
          </h2>

          <div className="flex items-center gap-4 text-xs font-mono text-[#86948a] pt-1">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Article Body */}
        <div className="space-y-4 text-sm text-[#dde4dd] leading-relaxed border-t border-[#28342c] pt-6 whitespace-pre-line">
          <p className="text-base text-[#bbcabf] font-medium italic bg-[#0e1511] p-4 rounded-lg border-l-2 border-[#4edea3]">
            "{article.excerpt}"
          </p>
          <div className="text-[#dde4dd] space-y-3">
            {article.content}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#28342c] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-md bg-[#4edea3] text-[#0e1511] font-semibold text-xs hover:bg-[#32c98a] transition-all cursor-pointer"
          >
            Close Protocol Guide
          </button>
        </div>
      </div>
    </div>
  );
};
