import React, { useState } from 'react';
import './Button.css';

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    workEmail: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className={`contact-form-container ${className}`}>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-field">
          <label htmlFor="name" className="form-label">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-input"
            placeholder="John Doe"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="workEmail" className="form-label">
            Work email *
          </label>
          <input
            type="email"
            id="workEmail"
            name="workEmail"
            value={formData.workEmail}
            onChange={handleInputChange}
            className="form-input"
            placeholder="example@email.com"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="company" className="form-label">
            Company *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="form-input"
            placeholder="ACME Inc."
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="message" className="form-label">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="form-textarea"
            placeholder="Tell us about your goals"
            rows={4}
            required
          />
        </div>

        <button type="submit" className="form-submit-button">
          Book a Demo
        </button>
      </form>
    </div>
  );
};

export default ContactForm;