//Customers.tsx
// components/Customers.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Define a type for the form data
interface FormData {
  // Your Details
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  
  // Car Preferences
  vehicleType: string;
  preferredBrands: string[];
  condition: string;
  
  // Budget & Timeline
  budgetRange: string;
  whenToBuy: string;
  paymentMethod: string;
  
  // Contact Preferences
  contactMethod: string;
  
  // Buying Intent
  seriousness: string;
  
  // Notes
  notes: string;
  
  // Trade-In
  hasTradeIn: string;
  tradeInMakeModel: string;
  tradeInMileage: string;
  tradeInCondition: string;
  hasFinance: string;
  financeHouse: string;
  settlementAmount: string;
  
  // Consent
  consent: boolean;
}

const Customers = () => {
  const [formData, setFormData] = useState<FormData>({
    // Your Details
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    
    // Car Preferences
    vehicleType: "",
    preferredBrands: [],
    condition: "",
    
    // Budget & Timeline
    budgetRange: "",
    whenToBuy: "",
    paymentMethod: "",
    
    // Contact Preferences
    contactMethod: "",
    
    // Buying Intent
    seriousness: "",
    
    // Notes
    notes: "",
    
    // Trade-In
    hasTradeIn: "",
    tradeInMakeModel: "",
    tradeInMileage: "",
    tradeInCondition: "",
    hasFinance: "",
    financeHouse: "",
    settlementAmount: "",
    
    // Consent
    consent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const brandOptions: string[] = [
    "Audi", "Isuzu", "VW", "BYD", "Mazda", "Suzuki", "Ford"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else if (name === "preferredBrands") {
      // Handle multi-select for brands
      const selectedBrand = value;
      setFormData(prev => {
        // Ensure preferredBrands is always an array
        const brands = Array.isArray(prev.preferredBrands) ? [...prev.preferredBrands] : [];
        if (brands.includes(selectedBrand)) {
          // Remove brand if already selected
          return {
            ...prev,
            preferredBrands: brands.filter(brand => brand !== selectedBrand)
          };
        } else if (brands.length < 3) {
          // Add brand if less than 3 selected
          return {
            ...prev,
            preferredBrands: [...brands, selectedBrand]
          };
        }
        return prev; // Don't add if already 3 selected
      });
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Submit to your LOCAL backend
      const response = await fetch('http://localhost:3001/api/customer-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // The backend handles the array of brands
      });

      const result = await response.json(); // Your backend sends JSON

      if (result.success) { // Check the success flag from your backend
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          fullName: "",
          phoneNumber: "",
          emailAddress: "",
          vehicleType: "",
          preferredBrands: [],
          condition: "",
          budgetRange: "",
          whenToBuy: "",
          paymentMethod: "",
          contactMethod: "",
          seriousness: "",
          notes: "",
          hasTradeIn: "",
          tradeInMakeModel: "",
          tradeInMileage: "",
          tradeInCondition: "",
          hasFinance: "",
          financeHouse: "",
          settlementAmount: "",
          consent: false
        });
      } else {
        throw new Error(result.message || 'Failed to submit form');
      }
    } catch (error: any) {
      setSubmitStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="find-my-car" className="relative py-20 md:py-24 overflow-hidden scroll-mt-20">
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
            FIND YOUR CAR
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
              Find Your Perfect Car
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Tell us what you're looking for, and we'll connect you with trusted dealerships that have exactly what you need — no endless searching, no pressure, just real options from real sellers.
            </p>
            
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">Why Choose Auto Reach?</h3>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-[#ff5c5c] mr-3">→</span>
                <span className="text-neutral-700">No endless browsing through hundreds of listings</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff5c5c] mr-3">→</span>
                <span className="text-neutral-700">Get matched with cars that fit your exact needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff5c5c] mr-3">→</span>
                <span className="text-neutral-700">Connect with verified dealerships you can trust</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff5c5c] mr-3">→</span>
                <span className="text-neutral-700">100% free to use with no hidden costs</span>
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
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center"
              >
                ✓ Thank you for your request! We'll match you with suitable dealerships and get back to you soon.
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
            
            <form onSubmit={handleSubmit} className="bg-[#ff5c5c] rounded-3xl p-8 md:p-10 max-h-[80vh] overflow-y-auto">
              {/* Your Details Section */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-black mb-4">👤 Your Details</h3>
                
                {/* Full Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <label htmlFor="fullName" className="block text-sm font-medium text-black mb-2">
                    Full Name (Required)
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-lg text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                    placeholder="Your full name"
                  />
                </motion.div>

                {/* Phone Number */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-black mb-2">
                    Phone Number (Required)
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-lg text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                    placeholder="Your contact number"
                  />
                </motion.div>

                {/* Email Address */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <label htmlFor="emailAddress" className="block text-sm font-medium text-black mb-2">
                    Email Address (Required)
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-lg text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              {/* Car Preferences Section */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-black mb-4">🚗 Your Car Preferences</h3>
                
                {/* Vehicle Type */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <label htmlFor="vehicleType" className="block text-sm font-medium text-black mb-2">
                    Vehicle Type (Required)
                  </label>
                  <select
                    id="vehicleType"
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                  >
                    <option value="">Select vehicle type</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="hatchback">Hatchback</option>
                    <option value="bakkie">Bakkie</option>
                  </select>
                </motion.div>

                {/* Preferred Brands */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <label className="block text-sm font-medium text-black mb-2">
                    Preferred Brands (Optional — Max 3 selections)
                  </label>
                  <p className="text-xs text-black/70 mb-2">👉 Select up to 3 brands you prefer</p>
                  <div className="grid grid-cols-2 gap-2">
                    {brandOptions.map((brand: string) => (
                      <label key={brand} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="preferredBrands"
                          value={brand}
                          // Fixed: Check if array exists before using includes()
                          checked={Array.isArray(formData.preferredBrands) && formData.preferredBrands.includes(brand)}
                          onChange={handleChange}
                          disabled={isSubmitting || (!Array.isArray(formData.preferredBrands) || (!formData.preferredBrands.includes(brand) && formData.preferredBrands.length >= 3))}
                          className="w-4 h-4 text-black bg-black/20 border-black/30 rounded focus:ring-black/50"
                        />
                        <span className="text-sm text-black">{brand}</span>
                      </label>
                    ))}
                  </div>
                </motion.div>

                {/* Condition */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <label htmlFor="condition" className="block text-sm font-medium text-black mb-2">
                    Condition (Required)
                  </label>
                  <select
                    id="condition"
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                  >
                    <option value="">Select condition</option>
                    <option value="new">Brand New</option>
                    <option value="pre-owned">Pre-owned</option>
                  </select>
                </motion.div>
              </div>

              {/* Budget & Timeline Section */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-black mb-4">💰 Budget & Timeline</h3>
                
                {/* Budget Range */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <label htmlFor="budgetRange" className="block text-sm font-medium text-black mb-2">
                    Budget Range (Required)
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-150k">Under R150,000</option>
                    <option value="150k-300k">R150,000 – R300,000</option>
                    <option value="300k-500k">R300,000 – R500,000</option>
                    <option value="above-500k">Above R500,000</option>
                  </select>
                </motion.div>

                {/* When to Buy */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <label htmlFor="whenToBuy" className="block text-sm font-medium text-black mb-2">
                    When are you planning to buy? (Required)
                  </label>
                  <select
                    id="whenToBuy"
                    name="whenToBuy"
                    value={formData.whenToBuy}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                  >
                    <option value="">Select timeframe</option>
                    <option value="immediately">Immediately</option>
                    <option value="1-month">Within 1 Month</option>
                    <option value="1-3-months">1–3 Months</option>
                    <option value="exploring">Just Exploring</option>
                  </select>
                </motion.div>

                {/* Payment Method */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <label htmlFor="paymentMethod" className="block text-sm font-medium text-black mb-2">
                    How will you pay? (Required)
                  </label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                  >
                    <option value="">Select payment method</option>
                    <option value="cash">Cash</option>
                    <option value="finance">Bank Finance</option>
                    <option value="not-sure">Not Sure</option>
                  </select>
                </motion.div>
              </div>

              {/* Contact Preferences Section */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-black mb-4">📞 Contact Preferences</h3>
                
                {/* Preferred Contact Method */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <label htmlFor="contactMethod" className="block text-sm font-medium text-black mb-2">
                    Preferred Contact Method (Required)
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                  >
                    <option value="">Select contact method</option>
                    <option value="call">Call</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="email">Email</option>
                  </select>
                </motion.div>
              </div>

              {/* Buying Intent Section */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-black mb-4">📊 Your Buying Intent</h3>
                
                {/* How Serious */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <label htmlFor="seriousness" className="block text-sm font-medium text-black mb-2">
                    How serious are you about buying? (Required)
                  </label>
                  <select
                    id="seriousness"
                    name="seriousness"
                    value={formData.seriousness}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                  >
                    <option value="">Select option</option>
                    <option value="ready">Ready to buy</option>
                    <option value="comparing">Comparing options</option>
                    <option value="browsing">Just browsing</option>
                  </select>
                </motion.div>

                {/* Notes */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <label htmlFor="notes" className="block text-sm font-medium text-black mb-2">
                    Notes (Optional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-lg text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50"
                    placeholder="Tell us anything specific you're looking for…"
                  ></textarea>
                </motion.div>
              </div>

              {/* Trade-In Section */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-black mb-4">🔁 Trade-In (Optional)</h3>
                
                {/* Has Trade-In */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.7 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <label className="block text-sm font-medium text-black mb-2">
                    Do you have a vehicle to trade in? (Required)
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="hasTradeIn"
                        value="yes"
                        checked={formData.hasTradeIn === "yes"}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-4 h-4 text-black bg-black/20 border-black/30 focus:ring-black/50"
                      />
                      <span className="ml-2 text-sm text-black">Yes</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="hasTradeIn"
                        value="no"
                        checked={formData.hasTradeIn === "no"}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-4 h-4 text-black bg-black/20 border-black/30 focus:ring-black/50"
                      />
                      <span className="ml-2 text-sm text-black">No</span>
                    </label>
                  </div>
                </motion.div>

                {/* Trade-In Details (Only shown if "Yes" is selected) */}
                {formData.hasTradeIn === "yes" && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.8 }}
                      viewport={{ once: true }}
                      className="mb-4"
                    >
                      <label htmlFor="tradeInMakeModel" className="block text-sm font-medium text-black mb-2">
                        Vehicle Make & Model
                      </label>
                      <input
                        type="text"
                        id="tradeInMakeModel"
                        name="tradeInMakeModel"
                        value={formData.tradeInMakeModel}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-lg text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                        placeholder="e.g. Toyota Corolla"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.9 }}
                      viewport={{ once: true }}
                      className="mb-4"
                    >
                      <label htmlFor="tradeInMileage" className="block text-sm font-medium text-black mb-2">
                        Mileage (km)
                      </label>
                      <input
                        type="text"
                        id="tradeInMileage"
                        name="tradeInMileage"
                        value={formData.tradeInMileage}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-lg text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                        placeholder="e.g. 85000"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2.0 }}
                      viewport={{ once: true }}
                      className="mb-4"
                    >
                      <label htmlFor="tradeInCondition" className="block text-sm font-medium text-black mb-2">
                        Vehicle Condition
                      </label>
                      <select
                        id="tradeInCondition"
                        name="tradeInCondition"
                        value={formData.tradeInCondition}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                      >
                        <option value="">Select condition</option>
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                        <option value="poor">Poor</option>
                      </select>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 2.1 }}
                      viewport={{ once: true }}
                      className="mb-4"
                    >
                      <label className="block text-sm font-medium text-black mb-2">
                        Is there existing finance on the vehicle?
                      </label>
                      <div className="flex space-x-4">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="hasFinance"
                            value="yes"
                            checked={formData.hasFinance === "yes"}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-4 h-4 text-black bg-black/20 border-black/30 focus:ring-black/50"
                          />
                          <span className="ml-2 text-sm text-black">Yes</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="hasFinance"
                            value="no"
                            checked={formData.hasFinance === "no"}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-4 h-4 text-black bg-black/20 border-black/30 focus:ring-black/50"
                          />
                          <span className="ml-2 text-sm text-black">No</span>
                        </label>
                      </div>
                    </motion.div>

                    {/* Finance Details (Only shown if "Yes" is selected) */}
                    {formData.hasFinance === "yes" && (
                      <>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 2.2 }}
                          viewport={{ once: true }}
                          className="mb-4"
                        >
                          <label htmlFor="financeHouse" className="block text-sm font-medium text-black mb-2">
                            Finance House
                          </label>
                          <input
                            type="text"
                            id="financeHouse"
                            name="financeHouse"
                            value={formData.financeHouse}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-lg text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                            placeholder="e.g. WesBank"
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 2.3 }}
                          viewport={{ once: true }}
                          className="mb-4"
                        >
                          <label htmlFor="settlementAmount" className="block text-sm font-medium text-black mb-2">
                            Estimated Settlement Amount
                          </label>
                          <input
                            type="text"
                            id="settlementAmount"
                            name="settlementAmount"
                            value={formData.settlementAmount}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-lg text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                            placeholder="e.g. R120,000"
                          />
                        </motion.div>
                      </>
                    )}
                  </>
                )}
              </div>

              {/* Consent Section */}
              <div className="mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.4 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-4 h-4 mt-1 text-black bg-black/20 border-black/30 rounded focus:ring-black/50"
                    />
                    <span className="ml-2 text-sm text-black">
                      I agree to be contacted by dealerships regarding my request.
                    </span>
                  </label>
                </motion.div>
              </div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.5 }}
                viewport={{ once: true }}
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className="w-full px-6 py-3 bg-black text-[#ff5c5c] font-semibold rounded-lg hover:bg-black/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Find My Car'}
                </motion.button>
              </motion.div>
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

export default Customers;