"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GlassyCard from "@/components/ui/GlassyCard";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Hammer, Paintbrush, Home, Ruler, Shield, CheckCircle2, ArrowRight } from "lucide-react";

const detailedServices = [
  {
    id: "construction",
    title: "Construction & Installation",
    icon: Hammer,
    description: "Whether you're looking for full construction or just a specialized installation, we bring decades of experience to both private homes and businesses.",
    longDescription: "Our construction team handles everything from structural additions to complex equipment installations. We pride ourselves on precision engineering and aesthetic excellence, ensuring every build is both functional and beautiful.",
    features: [
      "New Home Construction",
      "Structural Additions",
      "Commercial Build-outs",
      "Custom Deck Installation",
      "Window & Door Replacement",
      "Siding & Exterior Trim"
    ],
    image: "https://img1.wsimg.com/isteam/ip/7038443a-61f4-4489-9a77-02e326f9c508/20230311_081642.jpg"
  },
  {
    id: "remodeling",
    title: "Repair & Remodeling",
    icon: Paintbrush,
    description: "Have you gone as far as your knowledge will take you? For anything your home might need, we have you covered with expert remodeling services.",
    longDescription: "Remodeling is about more than just changing a room; it's about enhancing your lifestyle. We specialize in high-end kitchen and bath renovations that combine luxury materials with ergonomic design.",
    features: [
      "Luxury Kitchen Remodeling",
      "Spa-like Bathroom Renovations",
      "Basement Finishing",
      "Whole-Home Modernization",
      "Structural Repairs",
      "Drywall & Plaster Restoration"
    ],
    image: "https://img1.wsimg.com/isteam/stock/4452/"
  },
  {
    id: "maintenance",
    title: "Maintenance & Home Services",
    icon: Home,
    description: "Don't risk further damage to your home by letting maintenance fall by the wayside. Let us take care of your honey-do list.",
    longDescription: "Regular maintenance is the key to preserving your home's value. Our comprehensive home services ensure that every detail, from tile grout to interior paint, is maintained to the highest standard.",
    features: [
      "Interior & Exterior Painting",
      "Flooring Installation (Hardwood, LVP)",
      "Custom Tile & Backsplash",
      "General Home Repairs",
      "Seasonal Maintenance",
      "Honey-Do List Completion"
    ],
    image: "https://img1.wsimg.com/isteam/stock/6QobGyq/"
  }
];

export default function ServicesPage() {
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.span 
            className="text-gold-500 font-sans tracking-[0.3em] uppercase text-sm mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Expertise
          </motion.span>
          <motion.h1 
            className="text-5xl md:text-7xl font-serif text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            World-Class <span className="text-gold-500 italic">Contracting</span>
          </motion.h1>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            From minor repairs to major renovations, Asen Contractors LLC delivers 
            unparalleled quality and luxury craftsmanship to every project.
          </motion.p>
        </div>
      </section>

      {/* Detailed Services List */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {detailedServices.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-gold-600/20">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
              
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold-600/20 rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-serif text-white">{service.title}</h2>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {service.longDescription}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-gray-400">
                      <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4">
                  <Button variant="primary">
                    Request Quote for {service.id}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-dark-light px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Our Process</h2>
            <p className="text-gray-400">How we bring your vision to life, step by step.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Free on-site visit to discuss your needs." },
              { step: "02", title: "Planning", desc: "Detailed quote and design phase." },
              { step: "03", title: "Execution", desc: "Expert craftsmanship with daily updates." },
              { step: "04", title: "Completion", desc: "Final walkthrough and 100% satisfaction." }
            ].map((item, i) => (
              <GlassyCard key={item.step} className="text-center">
                <span className="text-gold-500 font-serif text-4xl mb-4 block">{item.step}</span>
                <h3 className="text-xl font-serif text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </GlassyCard>
            ))}
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </main>
  );
}
