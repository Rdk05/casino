import React, { useState } from 'react';
import "../app/globals.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-[#2C1E35] text-white min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">
          Contact <span className="text-orange-400">Us</span>
        </h2>
        <p className="text-center text-gray-300 mb-10">
          We love to hear from you! Drop us a message and we will get back as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="bg-[#3A2C47] p-8 rounded-lg shadow-lg space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-semibold">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#2C1E35] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-semibold">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#2C1E35] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 bg-[#2C1E35] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition-colors px-4 py-2 rounded-full text-white font-semibold"
          >
            Send Message
          </button>
        </form>

        <div className="text-center text-gray-400 mt-10 space-y-2">
          <p>Email: <span className="text-white">support@rummyzone.com</span></p>
          <p>Phone: <span className="text-white">+91 98765 43210</span></p>
          <p>Support: 24/7 Live Chat Available</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
