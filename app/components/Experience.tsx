"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    company: "Prodigal", role: "Machine Learning Engineer", location: "Mumbai, India", period: "Feb 2025 – Present", current: true,
    bullets: ["Built an ML platform on Databricks (PySpark) orchestrating hyper-personalized delivery to 1M+ accounts using a state-machine architecture with 40+ configurable strategies.", "Real-time redacted summarization pipeline for 200K+ daily calls — transcription, BERT-based PII redaction, fine-tuned LLM summaries within 500ms–3s latency.", "Deployed as FastAPI microservices on Kubernetes for low-latency inference.", "Evaluation pipelines for a debt collection voice agent handling 100K monthly calls."],
    tags: ["LLMs", "PySpark", "Kubernetes", "FastAPI", "Claude", "BERT"]
  },
  {
    company: "HiLabs", role: "Data Scientist", location: "Bangalore, India", period: "July 2023 – Feb 2025", current: false,
    bullets: ["Information retrieval from 1M+ webpages — 35% accuracy improvement using Gemini prompt engineering and RAG-based open-source LLM pipelines.", "Anomaly detection (FBProphet, ARIMA) on billions of payment records for Fortune 500 clients — $700K revenue, $5M+ savings.", "Scaled data pipelines using Scala, Spark, PySpark for real-time automated reporting."],
    tags: ["RAG", "Gemini", "Spark", "Scala", "Anomaly Detection"]
  },
  {
    company: "University of Alberta", role: "Research Intern — MITACS GRI", location: "Edmonton, Canada", period: "May – Aug 2022", current: false,
    bullets: ["Segmentation and image processing for droplet analysis in Gas-Metal-Arc Welding.", "Compared U-Net and MultiResU-Net architectures.", "Reduced manual analysis effort by ~80% through automated property extraction."],
    tags: ["U-Net", "Image Segmentation", "Computer Vision"]
  },
  {
    company: "University of Central Florida", role: "Research Intern", location: "Remote", period: "June 2021 – March 2022", current: false,
    bullets: ["Transformer + CNN models to identify spurious features causing shortcut learning in video action recognition.", "Proved spurious features can increase bias up to 90%. Paper submitted to ECCV 2022.", "Guided by Prof. Yogesh S. Rawat (UCF) and Vibhav Vineet (Microsoft)."],
    tags: ["Transformers", "Video Understanding", "Bias Analysis", "CNN"]
  },
];

function Item({ exp }: { exp: (typeof experiences)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.4"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [-20, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, x }} className="relative pl-8 md:pl-12 pb-16 last:pb-0 pt-2">
      <div className="absolute left-[3px] md:left-[5px] top-[14px] -translate-x-1/2">
        <div className={`w-3 h-3 rounded-full ${exp.current ? "bg-accent shadow-[0_0_10px_rgba(155,138,115,0.5)]" : "bg-premium-300"} ring-4 ring-premium-50 relative z-0`} />
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3 text-sm text-premium-500 font-medium tracking-wide">
        <span>{exp.period}</span>
        <span className="w-1 h-1 rounded-full bg-premium-300" />
        <span>{exp.location}</span>
        {exp.current && <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent/10 text-accent uppercase tracking-widest ml-auto md:ml-2">Current</span>}
      </div>

      <h3 className="text-2xl md:text-3xl font-serif font-semibold text-premium-900 mb-1">{exp.company}</h3>
      <p className="text-lg text-premium-600 mb-6 font-light">{exp.role}</p>

      <ul className="space-y-4 mb-8">
        {exp.bullets.map((b, i) => (
          <motion.li key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex gap-4 text-base text-premium-600 leading-relaxed"
          >
            <span className="shrink-0 mt-2.5 w-1.5 h-1.5 rounded-full bg-premium-300" />{b}
          </motion.li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {exp.tags.map((t) => <span key={t} className="px-3 py-1 text-xs rounded-full bg-premium-100 text-premium-600 border border-premium-200/50">{t}</span>)}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const h = useTransform(scrollYProgress, [0.05, 0.85], ["0%", "100%"]);

  return (
    <section ref={ref} id="experience" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-premium-900 mb-4 tracking-tight">Experience</h2>
          <p className="text-lg text-premium-500 font-light tracking-wide">From research labs to production systems serving millions.</p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-[3px] md:left-[5px] top-4 bottom-4 w-[2px] bg-premium-100/50">
            <motion.div style={{ height: h, position: 'relative' }} className="w-full bg-gradient-to-b from-accent to-accent/10">
              <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-accent shadow-[0_0_12px_rgba(155,138,115,0.8)] ring-4 ring-premium-50 z-10" />
            </motion.div>
          </div>
          {experiences.map((e) => <Item key={e.company} exp={e} />)}
        </div>
      </div>
    </section>
  );
}
