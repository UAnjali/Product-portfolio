"use client";

import { motion } from "framer-motion";

const cats = [
  { title: "Product Management & Strategy", skills: ["Zero-to-One Product Development", "Market Research & Validation", "PRDs & Functional Specs", "Agile & Scrum Methodology", "GTM Strategy & Pricing", "A/B Testing & Experimentation", "User Empathy & Journey Mapping"] },
  { title: "AI & Technical Systems", skills: ["LLMs (Qwen, Gemma, Claude)", "Agentic & Multi-Agent Systems", "Retrieval-Augmented Generation (RAG)", "Generative AI Workflows", "API Integrations & REST", "Automation (n8n, Make)"] },
  { title: "Data & Analytics", skills: ["Mixpanel Data Analytics", "SQL for Product Managers", "KPI Definition & Tracking", "Telemetry & Agent Evaluation"] },
  { title: "Leadership & Execution", skills: ["Cross-Functional Team Leadership", "Stakeholder Management", "Resource Prioritization", "Risk Mitigation & Guardrails"] }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-premium-50/50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20 text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-4">Competencies</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-premium-900 tracking-tight">Skills & Tech Stack</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cats.map((c, ci) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: ci * 0.08 }}
              className="flex flex-col"
            >
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-premium-400 mb-6 border-b border-premium-200 pb-2">{c.title}</h4>
              <div className="flex flex-wrap gap-2">
                {c.skills.map((s) => (
                  <span key={s} className="px-2.5 py-1 text-xs font-medium rounded-md bg-white border border-premium-200 text-premium-600 hover:border-accent hover:text-accent transition-all cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-24 pt-12 border-t border-premium-200">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-premium-400 mb-8 text-center italic">Verified Credentials</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Project Management Foundations", org: "LinkedIn Learning", link: "https://www.linkedin.com/learning/certificates/d545338140fd7f5b5df740a23a122ffb81b92d63f57b52d26c8235e08eb22165" },
              { name: "Generative AI for Everyone", org: "Deeplearning.AI", link: "https://learn.deeplearning.ai/accomplishments/ebc1ac11-87a6-4843-ae3b-fc27f297329c?usp=sharing" },
              { name: "Multi AI Agent Systems with crewAI", org: "Deeplearning.AI", link: "https://learn.deeplearning.ai/accomplishments/bd3a3dd2-7190-4167-adb4-a99a527a9425?usp=sharing" },
            ].map((c) => (
              <a key={c.name} href={c.link} target="_blank" rel="noopener noreferrer" 
                className="group flex flex-col p-4 rounded-xl border border-premium-200 bg-white hover:border-accent transition-all duration-300 min-w-[200px]"
              >
                <span className="text-[10px] uppercase tracking-wider text-premium-400 font-bold mb-1 group-hover:text-accent">{c.org}</span>
                <span className="text-sm font-bold text-premium-800">{c.name}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
