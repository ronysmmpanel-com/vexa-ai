import { DailyAssistantCard } from '../components/ChatPanel';

export function DailyPage() {
  return (
    <div className="content-panel">
      <div className="top-row">
        <div>
          <div className="eyebrow">Daily assistant</div>
          <h2>Planner and reminders</h2>
        </div>
      </div>

      <DailyAssistantCard />
    </div>
  );
}
