import React, { useState } from 'react';
import { US_STATES } from '../data/taxData';
import { Search, ChevronDown, Check } from 'lucide-react';

interface StateNodesGridProps {
  selectedStateId: string;
  onSelectState: (stateId: string) => void;
}

export const StateNodesGrid: React.FC<StateNodesGridProps> = ({
  selectedStateId,
  onSelectState
}) => {
  const [filterType, setFilterType] = useState<'ALL' | 'NO_TAX' | 'HIGH_TAX'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  const filteredStates = US_STATES.filter((st) => {
    // Filter by type
    if (filterType === 'NO_TAX' && !st.isNoTax) return false;
    if (filterType === 'HIGH_TAX' && !st.isHighTax) return false;

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return st.name.toLowerCase().includes(q) || st.code.toLowerCase().includes(q);
    }
    return true;
  });

  const visibleStates = showAll ? filteredStates : filteredStates.slice(0, 15);

  const handleStateClick = (stateId: string) => {
    onSelectState(stateId);
    const el = document.getElementById('hero-calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="state-nodes" className="w-full py-12 border-t border-[#28342c]">
      <div className="space-y-6">
        {/* Header and Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#dde4dd] tracking-tight mb-1">
              State Nodes
            </h2>
            <p className="text-sm text-[#bbcabf]">
              Navigate fiscal profiles across the United States network.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2">
            {[
              { id: 'ALL', label: 'All States' },
              { id: 'NO_TAX', label: 'No Tax' },
              { id: 'HIGH_TAX', label: 'High Tax' }
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilterType(f.id as any)}
                className={`px-3 py-1.5 text-xs font-mono rounded-md border transition-all cursor-pointer ${
                  filterType === f.id
                    ? 'bg-[#4edea3] text-[#0e1511] border-[#4edea3] font-bold'
                    : 'bg-[#0e1511] text-[#bbcabf] border-[#28342c] hover:border-[#3c4a42]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search Input Bar */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-[#86948a] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Query state protocol..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#0e1511] border border-[#28342c] rounded-md text-xs sm:text-sm text-[#dde4dd] placeholder-[#5c6e62] focus:outline-none focus:border-[#4edea3] transition-colors"
          />
        </div>

        {/* State Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {visibleStates.map((st) => {
            const isSelected = selectedStateId === st.id;

            return (
              <div
                key={st.id}
                onClick={() => handleStateClick(st.id)}
                className={`glass-card rounded-lg p-3.5 flex flex-col justify-between h-24 cursor-pointer transition-all hover:scale-[1.02] ${
                  isSelected
                    ? 'border-[#4edea3] bg-[#4edea3]/10 shadow-[0_0_15px_rgba(78,222,163,0.15)]'
                    : 'hover:border-[#3c4a42]'
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-[#86948a] font-bold">
                    {st.code}
                  </span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#4edea3]" />}
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-[#dde4dd] truncate">
                    {st.name}
                  </h4>
                  <div className="mt-1">
                    <span
                      className={`text-[9px] font-mono px-1.5 py-0.5 rounded uppercase ${
                        st.isNoTax
                          ? 'bg-[#10b981]/20 text-[#4edea3] border border-[#10b981]/30'
                          : st.isHighTax
                          ? 'bg-[#ffb4ab]/20 text-[#ffb4ab] border border-[#ffb4ab]/30'
                          : 'bg-[#28342c] text-[#bbcabf]'
                      }`}
                    >
                      {st.type}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All States Button */}
        {filteredStates.length > 15 && (
          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#161d19] border border-[#28342c] hover:border-[#4edea3] font-mono text-xs text-[#dde4dd] hover:text-[#4edea3] transition-colors cursor-pointer"
            >
              <span>{showAll ? 'Collapse Network' : 'View All States'}</span>
              <ChevronDown className={`w-3.5 h-3.5 ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
