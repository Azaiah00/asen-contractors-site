"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import GlassyCard from "@/components/ui/GlassyCard";

const testimonials = [
  {
    name: "John Smith",
    role: "Homeowner",
    content: "Asen Contractors transformed our outdated kitchen into a modern masterpiece. Their attention to detail and professionalism were unmatched.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    content: "We hired them for a commercial installation, and the results exceeded our expectations. Timely, clean, and expert craftsmanship.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "Property Manager",
    content: "The best home repair solution in the area. They handle everything from minor repairs to major renovations with the same level of care.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            className="text-gold-500 font-sans tracking-[0.3em] uppercase text-sm mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Testimonials
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-6xl font-serif text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            What Our <span className="text-gold-500 italic">Clients Say</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              {/* Quotation mark icon with stars above the card */}
              <div className="flex items-center justify-center gap-3 mb-6">
                {/* Left star */}
                <Star className="w-6 h-6 text-gold-500 fill-gold-500" />
                {/* Gold circle with quotation marks */}
                <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center shadow-2xl">
                  <Quote className="w-8 h-8 text-black" />
                </div>
                {/* Right star */}
                <Star className="w-6 h-6 text-gold-500 fill-gold-500" />
              </div>
              
              <GlassyCard className="h-full w-full">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-500 fill-gold-500" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic text-center mb-8 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="text-center">
                  <h4 className="text-xl font-serif text-white mb-1">{testimonial.name}</h4>
                  <p className="text-gold-500 font-sans text-xs uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </GlassyCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
