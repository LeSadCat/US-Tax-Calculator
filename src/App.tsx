import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TaxCalculationInputs } from './types';
import { calculateTax } from './utils/taxCalculator';
import { Header } from './components/Header';
import { AdBannerSlot } from './components/AdBannerSlot';
import { HeroCalculator } from './components/HeroCalculator';
import { FeatureGrid } from './components/FeatureGrid';
import { HowItWorksSection } from './components/HowItWorksSection';
import { FAQSection } from './components/FAQSection';
import { StateNodesGrid } from './components/StateNodesGrid';
import { FinancialIntelligence } from './components/FinancialIntelligence';
import { ExportModal } from './components/ExportModal';
import { SignInModal } from './components/SignInModal';
import { Footer } from './components/Footer';

// Pages required for monetization
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Disclaimer } from './pages/Disclaimer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function CalculatorHome({
  inputs,
  setInputs,
  results,
  onOpenExport,
  onSelectState
}: {
  inputs: TaxCalculationInputs;
  setInputs: React.Dispatch<React.SetStateAction<TaxCalculationInputs>>;
  results: ReturnType<typeof calculateTax>;
  onOpenExport: () => void;
  onSelectState: (stateId: string) => void;
}) {
  return (
    <>
      {/* Top 728X90 System Integration Ad Slot */}
      <AdBannerSlot
        label="728X90 SYSTEM INTEGRATION AD"
        type="leaderboard"
        className="w-full h-20 sm:h-24 max-w-3xl mx-auto"
      />

      {/* Hero Calculator Section */}
      <HeroCalculator
        inputs={inputs}
        setInputs={setInputs}
        results={results}
        onOpenExport={onOpenExport}
      />

      {/* 6 Feature Protocol Grid */}
      <FeatureGrid />

      {/* How It Works Section */}
      <HowItWorksSection taxableIncome={results.taxableIncome} />

      {/* Frequently Asked Intelligence */}
      <FAQSection />

      {/* 50 State Nodes Grid */}
      <StateNodesGrid
        selectedStateId={inputs.stateId}
        onSelectState={onSelectState}
      />

      {/* Financial Intelligence Articles */}
      <FinancialIntelligence />

      {/* System Reward Ad Slot */}
      <AdBannerSlot
        label="SYSTEM REWARD AD SLOT"
        type="banner"
        className="w-full h-20 max-w-4xl mx-auto"
      />
    </>
  );
}

export default function App() {
  const [inputs, setInputs] = useState<TaxCalculationInputs>({
    grossSalary: 85000,
    stateId: 'AL',
    filingStatus: 'single',
    k401Percent: 6,
    hsaAnnual: 0,
    payFrequency: 'bi-weekly'
  });

  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  // High precision tax result memoized
  const results = useMemo(() => {
    return calculateTax(inputs);
  }, [inputs]);

  const handleSelectState = (stateId: string) => {
    setInputs((prev) => ({ ...prev, stateId }));
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0e1511] text-[#dde4dd] flex flex-col selection:bg-[#4edea3]/30 selection:text-[#4edea3]">
        {/* Sticky Navigation Header */}
        <Header onOpenSignIn={() => setIsSignInOpen(true)} />

        {/* Main Container */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12">
          <Routes>
            <Route
              path="/"
              element={
                <CalculatorHome
                  inputs={inputs}
                  setInputs={setInputs}
                  results={results}
                  onOpenExport={() => setIsExportOpen(true)}
                  onSelectState={handleSelectState}
                />
              }
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Modals */}
        <ExportModal
          isOpen={isExportOpen}
          onClose={() => setIsExportOpen(false)}
          inputs={inputs}
          results={results}
        />

        <SignInModal
          isOpen={isSignInOpen}
          onClose={() => setIsSignInOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
