import "./LoveDivider.css";

import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const LoveDivider = () => {
  return (
    <section className="love-divider">

      {/* Top Line */}

      <motion.div
        className="love-line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      {/* Heart */}

      <motion.div
        className="love-heart"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 120,
          duration: .8,
        }}
      >
        <FaHeart />
      </motion.div>

      {/* Text */}

      <motion.div
        className="love-text"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: .2 }}
      >

        <h3>
          Every Picture Has A Story...
        </h3>

        <p>
          But My Heart Has One Letter For You ❤️
        </p>

      </motion.div>

      {/* Animated Line */}

      <motion.div
        className="love-progress"
        initial={{ width: 0 }}
        whileInView={{ width: "240px" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span></span>
      </motion.div>

      {/* Scroll */}

      <motion.div
        className="love-scroll"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
      >

        <div className="love-mouse">

          <div className="love-wheel"></div>

        </div>

        <span>
          Scroll to Love Letter
        </span>

      </motion.div>

      {/* Bottom Line */}

      <motion.div
        className="love-line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

    </section>
  );
};

export default LoveDivider;