import React, { useState } from 'react';
import { X, ShieldCheck, Mail, Lock, CheckCircle2 } from 'lucide-react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSignedIn(true);
    setTimeout(() => {
      setSignedIn(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0e1511]/85 backdrop-blur-md animate-fade-in">
      <div className="glass-card rounded-2xl max-w-md w-full p-6 sm:p-8 space-y-6 relative border border-[#28342c] shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#0e1511] border border-[#28342c] flex items-center justify-center text-[#bbcabf] hover:text-[#4edea3] hover:border-[#4edea3] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-xl bg-[#4edea3]/20 border border-[#4edea3]/40 flex items-center justify-center text-[#4edea3] mx-auto shadow-[0_0_15px_rgba(78,222,163,0.15)]">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-xl text-[#dde4dd]">
            Access TaxSnap Terminal
          </h3>
          <p className="text-xs text-[#bbcabf]">
            Sign in to sync saved salary profiles and custom state scenarios.
          </p>
        </div>

        {signedIn ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-[#4edea3] mx-auto animate-bounce" />
            <h4 className="font-bold text-base text-[#dde4dd]">
              Authentication Successful
            </h4>
            <p className="text-xs text-[#bbcabf]">
              Welcome back to your TaxSnap terminal.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-[#bbcabf] mb-1.5 uppercase">
                Work Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#5c6e62] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="engineer@company.com"
                  className="w-full pl-9 pr-3 py-2.5 bg-[#0e1511] border border-[#28342c] rounded-md text-xs text-[#dde4dd] focus:outline-none focus:border-[#4edea3]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-[#bbcabf] mb-1.5 uppercase">
                Password / Passkey
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#5c6e62] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-9 pr-3 py-2.5 bg-[#0e1511] border border-[#28342c] rounded-md text-xs text-[#dde4dd] focus:outline-none focus:border-[#4edea3]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-md bg-[#4edea3] text-[#0e1511] font-bold text-xs hover:bg-[#32c98a] transition-all shadow-[0_0_15px_rgba(78,222,163,0.2)] cursor-pointer mt-2"
            >
              Authenticate Session
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
