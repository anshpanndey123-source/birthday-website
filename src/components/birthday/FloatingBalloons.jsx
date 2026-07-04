import "./FloatingBalloons.css";

import { motion } from "framer-motion";

const balloons = [
  {
    left: "6%",
    color: "#ff5fc5",
    size: 70,
    delay: 0,
  },
  {
    left: "18%",
    color: "#8b5cf6",
    size: 60,
    delay: 1,
  },
  {
    left: "30%",
    color: "#ffd56d",
    size: 75,
    delay: 2,
  },
  {
    right: "30%",
    color: "#ffffff",
    size: 65,
    delay: 0.5,
  },
  {
    right: "18%",
    color: "#ff9ad8",
    size: 72,
    delay: 1.5,
  },
  {
    right: "6%",
    color: "#9b7dff",
    size: 68,
    delay: 2.5,
  },
];

const FloatingBalloons = () => {
  return (
    <div className="floating-balloons">

      {balloons.map((balloon, index) => (

        <motion.div
          key={index}
          className="balloon-wrapper"
          style={{
            left: balloon.left,
            right: balloon.right,
          }}
          animate={{
            y: [0, -80, 0],
            x: [-8, 8, -8],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: balloon.delay,
            ease: "easeInOut",
          }}
        >

          <div
            className="balloon"
            style={{
              width: balloon.size,
              height: balloon.size * 1.2,
              background: balloon.color,
            }}
          />

          <div className="balloon-string"></div>

        </motion.div>

      ))}

    </div>
  );
};

export default FloatingBalloons;