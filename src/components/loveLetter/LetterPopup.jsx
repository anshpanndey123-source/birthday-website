

import "./LetterPopup.css";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

import loveLetter from "../../data/loveLetter";
import TypeWriter from "./TypeWriter";
import FloatingHearts from "./FloatingHearts";

const LetterPopup = ({ isOpen, onClose }) => {
    const [showSignature, setShowSignature] = useState(false);
    
  return (
    <AnimatePresence>

      {isOpen && (

        <motion.div
          className="letter-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .35 }}
          onClick={onClose}
        >
        <FloatingHearts />

          {/* Floating Glow */}

          <div className="popup-glow"></div>

          {/* Paper */}

        <motion.div
        className="letter-paper"

        initial={{
            opacity: 0,
            scale: 0.75,
            y: 100,
            rotateX: -12,
        }}

        animate={{
            opacity: 1,
            scale: [0.75, 1.03, 1],
            y: [100, -12, 0],
            rotateX: [-12, 2, 0],
        }}

        exit={{
            opacity: 0,
            scale: 0.85,
            y: 60,
        }}

        transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        }}

        onClick={(e) => e.stopPropagation()}
        >

            {/* Close */}

            <button
              className="popup-close"
              onClick={onClose}
            >
              <FaTimes />
            </button>

        <div className="letter-inner">

            <div className="corner top-left">❦</div>
            <div className="corner top-right">❦</div>

            <div className="corner bottom-left">❦</div>
            <div className="corner bottom-right">❦</div>

            {/* Date */}

            <p className="letter-date">

              05 July 2026

            </p>

            {/* Heading */}

            <h2>

              My Dearest Varshu ❤️

            </h2>

            {/* Divider */}

            <div className="paper-divider"></div>

            {/* Letter */}

            <div className="paper-content">

            <TypeWriter
                text={loveLetter.letter}
                speed={30}
                onComplete={() => setShowSignature(true)}
            />

            </div>

            {/* Footer */}

            {showSignature && (

            <motion.div
                className="paper-footer"

                initial={{
                    opacity:0,
                    y:20
                }}

                animate={{
                    opacity:1,
                    y:0
                }}

                transition={{
                    duration:.8
                }}
            >

                <p>Forever Yours,</p>

                <h3>Ansh ❤️</h3>

            </motion.div>

            )}
        </div>

          </motion.div>

        </motion.div>
        

      )}

    </AnimatePresence>
  );

};

export default LetterPopup;