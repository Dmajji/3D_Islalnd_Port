import React from 'react';
import { skills } from '../constants';
import leidos from '../assets/icons/leidos.png';
import mhgh from '../assets/icons/mhgh.png';
import VUCS from '../assets/icons/VUCS.png';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Dheemanth</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p> Aspiring software engineer attending Vanderbilt University, currently interning as a SWE at Leidos. 
          Math and computer science major
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-16 h-16 object-contain skill-logo"
              />
              <p className="mt-2 text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Through my internship, research, and extra cirrcular experience, I've gained a large sum 
            of both technical knowledge and soft skills. Working alongside people who create a space of learning
            is my biggest takeaway, here's some exciting stuff I've been a part of!
          </p>

          <div className="mt-5">
          <img src={leidos} alt="Leidos Logo" className="w-45  h-20 mr-10"/>
            <h4 className="subsubhead-text text-black">Leidos Software Engineering Internship</h4>
            <div className='mt-2  text-md text-black'>
              <p className="text-sm text-black"> Remote | May 2024 – Present</p>
              <p>
                * Transformed a static HTML table with over 250 configuration records into a dynamic, interactive JavaScript codebase, significantly improving data accessibility and user experience.<br/>
                * Enhanced vendor management processes by reducing data retrieval time by 40% through the development and integration of sophisticated JavaScript functionalities.
              </p>
            </div>
          </div>

          <div className="mt-5">
          <img src={mhgh} alt="Leidos Logo" className="w-45  h-20 mr-10"/>
            <h4 className="subsubhead-text text-black">Mobile Health for Global Health || Vanderbilt Univeristy Medical Center Software Engineering Intern </h4>
            <p className="text-sm text-black">Nashville, TN | Sept 2023 – May 2024</p>
            <div className='mt-2  text-md text-black'>
              <p>
              * Developed and implemented Python scripts using the RedCap API and MatPlotLib to analyze relationships between New York and Chicago testing sites, identifying a 5.6% higher false positive rate at the New York site. <br></br>
              *	Utilized Pandas library to process and clean over 50,000 data points of user test information, filtering out 17.27% of outliers and false positives/negatives, and improving data processing efficiency by 0.46%.
              </p>
            </div>
          </div>
          
          <div className="mt-5">
          <img src={VUCS} alt="Leidos Logo" className="w-45  h-20 mr-10"/>
            <h4 className="subsubhead-text text-black">Medical-Image and Statistical Analysis Lab || Science Communication Intern</h4>
            <p className="text-sm text-black"> Nashville, TN | Feb 2024 – May 2024 </p>
            <div className='mt-2  text-md text-black'>
              <p>
              *	Orchestrated the translation and dissemination of scientific research publications into accessible narratives. <br></br>
              *	Regularly audited PubMed for lab publications, ensuring 100% database accuracy by uploading an average of 10+ missing monthly entries to maintain research integrity.

              </p>
            </div>
          </div>

          

      </div>
      </div>
    </section>
  );
};

export default About;
