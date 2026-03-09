import { useState } from "react";
import "../assets/style.css";

const stats = [
  {
    title: "Users",
    value: "1,245",
    tone: "users",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16 19v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1" />
        <circle cx="9" cy="7" r="3" />
        <path d="M22 19v-1a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a3 3 0 0 1 0 5.75" />
      </svg>
    ),
  },
  {
    title: "Projects",
    value: "86",
    tone: "projects",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 20h8" />
        <path d="M12 18v2" />
      </svg>
    ),
  },
  {
    title: "Tasks",
    value: "324",
    tone: "tasks",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Completed",
    value: "278",
    tone: "completed",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12l2.5 2.5L16 9" />
      </svg>
    ),
  },
];

const sidebarNav = [
  "Dashboard",
  "Users",
  "Projects",
  "Tasks",
  "Analytics",
  "Settings",
];

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <aside className={`dashboard-sidebar ${!isSidebarOpen ? "is-collapsed" : ""}`}>
        <div className="sidebar-top">
          {isSidebarOpen && <h1 className="sidebar-logo">ASTM</h1>}
          <button
            type="button"
            className="sidebar-toggle"
            aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
            onClick={() => setIsSidebarOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {isSidebarOpen && (
          <nav className="sidebar-nav">
            {sidebarNav.map((item, index) => (
              <button
                key={item}
                type="button"
                className={`sidebar-nav-item ${index === 0 ? "is-active" : ""}`}
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </aside>

      <section className="dashboard-main">
        <header className="dashboard-header">
          <h2 className="dashboard-greeting">Hello, Stefeee</h2>

          <div className="header-actions">
            <label className="header-search">
              <span className="header-search-icon">⌕</span>
              <input type="text" placeholder="Search..." />
            </label>

            <button
              type="button"
              className="header-profile"
              onClick={() => setIsProfileOpen((prev) => !prev)}
            >
              <div className="header-avatar" />
              <div className="header-profile-text">
                <p className="header-profile-name">Stefeee</p>
                <p className="header-profile-role">Admin</p>
              </div>
            </button>

            {isProfileOpen && (
              <div className="profile-dropdown">
                <button type="button" className="profile-dropdown-item">
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>

        <main className="dashboard-content">
          <section className="stats-container">
            <div className="stats-grid">
              {stats.map((item) => (
                <article key={item.title} className={`stat-card stat-card-${item.tone}`}>
                  <div className="stat-top-row">
                    <p className="stat-title">{item.title}</p>
                    <span className={`stat-icon stat-icon-${item.tone}`}>{item.icon}</span>
                  </div>
                  <p className="stat-value">{item.value}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="chart-card">
            <h3 className="chart-title">Weekly User Activity</h3>
            <div className="chart-placeholder" />
          </section>
        </main>
      </section>
    </div>
  );
}

export default Dashboard;
