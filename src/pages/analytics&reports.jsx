import React from 'react';

const recentExports = [
  { name: 'User Analytics Report', date: 'Mar 9, 2026', size: '2.4 MB', type: 'CSV' },
  { name: 'Transaction Report', date: 'Mar 8, 2026', size: '5.8 MB', type: 'PDF' },
  { name: 'Revenue Report', date: 'Mar 7, 2026', size: '1.2 MB', type: 'CSV' },
];

export default function AnalyticsReports() {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Analytics & Reports</h1>
        <p className="text-sm text-slate-500">Generate and export detailed analytics reports</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: '👥', title: 'User Analytics', desc: 'User growth & engagement', color: 'bg-blue-50 text-blue-600' },
          { icon: '💳', title: 'Transaction Report', desc: 'All transaction details', color: 'bg-teal-50 text-teal-600' },
          { icon: '💵', title: 'Revenue Report', desc: 'Subscription revenue', color: 'bg-emerald-50 text-emerald-600' },
        ].map(card => (
          <div key={card.title} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group text-center">
            <div className={`w-16 h-16 ${card.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform`}>
              {card.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
            <p className="text-xs text-slate-400 font-medium mb-8">{card.desc}</p>
            <button className="w-full py-3.5 bg-[#093a6e] hover:bg-[#072d54] text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Export
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50">
          <h3 className="text-lg font-bold text-slate-900">Recent Exports</h3>
        </div>
        <div className="p-4 sm:p-8 space-y-4">
          {recentExports.map(e => (
            <div key={e.name} className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors group">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-[#1a6bff] group-hover:bg-blue-50 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-sm font-bold text-slate-900 group-hover:text-[#1a6bff] transition-colors">{e.name}</div>
                <div className="text-xs text-slate-400 font-medium">{e.date} • {e.size}</div>
              </div>
              <div className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                {e.type}
              </div>
              <button className="p-2 text-slate-400 hover:text-emerald-500 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
