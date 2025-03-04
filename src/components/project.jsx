import React from 'react';

const Project = ({ title, image, deployedLink, repoLink, description, tag }) => (
  <article className="project-card">
    <div className="project-image">
      <img src={image} alt={title} />
      <span className="tag">{tag}</span>
    </div>
    <div className="project-info">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="project-links">
        {deployedLink && (
          <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="btn">
            View Deployed
          </a>
        )}
        {repoLink && (
          <a href={repoLink} target="_blank" rel="noopener noreferrer" className="btn">
            View GitHub
          </a>
        )}
      </div>
    </div>
  </article>
);

export default Project;
