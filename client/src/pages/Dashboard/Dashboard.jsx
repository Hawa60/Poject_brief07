import Card from "../../components/ui/Card";
import PageTitle from "../../components/ui/PageTitle";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <PageTitle
        label="DASHBOARD"
        title="Welcome Back"
        description="Manage your job applications and explore new opportunities."
      />

      <div className="dashboard-grid">
        <Card title="Applications">
          <strong>12</strong>
          <p>Applications submitted</p>
        </Card>

        <Card title="Saved Jobs">
          <strong>8</strong>
          <p>Jobs saved for later</p>
        </Card>

        <Card title="Profile Status">
          <strong>85%</strong>
          <p>Profile completion</p>
        </Card>
      </div>

      <div className="dashboard-section">
        <h2>Recent Activity</h2>
        <p>Your recent job portal activity will appear here.</p>
      </div>
    </div>
  );
}

export default Dashboard;