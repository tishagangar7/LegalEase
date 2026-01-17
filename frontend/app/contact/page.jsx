"use client";

// import LayoutWrapper from "@/app/components/LayoutWrapper";
import LayoutWrapper from "../components/LayoutWrapper";


import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-brown-600 max-w-3xl mx-auto">
                Have questions? We're here to help. Reach out and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Get in Touch
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-maroon-50 rounded-lg">
                        <Mail className="w-6 h-6 text-maroon-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Email</h3>
                        <p className="text-brown-600">contact@legalease.ai</p>
                        <p className="text-brown-600">support@legalease.ai</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-maroon-50 rounded-lg">
                        <Phone className="w-6 h-6 text-maroon-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Phone</h3>
                        <p className="text-brown-600">(555) 123-4567</p>
                        <p className="text-sm text-brown-500">Mon-Fri, 9am-5pm PST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-maroon-50 rounded-lg">
                        <MapPin className="w-6 h-6 text-maroon-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Office</h3>
                        <p className="text-brown-600">123 Innovation Drive</p>
                        <p className="text-brown-600">Santa Cruz, CA 95064</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Support Hours */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                  <Clock className="w-8 h-8 text-blue-700 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Support Hours</h3>
                  <p className="text-brown-700 mb-4">
                    We're here to help you during these hours:
                  </p>
                  <ul className="space-y-2 text-brown-600">
                    <li className="flex justify-between">
                      <span>Monday-Friday</span>
                      <span className="font-medium">9am-6pm PST</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">10am-4pm PST</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">Emergency Only</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
                  <div className="flex items-center gap-3 mb-8">
                    <MessageSquare className="w-8 h-8 text-maroon-700" />
                    <h2 className="text-2xl font-bold text-gray-900">
                      Send us a Message
                    </h2>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-brown-700 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-maroon-300 focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-brown-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-maroon-300 focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-brown-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-maroon-300 focus:border-transparent"
                      >
                        <option value="">Select a topic</option>
                        <option value="support">Technical Support</option>
                        <option value="sales">Sales Inquiry</option>
                        <option value="partnership">Partnership</option>
                        <option value="feedback">Product Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-brown-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-maroon-300 focus:border-transparent resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-maroon-700 to-brown-800 text-white rounded-xl font-semibold hover:from-maroon-800 hover:to-brown-900 transition-all flex items-center justify-center gap-3"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                    
                    <p className="text-sm text-brown-500 text-center">
                      By submitting this form, you agree to our Privacy Policy. We'll never share your information.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </LayoutWrapper>
  );
}