import React, { useState } from 'react';

const users = [
  { name: 'Rahul Sharma', email: 'rahul.s@example.com', plan: 'Premium', status: 'Active', txn: 284, spending: 'SAR 45,280', joined: 'Mar 9, 2026', initials: 'RS', color: '#1a6bff' },
  { name: 'Priya Patel', email: 'priya.p@example.com', plan: 'Free', status: 'Active', txn: 156, spending: 'SAR 28,450', joined: 'Mar 8, 2026', initials: 'PP', color: '#00c6a7' },
  { name: 'Amit Kumar', email: 'amit.x@example.com', plan: 'Premium', status: 'Active', txn: 372, spending: 'SAR 62,180', joined: 'Mar 7, 2026', initials: 'AK', color: '#f59e0b' },
  { name: 'Sneha Reddy', email: 'sneha.r@example.com', plan: 'Free', status: 'Inactive', txn: 89, spending: 'SAR 15,820', joined: 'Mar 6, 2026', initials: 'SR', color: '#a855f7' },
  { name: 'Vikram Singh', email: 'vikram.s@example.com', plan: 'Premium', status: 'Active', txn: 421, spending: 'SAR 78,450', joined: 'Mar 5, 2026', initials: 'VS', color: '#22c55e' },
];

const paymentHistory = [
  { date: '2026-02-10', plan: 'Annual Plan', amount: 'SAR 2,499', status: 'Paid' },
  { date: '2025-02-10', plan: 'Annual Plan', amount: 'SAR 2,499', status: 'Paid' },
  { date: '2024-02-10', plan: 'Annual Plan', amount: 'SAR 2,499', status: 'Paid' },
];

