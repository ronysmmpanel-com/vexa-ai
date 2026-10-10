import { motion } from 'framer-motion';
import { Bot, mic, Volume2, Mic, Sparkles } from 'lucide-react';

export function Orb() {
  return (
    <div className="orb-shell">
      <motion.div
        className="orb-ring"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />
      <div className="orb-core">
        <Bot size={52} />
      </div>
    </div>
  );
}

export function VoicePanel() {
  return (
    <div className="voice-box">
      <button className="voice-btn"><Mic size={16} /> Mic</button>
      <button className="voice-btn"><Volume2 size={16} /> Speak</button>
      <button className="voice-btn warn">Hey Boss</button>
    </div>
  );
}

export function HeaderCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="header-card">
      <div className="eyebrow">VEXA AI</div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
