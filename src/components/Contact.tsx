import { type FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
    alert(t('contact.successMsg'));
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('contact.title')}</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            {t('contact.subtitle')}
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>{t('contact.infoTitle')}</h3>
            <p>{t('contact.infoDesc')}</p>
            
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>{t('contact.email')}</h4>
                  <a href="mailto:tokkatot@outlook.com">tokkatot@outlook.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h4>{t('contact.phone')}</h4>
                  <a href="tel:+85561747269">+855 61 747 269</a>
                  <p style={{margin: 0, fontSize: '0.875rem', color: 'var(--text-light)'}}>CEO: Yung Sreyneang</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>{t('contact.location')}</h4>
                  <p>{t('contact.locationValue')}</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('contact.nameLabel')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('contact.emailLabel')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">{t('contact.phoneLabel')}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('contact.messageLabel')}</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">{t('contact.sendBtn')}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
