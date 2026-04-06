type MetricsOverviewProps = {
  impressions: string;
  engagementRate: string;
  saves: string;
  leads: string;
};

export function MetricsOverview({ impressions, engagementRate, saves, leads }: MetricsOverviewProps) {
  return (
    <div className="card-grid">
      <div className="card span-3">
        <div className="muted small">Impressions</div>
        <div className="kpi">{impressions}</div>
      </div>
      <div className="card span-3">
        <div className="muted small">Engagement Rate</div>
        <div className="kpi">{engagementRate}</div>
      </div>
      <div className="card span-3">
        <div className="muted small">Saves</div>
        <div className="kpi">{saves}</div>
      </div>
      <div className="card span-3">
        <div className="muted small">Leads</div>
        <div className="kpi">{leads}</div>
      </div>
    </div>
  );
}
