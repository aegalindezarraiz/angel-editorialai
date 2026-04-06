import { PipelineStage } from '@/types';
import { AgentStatusCard } from '@/components/agent-status-card';

type PipelineStageBoardProps = {
  stages: PipelineStage[];
};

export function PipelineStageBoard({ stages }: PipelineStageBoardProps) {
  return (
    <div className="stage-board">
      {stages.map((stage) => (
        <AgentStatusCard
          key={stage.id}
          title={stage.title}
          agent={stage.agent}
          status={stage.status}
          summary={stage.summary}
        />
      ))}
    </div>
  );
}
