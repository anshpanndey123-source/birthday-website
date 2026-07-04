import "./Navbar.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="navbar-container">

          {/* Logo */}
          <div className="navbar-logo">

            <div className="logo-circle">
              <FaHeart />
            </div>

            <div className="logo-text">
              <h2>Birthday</h2>
              <p>A Magical Celebration</p>
            </div>

          </div>

          {/* Desktop Menu */}
          <ul className="navbar-menu">

            <li><a href="#hero">Home</a></li>

            <li><a href="#gallery">Gallery</a></li>

            <li><a href="#timeline">Timeline</a></li>

            <li><a href="#letter">Letter</a></li>

          </ul>

          {/* Desktop Button */}
          <button className="navbar-btn">
            Celebrate
          </button>

          {/* Mobile Toggle */}

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </motion.nav>

      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: .35 }}
          >

            <a href="#hero" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </a>

            <a href="#love-letter" onClick={() => setMenuOpen(false)}>
              Love Letter
            </a>

            <a href="#birthday" onClick={() => setMenuOpen(false)}>
              Birthday Wish
            </a>

            {/* <button
              className="mobile-btn"
              onClick={() => setMenuOpen(false)}
            >
              Celebrate
            </button> */}

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
};

export default Navbar;