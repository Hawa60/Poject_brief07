import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import PageTitle from "../../components/ui/PageTitle";

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <PageTitle
          label="WELCOME TO JOB PORTAL"
          title="Find Your Next Opportunity"
          description="Discover jobs, connect with companies, and take the next step toward your career goals."
        />

        <div className="hero-actions">
          <Button>Find Jobs</Button>
          <Button className="secondary-button">
            Explore Opportunities
          </Button>
        </div>
      </section>

      <section className="features-section">
        <Card
          title="Find Jobs"
          description="Search for opportunities that match your skills and interests."
        />

        <Card
          title="Build Your Profile"
          description="Create a professional profile that helps employers find you."
        />

        <Card
          title="Grow Your Career"
          description="Connect with employers and discover new career opportunities."
        />
      </section>
    </div>
  );
}

export default Home;