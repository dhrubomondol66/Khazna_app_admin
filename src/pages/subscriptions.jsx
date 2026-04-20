import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const revenueData = [
  { month: 'Jan', rev: 12000 }, { month: 'Feb', rev: 16000 }, { month: 'Mar', rev: 22000 },
  { month: 'Apr', rev: 25000 }, { month: 'May', rev: 27000 }, { month: 'Jun', rev: 29000 },
  { month: 'Jul', rev: 31000 }, { month: 'Aug', rev: 34800 },
];

const subscribers = [
  { name: 'John Smith', email: 'john.smith@example.com', plan: 'Annual', status: 'Active', amount: 'SAR 2499', renewal: '2027-01-15' },
  { name: 'Sarah Johnson', email: 'sarah.j@example.com', plan: 'Monthly', status: 'Active', amount: 'SAR 299', renewal: '2026-04-15' },
  { name: 'Michael Brown', email: 'michael.b@example.com', plan: 'Annual', status: 'Active', amount: 'SAR 2499', renewal: '2026-12-20' },
  { name: 'Emily Davis', email: 'emily.d@example.com', plan: 'Monthly', status: 'Expiring', amount: 'SAR 299', renewal: '2026-03-18' },
  { name: 'David Wilson', email: 'david.w@example.com', plan: 'Annual', status: 'Active', amount: 'SAR 2499', renewal: '2027-03-10' },
];

const plansData = [
  { 
    name: 'Free Plan', 
    price: '0', 
    period: 'Forever', 
    features: ['3 Categories Limit', 'Manual Transaction Entry', 'Basic Reports', 'SMS Detection (Limited)'], 
    users: '8611', 
    revenue: 'SAR 0',
    conversion: 'N/A',
    highlight: false 
  },
  { 
    name: 'Premium Monthly', 
    price: '299', 
    period: 'Monthly', 
    features: ['Unlimited Categories', 'AI-Powered Categorization', 'Advanced Analytics', 'SMS Auto-Detection', 'Budget Insights', 'Export Reports'], 
    users: '1847', 
    revenue: 'SAR 182,853',
    conversion: '32.4%',
    highlight: true 
  },
  { 
    name: 'Premium Annual', 
    price: '2499', 
    period: 'Annual', 
    features: ['All Premium Monthly Features', '20% Discount', 'Priority Support', 'Early Access to Features'], 
    users: '2000', 
    revenue: 'SAR 1,998,000',
    conversion: '32.4%',
    highlight: false 
  },
];

const paymentHistory = [
  { date: '2026-02-10', plan: 'Annual Plan', amount: 'SAR 2,499', status: 'Paid' },
  { date: '2025-02-10', plan: 'Annual Plan', amount: 'SAR 2,499', status: 'Paid' },
  { date: '2024-02-10', plan: 'Annual Plan', amount: 'SAR 2,499', status: 'Paid' },
];