export default function UserManagement() {
  const [filter, setFilter] = useState('All Users');
  const [selectedUser, setSelectedUser] = useState(null);
  const tabs = ['All Users', 'Premium', 'Free', 'Active'];
  
  const filtered = users.filter(u => {
    if (filter === 'All Users') return true;
    if (filter === 'Premium') return u.plan === 'Premium';
    if (filter === 'Free') return u.plan === 'Free';
    if (filter === 'Active') return u.status === 'Active';
    return true;
  });

  const Modal = ({ title, onClose, children, footer }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#f8fafc] w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
        <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-white">
          <h2 className="text-2xl font-bold text-[#093a6e]">{title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-400 hover:text-slate-600">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div className="p-8 overflow-y-auto custom-scrollbar flex-1">
          {children}
        </div>
        {footer && (
          <div className="px-8 py-6 border-t border-slate-100 bg-white">
            {footer}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">User Management</h1>
        <p className="text-sm text-slate-500">Manage all registered users and their accounts</p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex p-1 bg-slate-50 rounded-xl w-fit">
            {tabs.map(t => (
              <button 
                key={t} 
                onClick={() => setFilter(t)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  filter === t 
                    ? 'bg-white text-[#1a6bff] shadow-sm' 
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          
          <button className="flex items-center gap-2 px-6 py-2.5 bg-[#093a6e] text-white rounded-xl text-sm font-bold hover:bg-[#072d54] transition-all shadow-md hover:shadow-lg active:scale-[0.98]">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Export CSV
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="w-[30%]">USER</th>
                <th>PLAN</th>
                <th>STATUS</th>
                <th className="text-center">TRANSACTIONS</th>
                <th className="text-center">SPENDING</th>
                <th className="text-center">JOINED</th>
                <th className="text-right pr-10">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(u => (
                <tr key={u.email} className="group transition-colors hover:bg-slate-50/50">
                  <td className="py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0" style={{ backgroundColor: u.color }}>
                        {u.initials}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 group-hover:text-[#1a6bff] transition-colors">{u.name}</div>
                        <div className="text-[11px] text-slate-400 font-medium">{u.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`badge ${u.plan === 'Premium' ? 'badge-premium' : 'badge-free'}`}>
                      {u.plan}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${u.status === 'Active' ? 'badge-active' : 'badge-inactive'}`}>
                      {u.status}
                    </span>
                  </td>
                  <td className="text-center">
                    <span className="text-sm font-bold text-slate-700">{u.txn}</span>
                  </td>
                  <td className="text-center">
                    <span className="text-sm font-bold text-slate-900 tabular-nums">{u.spending}</span>
                  </td>
                  <td className="text-center">
                    <span className="text-xs font-medium text-slate-400">{u.joined}</span>
                  </td>
                  <td className="text-right pr-10">
                    <button 
                      onClick={() => setSelectedUser(u)}
                      className="p-2 text-slate-400 hover:text-slate-900 transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MANAGE SUBSCRIBER MODAL */}
      {selectedUser && (
        <Modal 
          title="Manage Subscriber" 
          onClose={() => setSelectedUser(null)}
          footer={
            <div className="flex gap-4">
              <button onClick={() => setSelectedUser(null)} className="flex-1 py-4 bg-slate-100 text-[#093a6e] rounded-2xl text-sm font-bold border border-slate-200 hover:bg-slate-200 transition-all">Close</button>
              <button className="flex-1 py-4 bg-[#093a6e] text-white rounded-2xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#072d54] transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>
                </svg>
                Save Changes
              </button>
            </div>
          }
        >
          <div className="space-y-8">
            <div className="-mt-4">
              <div className="text-sm font-medium text-slate-400">{selectedUser.name}</div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#093a6e] uppercase tracking-wider ml-1">Full Name</label>
                <input type="text" defaultValue={selectedUser.name} className="w-full bg-slate-100 border-none rounded-2xl py-4 px-6 text-sm font-semibold text-slate-600 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#093a6e] uppercase tracking-wider ml-1">Email</label>
                <input type="email" defaultValue={selectedUser.email} className="w-full bg-slate-100 border-none rounded-2xl py-4 px-6 text-sm font-semibold text-slate-600 outline-none" />
              </div>
            </div>

            <div className="bg-[#e0f2fe]/40 border border-[#bae6fd] rounded-[2rem] p-8 space-y-6">
              <h3 className="text-lg font-bold text-[#0369a1]">Subscription Details</h3>
              <div className="grid grid-cols-2 gap-y-6">
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Current Plan</div>
                  <div className="text-lg font-black text-[#0c4a6e]">{selectedUser.plan}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Amount</div>
                  <div className="text-lg font-black text-[#0c4a6e]">{selectedUser.plan === 'Premium' ? 'SAR 2499' : 'SAR 0'}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status</div>
                  <div className="mt-1">
                    <span className={`badge ${selectedUser.status === 'Active' ? 'badge-active' : 'badge-inactive'} py-1 px-4 text-xs`}>{selectedUser.status}</span>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Next Renewal</div>
                  <div className="text-lg font-black text-[#0c4a6e]">{selectedUser.plan === 'Premium' ? '2027-01-15' : 'N/A'}</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#093a6e] uppercase tracking-wider ml-1">Change Plan</label>
              <div className="relative">
                <select defaultValue={selectedUser.plan} className="w-full appearance-none bg-slate-100 border-none rounded-2xl py-4 px-6 text-sm font-semibold text-slate-600 outline-none cursor-pointer">
                  <option>Free Plan</option>
                  <option>Monthly</option>
                  <option>Annual</option>
                </select>
                <svg className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#093a6e] pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#093a6e]">Payment History</h3>
              <div className="space-y-3">
                {selectedUser.plan === 'Premium' ? paymentHistory.map((p, i) => (
                  <div key={i} className="flex items-center justify-between p-4 px-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-[#bae6fd] transition-colors">
                    <div className="space-y-0.5">
                      <div className="text-sm font-black text-slate-900">{p.date}</div>
                      <div className="text-[11px] font-bold text-slate-400">{p.plan}</div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-sm font-black text-slate-900 font-mono tracking-tighter">{p.amount}</div>
                      <span className="bg-[#dcfce7] text-[#15803d] text-[10px] font-bold px-3 py-1 rounded-lg uppercase tracking-wider">Paid</span>
                    </div>
                  </div>
                )) : (
                  <div className="text-center py-8 bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-slate-400 font-medium">No payment history found for Free Plan</div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <button className="flex items-center justify-center gap-2 py-4 bg-[#fff7ed] text-[#c2410c] rounded-2xl text-sm font-bold hover:bg-[#ffedd5] transition-all border border-[#ffedd5]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                Pause Subscription
              </button>
              <button className="flex items-center justify-center gap-2 py-4 bg-[#fef2f2] text-[#b91c1c] rounded-2xl text-sm font-bold hover:bg-[#fee2e2] transition-all border border-[#fee2e2]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                </svg>
                Cancel Subscription
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
