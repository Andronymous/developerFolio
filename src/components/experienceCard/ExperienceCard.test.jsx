import React from "react";
import {render, screen} from "@testing-library/react";
import ExperienceCard from "./ExperienceCard";

const cardInfo = {
  company: "Acme",
  role: "Engineer",
  date: "Jan 2020 - Present · 1 yr",
  companylogo: "logo.png",
  desc: "",
  descBullets: []
};

it("shows the employment type under the date", () => {
  render(
    <ExperienceCard
      cardInfo={{...cardInfo, type: "Full-time · On-site"}}
      isDark={false}
    />
  );
  const type = screen.getByText("Full-time · On-site");
  expect(type).toHaveClass("experience-text-type");
  expect(type).not.toHaveClass("experience-text-type-dark");
});

it("uses the muted dark style in dark mode", () => {
  render(<ExperienceCard cardInfo={{...cardInfo, type: "Part-time"}} isDark />);
  expect(screen.getByText("Part-time")).toHaveClass(
    "experience-text-type-dark"
  );
});

it("renders nothing for a missing type", () => {
  const {container} = render(
    <ExperienceCard cardInfo={cardInfo} isDark={false} />
  );
  expect(container.querySelector(".experience-text-type")).toBeNull();
});
