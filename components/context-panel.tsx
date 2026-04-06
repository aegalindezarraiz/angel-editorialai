export function ContextPanel() {
  return (
    <aside className="context-panel">
      <div className="stack">
        <div className="card">
          <h3>System State</h3>
          <div className="stack small muted">
            <span>Orchestrator: active</span>
            <span>Trend Agents: 2 running</span>
            <span>Publishing Connections: 4 configured</span>
            <span>Pending Approvals: 3</span>
          </div>
        </div>

        <div className="card">
          <h3>Connected Channels</h3>
          <div className="stack small muted">
            <span>LinkedIn</span>
            <span>Instagram</span>
            <span>TikTok</span>
            <span>Blog / Web</span>
          </div>
        </div>

        <div className="card">
          <h3>Immediate Warnings</h3>
          <div className="stack small muted">
            <span>1 mission waiting for thesis approval.</span>
            <span>2 assets require QA before scheduling.</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
