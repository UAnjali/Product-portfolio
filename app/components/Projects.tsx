"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Brain, Activity, MessageSquare, Scan, Plane, Image } from "lucide-react";

const projects = [
  { title: "ThinkFlow", sub: "AI Leadership Insight Agent", desc: "Agentic RAG with LangGraph ReAct, hybrid retrieval (vector + BM25), ~20% recall improvement.", tags: ["LangGraph", "ChromaDB", "RAG"], icon: Brain, github: "https://github.com/dhruvgrover1251/ThinkFlow" },
  { title: "Action Recognition", sub: "Domain Adaptation — IIT Roorkee", desc: "Skeleton-based action recognition with cross-view domain adaptation via DANN.", tags: ["LSTM", "DANN", "PyTorch"], icon: Activity, github: null },
  { title: "Brain Tumor Detection", sub: "Medical Image Classification", desc: "99.3% accuracy with fine-tuned VGG16 on MRI scans.", tags: ["TensorFlow", "VGG16", "Transfer Learning"], icon: Scan, github: "https://github.com/dhruvgrover1251/Brain_Tumor_Detection_Project" },
  { title: "Sentiment Generator", sub: "Inter-IIT Tech Meet 9.0", desc: "Aspect-based sentiment analysis using BERT-SPC for multi-brand opinion extraction.", tags: ["BERT", "NLP", "Fine-tuning"], icon: MessageSquare, github: null },
  { title: "AUVSI-SUAS 2021", sub: "Autonomous Drone — Maryland, USA", desc: "Autonomous hexacopter with onboard deep learning for real-time object detection.", tags: ["YOLO", "Object Detection", "Embedded AI"], icon: Plane, github: null },
  { title: "Playing with GANs", sub: "Generative Adversarial Networks", desc: "DCGANs on CelebA and MNIST — face and digit generation.", tags: ["PyTorch", "DCGAN", "Generative AI"], icon: Image, github: "https://github.com/dhruvgrover1251/Playing_with_GANs" },
];

function Card({ p }: { p: (typeof projects)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.65"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const Icon = p.icon;

  return (
    <motion.div ref={ref} style={{ y, opacity }} whileHover={{ y: -4 }}
      className="group h-full flex flex-col glass-card p-8 rounded-2xl"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 rounded-xl bg-premium-100 flex items-center justify-center border border-premium-200/50 group-hover:bg-accent/10 group-hover:border-accent/20 transition-all duration-300">
          <Icon size={20} className="text-premium-700 group-hover:text-accent transition-colors" />
        </div>
        {p.github && (
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="p-2 -mr-2 -mt-2 text-premium-400 hover:text-premium-900 hover:bg-premium-100 rounded-full transition-all">
            <Github size={20} strokeWidth={1.5} />
          </a>
        )}
      </div>
      <h3 className="text-xl font-serif font-semibold text-premium-900 mb-2">{p.title}</h3>
      <p className="text-sm font-medium text-accent tracking-wide mb-3">{p.sub}</p>
      <p className="text-base text-premium-600 leading-relaxed mb-6 flex-grow font-light">{p.desc}</p>
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {p.tags.map((t) => <span key={t} className="px-2.5 py-1 text-xs rounded-lg bg-premium-100/50 text-premium-500 border border-premium-200/30">{t}</span>)}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-premium-100/20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 md:mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-premium-900 mb-4 tracking-tight">Selected Projects</h2>
          <p className="text-lg text-premium-500 font-light tracking-wide max-w-2xl mx-auto">From agentic RAG systems to autonomous drones, exploring the frontiers of AI.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p) => <Card key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  );
}
