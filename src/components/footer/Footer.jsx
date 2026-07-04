import "./Footer.css";

import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-glow"></div>

      <motion.div
        className="footer-line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="footer-heart"
        animate={{
          scale: [1, 1.18, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
      >
        <FaHeart />
      </motion.div>

      <h2>
        Happy Birthday ❤️
      </h2>

      <h3>
        Hope You Always Smile
      </h3>

      <p className="footer-quote">
        "Some stories never end,
        they simply become memories."
      </p>

      <div className="footer-bottom">

        <p>
          Made With Endless Love
        </p>

        <h4>
          — Ansh —
        </h4>

      </div>

      <motion.div
        className="footer-thanks"
        animate={{
          opacity: [.5,1,.5],
        }}
        transition={{
          repeat:Infinity,
          duration:2.5,
        }}
      >
        ✨ Thank You For Visiting ✨
      </motion.div>

    </footer>
  );
};

export default Footer;