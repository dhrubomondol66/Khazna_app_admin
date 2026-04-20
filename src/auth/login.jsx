import React, { useState } from 'react';
import logo from '../assets/Expense_Tracker_Logo_1.png';
export default function Login({ onLogin, goForgot }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#093a6e] bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-[#1a6bff] via-[#093a6e] to-[#041d38]">
      <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] shadow-2xl text-center">
        <div className="mb-6 flex justify-center">
          <img 
            src={logo}
            alt="Safe" 
            className="w-40 h-40 object-contain drop-shadow-2xl animate-float"
            onError={(e) => {
              e.target.onerror = null;
              e.target.parentNode.innerHTML = '<span class="text-6xl">🔐</span>';
            }}
          />
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-2">Log In with Email</h2>
        <p className="text-white/60 text-sm mb-10 tracking-wide">Enter Your Email & Password for Log In</p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative group">
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

          <div className="relative group">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </span>
            <input 
              type={showPass ? 'text' : 'password'} 
              placeholder="Enter Your Password" 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-12 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#1a6bff] focus:border-transparent transition-all"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button 
              type="button" 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              )}
            </button>
          </div>

          <div className="flex justify-end pt-1">
            <button 
              type="button" 
              onClick={goForgot}
              className="text-xs text-white/50 hover:text-white transition-colors tracking-tight"
            >
              Forgot Password?
            </button>
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#093a6e] hover:bg-[#072d54] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-200 mt-4"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
