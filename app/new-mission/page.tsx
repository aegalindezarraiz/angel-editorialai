import { PageHeader } from '@/components/page-header';

export default function NewMissionPage() {
  return (
    <div>
      <PageHeader
        title="New Mission"
        subtitle="Define the strategic objective, audience, channels, and operating mode for a new multi-agent content mission."
        actions={<button className="button primary">Analyze Mission</button>}
      />

      <div className="card">
        <div className="form-grid">
          <div className="field full">
            <label>Mission title</label>
            <input className="input" defaultValue="Authority campaign for migration consulting" />
          </div>

          <div className="field">
            <label>Strategic objective</label>
            <select className="select" defaultValue="trust">
              <option value="trust">Build authority and trust</option>
              <option value="lead-gen">Generate qualified leads</option>
              <option value="launch">Support offer launch</option>
            </select>
          </div>

          <div className="field">
            <label>Autonomy mode</label>
            <select className="select" defaultValue="guided">
              <option value="guided">Guided autonomy</option>
              <option value="supervised">Supervised</option>
              <option value="high">High autonomy</option>
            </select>
          </div>

          <div className="field full">
            <label>Audience</label>
            <textarea className="textarea" defaultValue="Professionals and families evaluating strategic migration pathways who need clarity, confidence, and structured decision support." />
          </div>

          <div className="field full">
            <label>Topic or offer focus</label>
            <textarea className="textarea" defaultValue="Create educational authority content around migration strategy, legal process clarity, risk reduction, and premium advisory positioning." />
          </div>

          <div className="field">
            <label>Priority channels</label>
            <select className="select" defaultValue="all">
              <option value="all">LinkedIn + Instagram + TikTok + Blog</option>
              <option value="li-ig">LinkedIn + Instagram</option>
              <option value="li-blog">LinkedIn + Blog</option>
            </select>
          </div>

          <div className="field">
            <label>CTA goal</label>
            <select className="select" defaultValue="consultation">
              <option value="consultation">Book consultation</option>
              <option value="save-share">Save / share / comment</option>
              <option value="lead-magnet">Download lead magnet</option>
            </select>
          </div>

          <div className="field">
            <label>Due date</label>
            <input className="input" type="date" defaultValue="2026-04-10" />
          </div>

          <div className="field">
            <label>Content cadence</label>
            <select className="select" defaultValue="weekly">
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="campaign">Campaign burst</option>
            </select>
          </div>
        </div>

        <div className="button-row" style={{ marginTop: 20 }}>
          <button className="button primary">Launch Workflow</button>
          <button className="button">Save Draft</button>
          <button className="button">Generate Mission Summary</button>
        </div>
      </div>
    </div>
  );
}
