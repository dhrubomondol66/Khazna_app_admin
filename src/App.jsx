import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Login from "./auth/login";
import ForgotPassword from "./auth/forgot_password";
import ResetPassword from "./auth/reset_password";

import Sidebar from "./components/sidebar";
import Topbar from "./components/topbar";

import Dashboard from "./pages/dashboard";
import UserManagement from "./pages/user_management";
import Transactions from "./pages/transaction";
import ExpenseCategories from "./pages/expence_categories";
import Subscriptions from "./pages/subscriptions";
import AnalyticsReports from "./pages/analytics&reports";
import Settings from "./pages/settings";
import AdminProfile from "./pages/admin_profile";

export default function App() {
  const [isAuth, setIsAuth] = useState(() => {
    return localStorage.getItem("isAuth") === "true";
  });
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuth(true);
    localStorage.setItem("isAuth", "true");
  };

  const handleLogout = () => {
    setIsAuth(false);
    localStorage.removeItem("isAuth");
  };

  // 🔐 AUTH FLOW
  if (!isAuth) {
    return (
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} goForgot={() => navigate('/forgot-password')} />} />
        <Route path="/forgot-password" element={<ForgotPassword goReset={() => navigate('/reset-password')} goLogin={() => navigate('/')} />} />
        <Route path="/reset-password" element={<ResetPassword goLogin={() => navigate('/')} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <Sidebar onLogout={handleLogout} />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        <main className="flex-1 overflow-y-auto custom-scrollbar">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/categories" element={<ExpenseCategories />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/analytics" element={<AnalyticsReports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<AdminProfile />} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}