import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 2)
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          What Else Do I Enjoy?
        </p>
        <Link to='/me' className='neo-brutalism-white neo-btn'>
          :) 
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );

  if (currentStage === 4) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          I've Worked on Plentiful of Projects and <br /> Have Internship Experience
        </p>
        <Link to='/about' className='neo-brutalism-white neo-btn'>
          My Experiences
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Wanna Talk About Tech, Startup Culture <br /> or Anything Related?
        </p>
        <Link to='/contact' className='neo-brutalism-white neo-btn'>
          Contact me!
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 1) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Hi I'm Dheemanth Majji <br /> A Student At Vanderbilt University
        </p>
        <div className='neo-brutalism-white neo-btn'>
          Scroll Right
        </div>
      </div>
    );
  }

  if (currentStage === 5) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Always trying to learn something new
        </p>
        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          See My Projects
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;