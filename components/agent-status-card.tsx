type AgentStatusCardProps = {
  title: string;
  agent: string;
  status: string;
  summary: string;
};

export function AgentStatusCard({ title, agent, status, summary }: AgentStatusCardProps) {
  const badgeClass = ['done', 'approved', 'published', 'scheduled'].includes(status)
    ? 'badge success'
    : ['running', 'research', 'approval'].includes(status)
      ? 'badge warning'
      : status === 'blocked'
        ? 'badge danger'
        : 'badge';

  return (
    <div className="stage-card">
      <div className="stage-meta">
        <strong>{title}</strong>
        <span className={badgeClass}>{status}</span>
      </div>
      <div className="small muted">Responsible agent</div>
      <div style={{ marginBottom: 12 }}>{agent}</div>
      <div className="small muted">Output summary</div>
      <p className="muted">{summary}</p>
    </div>
  );
}
