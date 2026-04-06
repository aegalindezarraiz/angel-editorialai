import { PageHeader } from '@/components/page-header';
import { pipelineSnapshot } from '@/mock-data/dashboard';
import { statusBadgeClass } from '@/lib/utils';

export default function ContentPipelinePage() {
  return (
    <div>
      <PageHeader
        title="Content Pipeline"
        subtitle="Inspect every stage of execution from intake to publishing, with visible agent ownership, blockers, and retry paths."
        actions={
          <>
            <button className="button primary">Approve Current Stage</button>
            <button className="button">Retry Failed Stage</button>
          </>
        }
      />

      <div className="card">
        <h3>Mission: Authority Engine for Migration Strategy</h3>
        <p className="muted">Current workflow path: trend scan → research → thesis → source asset → channel assets → QA → packaging → publishing</p>
      </div>

      <div className="stage-board" style={{ marginTop: 16 }}>
        {pipelineSnapshot.map((stage) => (
          <div className="stage-card" key={stage.id}>
            <div className="stage-meta">
              <strong>{stage.title}</strong>
              <span className={statusBadgeClass(stage.status)}>{stage.status}</span>
            </div>
            <div className="small muted">Responsible agent</div>
            <div style={{ marginBottom: 12 }}>{stage.agent}</div>
            <div className="small muted">Output summary</div>
            <p className="muted">{stage.summary}</p>
            <div className="button-row">
              <button className="button">Inspect Output</button>
              <button className="button">Open Agent Trace</button>
            </div>
          </div>
        ))}
      </div>

      <div className="card-grid" style={{ marginTop: 16 }}>
        <div className="card span-6">
          <h3>Approvals Required</h3>
          <div className="stack">
            <div className="list-row">
              <div>
                <div>Editorial thesis sign-off</div>
                <div className="muted small">Waiting after research completion</div>
              </div>
              <span className="badge warning">pending</span>
            </div>
            <div className="list-row">
              <div>
                <div>LinkedIn asset pack</div>
                <div className="muted small">Review hook strength and CTA direction</div>
              </div>
              <span className="badge">queued</span>
            </div>
          </div>
        </div>

        <div className="card span-6">
          <h3>System Notes</h3>
          <div className="stack muted">
            <span>Trend relevance score remains high for LinkedIn and TikTok.</span>
            <span>Research is blocked only by final proof-source selection.</span>
            <span>QA threshold is configured for strict platform-fit validation.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
