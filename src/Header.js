import React, { useEffect, useState, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOutsideClick = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      event.target.id !== 'menu-icon' &&
      event.target.parentElement.id !== 'menu-icon'
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <header>
      <section id="home">
        <div className="brand">GYMBRO</div>
      </section>
      <nav>
        {windowWidth > 768 ? (
          <ul>
            <li>
              <a href="#home" className="nav">HOME</a>
            </li>
            <li>
              <a href="#articles" className="nav">ARTICLES</a>
            </li>
            <li>
              <a href="#exercises" className="nav">EXERCISES</a>
            </li>
            <li>
              <a href="#build-workout" className="nav">BUILD WORKOUT</a>
            </li>
            <li>
              <a href="#contact-us" className="nav">CONTACT US</a>
            </li>
          </ul>
        ) : (
          <div className="responsive-nav">
            <div
              id="menu-icon"
              className="menu-icon"
              onClick={toggleDropdown}
            >
              {showDropdown ? <FaTimes /> : <FaBars />}
            </div>
            {showDropdown && (
              <ul className="dropdown-menu" ref={dropdownRef}>
                <li>
                  <a href="#home" className="nav">HOME</a>
                </li>
                <li>
                  <a href="#articles" className="nav">ARTICLES</a>
                </li>
                <li>
                  <a href="#exercises" className="nav">EXERCISES</a>
                </li>
                <li>
                  <a href="#build-workout" className="nav">BUILD WORKOUT</a>
                </li>
                <li>
                  <a href="#contact-us" className="nav">CONTACT US</a>
                </li>
              </ul>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;