"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, ArrowUpRight, Copy, CheckCircle } from "lucide-react";

const links = [
  { label: "Email", value: "anjali741998@gmail.com", href: "mailto:anjali741998@gmail.com", icon: Mail },
  { label: "Phone", value: "+91 9034953969", href: "tel:+919034953969", icon: Phone },
  { label: "LinkedIn", value: "anjali-grover", href: "https://linkedin.com/in/anjali-grover-130394111", icon: Linkedin },
];

function ContactLink({ l, index }: { l: any; index: number }) {
  const Icon = l.icon;
  const isObscured = l.label === "Email" || l.label === "Phone";
  const [revealed, setRevealed] = useState(!isObscured);
  const [copied, setCopied] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (!revealed) {
      e.preventDefault();
      setRevealed(true);
    } else if (isObscured) {
      e.preventDefault();
      navigator.clipboard.writeText(l.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      if (l.href.startsWith("mailto") || l.href.startsWith("tel")) {
        window.location.href = l.href;
      }
    }
  };

  return (
    <motion.a href={l.href} onClick={handleClick}
      target={l.href.startsWith("http") ? "_blank" : undefined}
      rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ delay: index * 0.05 }} whileHover={{ y: -4 }}
      className="group flex items-center gap-4 p-5 rounded-2xl glass-card cursor-pointer"
    >
      <div className="w-12 h-12 rounded-xl bg-premium-100/50 flex items-center justify-center group-hover:bg-accent/10 border border-premium-100 group-hover:border-accent/20 transition-colors shrink-0">
        <Icon size={20} className="text-premium-400 group-hover:text-accent transition-colors" strokeWidth={1.5} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-semibold text-premium-400 uppercase tracking-widest mb-1">{l.label}</p>
        <p className="text-base font-medium text-premium-800 truncate">
          {revealed ? l.value : "Click to reveal"}
        </p>
      </div>
      {revealed && isObscured ? (
        copied ? <CheckCircle size={18} className="text-green-500 shrink-0" strokeWidth={1.5} /> : <Copy size={18} className="text-premium-300 group-hover:text-accent transition-colors shrink-0" strokeWidth={1.5} />
      ) : (
        <ArrowUpRight size={18} className="text-premium-300 group-hover:text-accent transition-colors shrink-0" strokeWidth={1.5} />
      )}
    </motion.a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-premium-900 mb-6 tracking-tight overflow-visible">
            Let&apos;s Build Something <span className="accent-gradient-text italic pr-3">Together</span>
          </h2>
          <p className="text-lg text-premium-500 max-w-lg mx-auto font-light tracking-wide">Always open to product roles, zero-to-one challenges, or interesting AI problems.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {links.map((l, i) => <ContactLink key={l.label} l={l} index={i} />)}
        </div>
      </div>
    </section>
  );
}
