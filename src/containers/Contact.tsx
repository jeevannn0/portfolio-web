"use client"
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { contactSection } from '@/lib/content/contact';
import { Button } from '@/components';
import { getSectionAnimation } from '@/styles/animations';
import '@/styles/glow.css';

const Contact = () => {
  const { subtitle, title, paragraphs } = contactSection;
  const [showForm, setShowForm] = useState(false);
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    const errors = { name: '', email: '', message: '' };
    if (!formValues.name) errors.name = 'Name is required';
    if (!formValues.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formValues.message) errors.message = 'Message is required';
    setFormErrors(errors);
    return !Object.values(errors).some(error => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const serviceId = 'service_deouikg';
      const templateId = 'template_8fbkwb5';
      const publicKey = 'XwiURPylzO9mFpmQe';

      const templateParams = {
        from_name: formValues.name,
        from_email: formValues.email,
        to_name: 'Web Wizard',
        message: formValues.message,
      };

      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log('Message sent successfully!', response);
          setFormValues({ name: '', email: '', message: '' });
          alert('Message sent successfully!');
          setShowForm(false);
        })
        .catch((error) => {
          console.error('Error sending Message:', error);
          alert('Error sending Message. Please try again later.');
        });
    }
  };

  return (
    <section
      id="contact"
      className="max-w-xl mx-auto text-center py-16 md:py-24 mb-20 md:mb-32"
      {...getSectionAnimation}
    >
      <p className="mb-3 font-mono text-sm capitalize text-accent">
        {subtitle}
      </p>
      <h2 className="heading-secondary mb-5">{title}</h2>

      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}

      <Button type="button" size="lg" onClick={() => setShowForm(true)} center className="mt-12">
        Say Hello
      </Button>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-200 p-8 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 glow-text text-gray-100 hover:text-gray-800"
              onClick={() => setShowForm(false)}
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4 text-gray-50">Contact Us</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-left text-sm font-medium text-gray-50" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  value={formValues.name}
                  onChange={handleInputChange}
                />
                {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-left text-sm font-medium text-gray-50" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  value={formValues.email}
                  onChange={handleInputChange}
                />
                {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-left text-sm font-medium text-gray-50" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  rows="4"
                  value={formValues.message}
                  onChange={handleInputChange}
                />
                {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
              </div>
              <button
                type="submit"  className="mt-12  bg-purple-500 text-white py-1 px-2  w-5px rounded-md"

              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
