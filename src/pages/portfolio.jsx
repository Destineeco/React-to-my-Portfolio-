import React from 'react';
import Project from '../components/Project';
import paytracker from '../assets/emptracker.jpg';
import downtimetracker from '../assets/machinetracker.jpg';
import readme from '../assets/noderead.jpg';
import mood from '../assets/mood.jpg';
import emptracker from '../assets/emp.jpg';
import vehicle from '../assets/vehicle.jpg';

const Portfolio = () => (
  <section className="portfolio-section">
    <h1 className="portfolio-header">My Projects</h1>
    <div className="project-grid">
      <Project 
        title="Vehicle Builder" 
        image={vehicle} 
        repoLink="https://github.com/Destineeco/Vehicle-Builder-" 
        deployedLink="https://vehicle-builder.com" 
      />
      <Project 
        title="JS Employee Payroll Tracker" 
        image={paytracker} 
        deployedLink="https://payroll-tracker.com" 
        repoLink="https://github.com/Destineeco/js-employee-payroll" 
      />
      <Project 
        title="Machine Downtime Tracker" 
        image={downtimetracker} 
        deployedLink="https://machinetracker.com" 
        repoLink="https://github.com/Destineeco/machinetracker" 
      />
      <Project 
        title="Node README Generator" 
        image={readme} 
        deployedLink="https://node-readme.com" 
        repoLink="https://github.com/Destineeco/node-myREADME" 
      />
      <Project 
        title="Mood Board" 
        image={mood} 
        deployedLink="https://moodboard.com" 
        repoLink="https://github.com/Destineeco/moodboard" 
      />
      <Project 
        title="Employee Tracker" 
        image={emptracker} 
        deployedLink="https://employee-tracker.com" 
        repoLink="https://github.com/Destineeco/Employee-Tracker-" 
      />
    </div>
  </section>
);

export default Portfolio;
