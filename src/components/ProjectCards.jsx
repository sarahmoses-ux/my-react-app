import React from "react";

export default function ProjectCards({
  image,
  logo,
  title,
  tag,
  description,
  link,
  progress = 0,
}) {
  const safeProgress = Math.max(0, Math.min(100, progress));

  return (
    <article className="project-card">
      <div className="project-card-image-wrap">
        <img className="project-card-image" src={image} alt={title} />
      </div>

      <div className="project-card-content">
        <img className="project-card-logo" src={logo} alt={`${title} logo`} />

        <h2 className="project-card-title">
          {title}
          <span>{tag}</span>
        </h2>
        <p className="project-card-description">{description}</p>
        <div className="project-progress-wrap">
          <div className="project-progress-text">
            Case study in progress.....{safeProgress}%
          </div>
          <div className="project-progress-track">
            <span
              className="project-progress-fill"
              style={{ width: `${safeProgress}%` }}
            />
          </div>
        </div>
        {link ? <button className="project-card-button">{link}</button> : null}
      </div>
    </article>
  );
}