export default function Subscriptions() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedSubscriber, setSelectedSubscriber] = useState(null);

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
        <h1 className="text-2xl font-bold text-slate-900">Subscription Management</h1>
        <p className="text-sm text-slate-500">Manage premium subscriptions and revenue</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Premium Users', value: '3,847', change: '+18.1%', icon: '👑', color: 'bg-purple-50 text-purple-600' },
          { label: 'Monthly Revenue', value: 'SAR 34,800', change: '+11.5%', icon: '💵', color: 'bg-emerald-50 text-emerald-600' },
          { label: 'Trial Users', value: '284', change: '+42 this week', icon: '🧪', color: 'bg-blue-50 text-blue-600' },
          { label: 'Conversion Rate', value: '18.4%', change: '+2.1%', icon: '📈', color: 'bg-amber-50 text-amber-600' },
        ].map(s => (
          <div key={s.label} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className={`w-12 h-12 ${s.color} rounded-2xl flex items-center justify-center text-xl mb-4`}>
              {s.icon}
            </div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{s.label}</div>
            <div className="text-2xl font-bold text-slate-900 mb-1">{s.value}</div>
            <div className="text-[10px] font-bold text-emerald-500 flex items-center gap-1">
              ↑ {s.change}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-6">Revenue Growth</h3>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} tickFormatter={v => `SAR ${(v/1000).toFixed(0)}k`} />
            <Tooltip 
              cursor={{ fill: '#f8fafc' }}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              formatter={v => [`SAR ${v.toLocaleString()}`, 'Revenue']} 
            />
            <Bar dataKey="rev" fill="#22c55e" radius={[6, 6, 0, 0]} barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <h2 className="text-xl font-bold text-slate-900 mt-12 mb-6">Subscription Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plansData.map(plan => (
          <div key={plan.name} className={`relative p-8 rounded-[2.5rem] border transition-all duration-300 ${plan.highlight ? 'bg-[#093a6e] text-white border-[#093a6e] shadow-2xl scale-105 z-10' : 'bg-white text-slate-900 border-slate-100 shadow-sm hover:shadow-lg'}`}>
            {plan.highlight && (
              <div className="absolute top-6 right-6">
                <span className="bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-sm">Popular</span>
              </div>
            )}
            <div className="text-lg font-bold mb-1">{plan.name}</div>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-black">SAR {plan.price}</span>
              <span className={`text-sm ${plan.highlight ? 'text-white/60' : 'text-slate-400'}`}>{plan.period === 'Forever' ? 'Forever' : `/${plan.period}`}</span>
            </div>
            <div className={`text-xs font-bold uppercase tracking-wider mb-4 ${plan.highlight ? 'text-white/40' : 'text-slate-400'}`}>Includes:</div>
            <ul className="space-y-3 mb-8">
              {plan.features.map(f => (
                <li key={f} className="flex items-start gap-3 text-sm font-medium">
                  <svg className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-emerald-400' : 'text-emerald-500'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <div className={`text-xs font-bold mb-6 ${plan.highlight ? 'text-white/40' : 'text-slate-400'}`}>{plan.users} Active Users</div>
            <button 
              onClick={() => setSelectedPlan(plan)}
              className={`w-full py-4 rounded-2xl text-sm font-bold transition-all active:scale-[0.98] ${plan.highlight ? 'bg-[#1a6bff] text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20' : 'bg-slate-50 text-slate-900 hover:bg-slate-100'}`}
            >
              Manage Plan
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden mt-12">
        <div className="p-8 border-b border-slate-50 flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-900">Premium Subscribers</h2>
          <button className="text-sm font-bold text-[#1a6bff] hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr><th className="pl-8">USER</th><th>PLAN</th><th>STATUS</th><th>AMOUNT</th><th>RENEWAL</th><th className="text-right pr-10">ACTIONS</th></tr>
            </thead>
            <tbody>
              {subscribers.map(s => (
                <tr key={s.name} className="group hover:bg-slate-50/50 transition-colors">
                  <td className="py-5 pl-8 font-bold text-slate-900">{s.name}</td>
                  <td>
                    <span className={`badge ${s.plan === 'Annual' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                      {s.plan}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${s.status === 'Active' ? 'badge-active' : 'bg-orange-100 text-orange-600'}`}>
                      {s.status}
                    </span>
                  </td>
                  <td className="font-mono text-sm font-bold text-slate-900">{s.amount}</td>
                  <td className="text-xs font-medium text-slate-400 tabular-nums">{s.renewal}</td>
                  <td className="text-right pr-10">
                    <button 
                      onClick={() => setSelectedSubscriber(s)}
                      className="px-4 py-1.5 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors"
                    >
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* PLAN MODAL */}
      {selectedPlan && (
        <Modal 
          title={`Manage ${selectedPlan.name}`} 
          onClose={() => setSelectedPlan(null)}
          footer={
            <div className="flex gap-4">
              <button onClick={() => setSelectedPlan(null)} className="flex-1 py-4 bg-slate-100 text-[#093a6e] rounded-2xl text-sm font-bold border border-slate-200 hover:bg-slate-200 transition-all">Cancel</button>
              <button className="flex-1 py-4 bg-[#093a6e] text-white rounded-2xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#072d54] transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>
                </svg>
                Save Changes
              </button>
            </div>
          }
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#093a6e] uppercase tracking-wider ml-1">Plan Name</label>
              <input type="text" defaultValue={selectedPlan.name} className="w-full bg-slate-100 border-none rounded-2xl py-4 px-6 text-sm font-semibold text-slate-600 focus:ring-2 focus:ring-[#1a6bff]/20 outline-none" />
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#093a6e] uppercase tracking-wider ml-1">Price (SAR)</label>
                <input type="text" defaultValue={selectedPlan.price} className="w-full bg-slate-100 border-none rounded-2xl py-4 px-6 text-sm font-semibold text-slate-600 focus:ring-2 focus:ring-[#1a6bff]/20 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#093a6e] uppercase tracking-wider ml-1">Duration</label>
                <div className="relative">
                  <select defaultValue={selectedPlan.period} className="w-full appearance-none bg-slate-100 border-none rounded-2xl py-4 px-6 text-sm font-semibold text-slate-600 focus:ring-2 focus:ring-[#1a6bff]/20 outline-none cursor-pointer">
                    <option>Forever</option>
                    <option>Monthly</option>
                    <option>Annual</option>
                  </select>
                  <svg className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#093a6e] pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#093a6e] uppercase tracking-wider ml-1">Status</label>
              <div className="relative">
                <select className="w-full appearance-none bg-slate-100 border-none rounded-2xl py-4 px-6 text-sm font-semibold text-slate-600 focus:ring-2 focus:ring-[#1a6bff]/20 outline-none cursor-pointer">
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
                <svg className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-[#093a6e] pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <label className="text-xs font-bold text-[#093a6e] uppercase tracking-wider ml-1">Plan Features</label>
              <div className="space-y-3">
                {selectedPlan.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 bg-slate-100 rounded-2xl p-2 pl-6">
                    <input type="text" defaultValue={f} className="flex-1 bg-white border-none rounded-xl py-2 px-4 text-sm font-medium text-slate-600 focus:ring-2 focus:ring-[#1a6bff]/10 outline-none" />
                    <button className="p-2 text-rose-500 hover:bg-rose-50 rounded-xl transition-colors shrink-0">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
              <button className="w-full py-3 bg-[#e0f2fe] text-[#0ea5e9] rounded-2xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#bae6fd] transition-all mt-4 border border-[#bae6fd]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
                Add Feature
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="bg-[#eef2ff] p-4 rounded-3xl text-center border border-indigo-50">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Active Users</div>
                <div className="text-xl font-black text-[#4338ca]">{selectedPlan.users}</div>
              </div>
              <div className="bg-[#f0fdf4] p-4 rounded-3xl text-center border border-emerald-50">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Monthly Revenue</div>
                <div className="text-xl font-black text-[#15803d] truncate px-1">{selectedPlan.revenue}</div>
              </div>
              <div className="bg-[#f5f3ff] p-4 rounded-3xl text-center border border-purple-50">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Conversion Rate</div>
                <div className="text-xl font-black text-[#7e22ce]">{selectedPlan.conversion}</div>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* SUBSCRIBER MODAL */}
      {selectedSubscriber && (
        <Modal 
          title="Manage Subscriber" 
          onClose={() => setSelectedSubscriber(null)}
          footer={
            <div className="flex gap-4">
              <button onClick={() => setSelectedSubscriber(null)} className="flex-1 py-4 bg-slate-100 text-[#093a6e] rounded-2xl text-sm font-bold border border-slate-200 hover:bg-slate-200 transition-all">Close</button>
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
              <div className="text-sm font-medium text-slate-400">{selectedSubscriber.name}</div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#093a6e] uppercase tracking-wider ml-1">Full Name</label>
                <input type="text" defaultValue={selectedSubscriber.name} className="w-full bg-slate-100 border-none rounded-2xl py-4 px-6 text-sm font-semibold text-slate-600 outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#093a6e] uppercase tracking-wider ml-1">Email</label>
                <input type="email" defaultValue={selectedSubscriber.email} className="w-full bg-slate-100 border-none rounded-2xl py-4 px-6 text-sm font-semibold text-slate-600 outline-none" />
              </div>
            </div>

            <div className="bg-[#e0f2fe]/40 border border-[#bae6fd] rounded-[2rem] p-8 space-y-6">
              <h3 className="text-lg font-bold text-[#0369a1]">Subscription Details</h3>
              <div className="grid grid-cols-2 gap-y-6">
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Current Plan</div>
                  <div className="text-lg font-black text-[#0c4a6e]">{selectedSubscriber.plan}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Amount</div>
                  <div className="text-lg font-black text-[#0c4a6e]">{selectedSubscriber.amount}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status</div>
                  <div className="mt-1">
                    <span className="badge badge-active py-1 px-4 text-xs">Active</span>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Next Renewal</div>
                  <div className="text-lg font-black text-[#0c4a6e]">{selectedSubscriber.renewal}</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#093a6e] uppercase tracking-wider ml-1">Change Plan</label>
              <div className="relative">
                <select defaultValue={selectedSubscriber.plan} className="w-full appearance-none bg-slate-100 border-none rounded-2xl py-4 px-6 text-sm font-semibold text-slate-600 outline-none cursor-pointer">
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
                {paymentHistory.map((p, i) => (
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
                ))}
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
