import React, { useRef } from "react";
import { motion, animate } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.jpg";

const Home = ({ ratio }) => {

  const problemsCount = useRef(null);
  const projectCount = useRef(null);

  const animationProblemsCount = () => {
    animate(0, 1500, {
      duration: 1,
      onUpdate: (v) => (problemsCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Anshir Chaudhary
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator", "A Problem Solver"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:official.chaudharyanshirsingh2050@gmail.com">Hire Me</a>
            <a href="https://drive.google.com/file/d/1t4L5KnodhtyhGGLwbmxsmNs8-QuG5TbL/view?usp=sharing" target="blank">
              Resume <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +
              {
                <motion.span
                  whileInView={animationProblemsCount}
                  ref={problemsCount}
                >
                  1500
                </motion.span>
              }
            </p>
            <span>DSA Problems Solved</span>
          </article>

          <aside>
            <article>
              <p>
                +
                {
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  >
                    100
                  </motion.span>
                }
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>official.chaudharyanshirsingh2050@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Anshir" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;