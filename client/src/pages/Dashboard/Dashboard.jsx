function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="page-header">
        <p className="hero-label">DASHBOARD</p>
        <h1>Welcome Back</h1>
        <p>Manage your job applications and explore new opportunities.</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Applications</h3>
          <strong>12</strong>
          <p>Applications submitted</p>
        </div>

        <div className="dashboard-card">
          <h3>Saved Jobs</h3>
          <strong>8</strong>
          <p>Jobs saved for later</p>
        </div>

        <div className="dashboard-card">
          <h3>Profile Status</h3>
          <strong>85%</strong>
          <p>Profile completion</p>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Recent Activity</h2>
        <p>Your recent job portal activity will appear here.</p>
      </div>
    </div>
  );
}

export default Dashboard;