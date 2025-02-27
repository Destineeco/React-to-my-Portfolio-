import React from 'react';
import img from "../assets/IMG_4854.jpg";

const AboutMe = () => (
  <article className="about-me-container">
    <div className="about-me-header">
      <img src={img} alt="Destinee" className="image" />
      <h1>Destinee Miles</h1>
    </div>
    <section className="about-me-section">
      <h2>Skills</h2>
      <p>As a developer, I specialize in front-end technologies like React, TypeScript, and JavaScript. I’m also skilled in backend development with Node.js and Python. I’m passionate about building responsive, user-friendly web applications that provide seamless user experiences.</p>
    </section>
    <section className="about-me-section">
      <h2>My Journey</h2>
      <p>Growing up in the south suburbs of Chicago, I was always curious about how things work. I started with puzzles and problem-solving, which naturally led me to the world of coding. After diving into web development, I became fascinated by the endless possibilities in technology, which is why I decided to pursue a career as a software developer.</p>
    </section>
    <section className="about-me-section">
      <h2>Outside of Tech</h2>
      <p>When I’m not coding, I love exploring the outdoors, taking long walks, and attending local meetups to connect with like-minded people. I’m also passionate about photography and capturing moments in nature.</p>
    </section>
  </article>
);

export default AboutMe;
