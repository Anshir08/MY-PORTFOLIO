import React from 'react'
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

const Header = () => {
  return <nav>
    <NavContent />
  </nav>;
};

const NavContent = () => (
  <>
    <h2>Anshir</h2>
    <div className='headings'>
      <a href='#home'>Home</a>
      <a href='#work'>Projects</a>
      <a href='#timeline'>Timeline</a>
      <a href='#services'>Services</a>
      <a href='#testimonial'>Experience</a>
      <a href='#contact'>Contact</a>
    </div>
    <div className="profiles">
      <a href='https://github.com/Anshir08' target='blank'>
        <FaGithub />
      </a>
      <a href='https://leetcode.com/Tensor08' target='blank'>
        <SiLeetcode />
      </a>
      <a href='https://www.linkedin.com/in/anshir-chaudhary-1614b3194' target='blank'>
        <GrLinkedin />
      </a>
    </div>
    
  </>
)

export default Header