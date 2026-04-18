"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-12 md:py-16 bg-premium-100/20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-premium-900 tracking-tight">Education</h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.1 }} className="flex flex-col sm:flex-row items-start gap-6 glass-card p-8 rounded-2xl"
        >
          <div className="shrink-0 w-14 h-14 rounded-2xl bg-white border border-premium-200/50 shadow-sm flex items-center justify-center">
            <GraduationCap size={28} className="text-accent" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-2xl font-serif font-semibold text-premium-900 mb-2">National Institute of Technology, Kurukshetra</h3>
            <p className="text-lg text-premium-600 mb-4 font-light">Bachelor of Technology - Electronics and Communication Engineering</p>
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium tracking-wide">
              <span className="text-premium-500">2015 — 2019</span>
              <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent">CGPA: 8.57</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
