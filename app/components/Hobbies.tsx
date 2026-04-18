"use client";

import { motion } from "framer-motion";
import { Music, Guitar, Volleyball, Trophy } from "lucide-react";

const hobbies = [
  { name: "Resin Artist", desc: "Creating aesthetic, intricate art pieces from epoxy resin.", icon: Trophy },
  { name: "Music Lover", desc: "Piano playing and curating diverse playlists.", icon: Music },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-20 md:py-32 bg-premium-50/50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-4">Curations</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-premium-900 tracking-tight">Active Obsessions</h3>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {hobbies.map((h, i) => {
            const Icon = h.icon;
            return (
              <motion.div key={h.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }} 
                className="p-10 rounded-2xl bg-premium-50 border border-premium-100 flex flex-col items-center text-center group hover:border-accent/40 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 border border-premium-200 group-hover:bg-accent/5 group-hover:border-accent/10 transition-colors">
                  <Icon size={28} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-premium-900 mb-2">{h.name}</h3>
                <p className="text-sm text-premium-500 leading-relaxed font-light">{h.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
