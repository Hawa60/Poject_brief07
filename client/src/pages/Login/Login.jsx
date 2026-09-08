function Login() {
  return (
    <div className="login-page">
      <div className="page-header">
        <p className="hero-label">WELCOME BACK</p>
        <h1>Sign In</h1>
        <p>Sign in to access your Job Portal account.</p>
      </div>

      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>

        <button type="submit">Sign In</button>

        <p className="login-note">
          Don't have an account? Create one to get started.
        </p>
      </form>
    </div>
  );
}

export default Login;