import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            {t('hero.title')}<br />
            <span className="highlight">{t('hero.highlight')}</span>
          </h1>
          <p className="hero-subtitle">
            {t('hero.subtitle')}
          </p>
          <div className="hero-buttons">
            <a href="#features" className="btn btn-primary">{t('hero.exploreBtn')}</a>
            <a href="#contact" className="btn btn-secondary">{t('hero.contactBtn')}</a>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>{t('hero.scrollDown')}</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
