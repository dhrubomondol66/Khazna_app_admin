import React, { useState } from 'react';

export default function ForgotPassword({ goLogin, goReset }) {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    goReset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#093a6e] bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-[#1a6bff] via-[#093a6e] to-[#041d38]">
      <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] shadow-2xl text-center">
        <div className="mb-6 flex justify-center text-6xl">📧</div>
        <h2 className="text-3xl font-bold text-white mb-2">Forgot Password</h2>
        <p className="text-white/60 text-sm mb-10 tracking-wide">Enter your email and we'll send you a reset link</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group text-left">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/>
              </svg>
            </span>
            <input 
              type="email" 
              placeholder="Enter Your Email" 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#1a6bff] focus:border-transparent transition-all"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#093a6e] hover:bg-[#072d54] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-200 mt-4"
          >
            Send Reset Link
          </button>
        </form>

        <button 
          onClick={goLogin}
          className="mt-8 text-sm text-white/50 hover:text-white transition-colors flex items-center justify-center gap-2 w-full"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Back to Login
        </button>
      </div>
    </div>
  );
}
