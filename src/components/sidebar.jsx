import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/Container.png';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', path: '/dashboard', icon: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
    </svg>
  )},
  { id: 'users', label: 'User Management', path: '/users', icon: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )},
  { id: 'transactions', label: 'Transactions', path: '/transactions', icon: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
    </svg>
  )},
  { id: 'categories', label: 'Expense Categories', path: '/categories', icon: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
    </svg>
  )},
  { id: 'subscriptions', label: 'Subscriptions', path: '/subscriptions', icon: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 20h20"/><path d="M7 20v-5"/><path d="M11 20v-8"/><path d="M15 20v-11"/><path d="M19 20v-13"/>
    </svg>
  )},
  { id: 'analytics', label: 'Analytics & Reports', path: '/analytics', icon: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  )},
  { id: 'settings', label: 'Settings', path: '/settings', icon: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1-2 2 2 2 0 0 1-2-2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  )},
];

export default function Sidebar({ onLogout }) {
  const navigate = useNavigate();

  return (
    <div className="w-64 h-full bg-white border-r border-slate-100 flex flex-col shrink-0 overflow-y-auto custom-scrollbar">
      <div className="p-6 flex items-center gap-3">
        <img src={logo} alt="logo" className="w-10 h-10 rounded-lg" />
        <div>
          <h1 className="text-sm font-bold text-[#093a6e]">Admin Panel</h1>
          <p className="text-[10px] text-slate-400 font-medium">Budget Tracker</p>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {navItems.map(item => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) => `
              w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200
              ${isActive 
                ? 'bg-[#eff6ff] text-[#1a6bff]' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'}
            `}
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-100">
        <div 
          onClick={() => navigate('/profile')}
          className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl cursor-pointer hover:bg-slate-100 transition-all border border-transparent hover:border-slate-100"
        >
          <div className="w-10 h-10 rounded-full bg-[#093a6e] flex items-center justify-center text-white text-xs font-bold">
            AD
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-bold text-slate-900 truncate">Admin Panel</h4>
            <p className="text-[10px] text-slate-500 truncate">Super Admin</p>
          </div>
          <button 
            onClick={(e) => { e.stopPropagation(); onLogout(); }}
            className="p-2 text-slate-400 hover:text-rose-500 transition-colors"
            title="Logout"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
