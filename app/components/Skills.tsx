"use client";

import { motion } from "framer-motion";

const cats = [
  { title: "Product Management & Strategy", skills: ["Zero-to-One Product Development", "Market Research & Validation", "PRDs & Functional Specs", "Agile & Scrum Methodology", "GTM Strategy & Pricing", "A/B Testing & Experimentation", "User Empathy & Journey Mapping"] },
  { title: "AI & Technical Systems", skills: ["LLM Architecture (Qwen, Gemma, Claude)", "Agentic & Multi-Agent Systems", "Retrieval-Augmented Generation (RAG)", "Generative AI Workflows", "API Integrations & REST", "Automation (n8n, Make)"] },
  { title: "Data & Analytics", skills: ["Mixpanel Data Analytics", "SQL for Product Managers", "KPI Definition & Tracking", "Telemetry & Agent Evaluation", "Predictive Analytics"] },
  { title: "Leadership & Execution", skills: ["Cross-Functional Team Leadership", "Stakeholder Management", "Resource Prioritization", "Risk Mitigation & Guardrails"] }
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-premium-900 mb-3 tracking-tight">Skills & Tech Stack</h2>
          <p className="text-lg text-premium-500 font-light tracking-wide">Tools and methodologies I use to lead products from zero to one.</p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cats.map((c, ci) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: ci * 0.08 }}
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">{c.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {c.skills.map((s) => (
                  <span key={s} className="px-3 py-1.5 text-sm rounded-lg bg-white border border-premium-200/60 shadow-sm text-premium-700 hover:border-accent hover:text-accent transition-all cursor-default">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 pt-10 border-t border-premium-100">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-premium-400 mb-5">Certifications</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Project Management Foundations", org: "LinkedIn Learning", link: "https://www.linkedin.com/learning/certificates/d545338140fd7f5b5df740a23a122ffb81b92d63f57b52d26c8235e08eb22165" },
              { name: "Generative AI for Everyone", org: "Deeplearning.AI", link: "https://learn.deeplearning.ai/accomplishments/ebc1ac11-87a6-4843-ae3b-fc27f297329c?usp=sharing" },
              { name: "Multi AI Agent Systems with crewAI", org: "Deeplearning.AI", link: "https://learn.deeplearning.ai/accomplishments/bd3a3dd2-7190-4167-adb4-a99a527a9425?usp=sharing" },
            ].map((c) => (
              <a key={c.name} href={c.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm rounded-xl bg-premium-50/50 border border-premium-100 text-premium-500 hover:border-accent hover:text-accent transition-all">
                <span className="font-semibold">{c.name}</span> — {c.org}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
