import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('about.title')}</h2>
          <div className="title-underline"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>{t('about.heading')}</h3>
            <p dangerouslySetInnerHTML={{ __html: t('about.paragraph1') }} />
            <p dangerouslySetInnerHTML={{ __html: t('about.paragraph2') }} />
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-icon">🌾</div>
                <h4>{t('about.stat1Title')}</h4>
                <p>{t('about.stat1Desc')}</p>
              </div>
              <div className="stat-item">
                <div className="stat-icon">💰</div>
                <h4>{t('about.stat2Title')}</h4>
                <p>{t('about.stat2Desc')}</p>
              </div>
              <div className="stat-item">
                <div className="stat-icon">🎓</div>
                <h4>{t('about.stat3Title')}</h4>
                <p>{t('about.stat3Desc')}</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none">
                <rect width="400" height="400" fill="#20A39E" opacity="0.1"/>
                <circle cx="200" cy="200" r="80" fill="#20A39E" opacity="0.3"/>
                <circle cx="200" cy="200" r="50" fill="#FFBA49" opacity="0.5"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
