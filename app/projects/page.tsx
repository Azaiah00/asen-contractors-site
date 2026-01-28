"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GlassyCard from "@/components/ui/GlassyCard";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Modern Kitchen Transformation",
    category: "Remodeling",
    image: "https://img1.wsimg.com/isteam/ip/7038443a-61f4-4489-9a77-02e326f9c508/20230311_081642.jpg",
    description: "Complete overhaul with custom cabinetry and luxury finishes."
  },
  {
    title: "Luxury Bathroom Suite",
    category: "Remodeling",
    image: "https://img1.wsimg.com/isteam/stock/4452/",
    description: "Spa-inspired design with premium tile work and fixtures."
  },
  {
    title: "Custom Deck Installation",
    category: "Construction",
    image: "https://img1.wsimg.com/isteam/stock/6QobGyq/",
    description: "Multi-level outdoor living space with integrated lighting."
  },
  {
    title: "Whole-Home Painting",
    category: "Maintenance",
    image: "https://img1.wsimg.com/isteam/ip/7038443a-61f4-4489-9a77-02e326f9c508/20230311_081642.jpg",
    description: "Premium interior painting with meticulous trim work."
  },
  {
    title: "Hardwood Floor Restoration",
    category: "Maintenance",
    image: "https://img1.wsimg.com/isteam/stock/4452/",
    description: "Refinishing and installation of high-end hardwood floors."
  },
  {
    title: "Structural Addition",
    category: "Construction",
    image: "https://img1.wsimg.com/isteam/stock/6QobGyq/",
    description: "Seamless expansion of living space with expert framing."
  }
];

const categories = ["All", "Construction", "Remodeling", "Maintenance"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.span 
            className="text-gold-500 font-sans tracking-[0.3em] uppercase text-sm mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Portfolio
          </motion.span>
          <motion.h1 
            className="text-5xl md:text-7xl font-serif text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Our Skilled <span className="text-gold-500 italic">Handiwork</span>
          </motion.h1>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-2 rounded-full border transition-all duration-300 text-xs uppercase tracking-widest ${
                  activeCategory === cat 
                    ? "bg-gold-600 border-gold-600 text-black" 
                    : "bg-transparent border-white/20 text-white hover:border-gold-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <GlassyCard className="p-0 overflow-hidden h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute top-4 right-4">
                      <span className="px-4 py-1 bg-gold-600 text-black text-[10px] uppercase tracking-widest rounded-full font-bold">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex-grow">
                    <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-gold-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </GlassyCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
