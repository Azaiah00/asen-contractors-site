"use client";

import Link from "next/link";
import { Phone, Mail, Facebook, Instagram, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-serif text-white tracking-tighter">
              ASEN<span className="text-gold-500">.</span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Your premium home repair and remodeling solution. Delivering luxury craftsmanship and expert service across Richmond, VA.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-gold-600 hover:text-black transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-gold-600 hover:text-black transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-xl mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Projects', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-gold-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-serif text-xl mb-8">Our Services</h4>
            <ul className="space-y-4">
              {['Custom Carpentry', 'Kitchen Remodeling', 'Bathroom Renovation', 'Flooring & Tile', 'Interior Painting'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-gray-400 hover:text-gold-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-xl mb-8">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <a href="tel:804-405-7796" className="text-gray-400 hover:text-white transition-colors">804-405-7796</a>
              </li>
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <a href="mailto:asencontractors@gmail.com" className="text-gray-400 hover:text-white transition-colors">asencontractors@gmail.com</a>
              </li>
              <li className="flex gap-4 text-gray-400">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0" />
                <span>Richmond, Virginia & Surrounding Areas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Asen Contractors LLC. All Rights Reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gold-500 text-sm uppercase tracking-widest hover:text-white transition-colors group"
          >
            Back to top <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

import { MapPin } from "lucide-react";
