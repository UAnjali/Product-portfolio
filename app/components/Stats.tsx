"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Stat({ num, suffix, label, i }: { num: number; suffix: string; label: string; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let cur = 0; const inc = num / 60;
    const t = setInterval(() => { cur += inc; if (cur >= num) { setCount(num); clearInterval(t); } else setCount(Math.floor(cur)); }, 33);
    return () => clearInterval(t);
  }, [inView, num]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1 }} className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white/40 border border-premium-100/50 backdrop-blur-sm"
    >
      <div className="text-5xl sm:text-6xl font-serif font-semibold text-premium-900 mb-2 tabular-nums">
        <span className="accent-gradient-text">{inView ? count : 0}</span><span className="text-accent">{suffix}</span>
      </div>
      <div className="text-sm font-medium tracking-wide text-premium-500 uppercase">{label}</div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { num: 3, suffix: "+", label: "Years Experience" },
            { num: 9, suffix: ".17", label: "CGPA — IIT Roorkee" },
            { num: 2, suffix: "", label: "Research Internships" },
            { num: 6, suffix: "+", label: "Projects Built" },
          ].map((s, i) => <Stat key={s.label} {...s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
