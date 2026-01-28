"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GlassyCard from "@/components/ui/GlassyCard";
import { motion } from "framer-motion";
import { Users, Target, Award, Heart } from "lucide-react";

export default function AboutPage() {
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
        <div className="absolute top-0 right-1/4 w-full h-full pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[150px]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold-500 font-sans tracking-[0.3em] uppercase text-sm mb-4 block">
                Our Story
              </span>
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
                Crafting Excellence <br />
                <span className="text-gold-500 italic">Since 2023</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Asen Contractors LLC was founded on a simple principle: every home deserves 
                the highest level of craftsmanship, regardless of the project size. 
                Based in Richmond, VA, we've built our reputation on reliability, 
                luxury finishes, and a commitment to customer satisfaction.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Whether it's a minor repair or a major structural renovation, our team 
                brings the same level of focus and dedication to every detail. We don't 
                just fix houses; we help you create a space that reflects your lifestyle 
                and values.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-gold-600/20 shadow-2xl">
                <img 
                  src="https://img1.wsimg.com/isteam/ip/7038443a-61f4-4489-9a77-02e326f9c508/20230311_081642.jpg" 
                  alt="Asen Contractors Work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 hidden md:block">
                <GlassyCard className="p-8">
                  <div className="text-gold-500 text-5xl font-serif mb-2">5.0</div>
                  <div className="text-white text-sm uppercase tracking-widest">Average Rating</div>
                </GlassyCard>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-dark-light px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Our Mission", desc: "To provide superior home repair solutions that exceed expectations." },
              { icon: Heart, title: "Our Vision", desc: "To be the most trusted name in luxury home remodeling in Virginia." },
              { icon: Users, title: "Our Team", desc: "Dedicated professionals with decades of combined experience." },
              { icon: Award, title: "Our Quality", desc: "Uncompromising standards in every cut, paint stroke, and tile laid." }
            ].map((value, i) => (
              <GlassyCard key={value.title} className="text-center group hover:border-gold-500/50 transition-colors">
                <div className="w-16 h-16 bg-gold-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-600/20 transition-colors">
                  <value.icon className="w-8 h-8 text-gold-500" />
                </div>
                <h3 className="text-xl font-serif text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
              </GlassyCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Let's make your <span className="text-gold-500">house a home</span></h2>
          <p className="text-gray-400 mb-12">Experience the Asen difference today. Call for a free consultation.</p>
          <a href="tel:804-405-7796" className="text-3xl md:text-5xl font-serif text-gold-500 hover:text-gold-400 transition-colors">
            804-405-7796
          </a>
        </div>
      </section>

        <Footer />
      </div>
    </main>
  );
}
