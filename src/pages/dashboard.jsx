import React from 'react';
import users_icon from "../assets/user.png";
import active_users_icon from "../assets/state.png";
import premium_users_icon from "../assets/award.png";
import total_transactions_icon from "../assets/bank.png";
import new_users_icon from "../assets/add.png";
import free_users_icon from "../assets/added.png";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, BarChart, Bar, Legend, AreaChart, Area
} from 'recharts';

const userGrowth = [
    { month: 'Oct', users: 6800 }, { month: 'Nov', users: 7900 }, { month: 'Dec', users: 8400 },
    { month: 'Jan', users: 9200 }, { month: 'Feb', users: 10500 }, { month: 'Mar', users: 12458 },
];
const expenseDist = [
    { name: 'Groceries', value: 28, color: '#1a6bff' },
    { name: 'Fuel', value: 21, color: '#f59e0b' },
    { name: 'Travel', value: 18, color: '#22c55e' },
    { name: 'Entertainment', value: 16, color: '#a855f7' },
    { name: 'Utilities', value: 16, color: '#EF4444' },
    { name: 'Others', value: 17, color: '#64748b' },
];
const txnVolume = [
    { day: 'Mon', amt: 4200 }, { day: 'Tue', amt: 5800 }, { day: 'Wed', amt: 3900 },
    { day: 'Thu', amt: 7100 }, { day: 'Fri', amt: 6400 }, { day: 'Sat', amt: 5200 }, { day: 'Sun', amt: 4800 },
];
const premiumGrowth = [
    { month: 'Oct', free: 3200, premium: 1100 }, { month: 'Nov', free: 3600, premium: 1400 },
    { month: 'Dec', free: 4100, premium: 1700 }, { month: 'Jan', free: 4600, premium: 2100 },
    { month: 'Feb', free: 5200, premium: 2600 }, { month: 'Mar', free: 5800, premium: 3100 },
];
const topLocations = [
    { city: 'Riyadh', users: 4210 }, { city: 'Jeddah', users: 2931 }, { city: 'Dammam', users: 3774 },
    { city: 'Makkah', users: 1620 }, { city: 'Medina', users: 1423 },
];
const topFeaturesUsage = [
    { name: 'Add Expense', pct: 65 }, { name: 'Reports', pct: 40 }, { name: 'Budget Setup', pct: 30 },
    { name: 'Category Mgmt', pct: 20 }, { name: 'Notifications', pct: 18 }, { name: 'Recurring Bills', pct: 14 },
];

const recentUsers = [
    { name: 'Rahul Sharma', email: 'rahul.s@example.com', plan: 'Premium', initials: 'RS', color: '#003366' },
    { name: 'Priya Patel', email: 'priya.p@example.com', plan: 'Free', initials: 'PP', color: '#50D1C3' },
    { name: 'Amit Kumar', email: 'amit.x@example.com', plan: 'Premium', initials: 'AK', color: '#575656' },
    { name: 'Sneha Reddy', email: 'sneha.r@example.com', plan: 'Free', initials: 'SR', color: '#35A4DE' },
    { name: 'Vikram Singh', email: 'vikram.s@example.com', plan: 'Premium', initials: 'VS', color: '#479c15' },
];
const ageData = [
    { age: '18-24', val: 320 }, { age: '25-34', val: 480 }, { age: '35-44', val: 310 }, { age: '45+', val: 190 },
];

const stats = [
    { label: 'Total Users', value: '12,458', change: '+8.2%', icon: <img src={users_icon}/>, color: 'bg-blue-50 text-blue-600' },
    { label: 'Active Users', value: '9,234', change: '+5.8%', icon: <img src={active_users_icon}/>, color: 'bg-emerald-50 text-emerald-600' },
    { label: 'Premium Subscribers', value: '3,847', change: '+12.4%', icon: <img src={premium_users_icon}/>, color: 'bg-purple-50 text-purple-600' },
    { label: 'Total Transactions', value: '1.2M', change: '+18.6%', icon: <img src={total_transactions_icon}/>, color: 'bg-orange-50 text-orange-600' },
    { label: 'New Users Today', value: '342', change: '+3.7%', icon: <img src={new_users_icon}/>, color: 'bg-sky-50 text-sky-600' },
    { label: 'Free Users', value: '8,611', change: '-0.3%', icon: <img src={free_users_icon}/>, color: 'bg-amber-50 text-amber-600', down: true },
];

