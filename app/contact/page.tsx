"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactCTA from "@/components/sections/ContactCTA";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import GlassyCard from "@/components/ui/GlassyCard";

export default function ContactPage() {
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
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.span 
            className="text-gold-500 font-sans tracking-[0.3em] uppercase text-sm mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Contact Us
          </motion.span>
          <motion.h1 
            className="text-5xl md:text-7xl font-serif text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Start Your <span className="text-gold-500 italic">Transformation</span>
          </motion.h1>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="pb-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Phone, title: "Call Us", content: "804-405-7796", href: "tel:804-405-7796" },
            { icon: Mail, title: "Email Us", content: "asencontractors@gmail.com", href: "mailto:asencontractors@gmail.com" },
            { icon: MapPin, title: "Service Area", content: "Richmond, VA & Surrounding", href: null },
            { icon: Clock, title: "Business Hours", content: "Mon - Sat: 8am - 6pm", href: null }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassyCard className="text-center h-full">
                <div className="w-12 h-12 bg-gold-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-6 h-6 text-gold-500" />
                </div>
                <h3 className="text-white font-serif text-xl mb-2">{item.title}</h3>
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
      </section>

      {/* Main Contact Section (Reusing ContactCTA but with full width) */}
      <ContactCTA />

      {/* Map Placeholder */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <GlassyCard className="p-0 overflow-hidden h-96 border-none">
            <div className="w-full h-full bg-dark-light flex items-center justify-center relative">
              {/* Use an internal gradient to avoid external CSS URL imports */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.15),_transparent_60%)]" />
              <div className="relative z-10 text-center">
                <MapPin className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-white mb-2">Serving Richmond & Surrounding Areas</h3>
                <p className="text-gray-400">Henrico, Chesterfield, Hanover, and beyond.</p>
              </div>
            </div>
          </GlassyCard>
        </div>
      </section>

        <Footer />
      </div>
    </main>
  );
}
