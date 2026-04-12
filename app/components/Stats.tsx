"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "9.17", label: "CGPA — IIT Roorkee" },
  { value: "2", label: "Research Internships" },
  { value: "6+", label: "Projects Built" },
];

export default function Stats() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white/40 border border-premium-100/50 backdrop-blur-sm"
            >
              <div className="text-5xl sm:text-6xl font-serif font-semibold text-premium-900 mb-2 tabular-nums">
                <span className="accent-gradient-text">{s.value}</span>
              </div>
              <div className="text-sm font-medium tracking-wide text-premium-500 uppercase">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
