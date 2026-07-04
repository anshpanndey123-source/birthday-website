import "./GalleryPopup.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

import FloatingHearts from "./FloatingHearts";

const GalleryPopup = ({
  images,
  selectedImage,
  setSelectedImage,
}) => {

  if (selectedImage === null) return null;

  const item = images[selectedImage];

  return (

    <AnimatePresence>

      <motion.div
        className="gallery-popup-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .35 }}
        onClick={() => setSelectedImage(null)}
      >

        <FloatingHearts />

        <motion.div
          className="gallery-popup"

          initial={{
            opacity: 0,
            scale: .85,
            y: 50,
          }}

          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}

          exit={{
            opacity: 0,
            scale: .85,
            y: 50,
          }}

          transition={{
            duration: .45,
          }}

          onClick={(e) => e.stopPropagation()}
        >

          {/* Close */}

          <button
            className="popup-close"
            onClick={() => setSelectedImage(null)}
          >
            <FaTimes />
          </button>

          {/* Image */}

          <div className="popup-image">

            <img
              src={item.image}
              alt={item.title}
            />

          </div>

          {/* Content */}

          <div className="popup-content">

            <h2>
              {item.title}
            </h2>

            <p>
              {item.description}
            </p>

            <div className="popup-meta">

              <span>

                <FaCalendarAlt />

                {item.date}

              </span>

              <span>

                <FaMapMarkerAlt />

                {item.location}

              </span>

            </div>

          </div>

        </motion.div>

      </motion.div>

    </AnimatePresence>

  );

};

export default GalleryPopup;