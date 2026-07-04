import { motion } from "framer-motion";
import { FaCrown, FaHeart } from "react-icons/fa";
import girl from "../../assets/images/girl.png.jpg";

const HeroImage = () => {
  return (
    <motion.div
      className="hero-right"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="image-wrapper">

        {/* Purple Halo */}
        <div className="halo halo1"></div>
        <div className="halo halo2"></div>

        {/* Rotating Rings */}
        <div className="ring ring1"></div>
        <div className="ring ring2"></div>

        {/* Floating Crown */}
        <motion.div
          className="crown"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaCrown />
        </motion.div>

        {/* Image */}
        <div className="image-frame">
          <img src={girl} alt="Birthday Girl" />

          <div className="glass-reflection"></div>
        </div>

        {/* Hearts */}

        <FaHeart className="floating-heart heart1" />
        <FaHeart className="floating-heart heart2" />
        <FaHeart className="floating-heart heart3" />

        {/* Sparkles */}

        <div className="sparkle spark1"></div>
        <div className="sparkle spark2"></div>
        <div className="sparkle spark3"></div>

        {/* Quote */}

        <motion.div
          className="quote-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
          }}
        >
          <FaHeart />

          <p>
            You are the most beautiful chapter
            <br />
            of my life ❤️
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default HeroImage;