import { motion } from "framer-motion";
import {
  FaHeart,
  FaArrowRight,
  FaCrown,
} from "react-icons/fa";

const HeroContent = () => {
  return (
    <motion.div
      className="hero-left"
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
    >
      {/* Badge */}

    <motion.div
    className="hero-badge"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    >
    <FaCrown />
    <span>Happy Birthday 2026</span>
    <FaHeart color="#ff5fc5" />
    </motion.div>

      {/* Small Heading */}

      <p className="hero-small">
        CELEBRATING THE MOST BEAUTIFUL SOUL
      </p>

      {/* Name */}

    <motion.h1
    className="hero-name"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
        delay: 0.4,
        duration: 1,
        ease: "easeOut",
    }}
    >
    Varshu
    </motion.h1>

      {/* Subtitle */}

    <motion.h2
    className="hero-subtitle"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.7 }}
    >
    <div className="hero-line"></div>
    Princess Of My Heart
    </motion.h2>

      {/* Description */}

    <motion.p
    className="hero-description"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.9 }}
    >
    Today is a celebration of your <span>beautiful smile</span>,
    your kindness and every unforgettable memory we have created together.

    <br />
    <br />

    May this year bring <span>endless happiness</span>,
    unforgettable moments and all your dreams come true.
    </motion.p>

      {/* Buttons */}

      <div className="hero-buttons">

        <button  className="primary-btn">
        <a href="#gallery" onClick={() => setMenuOpen(false)}>
          Begin Journey
        </a>
         <FaArrowRight />
      </button>

        <button className="secondary-btn">
            <FaHeart />
            
        <a href="#love-letter" onClick={() => setMenuOpen(false)}>
          
          Open Love Letter
        </a>
        </button>

      </div>


      <div className="hero-spark hero-spark1"></div>
    <div className="hero-spark hero-spark2"></div>
    <div className="hero-spark hero-spark3"></div>

      {/* Tags */}

      <div className="hero-tags">

        <span>✨ Forever</span>

        <span>•</span>

        <span>17 October</span>

        <span>•</span>

        <span>My Favorite Person ❤️</span>

      </div>

    </motion.div>
  );
};

export default HeroContent;