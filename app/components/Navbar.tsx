'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

interface NavbarProps {
  onMenuClick?: () => void
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
    onMenuClick?.()
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.brand}>
          <Link href='/'>
            <h1 className={styles.brandText}>NeptunSport</h1>
          </Link>
        </div>

        {/* Hamburger menu button for mobile */}
        <button
          className={styles.hamburgerButton}
          onClick={handleMenuClick}
          aria-label='Toggle menu'
        >
          <span
            className={`${styles.hamburgerLine} ${
              isMenuOpen ? styles.active : ''
            }`}
          ></span>
          <span
            className={`${styles.hamburgerLine} ${
              isMenuOpen ? styles.active : ''
            }`}
          ></span>
          <span
            className={`${styles.hamburgerLine} ${
              isMenuOpen ? styles.active : ''
            }`}
          ></span>
        </button>

        {/* Desktop Navigation items */}
        <div className={styles.navItems}>
          <Link href='/' className={styles.navLink}>
            Home
          </Link>
          <Link href='/sykkelverksted' className={styles.navLink}>
            Sykkelverksted
          </Link>
          <Link href='/contact' className={styles.navLink}>
            Kontakt
          </Link>
        </div>

        {/* Mobile Navigation menu */}
        <div
          className={`${styles.mobileMenu} ${
            isMenuOpen ? styles.mobileMenuOpen : ''
          }`}
        >
          <Link href='/' className={styles.mobileNavLink} onClick={closeMenu}>
            Home
          </Link>
          <Link
            href='/sykkelverksted'
            className={styles.mobileNavLink}
            onClick={closeMenu}
          >
            Sykkelverksted
          </Link>
          <Link href='/contact' className={styles.mobileNavLink} onClick={closeMenu}>
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  )
}
