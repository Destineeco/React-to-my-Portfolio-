import React from 'react';
import img from "../assets/IMG_4854.jpg";

const AboutMe = () => (
  <article>
    <img src={img} alt="Destinee" className="image" />
    <h1>Destinee Miles</h1>
    <p className="bio">
      My name, as you've read, is Destinee Miles. I was born and raised south of Chicago where I grew up and developed an interest in puzzles and solving. I enjoy real-world interactions as a person, but there is so much life in the technical world. 
      Being a developer brings so many questions I can't wait to answer and keep answering.
    </p>
  </article>
);

export default AboutMe;
