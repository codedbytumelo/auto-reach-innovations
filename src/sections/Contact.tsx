// components/Contact.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    userType: "looking-for-car",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const userTypeText = formData.userType === "looking-for-car" ? "Looking for a car" : 
                        formData.userType === "dealership" ? "A dealership / business" : "Other";
    const subject = `Contact Form Submission from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nI am a: ${userTypeText}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:info@autoreach.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client with pre-filled information
    window.location.href = mailtoLink;
    
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      userType: "looking-for-car",
      message: ""
    });
  };

  return (
    <section id="contact" className="relative py-20 md:py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 mb-4 text-sm font-medium text-[#ff5c5c] bg-[#ff5c5c]/10 backdrop-blur-sm rounded-full border border-[#ff5c5c]/20">
            CONTACT US
          </div>
        </motion.div>

        {/* Content Container - Side by Side Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Need Help Finding the Right Car?
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Have questions or not sure where to start? We're here to help you find the right car — quickly and stress-free.
            </p>
            
            <p className="text-base text-neutral-600 mb-8 italic">
              You can also reach out if you're a dealership looking to partner with us.
            </p>
            
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">What We Can Help With</h3>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-[#ff5c5c] mr-3">→</span>
                <span className="text-neutral-700">Finding the right car based on your needs and budget</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff5c5c] mr-3">→</span>
                <span className="text-neutral-700">Understanding your options before making a decision</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff5c5c] mr-3">→</span>
                <span className="text-neutral-700">Connecting you with trusted dealerships</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff5c5c] mr-3">→</span>
                <span className="text-neutral-700">General questions about how Auto Reach works</span>
              </li>
            </ul>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <form onSubmit={handleSubmit} className="bg-[#ff5c5c] rounded-3xl p-8 md:p-10">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-lg text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent transition-all duration-300"
                  placeholder="Your full name"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-lg text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              {/* Phone Field (Optional) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-lg text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent transition-all duration-300"
                  placeholder="Your contact number"
                />
              </motion.div>

              {/* User Type Dropdown */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <label htmlFor="userType" className="block text-sm font-medium text-black mb-2">
                  I am a:
                </label>
                <select
                  id="userType"
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent transition-all duration-300"
                >
                  <option value="looking-for-car">Looking for a car</option>
                  <option value="dealership">A dealership / business</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-lg text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us what you're looking for or how we can help..."
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-black text-[#ff5c5c] font-semibold rounded-lg hover:bg-black/90 transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </motion.div>

              {/* Footer Note */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                viewport={{ once: true }}
                className="text-center text-black/70 text-sm mt-6"
              >
                We'll get back to you as soon as possible.
              </motion.p>
            </form>
          </motion.div>
        </div>

        {/* Bottom spacing */}
        <div className="mt-16"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
    </section>
  );
};

export default Contact;