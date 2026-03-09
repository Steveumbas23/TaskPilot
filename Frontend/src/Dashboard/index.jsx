import '../assets/style.css'

const statCards = [1, 2, 3, 4]

function Dashboard() {
  return (
    <div className="dashboard-page">
      <aside className="dashboard-sidebar">
        <h1>ASTM</h1>
      </aside>

      <main className="dashboard-content">
        <header className="dashboard-header">
          <h2>Hello, Stefeee</h2>
          <div className="dashboard-header-right">
            <div className="header-pill" />
            <div className="header-avatar" />
          </div>
        </header>

        <section className="dashboard-board">
          <div className="dashboard-top-panel">
            <div className="stats-row">
              {statCards.map((item) => (
                <div key={item} className="stats-card">
                  <div className="stats-card-inner" />
                </div>
              ))}
            </div>
          </div>

          <div className="dashboard-main-panel" />
        </section>
      </main>
    </div>
  )
}

export default Dashboard
