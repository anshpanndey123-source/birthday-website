import "./BirthdayWish.css";
import { motion } from "framer-motion";
import FloatingBalloons from "./FloatingBalloons";

const BirthdayWish = () => {
  return (
    <section id="birthday" className="birthday-section">
      <FloatingBalloons />

      <div className="birthday-glow"></div>

      <div className="birthday-container">

        <p className="birthday-small-title">
          A SPECIAL DAY
        </p>

<motion.h2
  className="birthday-title"
  initial={{
    opacity: 0,
    y: 80,
    scale: .9,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  viewport={{ once: true }}
  transition={{
    duration: 1,
    ease: "easeOut",
  }}
>
  Happy Birthday
</motion.h2>

<motion.h3
  className="birthday-subtitle"
  initial={{
    opacity: 0,
    y: 30,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{ once: true }}
  transition={{
    delay: .4,
    duration: .8,
  }}
>
  My Beautiful Princess ❤️
</motion.h3>

        <div className="birthday-divider"></div>

        <div className="birthday-card">

          <p>
            Today is not just another day...

            <br /><br />

            It is the day when the most beautiful soul
            came into this world.

            <br /><br />

            I wish you endless happiness,
            countless smiles,
            good health,
            success,
            and every dream you've ever wished for.

            <br /><br />

            Happy Birthday ❤️
          </p>

        </div>

        <div className="birthday-quote">

          ✨ May your smile always shine brighter than the stars.

        </div>

      </div>

    </section>
  );
};

export default BirthdayWish;