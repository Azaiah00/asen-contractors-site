"use client";

import { motion } from "framer-motion";
import { Hammer, Paintbrush, Home, ArrowRight } from "lucide-react";
import GlassyCard from "@/components/ui/GlassyCard";
import Button from "@/components/ui/Button";

const services = [
  {
    title: "Construction & Installation",
    icon: Hammer,
    description: "From private homes to businesses, we handle full construction and professional installations with expert precision.",
    items: ["New Builds", "Additions", "Structural Work", "Custom Installs"],
    image: "https://img1.wsimg.com/isteam/ip/7038443a-61f4-4489-9a77-02e326f9c508/20230311_081642.jpg",
  },
  {
    title: "Repair & Remodeling",
    icon: Paintbrush,
    description: "Breathe new life into your space. We specialize in transforming existing structures into modern masterpieces.",
    items: ["Kitchen Remodels", "Bath Renovations", "Structural Repairs", "Modernization"],
    image: "https://img1.wsimg.com/isteam/stock/4452/",
  },
  {
    title: "Maintenance & Home Services",
    icon: Home,
    description: "Don't let your honey-do list grow. We provide professional maintenance to keep your home in perfect condition.",
    items: ["Drywall Repair", "Flooring & Tile", "Painting", "General Maintenance"],
    image: "https://img1.wsimg.com/isteam/stock/6QobGyq/",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-dark-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              className="text-gold-500 font-sans tracking-[0.3em] uppercase text-sm mb-4 block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Our Expertise
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-6xl font-serif text-white mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Comprehensive <br /><span className="text-gold-500 italic">Contracting Services</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button variant="outline">View All Services</Button>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <GlassyCard className="h-full flex flex-col p-0 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute top-6 left-6 w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center shadow-xl">
                    <service.icon className="w-6 h-6 text-black" />
                  </div>
                </div>
                
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-serif text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                        <ArrowRight className="w-4 h-4 text-gold-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/services" className="inline-flex items-center gap-2 text-gold-500 font-sans text-sm uppercase tracking-widest hover:text-gold-400 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </GlassyCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Added missing import
import Link from "next/link";
