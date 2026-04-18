"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-premium-200/50 py-8 px-6 bg-premium-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm font-medium tracking-wide text-premium-400">&copy; 2026 Anjali Grover <span className="opacity-50 px-2">|</span> All rights reserved.</p>
        <div className="flex items-center gap-4">
          {[
            { icon: Linkedin, href: "https://linkedin.com/in/anjali-grover-130394111" },
            { icon: Mail, href: "mailto:anjali741998@gmail.com" },
          ].map(({ icon: Icon, href }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-premium-400 hover:text-accent transition-colors p-2 rounded-full hover:bg-premium-100">
              <Icon size={18} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
