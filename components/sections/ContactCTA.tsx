"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import GlassyCard from "@/components/ui/GlassyCard";
import Button from "@/components/ui/Button";

export default function ContactCTA() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <GlassyCard className="p-0 overflow-hidden border-none">
          <div className="grid lg:grid-cols-2">
            {/* Contact Info */}
            <div className="p-8 md:p-16 bg-gold-600 text-black">
              <motion.span 
                className="font-sans tracking-[0.3em] uppercase text-xs mb-4 block opacity-70"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                viewport={{ once: true }}
              >
                Get In Touch
              </motion.span>
              <motion.h2 
                className="text-4xl md:text-6xl font-serif mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Let's Build Your <br /><span className="italic">Dream Home</span>
              </motion.h2>
              
              <div className="space-y-8 mt-12">
                <motion.a 
                  href="tel:804-405-7796"
                  className="flex items-center gap-6 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:text-gold-500 transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-60 mb-1">Call Us</p>
                    <p className="text-xl font-serif">804-405-7796</p>
                  </div>
                </motion.a>

                <motion.a 
                  href="mailto:asencontractors@gmail.com"
                  className="flex items-center gap-6 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:text-gold-500 transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-60 mb-1">Email Us</p>
                    <p className="text-xl font-serif">asencontractors@gmail.com</p>
                  </div>
                </motion.a>

                <motion.div 
                  className="flex items-center gap-6 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-60 mb-1">Service Area</p>
                    <p className="text-xl font-serif">Richmond, VA & Surrounding</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 md:p-16 bg-black/40 backdrop-blur-md border-l border-white/10">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-500 outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-500 outline-none transition-colors"
                      placeholder="804-000-0000"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-500 outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400">Project Details</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-500 outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button variant="primary" className="w-full py-4">
                  Send Message <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </GlassyCard>
      </div>
    </section>
  );
}
