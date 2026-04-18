"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Role = { title: string; period: string; bullets: string[]; tags: string[] };

type Exp = {
  company: string;
  location: string;
  current: boolean;
  roles: Role[];
};

const experiences: Exp[] = [
  {
    company: "Airtel Digital",
    location: "Gurgaon, India",
    current: true,
    roles: [
      {
        title: "AI Product Manager",
        period: "August 2025 to Present",
        bullets: [
          "Orchestrating the end-to-end product lifecycle, pricing, and GTM strategy for an enterprise AI Recruitment SaaS, driving zero-to-one product development.",
          "Led the core architectural design and agile delivery of Agent Builder, a powerful low-code platform empowering cross-functional teams to configure and deploy specialized multi-agent systems.",
          "Drastically reduced engineering dependencies, decreasing agent deployment latency by 80% through intuitive UI and robust backend orchestration.",
          "Defined and implemented rigorous safety frameworks, employing rule-based guardrails, automated alerting, and LLM telemetry to guarantee scalable, hallucination-resistant deployments in production.",
        ],
        tags: ["0 to 1 AI Product", "Agent Builder", "GTM Strategy", "LLM Guardrails"],
      },
    ],
  },
  {
    company: "Coding Ninjas",
    location: "Gurgaon, India",
    current: false,
    roles: [
      {
        title: "Program Product Manager",
        period: "June 2023 to August 2025",
        bullets: [
          "Directed cross-functional engineering and design pods to define and iteratively optimize high-impact KPIs, integrating deep user telemetry to boost mock interview success rates from 20% to 60%.",
          "Architected and deployed complex GenAI automation loops via n8n and proprietary APIs, eliminating 50% of manual operational overhead and dynamically scaling system throughput.",
          "Integrated a state-of-the-art LLM pipeline for granular resume evaluation, achieving unprecedented automated grading accuracy and highly personalized candidate feedback.",
          "Spearheaded quantitative A/B testing frameworks and friction-point analysis across the conversion funnel, driving UX overhauls that reduced user drop-offs by 15%.",
        ],
        tags: ["Product Optimization", "GenAI Workflows", "A/B Experimentation", "Telemetry"],
      },
      {
        title: "Associate Project Manager",
        period: "Promoted from below",
        bullets: [
          "Spearheaded the technical rollout encompassing complex logic migrations for global auto-evaluation systems, driving a 30% reduction in long-term operational costs.",
          "Utilized Mixpanel funnel insights and agile sprint planning to isolate user friction, ultimately reducing support ticket volume by 20% and improving educator SLA compliance.",
          "Negotiated and managed the seamless enterprise SaaS API integration of the Code360 platform with Naukri.com, unlocking a 25% surge in B2B partner engagement and recurring revenue.",
        ],
        tags: ["Agile / Scrum", "API Integration", "B2B SaaS Growth"],
      },
    ],
  },
  {
    company: "Udacity India",
    location: "Noida, India",
    current: false,
    roles: [
      {
        title: "Technical Quality Specialist (Product Ops)",
        period: "August 2021 to April 2023",
        bullets: [
          "Drove extensive product discovery and qualitative market research initiatives to pinpoint UI/UX bottlenecks, leading to features that boosted overall platform retention by 15%.",
          "Pioneered the use of AI-driven sentiment analysis and zero-shot NLP classification to extract actionable insights from unstructured user feedback, increasing lesson engagement by 33%.",
          "Delivered cyclical, high-fidelity content overhauls aligned with technical roadmap requirements, establishing a baseline of 90% refreshed and highly accurate educational modules.",
        ],
        tags: ["NLP Sentiment Analysis", "User Discovery", "Product Ops Strategy"],
      },
    ],
  },
  {
    company: "Coding Ninjas",
    location: "New Delhi, India",
    current: false,
    roles: [
      {
        title: "Program Associate - Content",
        period: "September 2019 to August 2021",
        bullets: [
          "Designed specialization-specific content frameworks, aligned with product vision and learner success metrics.",
          "Conducted webinars and sessions to distill complex concepts, enhancing learning outcomes and satisfaction.",
        ],
        tags: ["Content Strategy", "Product Vision", "Success Metrics"],
      },
    ],
  },
];

function Item({ exp, index }: { exp: Exp; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.4"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [-20, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, x }} className="relative pl-8 md:pl-12 pb-12 last:pb-0 pt-2">
      <div className="absolute left-[3px] md:left-[5px] top-[14px] -translate-x-1/2">
        <div className={`w-3 h-3 rounded-full ${exp.current ? "bg-accent shadow-[0_0_10px_rgba(155,138,115,0.5)]" : "bg-premium-300"} ring-4 ring-premium-50 relative z-0`} />
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3 text-xs text-premium-500 font-medium tracking-wide">
        <span>{exp.location}</span>
        {exp.current && <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-accent/10 text-accent uppercase tracking-widest ml-auto md:ml-2">Current</span>}
      </div>

      <h3 className="text-2xl md:text-3xl font-serif font-semibold text-premium-900 mb-4">{exp.company}</h3>

      <div className="space-y-8">
        {exp.roles.map((role, ri) => (
          <div key={ri} className={ri > 0 ? "border-t border-premium-100 pt-6" : ""}>
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <p className="text-base font-semibold text-premium-700">{role.title}</p>
            </div>
            <p className="text-xs text-premium-400 font-medium mb-4 tracking-wide">{role.period}</p>
            <ul className="space-y-3 mb-5">
              {role.bullets.map((b, i) => (
                <motion.li key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex gap-4 text-base text-premium-600 leading-relaxed"
                >
                  <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-premium-300" />{b}
                </motion.li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {role.tags.map((t) => <span key={t} className="px-3 py-1 text-xs rounded-full bg-premium-100 text-premium-600 border border-premium-200/50">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const h = useTransform(scrollYProgress, [0.05, 0.85], ["0%", "100%"]);

  return (
    <section ref={ref} id="experience" className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-premium-900 mb-3 tracking-tight">Experience</h2>
          <p className="text-lg text-premium-500 font-light tracking-wide">6+ years of driving product growth from concept to market.</p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-[3px] md:left-[5px] top-4 bottom-4 w-[2px] bg-premium-100/50">
            <motion.div style={{ height: h, position: 'relative' }} className="w-full bg-gradient-to-b from-accent to-accent/10">
              <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-accent shadow-[0_0_12px_rgba(155,138,115,0.8)] ring-4 ring-premium-50 z-10" />
            </motion.div>
          </div>
          {experiences.map((e, i) => <Item key={`${e.company}-${i}`} exp={e} index={i} />)}
        </div>
      </div>
    </section>
  );
}
