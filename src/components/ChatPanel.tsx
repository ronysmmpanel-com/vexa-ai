import { Bot, CalendarDays, History, Mic, MessageSquareText, Settings, Sparkles, UserRound, Volume2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ChatPanel() {
  return (
    <div className="panel-block">
      <div className="chat-bubble assistant">
        Namaste! I am VEXA AI. I can help in English, Hindi and Hinglish.
      </div>
      <div className="chat-bubble user">
        Schedule my tasks, summarize my meeting, and keep my reminders in Hindi.
      </div>

      <div className="composer">
        <input type="text" placeholder="Ask VEXA anything..." />
        <button>Send</button>
      </div>

      <div className="voice-box">
        <button className="voice-btn"><Mic size={16} /> Mic</button>
        <button className="voice-btn"><Volume2 size={16} /> Speak</button>
        <button className="voice-btn warn">Hey Boss</button>
      </div>
    </div>
  );
}

export function MemoryPanel() {
  return (
    <div className="stack">
      <div className="list-card">
        <strong>Preference</strong>
        <span>Prefers short, practical answers in Hinglish.</span>
      </div>
      <div className="list-card">
        <strong>Work style</strong>
        <span>Likes task lists, calendar reminders, and quick summaries.</span>
      </div>
    </div>
  );
}

export function SettingsPanel() {
  return (
    <div className="settings-grid">
      <label>
        Language
        <select defaultValue="hi-en">
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="hi-en">Hinglish</option>
        </select>
      </label>

      <label>
        Voice
        <select defaultValue="default">
          <option value="default">Default</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>

      <label>
        Theme
        <select defaultValue="dark">
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </label>
    </div>
  );
}

export function DailyAssistantCard() {
  return (
    <div className="stack">
      <div className="day-grid">
        <div className="day-card active">Mon</div>
        <div className="day-card">Tue</div>
        <div className="day-card">Wed</div>
        <div className="day-card">Thu</div>
      </div>
      <div className="task-list">
        <div className="task-item">Review sprint deliverables</div>
        <div className="task-item">Client follow-up at 3:00 PM</div>
        <div className="task-item">Prepare launch summary</div>
      </div>
    </div>
  );
}
