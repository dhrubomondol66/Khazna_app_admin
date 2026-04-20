import React, { useState } from 'react';

const initCats = [
    { name: 'Groceries', users: '8,234 users', icon: '🛒', color: 'bg-emerald-50 text-emerald-600' },
    { name: 'Fuel', users: '7,156 users', icon: '⛽', color: 'bg-rose-50 text-rose-600' },
    { name: 'Travel', users: '5,892 users', icon: '✈️', color: 'bg-blue-50 text-blue-600' },
    { name: 'Entertainment', users: '4,521 users', icon: '🎬', color: 'bg-purple-50 text-purple-600' },
    { name: 'Utilities', users: '6,789 users', icon: '💡', color: 'bg-amber-50 text-amber-600' },
    { name: 'Healthcare', users: '3,456 users', icon: '🏥', color: 'bg-sky-50 text-sky-600' },
];

const defaultCategories = [
    { name: 'Food & Dining', desc: 'Restaurants, groceries, takeout', icon: '🍔' },
    { name: 'Transportation', desc: 'Fuel, parking, public transit', icon: '🚗' },
    { name: 'Shopping', desc: 'Clothing, accessories, online', icon: '🛍️' },
    { name: 'Bills & Utilities', desc: 'Electricity, water, internet', icon: '💡' },
    { name: 'Entertainment', desc: 'Movies, games, subscriptions', icon: '🎬' },
    { name: 'Healthcare', desc: 'Medical, pharmacy, insurance', icon: '🏥' },
    { name: 'Education', desc: 'Tuition, books, courses', icon: '🎓' },
    { name: 'Travel', desc: 'Flights, hotels, vacation', icon: '✈️' },
    { name: 'Personal Care', desc: 'Salon, spa, cosmetics', icon: '💄' },
    { name: 'Home & Garden', desc: 'Furniture, decor, maintenance', icon: '🏠' },
    { name: 'Gifts & Donations', desc: 'Presents, charity, celebrations', icon: '🎁' },
    { name: 'Investments', desc: 'Stocks, mutual funds, savings', icon: '💰' },
];

const availableIcons = [
    '🛒', '🚗', '📈', '☕', '🏠', '🍴', 
    '✈️', '❤️', '📖', '🎬', '🎵', '🎮',
    '💪', '🩺', '🎓', '💼', '💻', '📱',
    '📺', '👕', '✂️', '🎁', '🍕', '🍦',
    '🍷', '🍺', '👶', '🐶', '🐱', '🌻',
    '🌳', '🍃', '⚡', '💡', '⛽', '💧',
    '📶', '📞', '📧', '📷', '🎨', '🛍️',
    '💳', '👛', '💰', '🐷', '📉', '📍',
    '🚀', '🌐', '🧭'
];

const availableColors = [
    { bg: 'bg-slate-900', text: 'text-white' },
    { bg: 'bg-sky-500', text: 'text-white' },
    { bg: 'bg-blue-500', text: 'text-white' },
    { bg: 'bg-indigo-500', text: 'text-white' },
    { bg: 'bg-purple-500', text: 'text-white' },
    { bg: 'bg-pink-500', text: 'text-white' },
    { bg: 'bg-rose-500', text: 'text-white' },
    { bg: 'bg-red-500', text: 'text-white' },
    { bg: 'bg-orange-500', text: 'text-white' },
    { bg: 'bg-amber-500', text: 'text-white' },
    { bg: 'bg-yellow-500', text: 'text-slate-900' },
    { bg: 'bg-lime-500', text: 'text-slate-900' },
    { bg: 'bg-emerald-500', text: 'text-white' },
    { bg: 'bg-teal-500', text: 'text-white' },
    { bg: 'bg-cyan-500', text: 'text-white' },
];

