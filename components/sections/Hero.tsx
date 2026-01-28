"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import GlassyCard from "@/components/ui/GlassyCard";
import Button from "@/components/ui/Button";

const TOTAL_FRAMES = 320;

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Card animations based on scroll
  // We use zIndex to ensure only the active card is clickable
  const card1Opacity = useTransform(smoothProgress, [0, 0.1, 0.14], [1, 1, 0]);
  const card1Y = useTransform(smoothProgress, [0, 0.1], [0, -50]);
  const card1Z = useTransform(smoothProgress, [0, 0.14, 0.15], [10, 10, 0]);
  
  const card2Opacity = useTransform(smoothProgress, [0.12, 0.18, 0.28, 0.32], [0, 1, 1, 0]);
  const card2Y = useTransform(smoothProgress, [0.12, 0.18, 0.28], [50, 0, -50]);
  const card2Z = useTransform(smoothProgress, [0.12, 0.32, 0.33], [10, 10, 0]);

  // NEW SEO CARD - After Mastery
  const cardSEOOpacity = useTransform(smoothProgress, [0.3, 0.36, 0.46, 0.5], [0, 1, 1, 0]);
  const cardSEOY = useTransform(smoothProgress, [0.3, 0.36, 0.46], [50, 0, -50]);
  const cardSEOZ = useTransform(smoothProgress, [0.3, 0.5, 0.51], [10, 10, 0]);

  const card3Opacity = useTransform(smoothProgress, [0.48, 0.54, 0.64, 0.68], [0, 1, 1, 0]);
  const card3Y = useTransform(smoothProgress, [0.48, 0.54, 0.64], [50, 0, -50]);
  const card3Z = useTransform(smoothProgress, [0.48, 0.68, 0.69], [10, 10, 0]);

  const card5Opacity = useTransform(smoothProgress, [0.66, 0.72, 0.82, 0.86], [0, 1, 1, 0]);
  const card5Y = useTransform(smoothProgress, [0.66, 0.72, 0.82], [50, 0, -50]);
  const card5Z = useTransform(smoothProgress, [0.66, 0.86, 0.87], [10, 10, 0]);

  const card4Opacity = useTransform(smoothProgress, [0.84, 0.92], [0, 1]);
  const card4Y = useTransform(smoothProgress, [0.84, 0.92], [50, 0]);
  const card4Z = useTransform(smoothProgress, [0.84, 1], [10, 10]);

  // Frame index based on scroll
  const frameIndex = useTransform(smoothProgress, [0, 1], [1, TOTAL_FRAMES]);

  useEffect(() => {
    // Preload frames
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0;

      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        img.src = `/frames/frame_${i.toString().padStart(3, '0')}.webp`;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === TOTAL_FRAMES) {
            setIsLoaded(true);
          }
        };
        loadedImages.push(img);
      }
      setImages(loadedImages);
    };

    preloadImages();
  }, []);

  useEffect(() => {
    // Render frames to canvas
    const render = () => {
      const context = canvasRef.current?.getContext("2d");
      if (!context || images.length === 0) return;

      const index = Math.floor(frameIndex.get());
      const image = images[index - 1] || images[0];

      if (image && image.complete) {
        const canvas = canvasRef.current!;
        const hRatio = canvas.width / image.width;
        const vRatio = canvas.height / image.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - image.width * ratio) / 2;
        const centerShift_y = (canvas.height - image.height * ratio) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
          image,
          0, 0, image.width, image.height,
          centerShift_x, centerShift_y, image.width * ratio, image.height * ratio
        );
      }
    };

    const unsubscribe = frameIndex.on("change", render);
    
    // Initial render
    if (isLoaded) {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
      }
    }

    return () => unsubscribe();
  }, [images, isLoaded, frameIndex]);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative h-[500vh] bg-black">
      {/* Sticky Video/Canvas Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas for Scroll Animation */}
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "translate3d(0, 0, 0)"
          }}
        />
        
        {/* Fallback/Overlay Gradient */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        {/* Hero Content Overlays */}
        <div className="relative h-full w-full z-20">
          
          {/* Card 1: Main Headline */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center px-6 pointer-events-none"
            style={{ opacity: card1Opacity, y: card1Y, zIndex: card1Z }}
          >
            <GlassyCard className="max-w-4xl text-center pointer-events-auto">
              <motion.span 
                className="text-gold-500 font-sans tracking-[0.3em] uppercase text-sm mb-6 block"
                initial={{ opacity: 0, letterSpacing: "0.1em" }}
                animate={{ opacity: 1, letterSpacing: "0.3em" }}
                transition={{ duration: 1.5 }}
              >
                Asen Contractors LLC
              </motion.span>
              <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-tight">
                The Epitome Of <br />
                <span className="text-gold-500 italic">Luxury Craftsmanship</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
                Transforming houses into homes with unparalleled expertise in carpentry, painting, flooring, and more.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <Button variant="primary" onClick={() => window.location.href = '/contact'}>
                  Book A Consultation <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" onClick={() => window.location.href = '/projects'}>
                  Explore Our Work
                </Button>
              </div>
            </GlassyCard>
          </motion.div>

          {/* Card 2: Services Overview */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center px-6 pointer-events-none"
            style={{ opacity: card2Opacity, y: card2Y, zIndex: card2Z }}
          >
            <GlassyCard className="max-w-5xl pointer-events-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
                    Mastery In <br />Every Detail
                  </h2>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    From full construction to meticulous installations, we bring decades of experience to every project, ensuring your vision is realized with perfection.
                  </p>
                  <ul className="space-y-4">
                    {['Custom Carpentry', 'Premium Painting', 'Luxury Flooring', 'Expert Tile Work'].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-gold-500">
                        <div className="w-2 h-2 rounded-full bg-gold-500" />
                        <span className="text-white font-sans font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[4/5] rounded-xl border border-gold-600/20 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1581850518616-bcb8077fa2aa?auto=format&fit=crop&q=80&w=600" alt="Luxury Flooring" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[4/5] rounded-xl border border-gold-600/20 mt-8 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600" alt="Premium Painting" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </GlassyCard>
          </motion.div>

          {/* Card 3: NEW SEO CARD - Service Areas & Expertise */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center px-6 pointer-events-none"
            style={{ opacity: cardSEOOpacity, y: cardSEOY, zIndex: cardSEOZ }}
          >
            <GlassyCard className="max-w-4xl text-center pointer-events-auto">
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
                Serving <span className="text-gold-500">Richmond, VA</span> <br />& Surrounding Areas
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                As the leading luxury contractor in Central Virginia, we specialize in high-end home repairs, custom remodeling, and professional maintenance for discerning homeowners.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Richmond', 'Henrico', 'Chesterfield', 'Hanover'].map((area) => (
                  <div key={area} className="py-3 px-4 border border-gold-600/30 rounded-lg text-white font-sans text-sm uppercase tracking-widest">
                    {area}
                  </div>
                ))}
              </div>
            </GlassyCard>
          </motion.div>

          {/* Card 4: Trust & Quality */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center px-6 pointer-events-none"
            style={{ opacity: card3Opacity, y: card3Y, zIndex: card3Z }}
          >
            <GlassyCard className="max-w-4xl text-center pointer-events-auto">
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
                Your Home Repair <br /><span className="text-gold-500">Solution</span>
              </h2>
              <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
                "Don't risk further damage to your home by letting maintenance fall by the wayside. Let us save you time and take care of your honey-do list!"
              </p>
              <div className="grid grid-cols-3 gap-8">
                {[
                  { label: 'Licensed', value: '100%' },
                  { label: 'Satisfaction', value: '5-Star' },
                  { label: 'Experience', value: 'Expert' }
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-gold-500 text-3xl font-serif mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </GlassyCard>
          </motion.div>

          {/* Card 5: Value Proposition Card */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center px-6 pointer-events-none"
            style={{ opacity: card5Opacity, y: card5Y, zIndex: card5Z }}
          >
            <GlassyCard className="max-w-4xl text-center pointer-events-auto">
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
                Uncompromising <br /><span className="text-gold-500 italic">Standards</span>
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                We use only the finest materials and most advanced techniques to ensure your home renovation stands the test of time.
              </p>
              <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-600/20 flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-gold-500" />
                  </div>
                  <span className="text-white font-serif text-xl">Premium Materials</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-600/20 flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-gold-500" />
                  </div>
                  <span className="text-white font-serif text-xl">Expert Execution</span>
                </div>
              </div>
            </GlassyCard>
          </motion.div>

          {/* Card 6: Final CTA */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center px-6 pointer-events-none"
            style={{ opacity: card4Opacity, y: card4Y, zIndex: card4Z }}
          >
            <GlassyCard className="max-w-3xl text-center pointer-events-auto">
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
                Ready To <br />Start Your Project?
              </h2>
              <p className="text-gray-300 mb-10">
                Contact us today for a free consultation and quote.
              </p>
              <div className="flex flex-col items-center gap-6">
                <a href="tel:804-405-7796" className="text-3xl md:text-5xl font-serif text-gold-500 hover:text-gold-400 transition-colors flex items-center gap-4">
                  <Phone className="w-8 h-8 md:w-12 md:h-12" />
                  804-405-7796
                </a>
                <Button variant="primary" className="mt-4" onClick={() => window.location.href = '/contact'}>
                  Get A Free Quote
                </Button>
              </div>
            </GlassyCard>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="text-gold-500/50 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold-500/50 to-transparent" />
        </motion.div>
      </div>

      {/* Loading State */}
      {!isLoaded && (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
          <motion.div 
            className="w-24 h-24 border-2 border-gold-600/20 border-t-gold-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.span 
            className="mt-8 text-gold-500 font-serif text-xl tracking-widest"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ASEN
          </motion.span>
        </div>
      )}
    </section>
  );
}
