import { Link } from 'react-router-dom';
import React from 'react';

const Project = ({ title, image, deployedLink, repoLink }) => (
  <section>
    <h2>{title}</h2>
    <img src={image} alt={title} />
    <div>
    {deployedLink && <Link to={deployedLink}>View Deployed</Link>}
    {repoLink && <Link to={repoLink}>View GitHub</Link>}
  

    </div>
    
  </section>
  
);

export default Project;