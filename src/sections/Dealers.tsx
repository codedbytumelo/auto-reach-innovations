"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Dealers = () => {
  const [formData, setFormData] = useState({
    dealershipName: "",
    contactPerson: "",
    email: "",
    phone: "",
    location: "",
    dealershipType: "new",
    brands: "",
    salesVolume: "",
    lookingFor: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const data = new FormData();

      // Append all form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (value === null || value === undefined || value === '') return;
        data.append(key, String(value));
      });

      // Add extra fields
      data.append("subject", `Partnership Application: ${formData.dealershipName}`);
      data.append("_timestamp", new Date().toISOString());

      // Submit to Google Apps Script
      const response = await fetch('https://script.google.com/macros/s/AKfycbyGsX4YUrJsDbMdyEkuqqSIR-LGmSA36AVK-QMsQcPrgv4Nuv0MOIVxn0wVA3EK8qSv/exec', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          dealershipName: "",
          contactPerson: "",
          email: "",
          phone: "",
          location: "",
          dealershipType: "new",
          brands: "",
          salesVolume: "",
          lookingFor: "",
          message: ""
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Something went wrong. Please try again or contact us directly.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="for-dealerships" 
      className="relative py-16 sm:py-20 md:py-24 overflow-hidden scroll-mt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/dealerships-showcase.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center px-3 sm:px-4 py-2 mb-4 text-xs sm:text-sm font-medium text-[#ff5c5c] bg-white/80 backdrop-blur-sm rounded-full border border-[#ff5c5c]/20">
            PARTNER WITH US
          </div>
        </motion.div>

        {/* Content Container with Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative bg-black/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 overflow-hidden border border-white/10"
        >
          <div className="relative z-10">
            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 text-center"
            >
              Partner With Auto Reach
            </motion.h2>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center"
              >
                ✓ Thank you for your application! We'll be in touch within 24 hours.
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center"
              >
                ✗ {errorMessage}
              </motion.div>
            )}

            {/* Intro Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed text-center"
            >
              Connect with real car buyers in your area who are actively looking for vehicles like yours. Tell us about your dealership and we'll get you set up.
            </motion.p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Dealership Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="md:col-span-2"
                >
                  <label htmlFor="dealershipName" className="block text-sm font-medium text-white mb-2">
                    Dealership Name *
                  </label>
                  <input
                    type="text"
                    id="dealershipName"
                    name="dealershipName"
                    value={formData.dealershipName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                    placeholder="Your dealership name"
                  />
                </motion.div>

                {/* Contact Person */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="contactPerson" className="block text-sm font-medium text-white mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                    placeholder="Full name"
                  />
                </motion.div>

                {/* Email Address */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                    placeholder="your@email.com"
                  />
                </motion.div>

                {/* Phone Number */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                    placeholder="Your contact number"
                  />
                </motion.div>

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="location" className="block text-sm font-medium text-white mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                    placeholder="City / Region (e.g. Johannesburg, Pretoria, Cape Town)"
                  />
                </motion.div>

                {/* Type of Dealership */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="dealershipType" className="block text-sm font-medium text-white mb-2">
                    Type of Dealership
                  </label>
                  <select
                    id="dealershipType"
                    name="dealershipType"
                    value={formData.dealershipType}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/20 border border-white/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 disabled:opacity-50 appearance-none"
                  >
                    <option value="new" className="bg-gray-800">New Cars</option>
                    <option value="used" className="bg-gray-800">Used Cars</option>
                    <option value="both" className="bg-gray-800">Both</option>
                  </select>
                </motion.div>

                {/* Brands You Sell */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  viewport={{ once: true }}
                  className="md:col-span-2"
                >
                  <label htmlFor="brands" className="block text-sm font-medium text-white mb-2">
                    Brands You Sell (Optional)
                  </label>
                  <input
                    type="text"
                    id="brands"
                    name="brands"
                    value={formData.brands}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                    placeholder="e.g. Toyota, VW, BMW"
                  />
                </motion.div>

                {/* Average Monthly Sales Volume */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="salesVolume" className="block text-sm font-medium text-white mb-2">
                    Average Monthly Sales Volume (Optional)
                  </label>
                  <select
                    id="salesVolume"
                    name="salesVolume"
                    value={formData.salesVolume}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/20 border border-white/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 disabled:opacity-50 appearance-none"
                  >
                    <option value="" className="bg-gray-800">Select volume</option>
                    <option value="0-10" className="bg-gray-800">0–10 cars</option>
                    <option value="10-30" className="bg-gray-800">10–30 cars</option>
                    <option value="30-50" className="bg-gray-800">30–50 cars</option>
                    <option value="50+" className="bg-gray-800">50+ cars</option>
                  </select>
                </motion.div>

                {/* What Are You Looking For */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="lookingFor" className="block text-sm font-medium text-white mb-2">
                    What Are You Looking For? *
                  </label>
                  <select
                    id="lookingFor"
                    name="lookingFor"
                    value={formData.lookingFor}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/20 border border-white/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 disabled:opacity-50 appearance-none"
                  >
                    <option value="" className="bg-gray-800">Select an option</option>
                    <option value="buyers" className="bg-gray-800">More qualified buyers</option>
                    <option value="sales" className="bg-gray-800">Increase monthly sales</option>
                    <option value="expand" className="bg-gray-800">Expand into new areas</option>
                    <option value="other" className="bg-gray-800">Other</option>
                  </select>
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  viewport={{ once: true }}
                  className="md:col-span-2"
                >
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50"
                    placeholder="Tell us anything else about your dealership or goals…"
                  ></textarea>
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                viewport={{ once: true }}
                className="mt-8 text-center"
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className="px-8 py-4 bg-[#ff5c5c] text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Apply to Partner'}
                </motion.button>
              </motion.div>

              {/* Support Line */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                viewport={{ once: true }}
                className="text-center text-white/70 text-sm mt-6"
              >
                We'll review your application and get back to you shortly.
              </motion.p>
            </form>
          </div>
        </motion.div>

        {/* Bottom spacing */}
        <div className="mt-12 sm:mt-16"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
    </section>
  );
};

export default Dealers;