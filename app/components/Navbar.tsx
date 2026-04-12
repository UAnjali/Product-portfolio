"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "consulting", label: "Consulting & Freelance" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "hobbies", label: "Hobbies" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.getBoundingClientRect().top <= 150) { setActive(sections[i].id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };

  return (
    <>
      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav py-3" : "bg-transparent py-5"}`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-center relative w-full">
            <div className="hidden md:flex items-center gap-2 md:gap-4">
              {sections.map((s) => (
                <button key={s.id} onClick={() => go(s.id)}
                  className={`relative px-4 py-2 text-sm rounded-full transition-colors ${active === s.id ? "text-premium-900 font-medium tracking-wide" : "text-premium-500 hover:text-premium-700 tracking-wide"}`}
                >
                  {active === s.id && (
                    <motion.div layoutId="pill" className="absolute inset-0 bg-white/60 shadow-sm border border-premium-200/30 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                  )}
                  <span className="relative z-10">{s.label}</span>
                </button>
              ))}
            </div>
            <button onClick={() => setOpen(!open)} className="md:hidden absolute right-0 p-2 rounded-full hover:bg-premium-100 transition-colors">
              {open ? <X size={20} className="text-premium-600" /> : <Menu size={20} className="text-premium-600" />}
            </button>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            className="fixed inset-x-0 top-[76px] z-40 bg-premium-50/95 backdrop-blur-2xl border-b border-premium-200/50 md:hidden"
          >
            <div className="px-6 py-4 space-y-2">
              {sections.map((s) => (
                <button key={s.id} onClick={() => go(s.id)}
                  className={`block w-full text-left px-5 py-3.5 rounded-xl text-sm tracking-wide transition-colors ${active === s.id ? "bg-white shadow-sm border border-premium-200/30 text-premium-900 font-medium" : "text-premium-500 hover:bg-premium-100/50"}`}
                >{s.label}</button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
