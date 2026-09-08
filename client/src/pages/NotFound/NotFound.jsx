function NotFound() {
  return (
    <div className="notfound-page">
      <div className="notfound-content">
        <div className="notfound-code">404</div>

        <p className="hero-label">PAGE NOT FOUND</p>

        <h1>Oops! We can't find that page.</h1>

        <p>
          The page you are looking for may have been moved, deleted,
          or the URL may be incorrect.
        </p>

        <a href="/">
          <button>Back to Home</button>
        </a>
      </div>
    </div>
  );
}

export default NotFound;