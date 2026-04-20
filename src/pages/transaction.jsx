import React, { useState } from 'react';

const txns = [
  { id: 'TXN-2026-00342', user: 'Rahul Sharma', category: 'Groceries', amount: 'SAR 2,450', source: 'SMS', date: 'Mar 9, 2026 14:32', status: 'Accepted' },
  { id: 'TXN-2026-00341', user: 'Priya Patel', category: 'Fuel', amount: 'SAR 1,800', source: 'Manual', date: 'Mar 9, 2026 13:18', status: 'Accepted' },
  { id: 'TXN-2026-00340', user: 'Amit Kumar', category: 'Travel', amount: 'SAR 5,200', source: 'SMS', date: 'Mar 9, 2026 12:45', status: 'Pending' },
  { id: 'TXN-2026-00339', user: 'Sneha Reddy', category: 'Entertainment', amount: 'SAR 950', source: 'Manual', date: 'Mar 9, 2026 11:22', status: 'Accepted' },
  { id: 'TXN-2026-00338', user: 'Vikram Singh', category: 'Utilities', amount: 'SAR 3,450', source: 'SMS', date: 'Mar 9, 2026 10:05', status: 'Accepted' },
];

const categories = ['All Categories', 'Groceries', 'Fuel', 'Travel', 'Entertainment', 'Utilities'];

export default function Transactions() {
  const [catFilter, setCatFilter] = useState('All Categories');
  const filtered = txns.filter(t => catFilter === 'All Categories' || t.category === catFilter);

  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Transaction Monitoring</h1>
        <p className="text-sm text-slate-500">Monitor all user transactions and detect suspicious activity</p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-50 flex justify-end">
          <div className="relative">
            <select 
              className="appearance-none bg-slate-50 border-none rounded-xl py-2.5 pl-4 pr-10 text-xs font-bold text-slate-600 focus:ring-2 focus:ring-[#1a6bff]/20 outline-none cursor-pointer"
              value={catFilter} 
              onChange={e => setCatFilter(e.target.value)}
            >
              {categories.map(c => <option key={c}>{c}</option>)}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="pl-8">TRANSACTION ID</th>
                <th>USER</th>
                <th>CATEGORY</th>
                <th className="text-center">AMOUNT</th>
                <th className="text-center">SOURCE</th>
                <th className="text-center">DATE</th>
                <th className="text-right pr-10">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(t => (
                <tr key={t.id} className="group hover:bg-slate-50/50 transition-colors">
                  <td className="py-5 pl-8">
                    <span className="text-xs font-bold text-[#1a6bff] font-mono tracking-tight">{t.id}</span>
                  </td>
                  <td>
                    <span className="text-sm font-bold text-slate-900">{t.user}</span>
                  </td>
                  <td>
                    <span className="text-sm font-semibold text-[#1a6bff]">{t.category}</span>
                  </td>
                  <td className="text-center">
                    <span className="text-sm font-bold text-slate-900 font-mono tracking-tighter">{t.amount}</span>
                  </td>
                  <td className="text-center">
                    {t.source === 'SMS' ? (
                      <span className="px-2 py-0.5 bg-sky-100 text-sky-700 text-[10px] font-bold rounded-md tracking-wider">SMS</span>
                    ) : (
                      <span className="text-xs font-bold text-slate-400">Manual</span>
                    )}
                  </td>
                  <td className="text-center text-xs font-medium text-slate-400 tabular-nums">
                    {t.date}
                  </td>
                  <td className="text-right pr-10">
                    <span className={`badge ${t.status === 'Accepted' ? 'badge-active' : 'bg-orange-100 text-orange-600'}`}>
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
