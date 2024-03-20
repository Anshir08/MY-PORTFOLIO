import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Experience</h2>

      <section>
        <ExperienceCard
          name={"Appfoster"}
          role={"Associate Software Engineer(May 2023 - Dec 2023)"}
          techs={"HTML, CSS, Laravel, ReactJS, NodeJs, Core PHP, JavaScript(JQuery), PHTML, Ajax, CSS, Docker, MariaDB"}
        />

        <ExperienceCard
          name={"DesiQnA"}
          role={"SDE Intern(Oct 2022 - Dec 2022)"}
          techs={"HTML, CSS, JavaScript, PHP, MySQL"}
        />

        <ExperienceCard
          name={"NIIT"}
          role={"SDE Intern(Mar 2022 - June 2022)"}
          techs={"HTML, CSS, JavaScript, PHP, MySQL, Ajax, JIRA, SVN, Confluence, FileZilla, Putty, and AWS-buckets"}
        />
      </section>
    </div>
  );
};

const ExperienceCard = ({ name, role, techs }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/4192/4192708.png"
      alt={name}
    />
    <div>
      <h4>{name}</h4>
      <i>{techs}</i>
      <p>{role}</p>
    </div>
    
  </article>
);

export default Testimonial;