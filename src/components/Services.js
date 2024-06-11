import React from "react";
import "../index.css";
import presentationDesign from "../assets/Research@4x-5.png";
import translateService from "../assets/Research@4x-1.png";
import AudioVisualProduction from "../assets/Research@4x-2.png";
import dataProcessing from "../assets/Research@4x-3.png";
import graphicDesign from "../assets/Research@4x-4.png";
import researchAndAnalytics from "../assets/Research@4x.png";

const services = [
  {
    image: presentationDesign,
    title: "Presentation Design",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    image: AudioVisualProduction,
    title: "Audio - Visual Production",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    image: translateService,
    title: "Translation Services",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    image: graphicDesign,
    title: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    image: researchAndAnalytics,
    title: "Research & Analytics",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
  {
    image: dataProcessing,
    title: "Data Processing",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
  },
];

const Services = () => {
  return (
    <div className="servicesContainer">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <img src={service.image} alt="img" className="service-image" />
          <p>{service.title}</p>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
