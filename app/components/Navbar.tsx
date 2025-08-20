'use client';

import { useState } from 'react';
import styles from './Navbar.module.css';

interface NavbarProps {
  onMenuClick?: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuClick?.();
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.brand}>
          <h1 className={styles.brandText}>NeptunSport</h1>
        </div>

        {/* Hamburger menu button for mobile */}
        <button 
          className={styles.hamburgerButton}
          onClick={handleMenuClick}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.active : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.active : ''}`}></span>
        </button>

        {/* Desktop Navigation items */}
        <div className={styles.navItems}>
          <a href="/" className={styles.navLink}>Home</a>
          <a href="#" className={styles.navLink}>About</a>
          <a href="#" className={styles.navLink}>Services</a>
          <a href="/sykkelverksted" className={styles.navLink}>Sykkelverksted</a>
          <a href="#" className={styles.navLink}>Contact</a>
        </div>

        {/* Mobile Navigation menu */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <a href="/" className={styles.mobileNavLink} onClick={closeMenu}>Home</a>
          <a href="#" className={styles.mobileNavLink} onClick={closeMenu}>About</a>
          <a href="#" className={styles.mobileNavLink} onClick={closeMenu}>Services</a>
          <a href="/sykkelverksted" className={styles.mobileNavLink} onClick={closeMenu}>Sykkelverksted</a>
          <a href="#" className={styles.mobileNavLink} onClick={closeMenu}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
