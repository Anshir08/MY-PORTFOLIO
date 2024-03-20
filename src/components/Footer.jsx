import React from 'react'
import logo from "../assets/logo.jpg"
import {
  AiFillGithub,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={logo}
          alt="Founder"
        />

        <h2>Anshir Chaudhary</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Coding Profiles</h2>

        <article>
          <a href="https://github.com/Anshir08" target={"blank"}>
            <FaGithub />
          </a>
          <a href="https://leetcode.com/Tensor08" target={"blank"} style={{margin:"1rem 0"}}>
            <SiLeetcode />
          </a>
          <a href="https://www.hackerrank.com/profile/Anshir2050" target={"blank"}>
            <FaHackerrank />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;