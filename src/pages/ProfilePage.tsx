export function ProfilePage() {
  return (
    <div className="content-panel">
      <div className="top-row">
        <div>
          <div className="eyebrow">Profile</div>
          <h2>Account overview</h2>
        </div>
      </div>

      <div className="profile-card">
        <div className="avatar">VA</div>
        <div>
          <h3>VEXA User</h3>
          <p>Premium personal AI account</p>
        </div>
      </div>

      <div className="action-row">
        <button>Export conversation history</button>
        <button className="danger">Delete account data</button>
      </div>
    </div>
  );
}
