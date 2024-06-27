import React from 'react';
import { skills } from '../constants';
import leidos from '../assets/icons/leidos.png';
import mhgh from '../assets/icons/mhgh.png';
import VUCS from '../assets/icons/VUCS.png';
import bitcoin from '../assets/icons/bitcoin.png';
import login from '../assets/icons/login.jpg';
import soundcloud from '../assets/icons/soundcloud.jpg'

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p> I'm a big advocate for project based learning; here is some of the stuff I've worked on personally and in the acadmeic setting
        </p>
      </div>


      <div>
        
        <div className="mt-5 flex flex-col gap-3 text-slate-500">


          <div className="mt-5">
          <img src={bitcoin} alt="Leidos Logo" className="w-45  h-20 mr-10"/>
            <h4 className="subsubhead-text text-black">Blockchain Analytics and Persistence Engine | C++, CMake, GoogleTest</h4>
            <div className='mt-2  text-md text-black'>
              <p className="text-sm text-black"> Feb 2024 – March 2024</p>
              <p>
              *	Enhanced a blockchain database application in C++ with data persistence and analytics using Visitor, Factory and Build patterns. <br></br>
              * Facilitated transactions and user activity insights integrating Debug, Ledger, and Whale commands for improved database analytics. <br></br>
              * Enabled multi-format data storage, including custom JSON format, for versatile and compatible data management. 

              </p>
            </div>
          </div>

          <div className="mt-5">
          <img src={login} alt="Leidos Logo" className="w-45  h-20 mr-10"/>
            <h4 className="subsubhead-text text-black">Login Testing Window Tracker | Pandas, Python, RedCap API, Seaborn</h4>
            <p className="text-sm text-black">Jan 2024 – May 2024</p>
            <div className='mt-2  text-md text-black'>
              <p>
              *	Leveraged Python and Pandas to process and analyze over 50,000 health records from RedCap API, boosting data accuracy and removing non-essential admin activities. <br></br>
              *	Utilized Seaborn for visual analytics, showcasing a 15% increase in user engagement during pivotal testing windows, influencing clinical trial strategies. <br></br>
              * Designed Python scripts to automate data cleaning and integration, resulting in a streamlined workflow for user behavior analysis in medical research. <br></br>

              </p>
            </div>
          </div>
          
          <div className="mt-5">
          <img src={soundcloud} alt="Leidos Logo" className="w-45  h-20 mr-10"/>
            <h4 className="subsubhead-text text-black">SoundCloud Web Scraper | Flask.JS, Python, HTML, CSS</h4>
            <p className="text-sm text-black"> Jun 2023 – Aug 2023</p>
            <div className='mt-2  text-md text-black'>
              <p>
              *	Developed a web application to scrape streaming data from the SoundCloud digital music library using the BeautifulSoup Python package. <br></br>
              *	Predicted potential revenue generation for artists using a currency API which computes values based on the scraped streaming data. <br></br>
              *	Created an interactive front-end for user inputs of artists utilizing Flask.JS microframework and HTML / CSS for beautification. 
              </p>
            </div>
          </div>

          

      </div>
      </div>
    </section>
  );
};

export default About;
