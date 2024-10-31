import React from 'react';
import './resume.css'; 

const Resume = () => {
  return (
    <div className="resume">
      <header className="resume-header">
        <h1>Destinee Miles</h1>
        <p>Email: xdexstxinxeex2004@gmail.com</p>
        <p>Phone: (708) 378 3451</p>
        <p>Location: South of Chicago, IL</p>
      </header>

      <section className="summary">
        <h2>Summary</h2>
        <p>
        Some things I would consider myself to be skilled at are multitasking and good communication skills. I have patience and i am also  quick learner. Also getting along with other workers and being able to work as a team is a skill i would gladly say i have developed. Very mature and able to adjust to mostly anything given with time.
        </p>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <div className="job">
          <h3>Olive Garden</h3>
          <p> October 2021 - November 2023</p>
          <ul>
            <li>wroked as a hostess and host trainer</li>
            <li>also worked as a expo at times</li>
          </ul>
        </div>
        <div className="job">
          <h3>Amazon</h3>
          <p>Warehouse worker | August 2023 - Febuary 2024</p>
          <ul>
            <li>responsibilites included stowing, truck unloading, and palatizing</li>   
          </ul>
        </div>
        <div className="job">
          <h3>FEDEX Ground</h3>
          <p> | April 2024 - present</p>
          <ul>
            <li> Responsibility includes truck unloading and package handling</li>   
          </ul>
        </div>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="school">
          <h3>Northwestern Coding bootcamp completion</h3>
          <p> Thornwood High School | Graduated May 2023</p>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript, React, HTML, CSS</li>
          <li>Node.js, Express, </li>
          <li>Git, GitHub, </li>
        </ul>
      </section>

      
    </div>
  );
};

export default Resume;


