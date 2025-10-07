"use client";

import React, { useState } from 'react';
// Import Lucide icons for consistency
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

// --- Data for the "Get In Touch" section ---
const contactDetails = [
  {
    Icon: MapPin,
    title: "Our Office",
    details: [
      "123 Construction Plaza, Cantonment Area",
      "Varanasi, Uttar Pradesh 221002, India"
    ],
  },
  {
    Icon: Phone,
    title: "Phone",
    details: ["+91 9876543210", "+91 9876543211"],
  },
  {
    Icon: Mail,
    title: "Email",
    details: ["info@drconstructions.com", "projects@drconstructions.com"],
  },
  {
    Icon: Clock,
    title: "Business Hours",
    details: [
      "Monday - Saturday: 9:00 AM - 6:00 PM",
      "Sunday: 10:00 AM - 4:00 PM"
    ],
  },
];

const ContactSection = () => {
  // State for the contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    
    if (name === 'message') {
      setCharCount(value.length);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    console.log("Form Submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
   
    setFormData({ name: '', email: '', phone: '', message: '' });
    setCharCount(0);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let&apos;s Build Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your construction or design project? Get in touch with us and let&apos;s discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Get In Touch & Map */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            <div className="space-y-6">
              {contactDetails.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.Icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600">
                      {item.details.map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Google Maps Embed */}
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230663.8254492468!2d82.83024889753171!3d25.32133596788874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710b252b504!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1673434857591!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>

         
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder:text-gray-400 text-sm" placeholder="Enter your full name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder:text-gray-400 text-sm" placeholder="Enter your email address" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder:text-gray-400 text-sm" placeholder="Enter your phone number" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required maxLength={500} rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm placeholder:text-gray-400 resize-none" placeholder="Tell us about your project requirements..."></textarea>
                  <div className="text-right text-xs text-gray-500 mt-1">{charCount}/500 characters</div>
                </div>
                <button type="submit" className="font-semibold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl px-8 py-4 text-lg w-full">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;