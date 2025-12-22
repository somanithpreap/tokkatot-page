import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import tokkatotLogo from '../assets/tokkatot_logo.png';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="logo">
            <img src={tokkatotLogo} alt="Tokkatot Logo" className="logo-img" />
            <span className="logo-text">Tokkatot</span>
          </div>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={closeMobileMenu}>{t('nav.home')}</a></li>
            <li><a href="#about" onClick={closeMobileMenu}>{t('nav.about')}</a></li>
            <li><a href="#features" onClick={closeMobileMenu}>{t('nav.features')}</a></li>
            <li><a href="#team" onClick={closeMobileMenu}>{t('nav.team')}</a></li>
            <li><a href="#contact" onClick={closeMobileMenu}>{t('nav.contact')}</a></li>
            <li className="lang-switcher-mobile"><LanguageSwitcher /></li>
          </ul>
          <div className="desktop-lang-switcher">
            <LanguageSwitcher />
          </div>
          <button 
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
