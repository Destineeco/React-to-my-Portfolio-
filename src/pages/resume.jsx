import React from 'react';
import './resume.css'; 

const Resume = () => {
  return (
    <div className="resume">
      <header className="resume-header">
        <h1>Destinee Miles</h1>
        <p>Email: xdexstxinxeex2004@gmail.com</p>
        <p>Phone: (708) 378-2451</p>
        <p>Location: Calumet City, IL 60409</p>
      </header>

      <section className="summary">
        <h2>Summary</h2>
        <p>
          Enthusiastic Junior Web Developer with a background in customer service
          and logistics. Proven ability to adapt quickly through role switching,
          fostering strong teamwork and communication skills. Proficient in HTML,
          CSS, and JavaScript, with a focus on creating user-friendly web applications.
          Aiming to leverage technical skills and a positive mindset to contribute
          effectively in a dynamic development team.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript, React, HTML, CSS</li>
          <li>Node.js, TypeScript, Express</li>
          <li>MongoDB, Mongoose ODM, NoSQL, Atlas</li>
          <li>CI/CD, Python</li>
          <li>Git, GitHub, Debugging, Testing</li>
          <li>Agile Workflow, Interface Design</li>
        </ul>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <div className="job">
          <h3>UPS</h3>
          <p>Package Handler | Hodgkins, IL | September 2024 - Present</p>
          <ul>
            <li>Handled packages safely while unloading and transporting.</li>
            <li>Lifted heavy objects by hand or by using a power hoist.</li>
            <li>Truck unloading and package scanning.</li>
          </ul>
        </div>
        <div className="job">
          <h3>FedEx Ground</h3>
          <p>Package Handler | Munster, IN | March 2024 - February 2024</p>
        </div>
        <div className="job">
          <h3>Amazon</h3>
          <p>Warehouse Worker | Matteson, IL | July 2023 - January 2024</p>
        </div>
        <div className="job">
          <h3>Olive Garden</h3>
          <p>Hostess | Lansing, IL | October 2021 - November 2023</p>
        </div>
        <div className="job">
          <h3>Windy City Pizza</h3>
          <p>Cashier | Calumet City, IL | January 2021 - April 2021</p>
        </div>
        <div className="job">
          <h3>Fisherman's Island</h3>
          <p>Manager | Lansing, IL | November 2019 - December 2020</p>
        </div>
      </section>

      <section className="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>Jr Web development</li>
          <li>Hostess Certified Trainer</li>
          <li>Togo Specialist</li>
          <li>Expo Food Runner</li>
          <li>Managerial Training</li>
        </ul>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="school">
          <h3>Northwestern Coding Bootcamp</h3>
          <p>Jr Full Stack Web Developer | January 2024</p>
          <p>Skills: HTML, CSS, JavaScript, Node.js, TypeScript, React, MongoDB</p>
        </div>
        <div className="school">
          <h3>Thornwood High School</h3>
          <p>Graduated May 2023 | South Holland, IL</p>
          <ul>
            <li>High Honors, GPA: 4.09</li>
            <li>Ranked 49/472</li>
            <li>Upward Bound Program</li>
            <li>Marching Band Member</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resume;
