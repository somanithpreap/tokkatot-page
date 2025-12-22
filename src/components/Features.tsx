import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Features.css';

interface FeatureCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  features: string[];
  index: number;
}

const FeatureCard = ({ icon, title, description, features, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className="feature-card" style={{ transitionDelay: `${index * 0.1}s` }}>
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="feature-list">
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

const Features = () => {
  const { t } = useTranslation();
  
  const featuresData = [
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="25" fill="#20A39E" opacity="0.2"/>
          <path d="M30 15C21.716 15 15 21.716 15 30C15 38.284 21.716 45 30 45C38.284 45 45 38.284 45 30C45 21.716 38.284 15 30 15Z" stroke="#20A39E" strokeWidth="2"/>
          <path d="M30 22V30L36 36" stroke="#20A39E" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: t('features.feature1Title'),
      description: t('features.feature1Desc'),
      features: [t('features.feature1Item1'), t('features.feature1Item2'), t('features.feature1Item3')]
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="25" fill="#FFBA49" opacity="0.2"/>
          <path d="M25 20H35C37.209 20 39 21.791 39 24V36C39 38.209 37.209 40 35 40H25C22.791 40 21 38.209 21 36V24C21 21.791 22.791 20 25 20Z" stroke="#FFBA49" strokeWidth="2"/>
          <path d="M30 26V34M26 30H34" stroke="#FFBA49" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: t('features.feature2Title'),
      description: t('features.feature2Desc'),
      features: [t('features.feature2Item1'), t('features.feature2Item2'), t('features.feature2Item3')]
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="25" fill="#EF5B5B" opacity="0.2"/>
          <rect x="18" y="25" width="24" height="12" rx="2" stroke="#EF5B5B" strokeWidth="2"/>
          <path d="M22 28H38M22 31H38M22 34H38" stroke="#EF5B5B" strokeWidth="1.5"/>
          <path d="M38 31L42 31" stroke="#EF5B5B" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: t('features.feature3Title'),
      description: t('features.feature3Desc'),
      features: [t('features.feature3Item1'), t('features.feature3Item2'), t('features.feature3Item3')]
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="25" fill="#20A39E" opacity="0.2"/>
          <path d="M30 20C24.477 20 20 24.477 20 30C20 35.523 24.477 40 30 40C35.523 40 40 35.523 40 30C40 24.477 35.523 20 30 20Z" stroke="#20A39E" strokeWidth="2"/>
          <circle cx="30" cy="30" r="3" fill="#EF5B5B"/>
          <path d="M30 23V27M30 33V37M23 30H27M33 30H37" stroke="#20A39E" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: t('features.feature4Title'),
      description: t('features.feature4Desc'),
      features: [t('features.feature4Item1'), t('features.feature4Item2'), t('features.feature4Item3')]
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('features.title')}</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            {t('features.subtitle')}
          </p>
        </div>
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>

        <div className="central-hub">
          <div className="hub-content">
            <div className="hub-icon">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="35" fill="#20A39E" opacity="0.1"/>
                <circle cx="40" cy="40" r="25" stroke="#20A39E" strokeWidth="2"/>
                <circle cx="40" cy="40" r="8" fill="#FFBA49"/>
                <circle cx="40" cy="15" r="5" fill="#EF5B5B"/>
                <circle cx="40" cy="65" r="5" fill="#EF5B5B"/>
                <circle cx="15" cy="40" r="5" fill="#EF5B5B"/>
                <circle cx="65" cy="40" r="5" fill="#EF5B5B"/>
                <path d="M40 15L40 32M40 48L40 65M15 40L32 40M48 40L65 40" stroke="#20A39E" strokeWidth="2"/>
              </svg>
            </div>
            <div className="hub-text">
              <h3>{t('features.hubTitle')}</h3>
              <p>
                {t('features.hubDesc')}
              </p>
              <div className="hub-features">
                <span className="hub-tag">{t('features.hubTag1')}</span>
                <span className="hub-tag">{t('features.hubTag2')}</span>
                <span className="hub-tag">{t('features.hubTag3')}</span>
                <span className="hub-tag">{t('features.hubTag4')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
