import React, { useState } from 'react';

export default function AdminProfile() {
  const [profile, setProfile] = useState({
    name: 'Admin Panel',
    role: 'Super Admin',
    email: 'admin@khazna.com',
    phone: '+966 50 123 4567',
    location: 'Riyadh, Saudi Arabia',
    joined: 'January 2024',
    bio: 'Overseeing the Khazna financial ecosystem. Focus on platform stability, security, and premium user growth.'
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    browserPush: false,
    securityLogs: true,
    revenueReports: true
  });

  const toggleNotif = (key) => setNotifications(n => ({ ...n, [key]: !n[key] }));

  return (
    <div className="p-8 space-y-8 max-w-[90vw] mx-auto pb-24">
      <div className="flex items-end gap-6 mb-12">
        <div className="relative group">
          <div className="w-32 h-32 rounded-[2.5rem] bg-[#093a6e] border-4 border-white shadow-2xl flex items-center justify-center text-white text-4xl font-black group-hover:scale-105 transition-transform duration-300 cursor-pointer">
            AD
          </div>
          <button className="absolute -bottom-2 -right-2 p-3 bg-white border border-slate-100 rounded-2xl shadow-xl text-slate-600 hover:text-[#1a6bff] hover:scale-110 transition-all">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
            </svg>
          </button>
        </div>
        <div className="pb-2">
          <h1 className="text-3xl font-black text-slate-900 mb-1">{profile.name}</h1>
          <div className="flex items-center gap-2">
            <span className="bg-[#eff6ff] text-[#1a6bff] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{profile.role}</span>
            <span className="text-slate-400 text-xs font-medium">• Joined {profile.joined}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* PERSONAL INFO */}
        <div className="lg:col-span-3 space-y-8">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-50 pb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                <input type="text" defaultValue={profile.name} className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-[#1a6bff]/20 focus:bg-white transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                <input type="email" defaultValue={profile.email} className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-[#1a6bff]/20 focus:bg-white transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                <input type="text" defaultValue={profile.phone} className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-[#1a6bff]/20 focus:bg-white transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Location</label>
                <input type="text" defaultValue={profile.location} className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-[#1a6bff]/20 focus:bg-white transition-all outline-none" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Short Bio</label>
                <textarea rows="4" defaultValue={profile.bio} className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-[#1a6bff]/20 focus:bg-white transition-all outline-none resize-none"></textarea>
              </div>
            </div>
            <div className="flex justify-end gap-4 pt-4">
              <button className="px-8 py-4 bg-slate-50 text-slate-600 rounded-2xl text-sm font-bold hover:bg-slate-100 transition-all active:scale-[0.98]">Discard Changes</button>
              <button className="px-8 py-4 bg-[#093a6e] text-white rounded-2xl text-sm font-bold shadow-lg shadow-[#093a6e]/20 hover:bg-[#072d54] transition-all active:scale-[0.98]">Save Profile</button>
            </div>
          </div>

          
        </div>

        {/* SIDEBAR PREFERENCES */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-50 pb-4 mb-8">Security & Login</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl group hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-xl">🔑</div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Update Password</h4>
                    <p className="text-[11px] text-slate-400 font-medium">Last updated 3 months ago</p>
                  </div>
                </div>
                <button className="px-6 py-2 bg-white text-slate-600 rounded-xl text-xs font-bold border border-slate-200 hover:bg-slate-50 transition-all">Change</button>
              </div>

              <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl group hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center text-xl">🛡️</div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Two-Factor Authentication</h4>
                    <p className="text-[11px] text-slate-400 font-medium">Add an extra layer of security</p>
                  </div>
                </div>
                <button className="px-6 py-2 bg-emerald-500 text-white rounded-xl text-xs font-bold hover:bg-emerald-600 transition-all">Enabled</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
