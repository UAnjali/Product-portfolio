"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <motion.div style={{ y, opacity }} className="text-center px-4 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-premium-200/60 bg-white/50 backdrop-blur-sm text-premium-600 text-xs font-medium tracking-widest uppercase shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute h-full w-full rounded-full bg-accent opacity-60" />
            <span className="relative rounded-full h-2 w-2 bg-accent" />
          </span>
          Open to opportunities
        </motion.div>

        <div className="overflow-hidden mb-3">
          <motion.h1 initial={{ y: 80 }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-medium tracking-tight leading-[1] text-premium-800"
          >Hi, I&apos;m</motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1 initial={{ y: 80 }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-7xl lg:text-8xl font-serif font-semibold tracking-tight leading-[1] accent-gradient-text pb-2"
          >Anjali Grover</motion.h1>
        </div>

        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl sm:text-2xl text-premium-700 mb-6 font-light tracking-wide max-w-2xl mx-auto flex items-center justify-center gap-2"
        >
          <span>AI Product Manager</span>
          <span className="text-premium-300 font-normal">|</span>
          <span>Airtel Digital</span>
          <span className="text-premium-300 font-normal">|</span>
          <span>NIT Kurukshetra</span>
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
          className="text-premium-500 max-w-2xl mx-auto mb-10 leading-relaxed text-lg"
        >Building zero-to-one scalable products — empowering automation, user-centric design, and high-growth digital solutions.</motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10"
        >
          <button onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
            className="premium-button flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            View My Work
            <motion.span className="inline-block" animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>&rarr;</motion.span>
          </button>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="premium-button-outline w-full sm:w-auto"
          >Get in Touch</button>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.1 }} className="flex justify-center gap-6">
          {[
            { icon: Phone, href: "tel:+919034953969" },
            { icon: Linkedin, href: "https://linkedin.com/in/anjali-grover-130394111" },
            { icon: Mail, href: "mailto:anjali741998@gmail.com" },
          ].map(({ icon: Icon, href }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer"
              className="p-3.5 rounded-full bg-white shadow-md border border-premium-200/80 text-premium-800 hover:bg-accent/10 hover:text-accent hover:border-accent/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            ><Icon size={20} strokeWidth={1.75} /></a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={18} className="text-premium-400" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
