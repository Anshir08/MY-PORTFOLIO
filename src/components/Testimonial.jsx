import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Experience</h2>

      <section>
        <ExperienceCard
          name={"AVP Web Solutions"}
          role={"Software Developer(Dec 2023 - Present)"}
        />

        <ExperienceCard
          name={"Appfoster"}
          role={"Associate Software Engineer(Dec 2022 - Dec 2023)"}
        />

        <ExperienceCard
          name={"DesiQnA"}
          role={"SDE Intern(Sep 2022 - Nov 2022)"}
        />

        <ExperienceCard
          name={"NIIT"}
          role={"SDE Intern(Mar 2022 - Aug 2022)"}
        />
      </section>
    </div>
  );
};

const ExperienceCard = ({ name, role }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/4192/4192708.png"
      alt={name}
    />
    <div>
      <h4>{name}</h4>
      <i>{role}</i>
    </div>
    
  </article>
);

export default Testimonial;