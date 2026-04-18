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
          "Led the core architectural design and agile delivery of Agent Builder, a powerful low-code platform empowering cross-functional teams to configure specialized multi-agent systems.",
          "Drastically reduced engineering dependencies, decreasing agent deployment latency by 80% through intuitive UI and robust backend orchestration.",
          "Defined and implemented rigorous safety frameworks, employing rule-based guardrails and LLM telemetry to guarantee hallucination-resistant deployments.",
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
          "Directed cross-functional pods to optimize high-impact KPIs, boosting mock interview success rates from 20% to 60%.",
          "Architected and deployed complex GenAI automation loops via n8n, eliminating 50% of manual operational overhead.",
          "Integrated an LLM pipeline for resume evaluation, achieving unprecedented automated grading accuracy and personalized feedback.",
          "Spearheaded A/B testing frameworks across the conversion funnel, driving UX overhauls that reduced user drop-offs by 15%.",
        ],
        tags: ["Product Optimization", "GenAI Workflows", "A/B Experimentation", "Telemetry"],
      },
      {
        title: "Associate Project Manager",
        period: "Promoted from below",
        bullets: [
          "Spearheaded technical rollouts for global auto-evaluation systems, driving a 30% reduction in long-term operational costs.",
          "Utilized Mixpanel funnel insights to isolate user friction, reducing support ticket volume by 20% and improving SLA compliance.",
          "Negotiated the enterprise SaaS API integration of Code360 with Naukri.com, unlocking a 25% surge in B2B partner engagement.",
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
          "Drove product discovery to pinpoint UI/UX bottlenecks, leading to features that boosted platform retention by 15%.",
          "Pioneered AI-driven sentiment analysis to extract insights from unstructured feedback, increasing lesson engagement by 33%.",
          "Delivered cyclical, high-fidelity content overhauls established a baseline of 90% refreshed and accurate educational modules.",
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

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-12 pb-16 last:pb-0"
    >
      {/* Timeline Bullet */}
      <div className="absolute left-[3px] md:left-[5px] top-[10px] -translate-x-1/2 z-10">
        <div className={`w-3 h-3 rounded-full ${exp.current ? "bg-accent ring-4 ring-accent/20" : "bg-premium-200 ring-4 ring-premium-50"}`} />
      </div>

      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-6">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-premium-900 tracking-tight">{exp.company}</h3>
          <p className="text-sm font-medium text-premium-500 uppercase tracking-widest mt-1">{exp.location}</p>
        </div>
        {exp.current && (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-accent/10 text-accent tracking-tighter uppercase w-fit">
            Active Role
          </span>
        )}
      </div>

      <div className="space-y-12">
        {exp.roles.map((role, ri) => (
          <div key={ri} className="relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <h4 className="text-lg font-bold text-premium-800">{role.title}</h4>
              <span className="text-xs font-semibold text-premium-400 tabular-nums">{role.period}</span>
            </div>
            
            <ul className="grid gap-4 mb-6">
              {role.bullets.map((b, i) => (
                <li key={i} className="flex gap-4 text-sm md:text-[15px] text-premium-500 leading-relaxed font-light italic">
                  <span className="shrink-0 mt-2 w-1 h-1 rounded-full bg-accent/40" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {role.tags.map((t) => (
                <span key={t} className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-premium-100 text-premium-500 border border-premium-200/50">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 70%"]
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-4">Professional Path</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-premium-900 tracking-tight">Experience</h3>
        </motion.div>
        
        <div ref={containerRef} className="relative">
          {/* Background Line */}
          <div className="absolute left-[3px] md:left-[5px] top-4 bottom-4 w-[2px] bg-premium-100" />
          
          {/* Animated Line */}
          <motion.div 
            style={{ height: progressHeight }} 
            className="absolute left-[3px] md:left-[5px] top-4 w-[2px] bg-accent z-10 origin-top" 
          />

          {/* Scrolling Dot */}
          <motion.div
            style={{ top: progressHeight }}
            className="absolute left-[3px] md:left-[5px] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent z-20 shadow-[0_0_20px_rgba(17,94,89,0.4)] border-2 border-white"
          />
          
          <div className="space-y-4">
            {experiences.map((e, i) => <Item key={`${e.company}-${i}`} exp={e} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
