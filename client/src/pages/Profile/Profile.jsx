function Profile() {
  return (
    <div className="profile-page">
      <div className="page-header">
        <p className="hero-label">MY PROFILE</p>
        <h1>Professional Profile</h1>
        <p>Manage your personal information and career details.</p>
      </div>

      <div className="profile-card">
        <div className="profile-avatar">JD</div>

        <div className="profile-info">
          <h2>John Doe</h2>
          <p>Job Seeker</p>
        </div>

        <div className="profile-details">
          <div>
            <span>Email</span>
            <strong>john.doe@example.com</strong>
          </div>

          <div>
            <span>Location</span>
            <strong>India</strong>
          </div>

          <div>
            <span>Experience</span>
            <strong>2 Years</strong>
          </div>

          <div>
            <span>Skills</span>
            <strong>React, JavaScript, Node.js</strong>
          </div>
        </div>

        <button>Edit Profile</button>
      </div>
    </div>
  );
}

export default Profile;