"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Define a type for the form data
interface CustomerFormData {
  // Your Details
  fullName: string;
  phone: string; // Changed from phoneNumber
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
  
  // Other Brand
  otherBrand: string;
}

const Customers = () => {
  const [formData, setFormData] = useState<CustomerFormData>({
    // Your Details
    fullName: "",
    phone: "", // Changed from phoneNumber
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
    consent: false,
    
    // Other Brand
    otherBrand: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isClient, setIsClient] = useState(false);

  // Prevent hydration issues by ensuring client-side only rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  const brandOptions: string[] = [
    "Audi", "BYD", "Changan", "Ford", "Isuzu", "Lepas", "Mazda", "Suzuki", "VW"
  ];

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    // Allow digits, +, -, (, ), spaces, and ensure 0 is preserved
    value = value.replace(/[^\d+()\s-]/g, '');
    
    // If user starts with 0, keep it as is
    if (value.startsWith('0') && value.length > 1) {
      value = value;
    } 
    // If user starts with +27, convert to 0 format
    else if (value.startsWith('+27')) {
      value = '0' + value.substring(3);
    }
    // If user starts with +, keep +27 format
    else if (value.startsWith('+')) {
      value = '+27' + value.substring(1);
    }
    // If user enters a number without +27 or 0, assume it's a local number
    else if (value.length > 0 && !value.startsWith('0') && !value.startsWith('+')) {
      value = '0' + value;
    }
    
    setFormData(prev => ({
      ...prev,
      phone: value // Changed from phoneNumber
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      
      if (name === "preferredBrands") {
        const selectedBrand = value;
        setFormData(prev => {
          const brands = Array.isArray(prev.preferredBrands) ? [...prev.preferredBrands] : [];
          if (checked) {
            if (brands.length < 3) {
              return {
                ...prev,
                preferredBrands: [...brands, selectedBrand]
              };
            } else {
              // Show error message if trying to select more than 3
              alert('You can only select up to 3 preferred brands');
              return prev;
            }
          } else {
            return {
              ...prev,
              preferredBrands: brands.filter(brand => brand !== selectedBrand)
            };
          }
          return prev;
        });
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: checked
        }));
      }
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
      const data = new FormData();

      // Log the raw form data before submission
      console.log("Raw form data before submission:", formData);

      // Append all form fields EXCEPT preferredBrands (handled separately below)
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'preferredBrands') return; // Skip - handled below to avoid duplicates
        
        if (value === null || value === undefined || value === '') return;
        data.append(key, String(value));
      });

      // Handle preferredBrands separately - convert array to comma-separated string
      if (formData.preferredBrands && Array.isArray(formData.preferredBrands) && formData.preferredBrands.length > 0) {
        let brandsString = formData.preferredBrands.join(", ");
        
        // Add otherBrand if provided and not already in the list
        if (formData.otherBrand && !formData.preferredBrands.includes(formData.otherBrand)) {
          brandsString += `, ${formData.otherBrand}`;
        }
        
        data.append("preferredBrands", brandsString);
        console.log("Converted preferredBrands:", brandsString);
      } else {
        data.append("preferredBrands", formData.otherBrand || ""); // Use otherBrand if no brands selected
      }

      // Add extra fields
      data.append("subject", `Car Request: ${formData.fullName}`);
      data.append("_timestamp", new Date().toISOString());

      // Log FormData contents (for debugging)
      console.log("FormData contents:");
      for (let [key, value] of data.entries()) {
        console.log(`${key}: ${value}`);
      }

      // Submit to Google Apps Script
      const response = await fetch('https://script.google.com/macros/s/AKfycbw4DCxz-MogPtxwMP-2UoPXliozJUl8dRcdlWkp-yU9LSVKz4937rnbQ1wMpIz8DkIN3A/exec', {
        method: 'POST',
        body: data,
      });

      console.log("Response status:", response.status);
      
      if (response.redirected) {
        console.log("Response was redirected to:", response.url);
      }

      const responseText = await response.text();
      console.log("Response body:", responseText);

      let responseData;
      try {
        responseData = JSON.parse(responseText);
      } catch {
        responseData = { raw: responseText };
      }

      if (response.ok || response.redirected) {
        if (responseData.status === 'error') {
          throw new Error(responseData.message || 'Server returned error');
        }
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          fullName: "",
          phone: "", // Changed from phoneNumber
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
          consent: false,
          otherBrand: ""
        });
      } else {
        throw new Error(`Server error: ${response.status} - ${responseText}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Create motion components only on client side
  const MotionDiv = isClient ? motion.div : 'div';
  const MotionButton = isClient ? motion.button : 'button';

  return (
    <section id="find-my-car" className="relative py-20 md:py-24 overflow-hidden scroll-mt-20">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/Customers-background.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        {isClient ? (
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 mb-4 text-sm font-medium text-white bg-[#ff5c5c]/10 backdrop-blur-sm rounded-full border border-[#ff5c5c]/20">
              FIND YOUR CAR
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Find Your Perfect Car
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Tell us what you're looking for, and we'll connect you with trusted dealerships that have exactly what you need — no endless searching, no pressure, just real options from real sellers.
            </p>
          </MotionDiv>
        ) : (
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 mb-4 text-sm font-medium text-white bg-[#ff5c5c]/10 backdrop-blur-sm rounded-full border border-[#ff5c5c]/20">
              FIND YOUR CAR
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Find Your Perfect Car
            </h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Tell us what you're looking for, and we'll connect you with trusted dealerships that have exactly what you need — no endless searching, no pressure, just real options from real sellers.
            </p>
          </div>
        )}

        {/* Content Container - Side by Side Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          {isClient ? (
            <MotionDiv
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Auto Reach?</h3>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ff5c5c] flex items-center justify-center mr-4 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-white">No endless browsing through hundreds of listings</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ff5c5c] flex items-center justify-center mr-4 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-white">Get matched with cars that fit your exact needs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ff5c5c] flex items-center justify-center mr-4 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-white">Connect with verified dealerships you can trust</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ff5c5c] flex items-center justify-center mr-4 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-white">100% free to use with no hidden costs</span>
                  </li>
                </ul>

                <div className="bg-[#ff5c5c]/5 rounded-xl p-6 border border-[#ff5c5c]/20">
                  <h4 className="font-semibold text-white mb-2">How It Works</h4>
                  <ol className="list-decimal list-inside space-y-2 text-white">
                    <li>Fill out the form with your preferences</li>
                    <li>Our system matches you with suitable dealerships</li>
                    <li>Dealers contact you directly with options</li>
                    <li>Choose the best deal for your needs</li>
                  </ol>
                </div>
              </div>
            </MotionDiv>
          ) : (
            <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Auto Reach?</h3>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ff5c5c] flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white">No endless browsing through hundreds of listings</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ff5c5c] flex items-center justify-center mr-4 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white">Get matched with cars that fit your exact needs</span>
                </li>
                <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ff5c5c] flex items-center justify-center mr-4 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-white">Connect with verified dealerships you can trust</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ff5c5c] flex items-center justify-center mr-4 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-white">100% free to use with no hidden costs</span>
                  </li>
                </ul>

                <div className="bg-[#ff5c5c]/5 rounded-xl p-6 border border-[#ff5c5c]/20">
                  <h4 className="font-semibold text-white mb-2">How It Works</h4>
                  <ol className="list-decimal list-inside space-y-2 text-white">
                    <li>Fill out the form with your preferences</li>
                    <li>Our system matches you with suitable dealerships</li>
                    <li>Dealers contact you directly with options</li>
                    <li>Choose the best deal for your needs</li>
                  </ol>
                </div>
              </div>
          )}

          {/* Right Side - Form */}
          {isClient ? (
            <MotionDiv
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
              
              <form onSubmit={handleSubmit} className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 max-h-[80vh] overflow-y-auto border border-white/10">
                {/* Your Details Section */}
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff5c5c] flex items-center justify-center mr-3">
                      <span className="text-white text-xl">👤</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Your Details</h3>
                  </div>
                  
                  {/* Full Name */}
                  {isClient ? (
                    <MotionDiv
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="mb-4"
                    >
                      <label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
                        Full Name <span className="text-[#ff5c5c]">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                        placeholder="Your full name"
                      />
                    </MotionDiv>
                  ) : (
                    <div className="mb-4">
                      <label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
                        Full Name <span className="text-[#ff5c5c]">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                        placeholder="Your full name"
                      />
                    </div>
                  )}

                  {/* Phone Number */}
                  {isClient ? (
                    <MotionDiv
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="mb-4"
                    >
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        Phone Number <span className="text-[#ff5c5c]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                        placeholder="e.g. 012 345 6789 or +27 12 345 6789"
                      />
                    </MotionDiv>
                  ) : (
                    <div className="mb-4">
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        Phone Number <span className="text-[#ff5c5c]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                        placeholder="e.g. 012 345 6789 or +27 12 345 6789"
                      />
                    </div>
                  )}

                  {/* Email Address */}
                  {isClient ? (
                    <MotionDiv
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      viewport={{ once: true }}
                      className="mb-4"
                    >
                      <label htmlFor="emailAddress" className="block text-sm font-medium text-white mb-2">
                        Email Address <span className="text-[#ff5c5c]">*</span>
                      </label>
                      <input
                        type="email"
                        id="emailAddress"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                        placeholder="your.email@example.com"
                      />
                    </MotionDiv>
                  ) : (
                    <div className="mb-4">
                      <label htmlFor="emailAddress" className="block text-sm font-medium text-white mb-2">
                        Email Address <span className="text-[#ff5c5c]">*</span>
                      </label>
                      <input
                        type="email"
                        id="emailAddress"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  )}
                </div>

                {/* Car Preferences Section */}
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff5c5c] flex items-center justify-center mr-3">
                      <span className="text-white text-xl">🚗</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Car Preferences</h3>
                  </div>
                  
                  {/* Vehicle Type */}
                  {isClient ? (
                    <MotionDiv
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true }}
                      className="mb-4"
                    >
                      <label htmlFor="vehicleType" className="block text-sm font-medium text-white mb-2">
                        Vehicle Type <span className="text-[#ff5c5c]">*</span>
                      </label>
                      <select
                        id="vehicleType"
                        name="vehicleType"
                        value={formData.vehicleType}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/20 border border-white/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50 appearance-none"
                      >
                        <option value="" className="bg-gray-800">Select vehicle type</option>
                        <option value="sedan" className="bg-gray-800">Sedan</option>
                        <option value="suv" className="bg-gray-800">SUV</option>
                        <option value="hatchback" className="bg-gray-800">Hatchback</option>
                        <option value="bakkie" className="bg-gray-800">Bakkie</option>
                      </select>
                    </MotionDiv>
                  ) : (
                    <div className="mb-4">
                      <label htmlFor="vehicleType" className="block text-sm font-medium text-white mb-2">
                        Vehicle Type <span className="text-[#ff5c5c]">*</span>
                      </label>
                      <select
                        id="vehicleType"
                        name="vehicleType"
                        value={formData.vehicleType}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/20 border border-white/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50 appearance-none"
                      >
                        <option value="" className="bg-gray-800">Select vehicle type</option>
                        <option value="sedan" className="bg-gray-800">Sedan</option>
                        <option value="suv" className="bg-gray-800">SUV</option>
                        <option value="hatchback" className="bg-gray-800">Hatchback</option>
                        <option value="bakkie" className="bg-gray-800">Bakkie</option>
                      </select>
                    </div>
                  )}

                  {/* Preferred Brands */}
                  {isClient ? (
                    <MotionDiv
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                      viewport={{ once: true }}
                      className="mb-4"
                    >
                      <label className="block text-sm font-medium text-white mb-2">
                        Preferred Brands (Optional — Max 3 selections)
                      </label>
                      <p className="text-xs text-white/70 mb-2">👉 Select up to 3 brands you prefer</p>
                      <div className="grid grid-cols-2 gap-2">
                        {brandOptions.map((brand: string) => (
                          <label key={brand} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              name="preferredBrands"
                              value={brand}
                              checked={Array.isArray(formData.preferredBrands) && formData.preferredBrands.includes(brand)}
                              onChange={handleChange}
                              disabled={isSubmitting || (!Array.isArray(formData.preferredBrands) || (!formData.preferredBrands.includes(brand) && formData.preferredBrands.length >= 3))}
                              className="w-4 h-4 text-[#ff5c5c] bg-white/20 border-white/30 rounded focus:ring-[#ff5c5c]/50"
                            />
                            <span className="text-sm text-white">{brand}</span>
                          </label>
                        ))}
                      </div>
                      
                      {/* Always show "Other Brand" input */}
                      <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.05 }}
                        viewport={{ once: true }}
                        className="mt-4"
                      >
                        <label htmlFor="otherBrand" className="block text-sm font-medium text-white mb-2">
                          Specify Other Brand (Optional)
                        </label>
                        <input
                          type="text"
                          id="otherBrand"
                          name="otherBrand"
                          value={formData.otherBrand}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                          placeholder="e.g. Toyota, BMW, etc."
                        />
                      </MotionDiv>
                    </MotionDiv>
                  ) : (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-white mb-2">
                        Preferred Brands (Optional — Max 3 selections)
                      </label>
                      <p className="text-xs text-white/70 mb-2">👉 Select up to 3 brands you prefer</p>
                      <div className="grid grid-cols-2 gap-2">
                        {brandOptions.map((brand: string) => (
                          <label key={brand} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              name="preferredBrands"
                              value={brand}
                              checked={Array.isArray(formData.preferredBrands) && formData.preferredBrands.includes(brand)}
                              onChange={handleChange}
                              disabled={isSubmitting || (!Array.isArray(formData.preferredBrands) || (!formData.preferredBrands.includes(brand) && formData.preferredBrands.length >= 3))}
                              className="w-4 h-4 text-[#ff5c5c] bg-white/20 border-white/30 rounded focus:ring-[#ff5c5c]/50"
                            />
                            <span className="text-sm text-white">{brand}</span>
                          </label>
                        ))}
                      </div>
                      
                      {/* Always show "Other Brand" input */}
                      <div className="mt-4">
                        <label htmlFor="otherBrand" className="block text-sm font-medium text-white mb-2">
                          Specify Other Brand (Optional)
                        </label>
                        <input
                          type="text"
                          id="otherBrand"
                          name="otherBrand"
                          value={formData.otherBrand}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                          placeholder="e.g. Toyota, BMW, etc."
                        />
                      </div>
                    </div>
                  )}

                  {/* Condition */}
                  {isClient ? (
                    <MotionDiv
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      viewport={{ once: true }}
                      className="mb-4"
                    >
                      <label htmlFor="condition" className="block text-sm font-medium text-white mb-2">
                        Condition <span className="text-[#ff5c5c]">*</span>
                      </label>
                      <select
                        id="condition"
                        name="condition"
                        value={formData.condition}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/20 border border-white/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50 appearance-none"
                      >
                        <option value="" className="bg-gray-800">Select condition</option>
                        <option value="new" className="bg-gray-800">Brand New</option>
                        <option value="pre-owned" className="bg-gray-800">Pre-owned</option>
                      </select>
                    </MotionDiv>
                  ) : (
                    <div className="mb-4">
                      <label htmlFor="condition" className="block text-sm font-medium text-white mb-2">
                        Condition <span className="text-[#ff5c5c]">*</span>
                      </label>
                      <select
                        id="condition"
                        name="condition"
                        value={formData.condition}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/20 border border-white/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50 appearance-none"
                      >
                        <option value="" className="bg-gray-800">Select condition</option>
                        <option value="new" className="bg-gray-800">Brand New</option>
                        <option value="pre-owned" className="bg-gray-800">Pre-owned</option>
                      </select>
                    </div>
                  )}
                </div>

                {/* Budget & Timeline Section */}
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff5c5c] flex items-center justify-center mr-3">
                      <span className="text-white text-xl">💰</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Budget & Timeline</h3>
                  </div>
                  
                  {/* Budget Range */}
                  {isClient ? (
                    <MotionDiv
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                      viewport={{ once: true }}
                      className="mb-4"
                    >
                      <label htmlFor="budgetRange" className="block text-sm font-medium text-white mb-2">
                        Budget Range <span className="text-[#ff5c5c]">*</span>
                      </label>
                      <select
                        id="budgetRange"
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/20 border border-white/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50 appearance-none"
                      >
                        <option value="" className="bg-gray-800">Select budget range</option>
                        <option value="under-150k" className="bg-gray-800">Under R150,000</option>
                        <option value="150k-300k" className="bg-gray-800">R150,000 – R300,000</option>
                        <option value="300k-500k" className="bg-gray-800">R300,000 – R500,000</option>
                        <option value="above-500k" className="bg-gray-800">Above R500,000</option>
                      </select>
                    </MotionDiv>
                  ) : (
                    <div className="mb-4">
                      <label htmlFor="budgetRange" className="block text-sm font-medium text-white mb-2">
                        Budget Range <span className="text-[#ff5c5c]">*</span>
                      </label>
                      <select
                        id="budgetRange"
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/20 border border-white/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50 appearance-none"
                      >
                        <option value="" className="bg-gray-800">Select budget range</option>
                        <option value="under-150k" className="bg-gray-800">Under R150,000</option>
                        <option value="150k-300k" className="bg-gray-800">R150,000 – R300,000</option>
                        <option value="300k-500k" className="bg-gray-800">R300,000 – R500,000</option>
                        <option value="above-500k" className="bg-gray-800">Above R500,000</option>
                      </select>
                    </div>
                  )}

                  {/* When to Buy */}
                  {isClient ? (
                    <MotionDiv
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      viewport={{ once: true }}
                      className="mb-4"
                    >
                      <label htmlFor="whenToBuy" className="block text-sm font-medium text-white mb-2">
                        When are you planning to buy? <span className="text-[#ff5c5c]">*</span>
                      </label>
                      <select
                        id="whenToBuy"
                        name="whenToBuy"
                        value={formData.whenToBuy}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/20 border border-white/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50 appearance-none"
                      >
                        <option value="" className="bg-gray-800">Select timeframe</option>
                        <option value="immediately" className="bg-gray-800">Immediately</option>
                        <option value="1-month" className="bg-gray-800">Within 1 Month</option>
                        <option value="1-3-months" className="bg-gray-800">1–3 Months</option>
                        <option value="exploring" className="bg-gray-800">Just Exploring</option>
                      </select>
                    </MotionDiv>
                  ) : (
                    <div className="mb-4">
                      <label htmlFor="whenToBuy" className="block text-sm font-medium text-white mb-2">
                        When are you planning to buy? <span className="text-[#ff5c5c]">*</span>
                      </label>
                      <select
                        id="whenToBuy"
                        name="whenToBuy"
                        value={formData.whenToBuy}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/20 border border-white/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50 appearance-none"
                      >
                        <option value="" className="bg-gray-800">Select timeframe</option>
                        <option value="immediately" className="bg-gray-800">Immediately</option>
                        <option value="1-month" className="bg-gray-800">Within 1 Month</option>
                        <option value="1-3-months" className="bg-gray-800">1–3 Months</option>
                        <option value="exploring" className="bg-gray-800">Just Exploring</option>
                      </select>
                    </div>
                  )}

                  {/* Payment Method */}
                  {isClient ? (
                    <MotionDiv
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.3 }}
                      viewport={{ once: true }}
                      className="mb-4"
                    >
                      <label htmlFor="paymentMethod" className="block text-sm font-medium text-white mb-2">
                        How will you pay? <span className="text-[#ff5c5c]">*</span>
                      </label>
                      <select
                        id="paymentMethod"
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/20 border border-white/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50 appearance-none"
                      >
                        <option value="" className="bg-gray-800">Select payment method</option>
                        <option value="cash" className="bg-gray-800">Cash</option>
                        <option value="finance" className="bg-gray-800">Bank Finance</option>
                        <option value="not-sure" className="bg-gray-800">Not Sure</option>
                      </select>
                    </MotionDiv>
                  ) : (
                    <div className="mb-4">
                      <label htmlFor="paymentMethod" className="block text-sm font-medium text-white mb-2">
                        How will you pay? <span className="text-[#ff5c5c]">*</span>
                      </label>
                      <select
                        id="paymentMethod"
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/20 border border-white/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50 appearance-none"
                      >
                        <option value="" className="bg-gray-800">Select payment method</option>
                        <option value="cash" className="bg-gray-800">Cash</option>
                        <option value="finance" className="bg-gray-800">Bank Finance</option>
                        <option value="not-sure" className="bg-gray-800">Not Sure</option>
                      </select>
                    </div>
                  )}
                </div>

                {/* Contact Preferences Section */}
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff5c5c] flex items-center justify-center mr-3">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Contact Preferences</h3>
                  </div>
                  
                  {/* Preferred Contact Method */}
                  {isClient ? (
                    <MotionDiv
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.4 }}
                      viewport={{ once: true }}
                      className="mb-4"
                    >
                      <label htmlFor="contactMethod" className="block text-sm font-medium text-white mb-2">
                        Preferred Contact Method <span className="text-[#ff5c5c]">*</span>
                      </label>
                      <select
                        id="contactMethod"
                        name="contactMethod"
                        value={formData.contactMethod}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/20 border border-white/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50 appearance-none"
                      >
                        <option value="" className="bg-gray-800">Select contact method</option>
                        <option value="call" className="bg-gray-800">Call</option>
                        <option value="whatsapp" className="bg-gray-800">WhatsApp</option>
                        <option value="email" className="bg-gray-800">Email</option>
                      </select>
                    </MotionDiv>
                  ) : (
                    <div className="mb-4">
                      <label htmlFor="contactMethod" className="block text-sm font-medium text-white mb-2">
                        Preferred Contact Method <span className="text-[#ff5c5c]">*</span>
                      </label>
                      <select
                        id="contactMethod"
                        name="contactMethod"
                        value={formData.contactMethod}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/20 border border-white/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50 appearance-none"
                      >
                        <option value="" className="bg-gray-800">Select contact method</option>
                        <option value="call" className="bg-gray-800">Call</option>
                        <option value="whatsapp" className="bg-gray-800">WhatsApp</option>
                        <option value="email" className="bg-gray-800">Email</option>
                      </select>
                    </div>
                  )}
                </div>

                {/* Buying Intent Section */}
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff5c5c] flex items-center justify-center mr-3">
                      <span className="text-white text-xl">📊</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Buying Intent</h3>
                  </div>
                  
                  {/* How Serious */}
                  {isClient ? (
                    <MotionDiv
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.5 }}
                      viewport={{ once: true }}
                      className="mb-4"
                    >
                      <label htmlFor="seriousness" className="block text-sm font-medium text-white mb-2">
                        How serious are you about buying? <span className="text-[#ff5c5c]">*</span>
                      </label>
                      <select
                        id="seriousness"
                        name="seriousness"
                        value={formData.seriousness}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/20 border border-white/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50 appearance-none"
                      >
                        <option value="" className="bg-gray-800">Select option</option>
                        <option value="ready" className="bg-gray-800">Ready to buy</option>
                        <option value="comparing" className="bg-gray-800">Comparing options</option>
                        <option value="browsing" className="bg-gray-800">Just browsing</option>
                      </select>
                    </MotionDiv>
                  ) : (
                    <div className="mb-4">
                      <label htmlFor="seriousness" className="block text-sm font-medium text-white mb-2">
                        How serious are you about buying? <span className="text-[#ff5c5c]">*</span>
                      </label>
                      <select
                        id="seriousness"
                        name="seriousness"
                        value={formData.seriousness}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/20 border border-white/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50 appearance-none"
                      >
                        <option value="" className="bg-gray-800">Select option</option>
                        <option value="ready" className="bg-gray-800">Ready to buy</option>
                        <option value="comparing" className="bg-gray-800">Comparing options</option>
                        <option value="browsing" className="bg-gray-800">Just browsing</option>
                      </select>
                    </div>
                  )}

                  {/* Notes */}
                  {isClient ? (
                    <MotionDiv
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.6 }}
                      viewport={{ once: true }}
                      className="mb-4"
                    >
                      <label htmlFor="notes" className="block text-sm font-medium text-white mb-2">
                        Notes (Optional)
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={3}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50"
                        placeholder="Tell us anything specific you're looking for…"
                      ></textarea>
                    </MotionDiv>
                  ) : (
                    <div className="mb-4">
                      <label htmlFor="notes" className="block text-sm font-medium text-white mb-2">
                        Notes (Optional)
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={3}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50"
                        placeholder="Tell us anything specific you're looking for…"
                      ></textarea>
                    </div>
                  )}
                </div>

                {/* Trade-In Section */}
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff5c5c] flex items-center justify-center mr-3">
                      <span className="text-white text-xl">🔁</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">Trade-In (Optional)</h3>
                  </div>
                  
                  {/* Has Trade-In */}
                  {isClient ? (
                    <MotionDiv
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.7 }}
                      viewport={{ once: true }}
                      className="mb-4"
                    >
                      <label className="block text-sm font-medium text-white mb-2">
                        Do you have a vehicle to trade in? <span className="text-[#ff5c5c]">*</span>
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
                            className="w-4 h-4 text-[#ff5c5c] bg-white/20 border-white/30 focus:ring-[#ff5c5c]/50"
                          />
                          <span className="ml-2 text-sm text-white">Yes</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="hasTradeIn"
                            value="no"
                            checked={formData.hasTradeIn === "no"}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-4 h-4 text-[#ff5c5c] bg-white/20 border-white/30 focus:ring-[#ff5c5c]/50"
                          />
                          <span className="ml-2 text-sm text-white">No</span>
                        </label>
                      </div>
                    </MotionDiv>
                  ) : (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-white mb-2">
                        Do you have a vehicle to trade in? <span className="text-[#ff5c5c]">*</span>
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
                            className="w-4 h-4 text-[#ff5c5c] bg-white/20 border-white/30 focus:ring-[#ff5c5c]/50"
                          />
                          <span className="ml-2 text-sm text-white">Yes</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="hasTradeIn"
                            value="no"
                            checked={formData.hasTradeIn === "no"}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-4 h-4 text-[#ff5c5c] bg-white/20 border-white/30 focus:ring-[#ff5c5c]/50"
                          />
                          <span className="ml-2 text-sm text-white">No</span>
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Trade-In Details (Only shown if "Yes" is selected) */}
                  {formData.hasTradeIn === "yes" && (
                    <>
                      {isClient ? (
                        <MotionDiv
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 1.8 }}
                          viewport={{ once: true }}
                          className="mb-4"
                        >
                          <label htmlFor="tradeInMakeModel" className="block text-sm font-medium text-white mb-2">
                            Vehicle Make & Model
                          </label>
                          <input
                            type="text"
                            id="tradeInMakeModel"
                            name="tradeInMakeModel"
                            value={formData.tradeInMakeModel}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                            placeholder="e.g. Toyota Corolla"
                          />
                        </MotionDiv>
                      ) : (
                        <div className="mb-4">
                          <label htmlFor="tradeInMakeModel" className="block text-sm font-medium text-white mb-2">
                            Vehicle Make & Model
                          </label>
                          <input
                            type="text"
                            id="tradeInMakeModel"
                            name="tradeInMakeModel"
                            value={formData.tradeInMakeModel}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                            placeholder="e.g. Toyota Corolla"
                          />
                        </div>
                      )}

                      {isClient ? (
                        <MotionDiv
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 1.9 }}
                          viewport={{ once: true }}
                          className="mb-4"
                        >
                          <label htmlFor="tradeInMileage" className="block text-sm font-medium text-white mb-2">
                            Mileage (km)
                          </label>
                          <input
                            type="text"
                            id="tradeInMileage"
                            name="tradeInMileage"
                            value={formData.tradeInMileage}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                            placeholder="e.g. 85000"
                          />
                        </MotionDiv>
                      ) : (
                        <div className="mb-4">
                          <label htmlFor="tradeInMileage" className="block text-sm font-medium text-white mb-2">
                            Mileage (km)
                          </label>
                          <input
                            type="text"
                            id="tradeInMileage"
                            name="tradeInMileage"
                            value={formData.tradeInMileage}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                            placeholder="e.g. 85000"
                          />
                        </div>
                      )}

                      {isClient ? (
                        <MotionDiv
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 2.0 }}
                          viewport={{ once: true }}
                          className="mb-4"
                        >
                          <label htmlFor="tradeInCondition" className="block text-sm font-medium text-white mb-2">
                            Vehicle Condition
                          </label>
                          <select
                            id="tradeInCondition"
                            name="tradeInCondition"
                            value={formData.tradeInCondition}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 bg-white/20 border border-white/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50 appearance-none"
                          >
                            <option value="" className="bg-gray-800">Select condition</option>
                            <option value="excellent" className="bg-gray-800">Excellent</option>
                            <option value="good" className="bg-gray-800">Good</option>
                            <option value="fair" className="bg-gray-800">Fair</option>
                            <option value="poor" className="bg-gray-800">Poor</option>
                          </select>
                        </MotionDiv>
                      ) : (
                        <div className="mb-4">
                          <label htmlFor="tradeInCondition" className="block text-sm font-medium text-white mb-2">
                            Vehicle Condition
                          </label>
                          <select
                            id="tradeInCondition"
                            name="tradeInCondition"
                            value={formData.tradeInCondition}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 bg-white/20 border border-white/40 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50 appearance-none"
                          >
                            <option value="" className="bg-gray-800">Select condition</option>
                            <option value="excellent" className="bg-gray-800">Excellent</option>
                            <option value="good" className="bg-gray-800">Good</option>
                            <option value="fair" className="bg-gray-800">Fair</option>
                            <option value="poor" className="bg-gray-800">Poor</option>
                          </select>
                        </div>
                      )}

                      {isClient ? (
                        <MotionDiv
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 2.1 }}
                          viewport={{ once: true }}
                          className="mb-4"
                        >
                          <label className="block text-sm font-medium text-white mb-2">
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
                                className="w-4 h-4 text-[#ff5c5c] bg-white/20 border-white/30 focus:ring-[#ff5c5c]/50"
                              />
                              <span className="ml-2 text-sm text-white">Yes</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="radio"
                                name="hasFinance"
                                value="no"
                                checked={formData.hasFinance === "no"}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className="w-4 h-4 text-[#ff5c5c] bg-white/20 border-white/30 focus:ring-[#ff5c5c]/50"
                              />
                              <span className="ml-2 text-sm text-white">No</span>
                            </label>
                          </div>
                        </MotionDiv>
                      ) : (
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-white mb-2">
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
                                className="w-4 h-4 text-[#ff5c5c] bg-white/20 border-white/30 focus:ring-[#ff5c5c]/50"
                              />
                              <span className="ml-2 text-sm text-white">Yes</span>
                            </label>
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="radio"
                                name="hasFinance"
                                value="no"
                                checked={formData.hasFinance === "no"}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className="w-4 h-4 text-[#ff5c5c] bg-white/20 border-white/30 focus:ring-[#ff5c5c]/50"
                              />
                              <span className="ml-2 text-sm text-white">No</span>
                            </label>
                          </div>
                        </div>
                      )}

                      {/* Finance Details (Only shown if "Yes" is selected) */}
                      {formData.hasFinance === "yes" && (
                        <>
                          {isClient ? (
                            <MotionDiv
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 2.2 }}
                              viewport={{ once: true }}
                              className="mb-4"
                            >
                              <label htmlFor="financeHouse" className="block text-sm font-medium text-white mb-2">
                                Finance House
                              </label>
                              <input
                                type="text"
                                id="financeHouse"
                                name="financeHouse"
                                value={formData.financeHouse}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                                placeholder="e.g. WesBank"
                              />
                            </MotionDiv>
                          ) : (
                            <div className="mb-4">
                              <label htmlFor="financeHouse" className="block text-sm font-medium text-white mb-2">
                                Finance House
                              </label>
                              <input
                                type="text"
                                id="financeHouse"
                                name="financeHouse"
                                value={formData.financeHouse}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                                placeholder="e.g. WesBank"
                              />
                            </div>
                          )}

                          {isClient ? (
                            <MotionDiv
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 2.3 }}
                              viewport={{ once: true }}
                              className="mb-4"
                            >
                              <label htmlFor="settlementAmount" className="block text-sm font-medium text-white mb-2">
                                Estimated Settlement Amount
                              </label>
                              <input
                                type="text"
                                id="settlementAmount"
                                name="settlementAmount"
                                value={formData.settlementAmount}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                                placeholder="e.g. R120,000"
                              />
                            </MotionDiv>
                          ) : (
                            <div className="mb-4">
                              <label htmlFor="settlementAmount" className="block text-sm font-medium text-white mb-2">
                                Estimated Settlement Amount
                              </label>
                              <input
                                type="text"
                                id="settlementAmount"
                                name="settlementAmount"
                                value={formData.settlementAmount}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ff5c5c]/50 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                                placeholder="e.g. R120,000"
                              />
                            </div>
                          )}
                        </>
                      )}
                    </>
                  )}
                </div>

                {/* Consent Section */}
                <div className="mb-6">
                  {isClient ? (
                    <MotionDiv
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
                          className="w-4 h-4 mt-1 text-[#ff5c5c] bg-white/20 border-white/30 rounded focus:ring-[#ff5c5c]/50"
                        />
                        <span className="ml-2 text-sm text-white">
                          I agree to be contacted by dealerships regarding my request.
                        </span>
                      </label>
                    </MotionDiv>
                  ) : (
                    <div className="mb-4">
                      <label className="flex items-start cursor-pointer">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          className="w-4 h-4 mt-1 text-[#ff5c5c] bg-white/20 border-white/30 rounded focus:ring-[#ff5c5c]/50"
                        />
                        <span className="ml-2 text-sm text-white">
                          I agree to be contacted by dealerships regarding my request.
                        </span>
                      </label>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                {isClient ? (
                  <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.5 }}
                    viewport={{ once: true }}
                  >
                    <MotionButton
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      className="w-full px-6 py-3 bg-[#ff5c5c] text-white font-semibold rounded-lg hover:bg-[#ff5c5c]/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Find My Car'}
                    </MotionButton>
                  </MotionDiv>
                ) : (
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-[#ff5c5c] text-white font-semibold rounded-lg hover:bg-[#ff5c5c]/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Find My Car'}
                    </button>
                  </div>
                )}
              </form>
            </MotionDiv>
          ) : (
            <div className="relative">
              <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 max-h-[80vh] overflow-y-auto border border-white/10">
                <p className="text-white text-center">Loading form...</p>
              </div>
            </div>
          )}
        </div>

        {/* Bottom spacing */}
        <div className="mt-16"></div>
      </div> {/* end .relative z-10 container */}

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-5 pointer-events-none" />

    </section>
  );
};

export default Customers;