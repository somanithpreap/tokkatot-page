import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    const heroSection = heroRef.current;
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove);
      return () => heroSection.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-bg-animation"></div>
      <div className="hero-particles"></div>
      <div className="hero-overlay" ref={cursorRef}></div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFBA49"/>
            </svg>
            <span>{t('hero.badge') || 'Smart Farming Innovation'}</span>
          </div>
          
          <h1 className="hero-title">
            <span className="title-line">{t('hero.title')}</span>
            <span className="highlight">{t('hero.highlight')}</span>
          </h1>
          
          <p className="hero-subtitle">
            {t('hero.subtitle')}
          </p>
          
          <div className="hero-features-quick">
            <div className="quick-feature">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" stroke="#20A39E" strokeWidth="2" fill="none"/>
                <path d="M16 8V16L20 20" stroke="#20A39E" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>{t('hero.feature1') || '24/7 Monitoring'}</span>
            </div>
            <div className="quick-feature">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4L20 12L28 13L22 19L24 28L16 23L8 28L10 19L4 13L12 12L16 4Z" fill="#FFBA49"/>
              </svg>
              <span>{t('hero.feature2') || 'AI-Powered'}</span>
            </div>
            <div className="quick-feature">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="2" fill="#EF5B5B"/>
                <circle cx="16" cy="16" r="6" stroke="#EF5B5B" strokeWidth="2" fill="none"/>
                <circle cx="16" cy="16" r="10" stroke="#EF5B5B" strokeWidth="1.5" fill="none" opacity="0.5"/>
              </svg>
              <span>{t('hero.feature3') || 'Locally Hosted'}</span>
            </div>
          </div>
          
          <div className="hero-buttons">
            <a href="#features" className="btn btn-primary">
              <span>{t('hero.exploreBtn')}</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>{t('hero.contactBtn')}</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 4H17C17.5523 4 18 4.44772 18 5V15C18 15.5523 17.5523 16 17 16H3C2.44772 16 2 15.5523 2 15V5C2 4.44772 2.44772 4 3 4Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 5L10 11L18 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>{t('hero.scrollDown')}</span>
      </div>
    </section>
  );
};

export default Hero;
