import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

const navigation = [
  { to: '/activities', label: 'Activities', icon: '↗' },
  { to: '/leaderboard', label: 'Leaderboard', icon: '★' },
  { to: '/teams', label: 'Teams', icon: '◈' },
  { to: '/users', label: 'Users', icon: '◎' },
  { to: '/workouts', label: 'Workouts', icon: '✦' },
]

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-lockup">
          <div className="brand-mark">O</div>
          <div>
            <strong>Octofit</strong>
            <span>TRACKER / 01</span>
          </div>
        </div>
        <p className="sidebar-caption">A clear view of your collective momentum.</p>
        <nav aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
              <span aria-hidden="true">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-footer">
          <span><i className="status-dot" /> API connected</span>
          <small>Personal progress, shared.</small>
        </div>
      </aside>
      <main className="main-content">
        <header className="topbar">
          <span className="eyebrow">OCTOFIT / PRESENTATION TIER</span>
          <span className="date-stamp">FIELD NOTES · 2026</span>
        </header>
        <Routes>
          <Route path="/" element={<Navigate to="/activities" replace />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
