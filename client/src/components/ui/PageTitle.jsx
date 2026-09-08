function PageTitle({ label, title, description }) {
  return (
    <div className="page-title">
      {label && <p className="hero-label">{label}</p>}

      <h1>{title}</h1>

      {description && <p>{description}</p>}
    </div>
  );
}

export default PageTitle;