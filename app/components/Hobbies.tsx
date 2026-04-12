"use client";

import { motion } from "framer-motion";
import { Music, Guitar, Volleyball, Trophy } from "lucide-react";

const hobbies = [
  { name: "Guitar", desc: "Strumming chords & learning new songs", icon: Guitar },
  { name: "Music", desc: "Always something playing in the background", icon: Music },
  { name: "Badminton", desc: "Competitive rallies & weekend matches", icon: Volleyball },
  { name: "Cricket", desc: "Nothing beats a good game of cricket", icon: Trophy },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-16 md:py-24 bg-premium-100/20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 md:mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-premium-900 mb-4 tracking-tight">Beyond Code</h2>
          <p className="text-lg text-premium-500 font-light tracking-wide max-w-2xl mx-auto">What I do when I&apos;m not training models.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {hobbies.map((h, i) => {
            const Icon = h.icon;
            return (
              <motion.div key={h.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }} whileHover={{ y: -4 }} className="glass-card p-8 rounded-2xl flex flex-col items-center text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-premium-200/50 shadow-sm mb-6">
                  <Icon size={24} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif font-semibold text-premium-900 mb-2">{h.name}</h3>
                <p className="text-sm text-premium-500 leading-relaxed font-light">{h.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
