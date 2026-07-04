import "./LoveLetter.css";

import { useState } from "react";
import { motion } from "framer-motion";

import Envelope from "./LetterCard";
import LetterPopup from "./LetterPopup";

import loveLetter from "../../data/loveLetter";

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="love-letter" className="love-letter">

      <div className="love-glow"></div>

      <div className="love-letter-container">

        {/* Small Title */}

        <motion.p
          className="letter-small"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >
          FROM MY HEART
        </motion.p>

        {/* Heading */}

        <motion.h2
          className="letter-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
        >
          {loveLetter.heading}
        </motion.h2>

        {/* Description */}

        <motion.p
          className="letter-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .35 }}
        >
          {loveLetter.subtitle}
        </motion.p>

        {/* Envelope */}

        <motion.div
          className="envelope-area"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .5 }}
        >
          <Envelope
            onOpen={() => setIsOpen(true)}
          />


          <motion.p
            className="open-note"
            animate={{
              opacity: [.5,1,.5]
            }}
            transition={{
              repeat:Infinity,
              duration:2.5
            }}
          >
            Click the button or envelope to reveal the letter.
          </motion.p>

        </motion.div>

      </div>

      <LetterPopup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

    </section>
  );
};

export default LoveLetter;