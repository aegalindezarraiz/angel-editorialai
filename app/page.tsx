import Link from 'next/link';
import { PageHeader } from '@/components/page-header';

export default function HomePage() {
  return (
    <div>
      <PageHeader
        title="Editorial Operations Room"
        subtitle="A real frontend foundation for the multi-agent content machine. Use the command center to launch missions, inspect pipeline state, and control publishing across LinkedIn, Instagram, TikTok, and Blog."
        actions={
          <>
            <Link className="button primary" href="/dashboard">Open Dashboard</Link>
            <Link className="button" href="/new-mission">Create Mission</Link>
          </>
        }
      />

      <div className="card-grid">
        <div className="card span-4">
          <h3>Mission Control</h3>
          <p className="muted">Create strategic missions, define channels, and launch guided autonomous workflows.</p>
        </div>
        <div className="card span-4">
          <h3>Pipeline Visibility</h3>
          <p className="muted">Track trend scan, research, thesis, asset generation, QA, and publishing from one workspace.</p>
        </div>
        <div className="card span-4">
          <h3>Multi-Channel Output</h3>
          <p className="muted">Generate and govern coordinated content across LinkedIn, Instagram, TikTok, and Blog.</p>
        </div>
      </div>
    </div>
  );
}
