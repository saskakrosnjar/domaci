import React from "react";
import "../App.css";
import Button from "./Button";
import "./HeroSection.css";
import { FaPlayCircle } from "react-icons/fa";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>NOVOGODIŠNJA PUTOVANJA</h1>
      <p> Šta čekaš?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          REZERVISI
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
