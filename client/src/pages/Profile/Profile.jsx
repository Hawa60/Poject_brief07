import { useState } from "react";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import PageTitle from "../../components/ui/PageTitle";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    location: "India",
    experience: "2 Years",
    skills: "React, JavaScript, Node.js",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSave = (event) => {
    event.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <PageTitle
        label="MY PROFILE"
        title="Professional Profile"
        description="Manage your personal information and career details."
      />

      <Card className="profile-card">
        <div className="profile-avatar">
          {profile.name
            .split(" ")
            .map((name) => name[0])
            .join("")
            .toUpperCase()}
        </div>

        {!isEditing ? (
          <>
            <div className="profile-info">
              <h2>{profile.name}</h2>
              <p>Job Seeker</p>
            </div>

            <div className="profile-details">
              <div>
                <span>Email</span>
                <strong>{profile.email}</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>{profile.location}</strong>
              </div>

              <div>
                <span>Experience</span>
                <strong>{profile.experience}</strong>
              </div>

              <div>
                <span>Skills</span>
                <strong>{profile.skills}</strong>
              </div>
            </div>

            <Button onClick={() => setIsEditing(true)}>
              Edit Profile
            </Button>
          </>
        ) : (
          <form className="profile-form" onSubmit={handleSave}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={profile.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={profile.location}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="experience">Experience</label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={profile.experience}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="skills">Skills</label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={profile.skills}
                onChange={handleChange}
              />
            </div>

            <div className="profile-actions">
              <Button type="submit">Save Changes</Button>

              <Button
                type="button"
                className="cancel-button"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </Card>
    </div>
  );
}

export default Profile;