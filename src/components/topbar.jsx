import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Topbar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  
  return (
    <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 shrink-0 z-30">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#1a6bff] transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </span>
          <input
            type="text" 
            placeholder="Search users, transactions..."
            className="w-full bg-slate-50 border-none rounded-2xl py-3 pl-12 pr-4 text-sm text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-[#1a6bff]/20 focus:bg-white transition-all outline-none"
            value={search} 
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* <button className="relative p-2.5 text-slate-500 hover:bg-slate-50 rounded-xl transition-all group">
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          <span className="absolute top-2.5 right-2.5 w-4 h-4 bg-rose-500 border-2 border-white rounded-full flex items-center justify-center text-[9px] font-bold text-white">
            3
          </span>
        </button> */}
        
        <div 
          onClick={() => navigate('/profile')}
          className="w-10 h-10 rounded-full bg-[#093a6e] border-2 border-slate-100 shadow-sm flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:scale-105 transition-transform"
        >
          AD
        </div>
      </div>
    </header>
  );
}
