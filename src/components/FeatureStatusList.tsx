import { ShieldCheck } from 'lucide-react';

export function FeatureStatusList() {
  return (
    <div className="status-list">
      <div className="status-row working">
        <div>
          <strong>Responsive website</strong>
          <small>Mobile-first and desktop-ready layout is active.</small>
        </div>
        <span className="badge ok">working</span>
      </div>
      <div className="status-row config">
        <div>
          <strong>Supabase + OpenAI</strong>
          <small>Project environment and backend connection are needed.</small>
        </div>
        <span className="badge config">requires config</span>
      </div>
      <div className="status-row warn">
        <div>
          <strong>Hey Boss wake word</strong>
          <small>Background detection is not supported without native Android support.</small>
        </div>
        <span className="badge warn">not implemented</span>
      </div>
    </div>
  );
}

export function DataSecurityCard() {
  return (
    <div className="notice-box">
      <ShieldCheck size={18} />
      <span>Memory and automation requests require explicit user confirmation.</span>
    </div>
  );
}
