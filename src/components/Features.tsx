import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ClimateControlIcon,
  AutoFeedingIcon,
  ManureConveyorIcon,
  AIDiseaseDetectionIcon,
  CentralHubIcon
} from './AnimatedIcons';
import './AnimatedIcons.css';
import './Features.css';

interface FeatureItemProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  features: string[];
  index: number;
  colorClass: string;
  isReversed: boolean;
}

const FeatureItem = ({ icon, title, description, features, index, colorClass, isReversed }: FeatureItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={itemRef} 
      className={`feature-item ${isReversed ? 'reversed' : ''} ${colorClass}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="feature-visual">
        <div className="feature-icon-large">
          {icon}
        </div>
        <div className="feature-number">
          <span>0{index + 1}</span>
        </div>
      </div>
      
      <div className="feature-details">
        <div className="feature-header">
          <h3>{title}</h3>
          <div className={`feature-line ${colorClass}`}></div>
        </div>
        <p className="feature-description">{description}</p>
        <div className="feature-highlights">
          {features.map((feature, idx) => (
            <div key={idx} className="highlight-item">
              <div className={`highlight-dot ${colorClass}`}></div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const { t } = useTranslation();
  
  const featuresData = [
    {
      icon: <ClimateControlIcon />,
      title: t('features.feature1Title'),
      description: t('features.feature1Desc'),
      features: [t('features.feature1Item1'), t('features.feature1Item2'), t('features.feature1Item3')],
      colorClass: 'color-primary'
    },
    {
      icon: <AutoFeedingIcon />,
      title: t('features.feature2Title'),
      description: t('features.feature2Desc'),
      features: [t('features.feature2Item1'), t('features.feature2Item2'), t('features.feature2Item3')],
      colorClass: 'color-secondary'
    },
    {
      icon: <ManureConveyorIcon />,
      title: t('features.feature3Title'),
      description: t('features.feature3Desc'),
      features: [t('features.feature3Item1'), t('features.feature3Item2'), t('features.feature3Item3')],
      colorClass: 'color-accent'
    },
    {
      icon: <AIDiseaseDetectionIcon />,
      title: t('features.feature4Title'),
      description: t('features.feature4Desc'),
      features: [t('features.feature4Item1'), t('features.feature4Item2'), t('features.feature4Item3')],
      colorClass: 'color-ai'
    }
  ];

  const featureImages = [
    'cooling_fan.jpg',
    'heater.jpg',
    'ventilation.jpg',
    'feeding.jpg',
    'watering.jpg',
    'water_tank.jpg',
    'manure_conveyor_system.jpg',
    'coop_tray.jpg'
  ];

  return (
    <section id="features" className="features">
      <div className="features-background">
        {featureImages.map((image, index) => (
          <img 
            key={index}
            src={new URL(`../assets/${image}`, import.meta.url).href}
            alt={`Feature ${index + 1}`}
            className="feature-bg-image"
          />
        ))}
      </div>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L12 8L18 9L14 13L15 19L10 16L5 19L6 13L2 9L8 8L10 2Z" fill="#FFBA49"/>
            </svg>
            <span>{t('features.badge') || 'Our Technology'}</span>
          </div>
          <h2 className="section-title">{t('features.title')}</h2>
          <p className="section-subtitle">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="features-showcase">
          <div className="connecting-line"></div>
          {featuresData.map((feature, index) => (
            <FeatureItem 
              key={index} 
              {...feature} 
              index={index}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>

        <div className="central-hub">
          <div className="hub-glow"></div>
          <div className="hub-content">
            <div className="hub-icon-wrapper">
              <CentralHubIcon />
            </div>
            <div className="hub-text">
              <h3>{t('features.hubTitle')}</h3>
              <p className="hub-description">
                {t('features.hubDesc')}
              </p>
              <div className="hub-features">
                <div className="hub-tag">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2V8M8 8L11 11M8 8L5 11M8 8V14" stroke="#20A39E" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>{t('features.hubTag1')}</span>
                </div>
                <div className="hub-tag">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="#20A39E" strokeWidth="2"/>
                    <circle cx="8" cy="8" r="2" fill="#20A39E"/>
                  </svg>
                  <span>{t('features.hubTag2')}</span>
                </div>
                <div className="hub-tag">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8H14M8 2V14" stroke="#20A39E" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>{t('features.hubTag3')}</span>
                </div>
                <div className="hub-tag">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="4" width="12" height="8" rx="2" stroke="#20A39E" strokeWidth="2"/>
                    <path d="M6 8H10" stroke="#20A39E" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>{t('features.hubTag4')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
