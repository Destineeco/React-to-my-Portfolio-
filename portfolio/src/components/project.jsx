import React from 'react';

const Project = ({ title, image, deployedLink, repoLink }) => (
  <div>
    <h2>{title}</h2>
    <img src={image} alt={title} />
    <a href={deployedLink}>View Deployed</a>
    <a href={repoLink}>View GitHub</a>
  </div>
  
);

export default Project;
