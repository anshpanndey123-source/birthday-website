import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const hearts = [
  { top: "12%", left: "18%", size: 20, delay: 0 },
  { top: "25%", right: "15%", size: 16, delay: 0.4 },
  { bottom: "20%", left: "12%", size: 22, delay: 0.8 },
  { bottom: "15%", right: "18%", size: 18, delay: 1.2 },
  { top: "50%", left: "8%", size: 14, delay: 1.6 },
  { top: "55%", right: "8%", size: 14, delay: 2 },
];

const FloatingHearts = () => {
  return (
    <>
      {hearts.map((heart, index) => (
        <motion.div
          key={index}
          className="floating-popup-heart"
          style={heart}
          animate={{
            y: [0, -15, 0],
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: heart.delay,
            ease: "easeInOut",
          }}
        >
          <FaHeart size={heart.size} />
        </motion.div>
      ))}
    </>
  );
};

export default FloatingHearts;