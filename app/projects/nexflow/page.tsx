"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Activity, Users, Shield, Rocket, ClipboardCheck, ArrowRight, Layers, BarChart3, Layout, Clock, CheckCircle2, AlertTriangle, ListChecks, Settings2, Share2, Milestone, Globe2, Search, Zap, HeartHandshake, FileSearch, UserCircle2, Timer, Sparkles } from "lucide-react";
import Link from "next/link";

export default function NexFlowPRDPage() {
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
            Internal PRD &bull; Confidential &bull; v1.4.0
          </div>
        </div>
      </nav>

      {/* PRD Header */}
      <section className="pt-32 pb-20 border-b border-premium-100 bg-premium-50/50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-8">
               <div className="px-3 py-1 rounded-full bg-accent text-white text-[10px] font-bold tracking-widest uppercase">Approved</div>
               <div className="px-3 py-1 rounded-full bg-premium-100 border border-premium-200 text-premium-500 text-[10px] font-bold tracking-widest uppercase">Status: Roadmap Finalization</div>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 -ml-1">
              NexFlow <br />
              <span className="text-accent italic">Enterprise Onboarding OS</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 border-t border-premium-200 pt-12">
               <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-premium-400 mb-4">The Vision</h4>
                  <p className="text-lg text-premium-700 font-light italic leading-relaxed text-pretty">
                    To transform the enterprise employee lifecycle into a <span className="font-bold text-premium-900">frictionless experience</span> that leverages automation to maximize <span className="font-bold text-premium-900">Day-Zero productivity</span> and long-term organizational value.
                  </p>
               </div>
               <div className="flex gap-16">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-premium-400 mb-2">Author</h4>
                    <p className="text-sm font-bold text-premium-900 capitalize">Anjali Grover</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-premium-400 mb-2">PRM Focus</h4>
                    <p className="text-sm font-bold text-premium-900">B2B Product Strategy</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Access & Approval Service Blueprint */}
      <section className="py-24 bg-white border-b border-premium-100 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-8">01. Service Blueprint: Access & Approvals</h2>
          <h3 className="text-3xl font-bold text-premium-900 mb-12 italic leading-tight">Master Orchestration Flow</h3>
          
          <div className="space-y-4">
            {[
              { role: "Recruiter / ATS", action: "Closes Candidate & Marks as 'Hired'", result: "Triggers NexFlow Webhook", status: "Auto" },
              { role: "Direct Manager", action: "Selects Departmental Access Bundle", result: "Approval Request sent to IT & Security", status: "Action Required" },
              { role: "IT Infrastructure", action: "Hardware Provisioning & IDP Setup", result: "Shipment Tracking ID generated", status: "TAT: 24h" },
              { role: "Security / FinOps", action: "Budget & Compliance Validation", result: "Service Account keys minted (Okta)", status: "TAT: 12h" }
            ].map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-premium-50/50 border border-premium-100 group hover:border-accent transition-all">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-premium-100 text-accent group-hover:bg-accent group-hover:text-white transition-all">
                   <p className="text-sm font-bold">{i + 1}</p>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-[10px] font-bold text-premium-400 uppercase tracking-widest mb-1">{step.role}</p>
                  <p className="text-base font-bold text-premium-900 italic">{step.action}</p>
                </div>
                <ArrowRight size={16} className="hidden md:block text-premium-200" />
                <div className="flex-1 text-center md:text-left">
                  <p className="text-[10px] font-bold text-premium-400 uppercase tracking-widest mb-1">Outcome</p>
                  <p className="text-sm text-premium-600 font-light">{step.result}</p>
                </div>
                <div className="px-4 py-1.5 rounded-full bg-white border border-premium-200 text-[10px] font-bold text-premium-400 uppercase tracking-tight">
                  {step.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Matrix (V1.4) */}
      <section className="py-24 bg-premium-900 text-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-4">
            <h2 className="text-4xl font-bold tracking-tight">Requirement Matrix</h2>
            <p className="text-sm text-accent font-bold uppercase tracking-widest italic">Phase: Core Infrastructure + AI Helper</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "ATS Transition Logic", icon: Zap, sub: "P0", items: ["Greenhouse/Lever Webhook listener", "Candidate-to-Employee bridge", "Offer letter data mapping"] },
              { title: "AI HR Policy Assistant", icon: Search, sub: "P0", items: ["RAG-based policy search", "Slack/Teams Bot interface", "Deflection logic analytics"] },
              { title: "Zero-Trust Provisioning", icon: Shield, sub: "P0", items: ["Okta auto-sync", "RBAC management", "API key lifecycle"] },
              { title: "Day-Zero Content Loop", icon: Layers, sub: "P1", items: ["Welcome video portal", "Org chart visualization", "Task sequence mapping"] },
              { title: "Engagement Analytics", icon: BarChart3, sub: "P1", items: ["eNPS Score tracking", "Time-To-Tool visibility", "Manager performance"] },
              { title: "Global Compliance", icon: Globe2, sub: "P0", items: ["SOC2/GDPR auditing", "Regional labor law checks", "Data encryption @ rest"] }
            ].map((epic, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 group hover:border-accent transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent"><epic.icon size={20} /></div>
                  <span className="text-[10px] font-bold uppercase text-accent/60 tracking-widest">{epic.sub}</span>
                </div>
                <h4 className="text-lg font-bold mb-6 italic">{epic.title}</h4>
                <ul className="space-y-3">
                  {epic.items.map(item => (
                    <li key={item} className="flex items-center gap-3 text-xs text-premium-400 font-light">
                      <div className="w-1 h-1 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLAs & Team Directory */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-12">02. Operational SLAs & Team Contact</h2>
        <div className="overflow-hidden rounded-3xl border border-premium-100 bg-white">
          <table className="w-full text-left border-collapse">
            <thead className="bg-premium-50">
              <tr>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-premium-500 border-b border-premium-100">Team / Department</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-premium-500 border-b border-premium-100">Scope of Approval</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-premium-500 border-b border-premium-100">Contact / Channel</th>
                <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-premium-500 border-b border-premium-100">Target TAT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-premium-100">
              {[
                { team: "IT Infrastructure", scope: "Hardware & SaaS Provisioning", contact: "#help-it-onboarding", tat: "24 Hours" },
                { team: "Security & Compliance", scope: "VPC Access & Security Training", contact: "security@company.com", tat: "12 Hours" },
                { team: "HR Operations", scope: "Payroll, Benefits & Tax Compliance", contact: "#hr-connect", tat: "48 Hours" },
                { team: "Facility / Workplace", scope: "Badge Access & Office Seating", contact: "Internal Concierge", tat: "24 Hours" }
              ].map(row => (
                <tr key={row.team} className="group hover:bg-premium-50/50 transition-colors">
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <UserCircle2 size={16} className="text-accent" />
                       <span className="text-sm font-bold text-premium-900">{row.team}</span>
                    </div>
                  </td>
                  <td className="p-6 text-xs text-premium-500 font-light italic">{row.scope}</td>
                  <td className="p-6 text-xs font-mono text-accent">{row.contact}</td>
                  <td className="p-6">
                    <div className="flex items-center gap-2">
                      <Timer size={14} className="text-premium-400 group-hover:text-accent" />
                      <span className="text-[10px] font-bold text-premium-900 uppercase tracking-tighter">{row.tat}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-8 text-xs text-premium-400 italic font-light">
          * TAT (Turnaround Time) starts from the moment a ticket is triggered via NexFlow webhooks. Failure to meet TAT triggers an escalation to VP level.
        </p>
      </section>

      {/* Future Roadmap Section */}
      <section className="py-24 bg-premium-50/50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
           <div className="flex items-center gap-2 mb-8">
              <Sparkles size={20} className="text-accent" />
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Strategic Roadmap: The Future</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-12">
                 <h3 className="text-3xl font-bold text-premium-900 tracking-tight leading-tight italic">v2.0 & Beyond: <br />Platformization</h3>
                 <p className="text-premium-600 font-light italic leading-relaxed">
                   NexFlow will evolve from an onboarding tool into an <strong>End-to-End Talent Operating Systems</strong>, integrating performance reviews, internal mobility, and automated offboarding.
                 </p>
                 <div className="space-y-4">
                    {[
                      { t: "Predictive Attrition Analysis", d: "Using AI to flag hires with low initial engagement for early intervention." },
                      { t: "Automated Offboarding", d: "Zero-touch revocation of all access keys upon contract termination." },
                      { t: "Cross-Entity Mobility", d: "Seamless transfer of access and credentials for internal department shifts." }
                    ].map(item => (
                      <div key={item.t} className="flex gap-4 p-4 rounded-xl border border-premium-100 bg-white">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                        <div>
                           <p className="text-sm font-bold text-premium-900">{item.t}</p>
                           <p className="text-xs text-premium-500 italic mt-1">{item.d}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="p-10 rounded-[3rem] bg-premium-900 text-white relative overflow-hidden flex flex-col justify-center">
                 <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#115e59 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                 <h4 className="text-[10px] font-bold uppercase tracking-widest text-premium-400 mb-8 relative z-10">The Metric Vision 2027</h4>
                 <div className="space-y-10 relative z-10">
                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <p className="text-sm font-bold">Time-To-Value (TTV)</p>
                        <p className="text-xs font-bold text-accent">Day 0.5</p>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "95%" }} className="h-full bg-accent" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <p className="text-sm font-bold">Manual Onboarding Overhead</p>
                        <p className="text-xs font-bold text-accent">~0.5%</p>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "99%" }} className="h-full bg-accent" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <p className="text-sm font-bold">Integration Coverage</p>
                        <p className="text-xs font-bold text-accent">50+ Enterprise Apps</p>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "90%" }} className="h-full bg-accent" />
                      </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-accent text-white text-center rounded-[3rem] mx-6">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Exploring Scalable Product Ecosystems?</h2>
          <Link href="/#contact" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white text-accent font-bold uppercase tracking-widest hover:shadow-xl hover:-translate-y-1 transition-all">
            Connect for Collaborations
          </Link>
        </div>
      </section>
    </main>
  );
}
