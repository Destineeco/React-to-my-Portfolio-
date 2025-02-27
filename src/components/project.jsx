import React from 'react';

const Project = ({ title, image, deployedLink, repoLink }) => (
  <article className="project-card">
    <h2>{title}</h2>
    <img src={image} alt={title} />
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
  </article>
);

export default Project;
