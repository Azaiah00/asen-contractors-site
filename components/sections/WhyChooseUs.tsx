"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Award, Hammer, Paintbrush, Ruler } from "lucide-react";
import GlassyCard from "@/components/ui/GlassyCard";

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Full protection and peace of mind for every project we undertake.",
  },
  {
    icon: Award,
    title: "Expert Craftsmanship",
    description: "Decades of experience delivering high-end, luxury results.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We respect your time and stick to our project schedules.",
  },
  {
    icon: Hammer,
    title: "Full Construction",
    description: "From foundation to finish, we handle complete builds.",
  },
  {
    icon: Paintbrush,
    title: "Premium Finishes",
    description: "Only the finest materials and techniques for a flawless look.",
  },
  {
    icon: Ruler,
    title: "Custom Solutions",
    description: "Tailored designs that fit your unique home and style.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            className="text-gold-500 font-sans tracking-[0.3em] uppercase text-sm mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-6xl font-serif text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Why Choose <span className="text-gold-500 italic">Asen Contractors</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gold-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <GlassyCard 
              key={feature.title}
              className="hover:border-gold-500/50 transition-colors duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="w-14 h-14 bg-gold-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-600/20 transition-colors">
                <feature.icon className="w-7 h-7 text-gold-500" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </GlassyCard>
          ))}
        </div>
      </div>
    </section>
  );
}
