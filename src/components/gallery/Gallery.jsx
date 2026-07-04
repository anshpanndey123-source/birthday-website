import "./Gallery.css";
import { useState } from "react";
import { motion } from "framer-motion";

import GalleryCard from "./GalleryCard";
import GalleryPopup from "./GalleryPopup";

import galleryData from "../../data/galleryData";

const Gallery = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  return (

    <section id="gallery" className="gallery">

      <div className="gallery-container">

        {/* Heading */}

        <motion.div
          className="gallery-heading"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <p className="gallery-small">
            OUR MEMORIES
          </p>

          <h2>
            Beautiful Moments
          </h2>

          <p className="gallery-description">
            Every photograph holds a story,
            every smile keeps a memory alive,
            and every moment with you is forever.
          </p>

        </motion.div>

        {/* Gallery */}

        <div className="gallery-grid">

          {galleryData.map((item, index) => (

            <GalleryCard

              key={item.id}

              item={item}

              index={index}

              onClick={() => setSelectedImage(index)}

            />

          ))}

        </div>

      </div>

      {/* Popup */}

      <GalleryPopup

        images={galleryData}

        selectedImage={selectedImage}

        setSelectedImage={setSelectedImage}

      />

    </section>

  );

};

export default Gallery;