import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import WeatherCard from "./WeatherCard";

const Accordion = ({
  accordionOpen,
  toggleAccordion,
  city,
  countryCode,
  weatherData,
}) => {
  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>Forecast</h3>
        <FontAwesomeIcon
          icon={accordionOpen ? faAngleUp : faAngleDown}
          className="fa-icon"
        />
      </div>
      {accordionOpen && (
        <div className="accordion-content horizontal-cards">
          {[...Array(5)].map((_, index) => (
            <WeatherCard
              key={index}
              city={city}
              countryCode={countryCode}
              weatherData={weatherData}
              day={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
