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

  const [errors, setErrors] = useState({
    name: '',
    workEmail: '',
    company: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    workEmail: false,
    company: false,
    message: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = (name: string, value: string) => {
    let error = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Please enter your name.';
        break;
      case 'workEmail':
        if (!value.trim()) {
          error = 'A valid work email is required.';
        } else if (!validateEmail(value)) {
          error = 'A valid work email is required.';
        }
        break;
      case 'company':
        if (!value.trim()) error = 'Company name cannot be empty.';
        break;
      case 'message':
        if (!value.trim()) error = 'Message field must be filled out.';
        break;
    }
    
    return error;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (touched[name as keyof typeof touched]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      name: validateField('name', formData.name),
      workEmail: validateField('workEmail', formData.workEmail),
      company: validateField('company', formData.company),
      message: validateField('message', formData.message)
    };

    // Mark all fields as touched
    setTouched({
      name: true,
      workEmail: true,
      company: true,
      message: true
    });

    setErrors(newErrors);

    // Check if form is valid
    const isValid = Object.values(newErrors).every(error => error === '');
    
    if (isValid) {
      sendEmail();
    }
  };

  const sendEmail = async () => {
    setIsSubmitting(true);
    
    try {
      // Using Formspree to send emails directly to Gmail
      const response = await fetch('https://formspree.io/f/xdakyzyv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.workEmail,
          company: formData.company,
          message: formData.message,
          _replyto: formData.workEmail,
          _subject: `New Contact Form Submission from ${formData.name}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        console.log('Email sent successfully');
        setIsSubmitted(true);
        
        // Reset form
        setFormData({
          name: '',
          workEmail: '',
          company: '',
          message: ''
        });
        
        setTouched({
          name: false,
          workEmail: false,
          company: false,
          message: false
        });
      } else {
        throw new Error('Failed to send email');
      }
      
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`contact-form-container ${className}`}>
      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <div className="form-field">
          <label htmlFor="name" className="form-label">
            Name <span className="required-star">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={`form-input ${errors.name && touched.name ? 'form-input-error' : ''}`}
            placeholder="John Doe"
          />
          {errors.name && touched.name && <span className="form-error">{errors.name}</span>}
        </div>

        <div className="form-field">
          <label htmlFor="workEmail" className="form-label">
            Work email <span className="required-star">*</span>
          </label>
          <input
            type="email"
            id="workEmail"
            name="workEmail"
            value={formData.workEmail}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={`form-input ${errors.workEmail && touched.workEmail ? 'form-input-error' : ''}`}
            placeholder="example@email.com"
          />
          {errors.workEmail && touched.workEmail && <span className="form-error">{errors.workEmail}</span>}
        </div>

        <div className="form-field">
          <label htmlFor="company" className="form-label">
            Company <span className="required-star">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={`form-input ${errors.company && touched.company ? 'form-input-error' : ''}`}
            placeholder="ACME Inc."
          />
          {errors.company && touched.company && <span className="form-error">{errors.company}</span>}
        </div>

        <div className="form-field">
          <label htmlFor="message" className="form-label">
            Message <span className="required-star">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className={`form-textarea ${errors.message && touched.message ? 'form-input-error' : ''}`}
            placeholder="Tell us about your goals"
            rows={4}
          />
          {errors.message && touched.message && <span className="form-error">{errors.message}</span>}
        </div>

        <button type="submit" className="form-submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Book a Demo'}
        </button>
        
        {isSubmitted && (
          <div className="form-success-message">
            <div className="success-icon"></div>
            <span className="success-text">
              Your response has been successfully submitted. The TechRow team will reach out to you shortly.
            </span>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;