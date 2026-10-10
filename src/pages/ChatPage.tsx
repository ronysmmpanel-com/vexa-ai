import { Mic, Volume2 } from 'lucide-react';
import { Orb } from '../components/Orb';

export function ChatPage() {
  return (
    <div className="content-panel">
      <div className="top-row">
        <div>
          <div className="eyebrow">Personal AI assistant</div>
          <h1>VEXA AI</h1>
        </div>
        <div className="badge success">Chat ready</div>
      </div>

      <Orb />

      <div className="panel-block">
        <div className="chat-bubble assistant">Namaste! I’m VEXA AI. I can help in English, Hindi, and Hinglish.</div>
        <div className="chat-bubble user">Plan my day, summarize my calls, and keep my reminders in sync.</div>
      </div>

      <div className="composer">
        <input type="text" placeholder="Ask VEXA anything..." />
        <button>Send</button>
      </div>

      <div className="voice-box">
        <button className="voice-btn"><Mic size={16}/> Mic</button>
        <button className="voice-btn"><Volume2 size={16}/> Speak</button>
        <button className="voice-btn warn">Hey Boss</button>
      </div>
    </div>
  );
}
