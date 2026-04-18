"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <div id="education" className="py-16 md:py-24 px-6 sm:px-12">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-4">Foundation</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-premium-900 tracking-tight">Education</h3>
      </motion.div>
      
      <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center gap-10 p-8 rounded-2xl border border-premium-200 bg-premium-50 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="shrink-0 w-16 h-16 rounded-2xl bg-white border border-premium-100 shadow-sm flex items-center justify-center relative z-10">
          <GraduationCap size={28} className="text-accent" strokeWidth={1} />
        </div>
        <div className="relative z-10 text-center sm:text-left">
          <h3 className="text-xl font-bold text-premium-900 mb-1">NIT Kurukshetra</h3>
          <p className="text-[10px] font-bold text-premium-500 uppercase tracking-widest mb-3">B.Tech &bull; ECE</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <span className="text-xs font-bold text-premium-400 tabular-nums">2015 — 2019</span>
            <span className="text-xs font-bold px-3 py-1 rounded bg-accent/10 text-accent uppercase tracking-tighter">CGPA: 8.57</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
