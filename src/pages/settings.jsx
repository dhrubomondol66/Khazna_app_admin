import React, { useState } from 'react';

function Toggle({ checked, onChange }) {
  return (
    <button 
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${checked ? 'bg-[#1a6bff]' : 'bg-slate-200'}`}
    >
      <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${checked ? 'translate-x-5' : 'translate-x-0'}`} />
    </button>
  );
}

export default function Settings() {
  const [freeCatLimit, setFreeCatLimit] = useState('3');
  const [premiumCatLimit] = useState('Unlimited');
  const [budgetAlert, setBudgetAlert] = useState('80');
  const [largeTxnAlert, setLargeTxnAlert] = useState('10000');
  const [retentionDays, setRetentionDays] = useState('90');
  const [features, setFeatures] = useState({
    smartBudget: true,
    spendingInsights: true,
    anomalyDetection: true,
    autoBudget: false,
  });

  const toggleFeature = key => setFeatures(f => ({ ...f, [key]: !f[key] }));

  return (
    <div className="p-8 space-y-8 max-w-[80vw] mx-auto pb-24">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">System Settings</h1>
        <p className="text-sm text-slate-500">Configure app settings and preferences</p>
      </div>

      <div className="space-y-6">
        {/* User Plan Limits */}
        <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">User Plan Limits</h3>
            <p className="text-xs text-slate-400">Set category limits for each plan tier</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Free Plan – Category Limit</label>
              <input 
                type="number" 
                className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-[#1a6bff]/20 focus:bg-white outline-none transition-all"
                value={freeCatLimit} 
                onChange={e => setFreeCatLimit(e.target.value)} 
              />
              <p className="text-[10px] text-slate-400 font-medium italic">Maximum categories for free users</p>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Premium Plan – Category Limit</label>
              <input 
                type="text" 
                className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 text-sm font-bold text-slate-400 cursor-not-allowed outline-none"
                value={premiumCatLimit} 
                readOnly 
              />
              <p className="text-[10px] text-slate-400 font-medium italic">Premium users have no limits</p>
            </div>
          </div>
        </section>

        {/* Default Categories */}
        {/* <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Default Categories</h3>
              <p className="text-xs text-slate-400">Categories automatically created for new users</p>
            </div>
            <button className="text-xs font-bold text-[#1a6bff] px-4 py-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">+ Add Default</button>
          </div>
          <div className="flex flex-wrap gap-3">
            {[{ icon: '🛒', label: 'Groceries' }, { icon: '⛽', label: 'Fuel' }, { icon: '💡', label: 'Utilities' }].map(c => (
              <div key={c.label} className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-700">
                <span>{c.icon}</span><span>{c.label}</span>
                <button className="ml-2 text-slate-300 hover:text-rose-500 transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </section> */}

        {/* AI Features */}
        <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">AI Features (Premium Only)</h3>
            <p className="text-xs text-slate-400">Toggle AI-powered features for premium users</p>
          </div>
          <div className="divide-y divide-slate-50">
            {[
              { key: 'smartBudget', label: 'Smart Budget Predictions', desc: 'Predict future spending patterns' },
              { key: 'spendingInsights', label: 'Spending Insights', desc: 'Generate personalized spending insights' },
              { key: 'anomalyDetection', label: 'Anomaly Detection', desc: 'Alert users of unusual spending' },
              { key: 'autoBudget', label: 'Auto Budget Recommendations', desc: 'Suggest budget limits based on history' },
            ].map(f => (
              <div key={f.key} className="flex items-center justify-between py-6 first:pt-0 last:pb-0">
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-slate-900">{f.label}</h4>
                  <p className="text-xs text-slate-400 font-medium">{f.desc}</p>
                </div>
                <Toggle checked={features[f.key]} onChange={() => toggleFeature(f.key)} />
              </div>
            ))}
          </div>
        </section>

        {/* Notification & Alert Settings */}
        <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Notification & Alert Settings</h3>
            <p className="text-xs text-slate-400">Configure thresholds for automated alerts</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Budget Alert Threshold (%)</label>
              <input 
                type="number" 
                className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-[#1a6bff]/20 focus:bg-white outline-none transition-all"
                value={budgetAlert} 
                onChange={e => setBudgetAlert(e.target.value)} 
              />
              <p className="text-[10px] text-slate-400 font-medium italic">Alert when user reaches this % of budget</p>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Large Transaction Alert (SAR)</label>
              <input 
                type="number" 
                className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-[#1a6bff]/20 focus:bg-white outline-none transition-all"
                value={largeTxnAlert} 
                onChange={e => setLargeTxnAlert(e.target.value)} 
              />
              <p className="text-[10px] text-slate-400 font-medium italic">Notify for transactions above this amount</p>
            </div>
          </div>
        </section>

        {/* Data & Privacy */}
        <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-8">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Data & Privacy</h3>
            <p className="text-xs text-slate-400">Manage data retention and backup options</p>
          </div>
          <div className="max-w-xs space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Data Retention Period (days)</label>
            <input 
              type="number" 
              className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 text-sm font-bold text-slate-700 focus:ring-2 focus:ring-[#1a6bff]/20 focus:bg-white outline-none transition-all"
              value={retentionDays} 
              onChange={e => setRetentionDays(e.target.value)} 
            />
            <p className="text-[10px] text-slate-400 font-medium italic">How long to keep user data after deletion request</p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="flex items-center gap-2 px-6 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-200 transition-all">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
              </svg>
              Backup Database
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-200 transition-all">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Export All Data
            </button>
          </div>
        </section>

        <div className="flex justify-end gap-4 pt-8">
          <button className="px-8 py-3.5 bg-slate-50 text-slate-600 rounded-2xl text-sm font-bold hover:bg-slate-100 transition-all active:scale-[0.98]">
            Reset to Default
          </button>
          <button className="px-10 py-3.5 bg-[#1a6bff] text-white rounded-2xl text-sm font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition-all active:scale-[0.98] flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Save All Settings
          </button>
        </div>
      </div>
    </div>
  );
}
