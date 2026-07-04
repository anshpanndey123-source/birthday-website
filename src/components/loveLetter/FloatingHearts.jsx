import "./FloatingHearts.css";

import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const hearts = [
  { left: "8%", delay: 0 },
  { left: "18%", delay: 1 },
  { left: "30%", delay: 2 },
  { left: "72%", delay: 1.5 },
  { left: "84%", delay: 3 },
  { left: "92%", delay: 2.5 },
];

const FloatingHearts = () => {
  return (
    <div className="popup-hearts">

      {hearts.map((heart, index) => (

        <motion.div
          key={index}
          className="popup-heart"
          style={{ left: heart.left }}

          animate={{
            y: [30, -40, -120],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.6],
            rotate: [0, 20, -20, 0],
          }}

          transition={{
            duration: 6,
            repeat: Infinity,
            delay: heart.delay,
            ease: "easeInOut",
          }}
        >
          <FaHeart />
        </motion.div>

      ))}

    </div>
  );
};

export default FloatingHearts;