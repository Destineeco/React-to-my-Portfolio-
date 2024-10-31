import React from 'react';
import Project from '../components/project';
import paytracker from '../assets/IMG_6061.jpg';
import downtimetracker from '../assets/IMG_6060.jpg';
import readme from '../assets/IMG_6066.PNG';
import mood from '../assets/IMG_6059.jpg';
import emptracker from '../assets/IMG_6065.PNG'
import resume from '../pages/resume';
  
  const Portfolio = () => (
    <section>
      <h1>My Projects</h1>
      <Project title="Resume"  deployedLink= {resume} repoLink="https://github.com/Destineeco/Employee-Tracker-" />

      <Project title=" JS Employee Payroll Tracker" image= {paytracker} deployedLink="file:///C:/Users/HPUSE/bootcamp/NU-VIRT-FSF-PT-07-2024-U-LOLC/03-JavaScript/02-Challenge/Develop/index.html" repoLink="" />

      <Project title="Machine Downtime Tracker" image= {downtimetracker} deployedLink="file:///C:/Users/HPUSE/bootcamp/projects/Project-1/index.html" repoLink="https://github.com/apatel62/Project-1" />

      <Project title="Node README" image= {readme} deployedLink="" repoLink="https://github.com/Destineeco/node-myREADME" />

      <Project title="Mood Board" image= {mood} deployedLink="file:///C:/Users/HPUSE/bootcamp/NU-VIRT-FSF-PT-07-2024-U-LOLC/04-Web-APIs/02-Challenge/Develop/index.html" repoLink="" />

      <Project title="employee traker" image= {emptracker} deployedLink="" repoLink="https://github.com/Destineeco/Employee-Tracker-" />
      
    </section>
  );
  
export default Portfolio;
  