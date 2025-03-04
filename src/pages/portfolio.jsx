import React from 'react';
import Project from '../components/project';
import weather from '../assets/weather.png';
import GitAct from '../assets/GitAct.png';

const Portfolio = () => (
  <section className="portfolio-section">
    <h1 className="portfolio-header">My Projects</h1>
    <div className="project-grid">
      <Project 
        title="API Weather Forecast" 
        image={weather} 
        description="A weather forecast app that uses the OpenWeather API to provide current weather data for any city in the world. The app also provides a 5-day forecast for the selected city."
        tag="typescript/api"
        repoLink="https://github.com/Destineeco/Weather-Forecast" 
        deployedLink="https://weather-forecast11.onrender.com" 
      />
      <Project 
        title="GitAction" 
        image={GitAct} 
        description="This project sets up a CI/CD pipeline using GitHub Actions to automate Cypress testing and deploy applications to Render. It ensures smooth integration, testing, and deployment for web applications.."
        tag="Cypress testing"
        repoLink="https://github.com/Destineeco/gitaction" 
        deployedLink="https://gitact.onrender.com/" 
      />
    </div>
  </section>
);

export default Portfolio;
