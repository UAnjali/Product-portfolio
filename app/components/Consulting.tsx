"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Database, GitMerge } from "lucide-react";

const services = [
    {
        title: "LLM Strategy & RAG Systems",
        description: "Architecting robust AI backends, deploying custom RAG pipelines, and integrating state-of-the-art open-source or proprietary LLMs tailored precisely to your domain.",
        icon: BrainCircuit,
    },
    {
        title: "Data Engineering Pipelines",
        description: "Optimizing Apache Spark and Databricks workflows for massive-scale data processing, ensuring real-time capabilities and significant cloud cost reductions.",
        icon: Database,
    },
    {
        title: "Algorithm Optimization & MLOps",
        description: "End-to-end deployment of Machine Learning APIs on Kubernetes. Focus on extremely low-latency inference, reliability, and continuous evaluation pipelines.",
        icon: GitMerge,
    },
];

export default function Consulting() {
    return (
        <section id="consulting" className="py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif font-semibold text-premium-900 mb-4 tracking-tight">Consulting & Freelance</h2>
                    <p className="text-lg text-premium-500 font-light tracking-wide max-w-2xl mx-auto">Available for short-term freelance projects and strategic technical consulting.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {services.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="glass-card p-8 rounded-2xl flex flex-col group hover:-translate-y-1 transition-transform duration-300"
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-premium-200/50 shadow-sm mb-6 group-hover:bg-accent/5 transition-colors">
                                    <Icon size={24} className="text-accent" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-serif font-semibold text-premium-900 mb-4 tracking-tight">{s.title}</h3>
                                <p className="text-premium-600 leading-relaxed font-light text-[15px]">{s.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
