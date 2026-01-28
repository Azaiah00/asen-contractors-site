"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Calendar } from "lucide-react";
import Link from "next/link";
import GlassyCard from "./GlassyCard";
import Button from "./Button";

export default function ExitIntent() {
  const [showModal, setShowModal] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if modal has been shown in this session
    const shown = sessionStorage.getItem("exitIntentShown");
    if (shown) {
      setHasShown(true);
      return;
    }

    // Detect exit intent - mouse leaving the top of the viewport
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is moving upward (toward top of page)
      if (e.clientY <= 0 && !hasShown) {
        setShowModal(true);
        setHasShown(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    // Also detect when user tries to close tab/window
    const handleBeforeUnload = () => {
      if (!hasShown) {
        setShowModal(true);
        setHasShown(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [hasShown]);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <AnimatePresence>
      {showModal && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          
          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[101] flex items-center justify-center px-6 pointer-events-none"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="pointer-events-auto max-w-2xl w-full">
              <GlassyCard className="relative p-8 md:p-12 text-center">
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
                    Wait! Don't Miss Out On <span className="text-gold-500 italic">Your Dream Home</span>
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Get a <span className="text-gold-500 font-semibold">FREE consultation</span> and quote for your project. 
                    Let's bring your vision to life with luxury craftsmanship.
                  </p>
                  
                  {/* Benefits */}
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    {[
                      { icon: "✓", text: "Free Consultation" },
                      { icon: "✓", text: "Expert Advice" },
                      { icon: "✓", text: "No Obligation" }
                    ].map((benefit, i) => (
                      <div key={i} className="flex flex-col items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-gold-600/20 flex items-center justify-center text-gold-500 text-xl font-bold">
                          {benefit.icon}
                        </div>
                        <span className="text-white text-sm">{benefit.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <Link href="/booking" onClick={handleClose}>
                      <Button variant="primary" className="w-full md:w-auto px-8 py-4">
                        <Calendar className="w-5 h-5 mr-2" />
                        Book Free Consultation
                      </Button>
                    </Link>
                    <a 
                      href="tel:804-405-7796" 
                      onClick={handleClose}
                      className="flex items-center justify-center gap-2 text-white hover:text-gold-500 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <span className="text-lg font-sans">804-405-7796</span>
                    </a>
                  </div>
                </motion.div>
              </GlassyCard>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
