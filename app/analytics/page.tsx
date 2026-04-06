import { PageHeader } from '@/components/page-header';
import { analyticsData } from '@/mock-data/analytics';

export default function AnalyticsPage() {
  return (
    <div>
      <PageHeader
        title="Analytics"
        subtitle="Review channel performance, winning hooks, top formats, and next-cycle recommendations generated from the machine's feedback loop."
        actions={
          <>
            <button className="button primary">Analyze Results</button>
            <button className="button">Export Report</button>
          </>
        }
      />

      <div className="card-grid">
        <div className="card span-3">
          <div className="muted small">Impressions</div>
          <div className="kpi">{analyticsData.overview.impressions}</div>
        </div>
        <div className="card span-3">
          <div className="muted small">Engagement Rate</div>
          <div className="kpi">{analyticsData.overview.engagementRate}</div>
        </div>
        <div className="card span-3">
          <div className="muted small">Saves</div>
          <div className="kpi">{analyticsData.overview.saves}</div>
        </div>
        <div className="card span-3">
          <div className="muted small">Leads</div>
          <div className="kpi">{analyticsData.overview.leads}</div>
        </div>

        <div className="card span-6">
          <h3>Top Hooks</h3>
          <div className="stack">
            {analyticsData.topHooks.map((hook) => (
              <div className="list-row" key={hook}>
                <div>{hook}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card span-6">
          <h3>Top Formats</h3>
          <div className="stack">
            {analyticsData.topFormats.map((item) => (
              <div className="list-row" key={item.format}>
                <div>{item.format}</div>
                <div className="badge success">{item.performance}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card span-12">
          <h3>Optimization Recommendations</h3>
          <div className="stage-board">
            {analyticsData.recommendations.map((rec) => (
              <div className="stage-card" key={rec}>
                <div className="small muted">Next-cycle directive</div>
                <p>{rec}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