export default function Dashboard() {
    return (
        <div className="p-8 max-w-[1600px] mx-auto space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
                <p className="text-sm text-slate-500">Monitor key metrics and track platform performance</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                {stats.map(s => (
                    <div key={s.label} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-6">
                            <div className={`w-12 h-12 ${s.color} rounded-2xl flex items-center justify-center text-xl mb-4`}>
                                {s.icon}
                            </div>
                            <div className={`text-[10px] font-bold ${s.down ? 'text-rose-500' : 'text-emerald-500'} flex items-center gap-1`}>
                                {s.change}
                            </div>
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{s.label}</div>
                        <div className="text-2xl font-bold text-slate-900 mb-1">{s.value}</div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">User Growth Trend</h3>
                            <p className="text-xs text-slate-400">Monthly registered users</p>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-full">
                            ↑ 8.2%
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={userGrowth}>
                            <defs>
                                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#003366" stopOpacity={0.1} />
                                    <stop offset="95%" stopColor="#00AEEF" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} dx={-10} />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                            />
                            <Area type="monotone" dataKey="users" stroke="#00AEEF" strokeWidth={3} fillOpacity={1} fill="url(#colorUsers)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Expense Category Distribution</h3>
                    <p className="text-xs text-slate-400 mb-6">Breakdown by category</p>
                    <div className="flex items-center justify-between">
                        <ResponsiveContainer width="60%" height={260}>
                            <PieChart>
                                <Pie data={expenseDist} dataKey="value" cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5}>
                                    {expenseDist.map((e, i) => <Cell key={i} fill={e.color} />)}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="w-[40%] space-y-3">
                            {expenseDist.map(e => (
                                <div key={e.name} className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: e.color }} />
                                    <span className="text-xs font-medium text-slate-600 flex-1">{e.name}</span>
                                    <span className="text-xs font-bold text-slate-900">{e.value}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Gender Distribution</h3>
                    <p className="text-xs text-slate-400 mb-8">User demographics by gender</p>
                    <div className="flex flex-col items-center">
                        <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                                <Pie
                                    data={[{ name: 'Male', value: 62 }, { name: 'Female', value: 38 }]}
                                    dataKey="value" cx="50%" cy="50%" innerRadius={60} outerRadius={90} stroke="none"
                                >
                                    <Cell fill="#003D7A" /><Cell fill="#00B5E2" />
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="flex gap-8 mt-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#003D7A]" />
                                <span className="text-xs font-bold text-slate-700">Male 62%</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#00B5E2]" />
                                <span className="text-xs font-bold text-slate-700">Female 38%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Age Distribution</h3>
                    <p className="text-xs text-slate-400 mb-8">Users by age group</p>
                    <ResponsiveContainer width="100%" height={240}>
                        <BarChart data={ageData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="age" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                            <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                            <Bar dataKey="val" fill="#00B5E2" radius={[6, 6, 0, 0]} barSize={60} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Top User Locations</h3>
                    <p className="text-xs text-slate-400 mb-6">Users by city/region</p>
                    <div className="space-y-5">
                        {topLocations.map((l, i) => (
                            <div key={l.city}>
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-[#00B5E2]' : 'bg-slate-300'}`} />
                                        <span className="text-xs font-bold text-slate-700">{l.city}</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-400">{l.users.toLocaleString()} users</span>
                                </div>
                                <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all duration-1000 bg-[#00B5E2]"
                                       style={{ width: `${(l.users / 4500) * 100}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Top Features Used</h3>
                    <p className="text-xs text-slate-400 mb-6">Most popular user interactions</p>
                    <div className="space-y-5">
                        {topFeaturesUsage.map((l, i) => (
                            <div key={l.name}>
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-[#003D7A]' : 'bg-slate-300'}`} />
                                        <span className="text-xs font-bold text-slate-700">{l.name}</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-400">{l.pct}%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all duration-1000 bg-[#003D7A]"
                                        style={{ width: `${(l.pct / 100) * 100}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-1 text-center">Weekly Transaction Volume</h3>
                    <ResponsiveContainer width="100%" height={240}>
                        <BarChart data={txnVolume}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                            <Tooltip cursor={{ fill: '#f8fafc' }} />
                            <Bar dataKey="amt" fill="#00B5E2" radius={[6, 6, 0, 0]} barSize={40} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center">
                    <h3 className="text-lg font-bold text-slate-900 mb-8">Premium Subscription Growth</h3>
                    <ResponsiveContainer width="100%" height={240}>
                        <BarChart data={premiumGrowth}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                            <Tooltip cursor={{ fill: '#f8fafc' }} />
                            <Bar dataKey="free" fill="#003D7A" radius={[6, 6, 0, 0]} name="Free" barSize={20} />
                            <Bar dataKey="premium" fill="#00B5E2" radius={[6, 6, 0, 0]} name="Premium" barSize={20} />
                            <Legend verticalAlign="bottom" height={36} iconType="circle" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-8 flex justify-between items-center border-b border-slate-50">
                    <h3 className="text-lg font-bold text-slate-900">Recent Users</h3>
                    <button className="text-sm font-bold text-[#1a6bff] hover:underline">View All</button>
                </div>
                <div className="px-8 pb-8">
                    <div className="space-y-4 pt-4">
                        {recentUsers.map(u => (
                            <div key={u.name} className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-colors group">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: u.color }}>
                                    {u.initials}
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm font-bold text-slate-900 group-hover:text-[#1a6bff] transition-colors">{u.name}</div>
                                    <div className="text-xs text-slate-400 font-medium">{u.email}</div>
                                </div>
                                <span className={`badge ${u.plan === 'Premium' ? 'badge-premium' : 'badge-free'}`}>
                                    {u.plan}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
