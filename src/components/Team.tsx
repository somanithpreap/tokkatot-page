import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Team.css';
import yungSreyneangImg from '../assets/yung_sreyneang.png';
import preapSomanithImg from '../assets/preap_somanith.png';
import sopheaDarikaImg from '../assets/sophea_darika.png';
import virakRangseyImg from '../assets/virak_rangsey.png';
import sunHengImg from '../assets/sun_heng.png';
import kaemSreyneathImg from '../assets/kaem_sreyneath.png';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const Team = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const membersRef = useRef<(HTMLDivElement | null)[]>([]);

  const teamMembers: TeamMember[] = [
    {
      name: t('team.member1Name'),
      role: t('team.member1Role'),
      bio: t('team.member1Bio'),
      image: yungSreyneangImg
    },
    {
      name: t('team.member2Name'),
      role: t('team.member2Role'),
      bio: t('team.member2Bio'),
      image: preapSomanithImg
    },
    {
      name: t('team.member3Name'),
      role: t('team.member3Role'),
      bio: t('team.member3Bio'),
      image: sopheaDarikaImg
    },
    {
      name: t('team.member4Name'),
      role: t('team.member4Role'),
      bio: t('team.member4Bio'),
      image: virakRangseyImg
    },
    {
      name: t('team.member5Name'),
      role: t('team.member5Role'),
      bio: t('team.member5Bio'),
      image: sunHengImg
    },
    {
      name: t('team.member6Name'),
      role: t('team.member6Role'),
      bio: t('team.member6Bio'),
      image: kaemSreyneathImg
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      membersRef.current.forEach((member) => {
        if (!member) return;

        const rect = member.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate when element is in optimal viewing position (center of screen)
        const elementCenter = rect.top + rect.height / 2;
        const screenCenter = windowHeight / 2;
        
        // Distance from center (0 = perfectly centered, 1 = at edge)
        const distanceFromCenter = Math.abs(elementCenter - screenCenter) / (windowHeight / 2);
        
        // Invert so 1 = centered (fully visible), 0 = at edge (invisible)
        const centerProgress = Math.max(0, 1 - distanceFromCenter);
        
        // Smooth easing
        const ease = centerProgress < 0.5 
          ? 2 * centerProgress * centerProgress 
          : 1 - Math.pow(-2 * centerProgress + 2, 2) / 2;

        // Apply transforms - images are CLEAREST when centered
        const translateY = (1 - ease) * 40;
        const scale = 0.92 + (ease * 0.08);
        const opacity = 0.3 + (ease * 0.7); // Start at 0.3, go to 1.0 when centered

        member.style.transform = `translateY(${translateY}px) scale(${scale})`;
        member.style.opacity = opacity.toString();
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="team" className="team" ref={sectionRef}>
      <div className="team-background">
        <div className="light-beam"></div>
      </div>
      
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('team.title')}</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">{t('team.subtitle')}</p>
        </div>

        <div className="team-showcase">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              ref={(el) => { membersRef.current[index] = el; }}
              className={`team-member ${index % 2 === 0 ? 'left' : 'right'}`}
              style={{
                opacity: 0,
                transform: 'translateY(100px) scale(0.8)'
              }}
            >
              <div className="member-card">
                <div className="member-portrait">
                  {member.image ? (
                    <img src={member.image} alt={member.name} />
                  ) : (
                    <div className="portrait-placeholder">
                      <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                        <circle cx="100" cy="80" r="40" fill="url(#gradient1)" opacity="0.3"/>
                        <path d="M40 160C40 130 65 115 100 115C135 115 160 130 160 160" stroke="url(#gradient2)" strokeWidth="6" strokeLinecap="round"/>
                        <circle cx="100" cy="80" r="40" stroke="url(#gradient2)" strokeWidth="3"/>
                        <defs>
                          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#20A39E" />
                            <stop offset="100%" stopColor="#FFBA49" />
                          </linearGradient>
                          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#20A39E" />
                            <stop offset="50%" stopColor="#FFBA49" />
                            <stop offset="100%" stopColor="#EF5B5B" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  )}
                </div>

                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
