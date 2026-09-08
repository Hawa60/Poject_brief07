function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <p className="hero-label">WELCOME TO JOB PORTAL</p>

        <h1>Find Your Next Opportunity</h1>

        <p className="hero-text">
          Discover jobs, connect with companies, and take the next step
          toward your career goals.
        </p>

        <div className="hero-actions">
          <button>Find Jobs</button>
          <button className="secondary-button">Explore Opportunities</button>
        </div>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <h3>Find Jobs</h3>
          <p>Search for opportunities that match your skills and interests.</p>
        </div>

        <div className="feature-card">
          <h3>Build Your Profile</h3>
          <p>Create a professional profile that helps employers find you.</p>
        </div>

        <div className="feature-card">
          <h3>Grow Your Career</h3>
          <p>Connect with employers and discover new career opportunities.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;