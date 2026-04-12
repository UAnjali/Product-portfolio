"use client";

import { motion } from "framer-motion";

const cats = [
  { title: "Languages", skills: ["Python", "Scala", "C++", "SQL"] },
  { title: "ML / AI", skills: ["LLMs (Claude, Gemini, LLaMA, Mistral)", "RAG Pipelines", "Prompt Engineering", "Fine-tuning (LoRA/QLoRA)", "Agentic AI", "BERT & Transformers", "PyTorch", "TensorFlow", "HuggingFace"] },
  { title: "Data & Infrastructure", skills: ["Apache Spark", "PySpark", "Databricks", "FastAPI", "Kubernetes", "Docker", "TrueFoundry"] },
  { title: "Domains", skills: ["NLP", "Anomaly Detection", "A/B Testing", "Time Series", "Deep Learning", "Computer Vision"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-premium-900 mb-4 tracking-tight">Skills & Tech Stack</h2>
          <p className="text-lg text-premium-500 font-light tracking-wide">Tools and technologies I use to build scalable AI systems.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {cats.map((c, ci) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: ci * 0.08 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-5">{c.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {c.skills.map((s) => (
                  <span key={s} className="px-4 py-2 text-sm rounded-xl bg-white border border-premium-200/60 shadow-sm text-premium-700 hover:border-accent hover:text-accent hover:shadow-md transition-all cursor-default">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16 pt-12 border-t border-premium-100">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-premium-400 mb-5">Relevant Coursework</h3>
          <div className="flex flex-wrap gap-3">
            {["Deep Learning Specialization (deeplearning.ai)", "Linear Algebra", "Machine Learning", "Generative Networks", "Data Mining"].map((c) => (
              <span key={c} className="px-4 py-2 text-sm rounded-xl bg-premium-50/50 border border-premium-100 text-premium-500">{c}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
