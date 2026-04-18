"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Brain, Activity } from "lucide-react";
import Link from "next/link";

const projects = [
  { title: "Meal Planner", sub: "Autonomous Task Agent", desc: "An intelligent task agent built on local LLMs (Qwen/Gemma) via Ollama, integrated into Telegram to parse scheduled intents via n8n workflows.", tags: ["Ollama", "Telegram API", "n8n", "LLMs"], icon: Brain, link: "/projects/meal-planner" },
  { title: "NexFlow", sub: "Enterprise B2B SaaS PRD", desc: "A conceptual zero-to-one PRD for reinventing enterprise employee onboarding, focused on Time-To-Productivity metrics and seamless API provisioning.", tags: ["PRD", "SaaS", "UX Design"], icon: Activity, link: "/projects/nexflow" },
];

function Card({ p }: { p: (typeof projects)[0] }) {
  const Icon = p.icon;

  return (
    <Link href={p.link || "#"} className="block h-full group">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className="group p-8 rounded-2xl bg-white border border-premium-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:border-accent/20 transition-all duration-500 overflow-hidden relative"
      >
        <div className="flex items-start justify-between mb-8">
          <div className="w-14 h-14 rounded-2xl bg-premium-50 flex items-center justify-center border border-premium-100 group-hover:bg-accent/5 group-hover:border-accent/20 transition-all duration-500">
            <Icon size={24} className="text-premium-800 group-hover:text-accent transition-colors duration-500" strokeWidth={1.5} />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-premium-400">View Project &rarr;</span>
        </div>
        
        <h3 className="text-2xl font-bold text-premium-900 mb-2 group-hover:text-accent transition-colors duration-500">{p.title}</h3>
        <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-4">{p.sub}</p>
        <p className="text-[15px] text-premium-600 leading-relaxed mb-8 flex-grow font-light">{p.desc}</p>
        
        <div className="flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded bg-premium-50 text-premium-500 border border-premium-100 italic">
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
}

export default function Projects() {
  return (
    <section id="shipped" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-premium-900 tracking-tight">Shipped</h3>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((p) => <Card key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  );
}
