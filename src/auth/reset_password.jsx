import React, { useState } from 'react';

export default function ResetPassword({ goLogin }) {
  const [pw, setPw] = useState('');
  const [cpw, setCpw] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    goLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#093a6e] bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-[#1a6bff] via-[#093a6e] to-[#041d38]">
      <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] shadow-2xl text-center">
        <div className="mb-6 flex justify-center text-6xl">🔑</div>
        <h2 className="text-3xl font-bold text-white mb-2">Reset Password</h2>
        <p className="text-white/60 text-sm mb-10 tracking-wide">Enter your new password below</p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative group text-left">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </span>
            <input 
              type="password" 
              placeholder="New Password" 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#1a6bff] focus:border-transparent transition-all"
              value={pw}
              onChange={e => setPw(e.target.value)}
              required
            />
          </div>

          <div className="relative group text-left">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </span>
            <input 
              type="password" 
              placeholder="Confirm Password" 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#1a6bff] focus:border-transparent transition-all"
              value={cpw}
              onChange={e => setCpw(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#093a6e] hover:bg-[#072d54] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-200 mt-4"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
