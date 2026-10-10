import { Bell, CalendarDays, History, MessageSquareText, Settings, ShieldCheck, Sparkles, UserRound } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { to: '/app/chat', label: 'Chat', icon: MessageSquareText },
  { to: '/app/memory', label: 'Memory', icon: History },
  { to: '/app/daily', label: 'Daily', icon: CalendarDays },
  { to: '/app/settings', label: 'Settings', icon: Settings },
  { to: '/app/profile', label: 'Profile', icon: UserRound }
];

export function AppLayout() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-row">
          <div className="brand-badge"><Sparkles size={15} /></div>
          <div>
            <div className="brand-name">VEXA AI</div>
            <small>Personal assistant</small>
          </div>
        </div>

        <nav className="nav-list">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
              <Icon size={17} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="side-card">
          <div className="card-header">
            <Bell size={14} />
            <span>AI status</span>
          </div>
          <div className="status-line"><span className="status-dot success" /> Frontend active</div>
          <div className="status-line"><span className="status-dot warning" /> Backend setup pending</div>
        </div>

        <div className="side-card small">
          <ShieldCheck size={16} />
          <span>Privacy-first memory controls</span>
        </div>
      </aside>

      <main className="main-panel">
        <Outlet />
      </main>
    </div>
  );
}
