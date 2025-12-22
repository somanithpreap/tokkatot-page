import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button
        className={`lang-btn ${i18n.language === 'km' ? 'active' : ''}`}
        onClick={() => changeLanguage('km')}
      >
        ខ្មែរ
      </button>
      <button
        className={`lang-btn ${i18n.language === 'zh' ? 'active' : ''}`}
        onClick={() => changeLanguage('zh')}
      >
        中文
      </button>
    </div>
  );
};

export default LanguageSwitcher;
