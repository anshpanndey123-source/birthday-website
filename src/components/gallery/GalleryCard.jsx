import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const GalleryCard = ({ item, index, onClick }) => {
  return (
    <motion.div
      className="gallery-card"
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      onClick={onClick}
    >
      {/* Image */}

      <img
        src={item.image}
        alt={item.title}
      />

      {/* Overlay */}

      <div className="gallery-overlay">

        <div className="gallery-overlay-content">

          <div className="gallery-icon">

            <FaHeart />

          </div>

          <h3>
            {item.title}
          </h3>

          <span>
            View Memory
          </span>

        </div>

      </div>

    </motion.div>
  );
};

export default GalleryCard;