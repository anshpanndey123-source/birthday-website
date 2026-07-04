import "./BirthdayWish.css";

import { motion } from "framer-motion";

import birthdayWish from "../../data/birthdayWish";

import FloatingBalloons from "./FloatingBalloons";

const BirthdayWish = () => {
  return (
    <section
      id="birthday"
      className="birthday-section"
    >

      <FloatingBalloons />

      <div className="birthday-glow"></div>

      <div className="birthday-container">

        {/* Small Title */}

        <motion.p
          className="birthday-small"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {birthdayWish.smallTitle}
        </motion.p>

        {/* Heading */}

        <motion.h2
          className="birthday-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
        >
          {birthdayWish.title}
        </motion.h2>

        {/* Subtitle */}

        <motion.h3
          className="birthday-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .4 }}
        >
          {birthdayWish.subtitle}
        </motion.h3>

        {/* Glass Card */}

        <motion.div
          className="birthday-card"
          initial={{
            opacity: 0,
            y: 70,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ delay: .6 }}
        >

          <p>

            {birthdayWish.message}

          </p>

        </motion.div>

        {/* Quote */}

        <motion.div
          className="birthday-quote"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .9 }}
        >

          ✨ {birthdayWish.quote}

        </motion.div>

      </div>

    </section>
  );
};

export default BirthdayWish;