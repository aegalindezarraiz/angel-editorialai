import { PageHeader } from '@/components/page-header';
import { activeMissions, pipelineSnapshot, trendSignals } from '@/mock-data/dashboard';
import { statusBadgeClass } from '@/lib/utils';

export default function DashboardPage() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        subtitle="Central command view for active missions, trend opportunities, approvals, and pipeline health."
        actions={<button className="button primary">Launch Mission</button>}
      />

      <div className="card-grid">
        <div className="card span-3">
          <div className="muted small">Active Missions</div>
          <div className="kpi">{activeMissions.length}</div>
          <div className="muted small">Across LinkedIn, Instagram, TikTok, and Blog</div>
        </div>
        <div className="card span-3">
          <div className="muted small">Pending Approvals</div>
          <div className="kpi">3</div>
          <div className="muted small">Thesis and channel asset sign-off</div>
        </div>
        <div className="card span-3">
          <div className="muted small">Trend Alerts</div>
          <div className="kpi">{trendSignals.length}</div>
          <div className="muted small">Relevant signals detected today</div>
        </div>
        <div className="card span-3">
          <div className="muted small">Publishing Health</div>
          <div className="kpi">92%</div>
          <div className="muted small">Connected channels operational</div>
        </div>

        <div className="card span-7">
          <h3>Mission Queue</h3>
          <div className="stack">
            {activeMissions.map((mission) => (
              <div className="list-row" key={mission.id}>
                <div>
                  <div>{mission.title}</div>
                  <div className="muted small">{mission.objective}</div>
                </div>
                <div>
                  <span className={statusBadgeClass(mission.status)}>{mission.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card span-5">
          <h3>Trend Radar Snapshot</h3>
          <div className="stack">
            {trendSignals.map((signal) => (
              <div className="list-row" key={signal.topic}>
                <div>
                  <div>{signal.topic}</div>
                  <div className="muted small">{signal.channel}</div>
                </div>
                <span className={statusBadgeClass(signal.urgency)}>{signal.urgency}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card span-12">
          <h3>Pipeline Snapshot</h3>
          <div className="stage-board">
            {pipelineSnapshot.map((stage) => (
              <div className="stage-card" key={stage.id}>
                <div className="stage-meta">
                  <strong>{stage.title}</strong>
                  <span className={statusBadgeClass(stage.status)}>{stage.status}</span>
                </div>
                <div className="muted small">{stage.agent}</div>
                <p className="muted">{stage.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
