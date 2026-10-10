import { ShieldCheck } from 'lucide-react';

export function MemoryPage() {
  return (
    <div className="content-panel">
      <div className="top-row">
        <div>
          <div className="eyebrow">Memory</div>
          <h2>Personal memory</h2>
        </div>
      </div>

      <div className="notice-box">
        <ShieldCheck size={18} />
        <span>Explicit consent is required before saving or using personal memory.</span>
      </div>

      <div className="stack">
        <div className="list-card">
          <strong>Work preference</strong>
          <span>Prefers action-first summaries and task-oriented suggestions.</span>
        </div>
        <div className="list-card">
          <strong>Communication style</strong>
          <span>Uses concise answers in English and Hinglish when needed.</span>
        </div>
      </div>
    </div>
  );
}
