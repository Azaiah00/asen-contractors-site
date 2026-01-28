"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Mail, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { scrollY } = useScroll();
  
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0.7)", "rgba(0, 0, 0, 0.9)"]
  );
  
  const headerBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  );

  const headerBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(212, 175, 55, 0.2)", "rgba(212, 175, 55, 0.3)"]
  );

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300"
    >
      <motion.div 
        className="max-w-7xl mx-auto rounded-full px-6 md:px-8 py-4 backdrop-blur-xl border border-gold-600/20"
        style={{ 
          backgroundColor: headerBg,
          backdropFilter: headerBlur,
          borderColor: headerBorder
        }}
      >
        <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50">
          <motion.div 
            className="text-2xl md:text-3xl font-serif text-white tracking-tighter"
            whileHover={{ scale: 1.05 }}
          >
            ASEN<span className="text-gold-500">.</span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-white/70 hover:text-gold-500 text-xs uppercase tracking-[0.2em] transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-6">
          <a 
            href="tel:804-405-7796" 
            className="flex items-center gap-2 text-white hover:text-gold-500 transition-colors"
          >
            <Phone className="w-4 h-4 text-gold-500" />
            <span className="text-sm font-sans font-medium">804-405-7796</span>
          </a>
          <Link href="/booking">
            <Button variant="primary" className="px-6 py-2.5 text-[10px]">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        {!isOpen && (
          <button 
            className="md:hidden relative z-[80] text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </button>
        )}

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black z-[60] md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />
              
              {/* Mobile Menu */}
              <motion.div
                className="fixed inset-0 z-[70] flex flex-col md:hidden"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
              >
                {/* Top Section - Navigation Links with Solid Black Background */}
                <div className="flex-1 bg-black flex flex-col items-center justify-center gap-6 px-6 pt-20 pb-8">
                  {/* Close Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 text-white z-10"
                    aria-label="Close menu"
                  >
                    <X className="w-8 h-8" />
                  </button>
                  
                  {/* Logo */}
                  <div className="mb-8">
                    <Link href="/" onClick={() => setIsOpen(false)}>
                      <div className="text-3xl font-serif text-white tracking-tighter">
                        ASEN<span className="text-gold-500">.</span>
                      </div>
                    </Link>
                  </div>
                  
                  {/* Navigation Links */}
                  {navLinks.map((link, index) => (
                    <Link 
                      key={link.name} 
                      href={link.href}
                      className="text-2xl font-serif text-white hover:text-gold-500 transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                
                {/* Bottom Section - Contact/Booking with Gold Background */}
                <div className="bg-gold-600 text-black px-6 py-12">
                  <div className="max-w-md mx-auto">
                    {/* Book Now Badge */}
                    <div className="text-center mb-8">
                      <span className="inline-block bg-gold-600 text-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                        Book Now
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-3xl font-serif text-black mb-2 text-center">
                      Get In Touch
                    </h3>
                    <p className="text-black/80 text-center mb-8">
                      Let's Build Your Dream Home
                    </p>
                    
                    {/* Contact Information */}
                    <div className="space-y-6">
                      <a 
                        href="tel:804-405-7796" 
                        className="flex items-center gap-4 text-black hover:text-black/80 transition-colors"
                      >
                        <Phone className="w-6 h-6" />
                        <span className="text-lg font-sans">804-405-7796</span>
                      </a>
                      <a 
                        href="mailto:asencontractors@gmail.com" 
                        className="flex items-center gap-4 text-black hover:text-black/80 transition-colors"
                      >
                        <Mail className="w-6 h-6" />
                        <span className="text-lg font-sans">asencontractors@gmail.com</span>
                      </a>
                      <div className="flex items-center gap-4 text-black">
                        <MapPin className="w-6 h-6" />
                        <span className="text-lg font-sans">Richmond, VA & Surrounding</span>
                      </div>
                    </div>
                    
                    {/* Book Now Button */}
                    <div className="mt-8">
                      <button 
                        onClick={() => {
                          setIsOpen(false);
                          router.push("/booking");
                        }}
                        className="w-full bg-black text-white hover:bg-black/90 px-8 py-4 rounded-full font-sans font-semibold text-sm uppercase tracking-widest transition-all duration-300"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
        </div>
      </motion.div>
    </motion.header>
  );
}
