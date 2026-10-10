import { SettingsPanel } from '../components/ChatPanel';

export function SettingsPage() {
  return (
    <div className="content-panel">
      <div className="top-row">
        <div>
          <div className="eyebrow">Settings</div>
          <h2>Customize your assistant</h2>
        </div>
      </div>

      <SettingsPanel />
    </div>
  );
}
