import { FeatureStatusList } from '../components/FeatureStatusList';

export function FeatureStatusPage() {
  return (
    <div className="content-panel">
      <div className="top-row">
        <div>
          <div className="eyebrow">Status</div>
          <h2>Feature status</h2>
        </div>
      </div>

      <FeatureStatusList />
    </div>
  );
}
