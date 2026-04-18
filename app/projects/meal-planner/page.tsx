"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Brain, Cpu, Youtube, Target, TrendingUp, Zap, MessageSquare, Database, Workflow, Clock, Search, ListChecks, Dumbbell } from "lucide-react";
import Link from "next/link";

export default function MealPlannerPage() {
  return (
    <main className="min-h-screen bg-white text-premium-900 selection:bg-accent/10 pb-20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-premium-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-premium-500 hover:text-accent transition-colors group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">Back to Portfolio</span>
          </Link>
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-premium-400">
            Case Study &bull; Product Management
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 border-b border-premium-100 bg-gradient-to-b from-premium-50/50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-accent text-[10px] font-bold tracking-widest uppercase mb-8">
              <Youtube size={12} className="text-red-600" />
              AI-Driven Content Orchestration
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Meal Planner <br />
              <span className="text-premium-400 italic">YouTube Intelligence Agent</span>
            </h1>
            <p className="text-xl md:text-2xl text-premium-500 font-light italic leading-relaxed max-w-3xl">
              Transforming raw video content into actionable nutrition plans through automated transcript analysis and proactive scheduling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Strategic Hook */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-8">Concept</h2>
              <h3 className="text-4xl font-bold text-premium-900 mb-6 leading-tight">From Content <br />to Consumption.</h3>
              <p className="text-premium-600 font-light italic leading-relaxed mb-10">
                Most recipe apps fail because they are closed ecosystems. The YouTube Intelligence Agent leverages the world’s largest library of cooking content, using AI to "watch" videos and extract structured nutritional data instantly.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 p-5 rounded-2xl bg-premium-50 border border-premium-100">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-accent"><Search size={20} /></div>
                  <div>
                    <h4 className="text-sm font-bold text-premium-900 mb-1">Intent-Based Discovery</h4>
                    <p className="text-xs text-premium-500 italic">User: "5 high protein veg breakfasts" &rarr; Bot: Performs scoped YouTube Search.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 rounded-2xl bg-premium-50 border border-premium-100">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-accent"><ListChecks size={20} /></div>
                  <div>
                    <h4 className="text-sm font-bold text-premium-900 mb-1">Ingredient Extraction</h4>
                    <p className="text-xs text-premium-500 italic">AI parses video transcripts to list ingredients and macros without the user watching the video.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full" />
              <div className="relative p-10 rounded-[3rem] border border-premium-200 bg-white/50 backdrop-blur-xl shadow-2xl">
                <h4 className="text-xs font-bold uppercase tracking-widest text-premium-400 mb-8 flex items-center gap-2">
                  <Clock size={14} className="text-accent" />
                  Proactive Engagement
                </h4>
                <div className="space-y-6">
                  {[
                    { time: "08:00 AM", event: "Morning Protein Reminder", desc: "Recipe suggestion from your saved list." },
                    { time: "01:00 PM", event: "Lunch Hydration & Macros", desc: "Check-in on mid-day nutritional targets." },
                    { time: "07:30 PM", event: "Dinner & Planning", desc: "Previewing tomorrow's ingredients." }
                  ].map((s, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-premium-100 bg-white shadow-sm">
                      <div>
                        <p className="text-[10px] font-bold text-accent uppercase">{s.time}</p>
                        <p className="text-sm font-bold text-premium-800">{s.event}</p>
                      </div>
                      <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Visual (Deeper PM View) */}
      <section className="py-24 bg-premium-900 overflow-hidden relative">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#115e59 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-accent/80 mb-20 text-center">System Integration Diagram</h2>
          
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-6">
            {/* Input Layer */}
            <div className="flex-1 p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-accent transition-colors">
                <MessageSquare size={24} className="text-accent" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2">Intent Ingest</h4>
              <p className="text-[10px] text-premium-400 italic">Telegram Bot (Webhook)</p>
            </div>

            <div className="hidden md:flex items-center text-accent/50"><ArrowLeft className="rotate-180" size={16} /></div>

            {/* Orchestration Layer */}
            <div className="flex-1 p-8 rounded-3xl bg-accent/10 border border-accent/20 flex flex-col items-center justify-center text-center relative">
              <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(17,94,89,0.5)]">
                <Workflow size={24} className="text-white" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2">n8n Logic Core</h4>
              <p className="text-[10px] text-accent-muted italic">Discovery & Scheduling</p>
              
              {/* External Callout */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 p-3 rounded-xl bg-white/10 border border-white/10 flex items-center gap-3">
                <Youtube size={16} className="text-red-500" />
                <span className="text-[10px] text-premium-300 font-bold uppercase tracking-tight">API: YouTube Search & Scraper</span>
              </div>
            </div>

            <div className="hidden md:flex items-center text-accent/50"><ArrowLeft className="rotate-180" size={16} /></div>

            {/* Inference Layer */}
            <div className="flex-1 p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                <Cpu size={24} className="text-accent" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2">LLM Parser</h4>
              <p className="text-[10px] text-premium-400 italic">Local Ollama (Gemma:2b/Qwen)</p>
              <span className="mt-4 text-[9px] text-accent font-bold px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20">Transcript Summarization</span>
            </div>
          </div>

          <div className="mt-20 max-w-2xl mx-auto p-8 rounded-2xl border border-white/10 bg-white/5 text-center">
            <p className="text-sm text-premium-300 font-light italic leading-relaxed">
              "By integrating the YouTube Data API with local LLM transcript analysis, we create a <strong>low-latency loop</strong> that converts multi-gigabyte video files into kilobyte-sized JSON nutrition plans."
            </p>
          </div>
        </div>
      </section>

      {/* Future Roadmap Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-3xl font-bold text-premium-900">Future Roadmap</h2>
            <div className="px-4 py-1.5 rounded-full bg-accent text-white text-[10px] font-bold uppercase tracking-widest">Phase 2.0</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl border border-premium-100 bg-premium-50/50 group hover:border-accent transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white border border-premium-100 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <Target size={20} className="text-accent group-hover:text-white" />
              </div>
              <h4 className="text-sm font-bold text-premium-900 mb-2">Calorie Feedback Loop</h4>
              <p className="text-xs text-premium-500 italic leading-relaxed">Dynamic adaptation of portion sizes based on real-time calorie burn targets.</p>
            </div>
            
            <div className="p-8 rounded-3xl border border-premium-100 bg-premium-50/50 group hover:border-accent transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white border border-premium-100 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <Dumbbell size={20} className="text-accent group-hover:text-white" />
              </div>
              <h4 className="text-sm font-bold text-premium-900 mb-2">Workout Sync</h4>
              <p className="text-xs text-premium-500 italic leading-relaxed">Native integration with Apple Health / Google Fit to sync 'Calories Burnt' data.</p>
            </div>

            <div className="p-8 rounded-3xl border border-premium-100 bg-premium-50/50 group hover:border-accent transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white border border-premium-100 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <TrendingUp size={20} className="text-accent group-hover:text-white" />
              </div>
              <h4 className="text-sm font-bold text-premium-900 mb-2">Agentic Evaluation</h4>
              <p className="text-xs text-premium-500 italic leading-relaxed">Closing the loop with automated user sentiment analysis on recipe satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-accent text-white text-center rounded-[3rem] mx-6">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 italic">Next Gen AI Scheduling</h2>
          <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-accent font-bold uppercase tracking-widest hover:shadow-xl transition-all">
            Build with Me
          </Link>
        </div>
      </section>
    </main>
  );
}
