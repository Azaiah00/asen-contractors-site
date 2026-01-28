"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Calendar, Clock, Phone, Mail, MapPin, Send } from "lucide-react";
import GlassyCard from "@/components/ui/GlassyCard";
import Button from "@/components/ui/Button";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-black relative">
      {/* Video Background with Matte Overlay */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/0127.mp4" type="video/mp4" />
        </video>
        {/* Matte tint overlay - subtle darkening */}
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              className="text-gold-500 font-sans tracking-[0.3em] uppercase text-sm mb-4 block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Book Your Consultation
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-6xl font-serif text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Schedule Your <span className="text-gold-500 italic">Free Consultation</span>
            </motion.h1>
            <motion.p 
              className="text-gray-300 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Let's discuss your project and bring your vision to life. Fill out the form below and we'll get back to you within 24 hours.
            </motion.p>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <GlassyCard className="p-8 md:p-12">
              <form className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-gold-500" />
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-gray-400">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-500 outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-gray-400">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-500 outline-none transition-colors"
                        placeholder="804-000-0000"
                      />
                    </div>
                  </div>
                  <div className="mt-6 space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-500 outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                    <Clock className="w-6 h-6 text-gold-500" />
                    Project Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-gray-400">Preferred Date</label>
                      <input 
                        type="date" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-500 outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-gray-400">Preferred Time</label>
                      <select 
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-500 outline-none transition-colors"
                      >
                        <option value="">Select a time</option>
                        <option value="morning">Morning (8am - 12pm)</option>
                        <option value="afternoon">Afternoon (12pm - 4pm)</option>
                        <option value="evening">Evening (4pm - 6pm)</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-6 space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400">Service Type *</label>
                    <select 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-500 outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="carpentry">Custom Carpentry</option>
                      <option value="painting">Premium Painting</option>
                      <option value="flooring">Luxury Flooring</option>
                      <option value="tile">Expert Tile Work</option>
                      <option value="renovation">Full Renovation</option>
                      <option value="repair">Home Repair</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mt-6 space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400">Project Description *</label>
                    <textarea 
                      rows={5}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-500 outline-none transition-colors resize-none"
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <h3 className="text-2xl font-serif text-white mb-6 flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-gold-500" />
                    Project Location
                  </h3>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400">Address</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-500 outline-none transition-colors"
                      placeholder="Street address, City, State, ZIP"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button variant="primary" className="w-full py-4 text-lg" type="submit">
                    Book Your Consultation <Send className="w-5 h-5 ml-2" />
                  </Button>
                  <p className="text-gray-400 text-sm text-center mt-4">
                    By submitting this form, you agree to be contacted by Asen Contractors LLC.
                  </p>
                </div>
              </form>
            </GlassyCard>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Phone, title: "Call Us", content: "804-405-7796", href: "tel:804-405-7796" },
                { icon: Mail, title: "Email Us", content: "asencontractors@gmail.com", href: "mailto:asencontractors@gmail.com" },
                { icon: MapPin, title: "Service Area", content: "Richmond, VA & Surrounding", href: null }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassyCard className="text-center h-full">
                    <div className="w-12 h-12 bg-gold-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-gold-500" />
                    </div>
                    <h3 className="text-white font-serif text-lg mb-2">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-gray-400 hover:text-gold-500 transition-colors break-all">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-400">{item.content}</p>
                    )}
                  </GlassyCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
