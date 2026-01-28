"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
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
          <Button variant="primary" className="px-6 py-2.5 text-[10px]">
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden relative z-50 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Nav Overlay */}
        <motion.div
          className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? "0%" : "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-3xl font-serif text-white hover:text-gold-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-8 flex flex-col items-center gap-6">
            <a href="tel:804-405-7796" className="text-xl text-gold-500 flex items-center gap-3">
              <Phone className="w-5 h-5" />
              804-405-7796
            </a>
            <Button variant="primary">Get A Quote</Button>
          </div>
        </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
}
