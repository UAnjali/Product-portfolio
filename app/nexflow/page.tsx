import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NexFlowPRD() {
  return (
    <main className="max-w-4xl mx-auto py-24 px-6 sm:px-8">
      <Link href="/" className="inline-flex items-center gap-2 text-premium-500 hover:text-accent transition-colors mb-12 group">
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        Back to Portfolio
      </Link>

      <article className="prose prose-lg prose-premium">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-premium-900 mb-4 tracking-tight">NexFlow: Enterprise B2B Employee Onboarding</h1>
          <p className="text-xl text-accent font-medium tracking-wide">Zero-to-One Product Requirements Document</p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-serif font-semibold text-premium-900 mb-4">1. Problem Space</h2>
          <p className="text-premium-600 leading-relaxed font-light mb-6">
            In modern enterprises, employee onboarding is a fragmented, multi-departmental nightmare consisting of Jira tickets, Slack DMs, fragmented SaaS provisioning (Okta, Google Workspace, GitHub), and outdated HR portals. This friction directly limits a company's bottom line by drastically increasing the <strong>Time-to-Productivity (TTP)</strong> of high-cost engineering and operational hires.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-serif font-semibold text-premium-900 mb-4">2. The Solution: NexFlow</h2>
          <p className="text-premium-600 leading-relaxed font-light mb-6">
            NexFlow is an intelligent, API-first onboarding orchestration platform. Instead of serving as another HR database, NexFlow acts as the integration brain—it hooks into existing IdPs and automatically provisions software licenses, schedules cohort orientations, and delivers interactive, role-specific checklists directly into the new hire's Slack/Teams. 
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-serif font-semibold text-premium-900 mb-4">3. Target Personas & Core Workflows</h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-premium-200/50 p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-premium-900 mb-2">IT Systems Administrator (The Provisioner)</h3>
              <p className="text-sm text-premium-600 font-light"><strong>Pain Point:</strong> Spends 4 hours per hire manually generating accounts.</p>
              <p className="text-sm text-premium-600 font-light mt-2"><strong>Feature:</strong> "Role-Based App Stacks". Approves one access payload that automatically calls Okta API to provision Slack, Jira, GitHub, and AWS access natively.</p>
            </div>
            
            <div className="bg-white border border-premium-200/50 p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-premium-900 mb-2">The New Hire</h3>
              <p className="text-sm text-premium-600 font-light"><strong>Pain Point:</strong> Overwhelmed with 40 emails on day 1. Doesn't know what priority 1 is.</p>
              <p className="text-sm text-premium-600 font-light mt-2"><strong>Feature:</strong> Conversational Onboarding. NexFlow chatbot serves daily bite-sized tasks ("Day 1: Setup 2FA", "Day 3: Deploy first local commit") and acts as an RAG-enabled QA bot across company wiki.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-serif font-semibold text-premium-900 mb-4">4. Key Success Metrics (KPIs)</h2>
          <div className="overflow-x-auto border border-premium-200/50 rounded-2xl">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="bg-premium-50 border-b border-premium-200/50 text-premium-800">
                <tr>
                  <th className="px-6 py-4 font-semibold">Metric</th>
                  <th className="px-6 py-4 font-semibold">Baseline</th>
                  <th className="px-6 py-4 font-semibold">NexFlow Target</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-premium-200/50">
                  <td className="px-6 py-4 text-premium-900">Time-To-Productivity (TTP)</td>
                  <td className="px-6 py-4 text-premium-500">24 Days</td>
                  <td className="px-6 py-4 text-accent font-medium">14 Days</td>
                </tr>
                <tr className="border-b border-premium-200/50">
                  <td className="px-6 py-4 text-premium-900">IT Setup Time per Hire</td>
                  <td className="px-6 py-4 text-premium-500">4 Hours</td>
                  <td className="px-6 py-4 text-accent font-medium">&lt; 15 Minutes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-premium-900">30-Day New Hire CSAT</td>
                  <td className="px-6 py-4 text-premium-500">6.5/10</td>
                  <td className="px-6 py-4 text-accent font-medium">9.0/10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-serif font-semibold text-premium-900 mb-4">5. Edge Cases & Risks</h2>
          <ul className="space-y-4 list-disc list-inside text-premium-600 font-light">
            <li><strong>Failed API Provisioning:</strong> Sometimes GitHub OAuth fails. The system must establish a dead-letter queue that immediately raises an alert to IT via PagerDuty/Slack vs silently failing.</li>
            <li><strong>Compliance Constraints:</strong> Financial sector clients cannot have automatic DB permissions granted without dual-approval logic. NexFlow workflow engine must support multi-step manual gate breaks.</li>
          </ul>
        </section>

      </article>
    </main>
  );
}
