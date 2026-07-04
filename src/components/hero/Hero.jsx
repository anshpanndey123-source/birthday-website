import "./Hero.css";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section id="hero" className="hero">

      <div className="hero-container">

        <HeroContent />

        <HeroImage />

      </div>

    <div className="scroll-indicator">

    <span className="scroll-text">
        SCROLL
    </span>

    <div className="mouse">

        <div className="mouse-dot"></div>

    </div>

    </div>

    </section>
  );
};

export default Hero;