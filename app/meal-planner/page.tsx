import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MealPlannerPRD() {
  return (
    <main className="max-w-4xl mx-auto py-24 px-6 sm:px-8">
      <Link href="/" className="inline-flex items-center gap-2 text-premium-500 hover:text-accent transition-colors mb-12 group">
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        Back to Portfolio
      </Link>

      <article className="prose prose-lg prose-premium">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-premium-900 mb-4 tracking-tight">Mean Planner: Autonomous Local LLM Task Agent</h1>
          <p className="text-xl text-accent font-medium tracking-wide">Case Study & Architecture Document</p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-serif font-semibold text-premium-900 mb-4">1. Executive Summary</h2>
          <p className="text-premium-600 leading-relaxed font-light mb-6">
            With the rapid commoditization of large language models, the true moat for personal productivity lies in <strong>data privacy</strong> and <strong>seamless integration</strong> into existing communication habits. Mean Planner is an autonomous task management and scheduling agent I architected using local, quantized LLMs (Gemma 4 / Qwen) running entirely on-premise via <strong>Ollama</strong>. It interfaces with the user primarily through a Telegram bot, utilizing <strong>n8n</strong> as the orchestration layer to execute multi-step workflows, database transactions, and reminder scheduling. 
          </p>
          <p className="text-premium-600 leading-relaxed font-light">
            This project validates the hypothesis that an AI agent can proactively manage a user's calendar and daily tasks with high accuracy, zero cloud AI costs, and absolute data sovereignty.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-serif font-semibold text-premium-900 mb-4">2. Problem Statement & User Pain Points</h2>
          <ul className="space-y-4 mb-6 list-disc list-inside text-premium-600 font-light">
            <li><strong>Friction in capture:</strong> Traditional planning apps require context switching, opening a dedicated app, navigating UI logic, and filling forms to add a task.</li>
            <li><strong>Cloud dependency & Privacy:</strong> Inputting personal plans, health goals, or sensitive business tasks into a cloud LLM (like ChatGPT) raises privacy concerns.</li>
            <li><strong>Rigid reminder systems:</strong> Current reminders are strictly time-bound. Users lack an agent that understands <em>context</em> ("Remind me to call John when I text that I'm back home").</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-serif font-semibold text-premium-900 mb-4">3. Architectural Design & Workflow Execution</h2>
          <p className="text-premium-600 leading-relaxed font-light mb-6">
            The system is designed with a strict microservices approach, decoupling the UI/Ingestion (Telegram) from orchestration (n8n) from the brain (Ollama).
          </p>

          <div className="bg-premium-50 border border-premium-100 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-premium-800 mb-3">System Architecture Flow</h3>
            <ol className="space-y-3 text-premium-600 font-light text-sm list-decimal list-inside">
              <li><strong>Ingestion (Telegram API):</strong> User sends unstructured intent: <em>"Block my calendar for tomorrow at 2 PM to finish the PRD, and remind me an hour before."</em></li>
              <li><strong>Orchestration (n8n Webhook):</strong> Receives the HTTP POST, extracts metadata (timestamp, user ID).</li>
              <li><strong>Inference (Ollama via REST):</strong> n8n sends a crafted zero-shot prompt to the locally hosted model (e.g., Qwen 1.5). The system prompt enforces strict JSON output containing: <strong>Task, Time, Duration, Urgency, Action_Type</strong>.</li>
              <li><strong>Execution Engine (n8n Logic Nodes):</strong> Parses the JSON. If valid, routes it to Postgres/Notion databases. If a reminder is required, schedules a CRON trigger logic loop.</li>
              <li><strong>Acknowledge:</strong> n8n pushes a dynamic confirmation message back through the Telegram Bot API.</li>
            </ol>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-serif font-semibold text-premium-900 mb-4">4. Edge Testing & Risk Mitigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl">
              <h4 className="font-semibold text-premium-900 mb-2">Risk: LLM Hallucinations</h4>
              <p className="text-sm text-premium-600 font-light">Local models, especially parameterized below 8B, are prone to output schema drift. <br/><br/><strong>Mitigation:</strong> Implemented n8n strict JSON schema validation nodes. If parse fails, a fallback prompt is executed correcting the LLM.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <h4 className="font-semibold text-premium-900 mb-2">Risk: Latency via Local compute</h4>
              <p className="text-sm text-premium-600 font-light">Quantized models can still bottleneck on standard hardware, causing bad UX on Telegram.<br/><br/><strong>Mitigation:</strong> Set typing indicators automatically on Telegram upon receipt. Asynchronous processing queue implemented for non-blocking UI.</p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-serif font-semibold text-premium-900 mb-4">5. Metrics & Success Criteria</h2>
          <ul className="space-y-4 list-disc list-inside text-premium-600 font-light">
            <li><strong>Task Ingestion Latency:</strong> Goal &lt; 5 seconds end-to-end.</li>
            <li><strong>Parse Accuracy:</strong> 95% + automated JSON generation without human correction.</li>
            <li><strong>User Retention / Daily Active Usage:</strong> Measured by volume of messages per active day over 30 days.</li>
          </ul>
        </section>

      </article>
    </main>
  );
}
