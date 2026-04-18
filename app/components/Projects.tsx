"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Brain, Activity } from "lucide-react";
import Link from "next/link";

const projects = [
  { title: "Meal Planner", sub: "Autonomous Task Agent", desc: "An intelligent task agent built on local LLMs (Qwen/Gemma) via Ollama, integrated into Telegram to parse scheduled intents via n8n workflows.", tags: ["Ollama", "Telegram API", "n8n", "LLMs"], icon: Brain, link: "/meal-planner" },
  { title: "NexFlow", sub: "Enterprise B2B SaaS PRD", desc: "A conceptual zero-to-one PRD for reinventing enterprise employee onboarding, focused on Time-To-Productivity metrics and seamless API provisioning.", tags: ["PRD", "SaaS", "UX Design"], icon: Activity, link: "/nexflow" },
];

function Card({ p }: { p: (typeof projects)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.65"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const Icon = p.icon;

  return (
    <Link href={p.link || "#"} className="block h-full group">
      <motion.div ref={ref} style={{ y, opacity }} whileHover={{ y: -4 }}
        className="h-full flex flex-col glass-card p-8 rounded-2xl"
      >
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-premium-100 flex items-center justify-center border border-premium-200/50 group-hover:bg-accent/10 group-hover:border-accent/20 transition-all duration-300">
            <Icon size={20} className="text-premium-700 group-hover:text-accent transition-colors" />
          </div>
        </div>
        <h3 className="text-xl font-serif font-semibold text-premium-900 mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
        <p className="text-xs font-medium text-accent tracking-wide mb-3">{p.sub}</p>
        <p className="text-base text-premium-600 leading-relaxed mb-6 flex-grow font-light">{p.desc}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {p.tags.map((t) => <span key={t} className="px-2.5 py-1 text-xs rounded-lg bg-premium-100/50 text-premium-500 border border-premium-200/30">{t}</span>)}
        </div>
      </motion.div>
    </Link>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-16 bg-premium-100/20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 md:mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-premium-900 mb-3 tracking-tight">Selected Projects</h2>
          <p className="text-lg text-premium-500 font-light tracking-wide max-w-2xl mx-auto">Selected product launches, from sophisticated AI agents to high-growth B2B integrations.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {projects.map((p) => <Card key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  );
}
