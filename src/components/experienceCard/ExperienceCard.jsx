import React, {useState, createRef} from "react";
import "./ExperienceCard.scss";
import {getDominantColor} from "../../utils";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const [isWideLogo, setIsWideLogo] = useState(false);
  const imgRef = createRef();

  function onLogoLoad() {
    const img = imgRef.current;
    setColorArrays(getDominantColor(img));
    // Wordmark logos (e.g. Karocamp) would be cropped by the round frame, so
    // fit them inside it instead of filling it
    setIsWideLogo(img.naturalWidth > img.naturalHeight * 1.2);
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className={
            isWideLogo
              ? "experience-roundedimg experience-roundedimg-wide"
              : "experience-roundedimg"
          }
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={onLogoLoad}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        {cardInfo.type ? (
          <p
            className={
              isDark
                ? "experience-text-type experience-text-type-dark"
                : "experience-text-type"
            }
          >
            {cardInfo.type}
          </p>
        ) : null}
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
