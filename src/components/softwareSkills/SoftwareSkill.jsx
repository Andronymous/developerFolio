import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div className="software-skills-main-div">
      {skillsSection.softwareSkills.map(({group, skills}) => (
        <section className="skill-group" key={group}>
          <h3 className="skill-group-title">{group}</h3>
          <ul className="dev-icons">
            {skills.map(({name, icon: Icon}) => (
              <li className="software-skill-inline" key={name}>
                <Icon className="software-skill-icon" aria-hidden="true" />
                <p>{name}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
