import { PageHeader } from '@/components/page-header';
import { trendRadarData } from '@/mock-data/trend-radar';

export default function TrendRadarPage() {
  return (
    <div>
      <PageHeader
        title="Trend Radar"
        subtitle="Detect rising conversations, hook patterns, competitor shifts, and audience questions to convert signals into fast-response missions."
        actions={
          <>
            <button className="button primary">Turn Trend Into Mission</button>
            <button className="button">Generate Fast Response Assets</button>
          </>
        }
      />

      <div className="card-grid">
        <div className="card span-6">
          <h3>Rising Topics</h3>
          <div className="stack">
            {trendRadarData.risingTopics.map((item) => (
              <div className="list-row" key={item.topic}>
                <div>
                  <div>{item.topic}</div>
                  <div className="muted small">{item.channel}</div>
                </div>
                <div className="badge warning">{item.score}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card span-6">
          <h3>Competitor Signals</h3>
          <div className="stack">
            {trendRadarData.competitorSignals.map((signal) => (
              <div className="list-row" key={signal}>
                <div>{signal}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card span-12">
          <h3>Audience Questions</h3>
          <div className="stage-board">
            {trendRadarData.audienceQuestions.map((question) => (
              <div className="stage-card" key={question}>
                <div className="small muted">Detected question</div>
                <p>{question}</p>
                <div className="button-row">
                  <button className="button">Save to Idea Bank</button>
                  <button className="button">Use as Hook</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
