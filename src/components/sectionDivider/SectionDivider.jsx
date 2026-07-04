import "./SectionDivider.css";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const SectionDivider = () => {
  return (
    <section className="section-divider">

      <motion.div
        className="divider-top-line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="divider-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
      >

        <div className="divider-stars">
          ✦
          <FaHeart />
          ✦
        </div>

        <span className="divider-subtitle">
          OUR JOURNEY
        </span>

        <h2>
          Our Beautiful Memories
        </h2>

        <p>
          Every picture tells a story, every smile holds a memory,
          and every moment we shared became a little piece of forever.
        </p>

        <div className="divider-bottom-line">
          <span></span>
        </div>

        <div className="divider-arrow">
          ↓
        </div>

      </motion.div>

      <motion.div
        className="divider-top-line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

    </section>
  );
};

export default SectionDivider;