import "./LetterCard.css";

import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const LetterCard = ({ onOpen }) => {
  return (
    <motion.div
      className="letter-card-wrapper"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="letter-card"
        whileHover={{
          y: -12,
          scale: 1.02,
          rotateX: 4,
        }}
        transition={{ duration: 0.35 }}
        onClick={onOpen}
      >
        {/* Purple Glow */}

        <div className="letter-glow"></div>

        {/* Shine */}

        <div className="letter-shine"></div>

        {/* Border */}

        <div className="letter-border"></div>

        {/* Ribbon */}

        <div className="letter-ribbon"></div>

        {/* Wax Seal */}

        <div className="letter-seal">

          <FaHeart />

        </div>

      </motion.div>

      <motion.button
        className="open-letter-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: .97 }}
        onClick={onOpen}
      >
        ❤️ Open My Letter
      </motion.button>

    </motion.div>
  );
};

export default LetterCard;