export default function ExpenseCategories() {
    const [cats, setCats] = useState(initCats);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showDefaultModal, setShowDefaultModal] = useState(false);
    const [showIconPicker, setShowIconPicker] = useState(false);
    const [showColorPicker, setShowColorPicker] = useState(false);

    const [newCat, setNewCat] = useState({
        name: '',
        budget: '5000',
        icon: '🛒',
        color: { bg: 'bg-[#093a6e]', text: 'text-white' },
        date: 'March 5th, 2026'
    });

    const [selectedDefaults, setSelectedDefaults] = useState(['Transportation', 'Shopping', 'Healthcare']);

    const toggleDefault = (name) => {
        if (selectedDefaults.includes(name)) {
            setSelectedDefaults(selectedDefaults.filter(n => n !== name));
        } else {
            setSelectedDefaults([...selectedDefaults, name]);
        }
    };

    const Modal = ({ title, onClose, children, footer, subtitle }) => (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-[#f8fafc] w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200 relative">
                <div className="px-10 py-8 border-b border-slate-100 flex items-center justify-between bg-white shrink-0">
                    <div>
                        <h2 className="text-2xl font-bold text-[#093a6e]">{title}</h2>
                        {subtitle && <p className="text-sm font-medium text-slate-400 mt-1">{subtitle}</p>}
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-400 hover:text-slate-600">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                    </button>
                </div>
                <div className="p-10 overflow-y-auto custom-scrollbar flex-1">
                    {children}
                </div>
                {footer && (
                    <div className="px-10 py-8 border-t border-slate-100 bg-white shrink-0">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Expense Categories</h1>
                    <p className="text-sm text-slate-500">Manage expense categories and settings</p>
                </div>
                <div className="flex gap-4">
                    <button 
                        onClick={() => setShowDefaultModal(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-100 text-[#093a6e] rounded-2xl text-sm font-bold hover:bg-slate-50 transition-all shadow-sm active:scale-[0.98]"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M12 5v14M5 12h14"/>
                        </svg>
                        Manage Default Categories
                    </button>
                    <button 
                        onClick={() => setShowAddModal(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-[#093a6e] text-white rounded-2xl text-sm font-bold hover:bg-[#072d54] transition-all shadow-lg shadow-[#093a6e]/20 active:scale-[0.98]"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                        Add Category
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cats.map((c, i) => (
                    <div key={c.name} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
                        <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-2 text-[#1a6bff] hover:bg-blue-50 rounded-lg transition-colors">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                                </svg>
                            </button>
                            <button 
                                onClick={() => setCats(cats.filter((_, j) => j !== i))}
                                className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                                </svg>
                            </button>
                        </div>

                        <div className={`w-16 h-16 ${c.color} rounded-[1.25rem] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                            {c.icon}
                        </div>

                        <div className="space-y-1">
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1a6bff] transition-colors">{c.name}</h3>
                            <p className="text-sm font-medium text-slate-400">{c.users}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* ADD CATEGORY MODAL */}
            {showAddModal && (
                <Modal 
                    title="Add New Category" 
                    onClose={() => setShowAddModal(false)}
                    footer={
                        <div className="grid grid-cols-2 gap-6">
                            <button onClick={() => setShowAddModal(false)} className="py-4 bg-slate-100 text-[#093a6e] rounded-2xl text-sm font-bold border border-slate-200 hover:bg-slate-200 transition-all">Cancel</button>
                            <button className="py-4 bg-[#093a6e] text-white rounded-2xl text-sm font-bold hover:bg-[#072d54] transition-all shadow-lg shadow-[#093a6e]/20">Save Category</button>
                        </div>
                    }
                >
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Category Name</label>
                            <input 
                                type="text" 
                                placeholder="e.g., Healthcare, Entertainment" 
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 px-8 text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-[#1a6bff]/20 outline-none transition-all focus:border-[#1a6bff]/30"
                                value={newCat.name}
                                onChange={e => setNewCat({...newCat, name: e.target.value})}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Budget Amount</label>
                            <input 
                                type="text" 
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 px-8 text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-[#1a6bff]/20 outline-none transition-all focus:border-[#1a6bff]/30"
                                value={newCat.budget}
                                onChange={e => setNewCat({...newCat, budget: e.target.value})}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6 relative">
                            <button 
                                onClick={() => { setShowIconPicker(!showIconPicker); setShowColorPicker(false); }}
                                className="flex items-center justify-between w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 px-8 text-sm font-semibold text-[#093a6e] focus:ring-2 focus:ring-[#1a6bff]/20 outline-none group transition-all hover:bg-white hover:border-[#1a6bff]/30"
                            >
                                <span className="flex items-center gap-3">
                                    <span className="text-xl">{newCat.icon}</span>
                                    Select Icon
                                </span>
                                <svg className={`w-5 h-5 transition-transform ${showIconPicker ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <polyline points="6 9 12 15 18 9"/>
                                </svg>
                            </button>

                            <button 
                                onClick={() => { setShowColorPicker(!showColorPicker); setShowIconPicker(false); }}
                                className="flex items-center justify-between w-full bg-slate-50 border border-slate-200 rounded-2xl py-5 px-8 text-sm font-semibold text-[#093a6e] focus:ring-2 focus:ring-[#1a6bff]/20 outline-none transition-all hover:bg-white hover:border-[#1a6bff]/30"
                            >
                                <span className="flex items-center gap-3">
                                    <div className={`w-5 h-5 rounded-full ${newCat.color.bg} border-2 border-white shadow-sm`}></div>
                                    Select Color
                                </span>
                                <svg className={`w-5 h-5 transition-transform ${showColorPicker ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                    <polyline points="6 9 12 15 18 9"/>
                                </svg>
                            </button>

                            {/* ICON PICKER POPUP */}
                            {showIconPicker && (
                                <div className="absolute top-[110%] left-0 w-full bg-slate-700/90 backdrop-blur-lg rounded-3xl p-6 grid grid-cols-6 gap-3 z-50 shadow-2xl border border-white/10 max-h-64 overflow-y-auto custom-scrollbar">
                                    {availableIcons.map(icon => (
                                        <button 
                                            key={icon}
                                            onClick={() => { setNewCat({...newCat, icon}); setShowIconPicker(false); }}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-white/20 transition-all ${newCat.icon === icon ? 'bg-[#093a6e] ring-2 ring-white/50' : ''}`}
                                        >
                                            {icon}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* COLOR PICKER POPUP */}
                            {showColorPicker && (
                                <div className="absolute top-[110%] right-0 w-full bg-slate-700/90 backdrop-blur-lg rounded-3xl p-6 grid grid-cols-5 gap-3 z-50 shadow-2xl border border-white/10">
                                    {availableColors.map((color, i) => (
                                        <button 
                                            key={i}
                                            onClick={() => { setNewCat({...newCat, color}); setShowColorPicker(false); }}
                                            className={`w-10 h-10 rounded-full ${color.bg} border-2 ${newCat.color.bg === color.bg ? 'border-white scale-110 shadow-lg' : 'border-transparent opacity-80 hover:opacity-100 hover:scale-105'} transition-all`}
                                        ></button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="bg-white border border-slate-200 rounded-[2rem] p-8 space-y-6 shadow-sm">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Start Date (Optional)</label>
                            <div className="flex items-center gap-4 bg-slate-50 rounded-2xl py-4 px-6 border border-slate-100">
                                <svg className="w-5 h-5 text-[#093a6e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                                </svg>
                                <span className="text-sm font-semibold text-slate-700">{newCat.date}</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Preview</label>
                            <div className="bg-white border border-slate-200 rounded-[2rem] p-8 flex items-center gap-6 shadow-sm">
                                <div className={`w-16 h-16 ${newCat.color.bg} ${newCat.color.text} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}>
                                    {newCat.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg font-black text-[#093a6e]">{newCat.name || 'Category Name'}</h4>
                                    <p className="text-xl font-bold text-slate-400 uppercase tracking-tighter">SAR {newCat.budget || '0'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}

            {/* DEFAULT CATEGORIES MODAL */}
            {showDefaultModal && (
                <Modal 
                    title="Add Default Categories" 
                    subtitle="Select pre-configured categories to add to your system"
                    onClose={() => setShowDefaultModal(false)}
                    footer={
                        <div className="grid grid-cols-2 gap-6">
                            <button onClick={() => setShowDefaultModal(false)} className="py-4 bg-white text-[#093a6e] rounded-2xl text-sm font-bold border border-slate-200 hover:bg-slate-50 transition-all">Cancel</button>
                            <button className="py-4 bg-[#093a6e] text-white rounded-2xl text-sm font-bold hover:bg-[#072d54] transition-all shadow-lg shadow-[#093a6e]/20">Add {selectedDefaults.length} Categories</button>
                        </div>
                    }
                >
                    <div className="space-y-8">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-[#093a6e]">{selectedDefaults.length} of {defaultCategories.length} selected</span>
                            <div className="flex gap-3">
                                <button onClick={() => setSelectedDefaults(defaultCategories.map(c => c.name))} className="text-[11px] font-bold text-[#1a6bff] bg-blue-50 px-4 py-2 rounded-xl hover:bg-blue-100 transition-all">Select All</button>
                                <button onClick={() => setSelectedDefaults([])} className="text-[11px] font-bold text-slate-400 bg-slate-50 px-4 py-2 rounded-xl hover:bg-slate-100 transition-all">Deselect All</button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {defaultCategories.map(cat => (
                                <div 
                                    key={cat.name}
                                    onClick={() => toggleDefault(cat.name)}
                                    className={`p-6 rounded-3xl border transition-all cursor-pointer group ${selectedDefaults.includes(cat.name) ? 'bg-[#f0f9ff] border-[#0ea5e9] shadow-md shadow-blue-100' : 'bg-white border-slate-100 hover:border-[#bae6fd] hover:bg-slate-50'}`}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">{cat.icon}</span>
                                        <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${selectedDefaults.includes(cat.name) ? 'bg-[#0ea5e9] border-[#0ea5e9]' : 'border-slate-200'}`}>
                                            {selectedDefaults.includes(cat.name) && (
                                                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                                                    <polyline points="20 6 9 17 4 12"/>
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                    <h4 className="text-sm font-bold text-[#093a6e] mb-1">{cat.name}</h4>
                                    <p className="text-[10px] font-medium text-slate-400 leading-tight">{cat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}
