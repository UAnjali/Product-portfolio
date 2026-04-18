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
    <div id="contact" className="py-16 md:py-24 px-6 sm:px-12 relative overflow-hidden">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-4">Connect</h2>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-premium-900 leading-tight">Currently open <br />to initiatives.</h3>
      </motion.div>
      
      <div className="grid grid-cols-1 gap-4">
        {links.map((l, i) => (
          <motion.a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex items-center gap-6 p-6 rounded-2xl bg-premium-50 border border-premium-200 hover:border-accent hover:shadow-sm transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 border border-premium-100 group-hover:bg-accent/5 transition-colors">
              <l.icon size={22} className="text-premium-400 group-hover:text-accent transition-colors" strokeWidth={1.2} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-premium-400 font-bold mb-1">{l.label}</p>
              <p className="text-base font-bold text-premium-900 group-hover:text-accent transition-colors truncate">{l.value}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
