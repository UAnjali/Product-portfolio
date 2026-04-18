"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowDown, Linkedin, Mail, Phone } from "lucide-react";
import profilePic from "../../public/profile.jpg";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(#18181b 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} 
      />
      
      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          
          {/* Left Column: Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1 max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-accent/5 border border-accent/20 text-accent text-[10px] font-bold tracking-[0.2em] uppercase"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute h-full w-full rounded-full bg-accent opacity-60" />
                <span className="relative rounded-full h-1.5 w-1.5 bg-accent" />
              </span>
              AI Product Manager
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent/60 mb-6"
            >
              Product &bull; Strategy &bull; Zero-to-One
            </motion.div>
            
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl sm:text-7xl lg:text-7xl xl:text-8xl font-bold -tracking-[0.04em] text-premium-900 mb-8"
            >
              Anjali <br />
              <span className="accent-gradient-text">Grover</span>
            </motion.h2>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center justify-center lg:justify-start gap-4 px-4 py-1.5 rounded-full bg-premium-100/50 border border-premium-200 text-[10px] md:text-xs font-bold text-premium-600 uppercase tracking-[0.2em] mb-10"
            >
              <span className="text-premium-900">Airtel Digital</span>
              <span className="w-1 h-1 rounded-full bg-accent/30" />
              <span>NIT Kurukshetra</span>
              <span className="w-1 h-1 rounded-full bg-accent/30" />
              <span className="font-bold text-premium-600 capitalize pb-0.5">Resin Artist</span>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
              className="text-premium-500 max-w-xl mx-auto lg:mx-0 text-base md:text-lg font-light italic leading-relaxed tracking-wide mb-12"
            >
              6+ years of experience transforming complex user needs into seamless, high-growth products.
              <br className="hidden md:block" />
              Focusing on AI-first infrastructure and autonomous agentic workflows at Airtel Digital.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-12">
              <button onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
                className="premium-button flex items-center justify-center gap-2 w-full sm:w-auto px-10 group"
              >
                Experience
                <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-4">
                {[
                  { icon: Phone, href: "tel:+919034953969" },
                  { icon: Linkedin, href: "https://linkedin.com/in/anjali-grover-130394111" },
                  { icon: Mail, href: "mailto:anjali741998@gmail.com" },
                ].map(({ icon: Icon, href }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-premium-200 text-premium-500 hover:text-accent hover:border-accent hover:shadow-[0_8px_20px_rgba(17,94,89,0.1)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Photo */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="relative transition-transform duration-500"
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden border-2 border-accent/20 shadow-[0_20px_50px_rgba(17,94,89,0.15)] bg-premium-100">
                <Image 
                  src={profilePic} 
                  alt="Anjali Grover" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                  priority
                />
              </div>
              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-accent/5 blur-2xl rounded-full z-[-1] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
