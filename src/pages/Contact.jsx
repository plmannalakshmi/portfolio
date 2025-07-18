import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form handling logic
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! We'll get back to you soon.");
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Name:
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Email:
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: '20px' }}>
          Message:
          <textarea
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          ></textarea>
        </label>

        <button type="submit" style={{ padding: '10px 20px' }}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
