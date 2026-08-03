import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, ExternalLink } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Back Link */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-xs font-mono text-[#86948a] hover:text-[#4edea3] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Return to Calculator
      </Link>

      {/* Header */}
      <div className="border-b border-[#28342c] pb-6 space-y-2">
        <div className="flex items-center gap-2 text-[#4edea3] font-mono text-xs font-semibold uppercase tracking-wider">
          <Shield className="w-4 h-4" />
          Data Protection & Ad Policies
        </div>
        <h1 className="text-3xl font-extrabold text-[#dde4dd]">Privacy Policy</h1>
        <p className="text-xs font-mono text-[#86948a]">
          Last Updated: August 3, 2026
        </p>
      </div>

      {/* Main Content Body */}
      <div className="glass-card rounded-xl p-6 sm:p-8 space-y-6 text-sm text-[#bbcabf] leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#dde4dd]">1. Client-Side Financial Data Processing</h2>
          <p>
            At <strong className="text-[#dde4dd]">PaycheckCalculatorUS</strong>, we prioritize user privacy above all else.
            All paycheck calculations, salary inputs, state selections, filing statuses, 401(k) percentages, and HSA deductions
            are processed <strong className="text-[#4edea3]">100% client-side directly inside your web browser</strong>.
          </p>
          <p>
            We do not collect, store, transmit, or log any personal financial data or salary details to external servers or third parties.
            Your financial inputs never leave your device.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#dde4dd]">2. Cookies & Third-Party Advertising</h2>
          <p>
            PaycheckCalculatorUS uses third-party advertising services, including <strong className="text-[#dde4dd]">Google AdSense / Google Ads</strong>,
            to serve advertisements when you visit our website.
          </p>
          <p>
            Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites on the internet.
            Google's use of advertising cookies enables it and its partners to serve ads to users based on their visit to our site and/or other sites on the Internet.
          </p>
          <p>
            Users may opt out of personalized advertising by visiting Google's Ad Settings page at:
          </p>
          <div className="pt-1">
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#4edea3] hover:underline"
            >
              https://policies.google.com/technologies/ads
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#dde4dd]">3. Web Analytics</h2>
          <p>
            We may utilize privacy-friendly web analytics tools (such as Google Analytics or aggregate server logs) to monitor non-personally identifiable traffic patterns,
            page visit counts, device types, and browser metrics. This aggregated data helps us optimize tool loading speeds and improve user experience across all devices.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#dde4dd]">4. Privacy Inquiries</h2>
          <p>
            If you have questions or concerns regarding our privacy practices, cookie policy, or data protection standards, please contact our team at:
          </p>
          <p className="font-mono text-xs text-[#4edea3]">
            contact@paycheckcalculatorus.com
          </p>
        </section>
      </div>
    </div>
  );
};
