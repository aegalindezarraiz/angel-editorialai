type MissionPayload = Record<string, unknown>;

type OrchestratorResponse = {
  missionId: string;
  status: string;
  message: string;
};

const ORCHESTRATOR_URL = process.env.NEXT_PUBLIC_ORCHESTRATOR_URL;

export async function launchMissionThroughOrchestrator(payload: MissionPayload): Promise<OrchestratorResponse> {
  if (!ORCHESTRATOR_URL) {
    return {
      missionId: 'local-orchestrator-placeholder',
      status: 'mocked',
      message: 'Orchestrator endpoint not configured. Using local placeholder response.'
    };
  }

  const response = await fetch(`${ORCHESTRATOR_URL}/missions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Failed to launch mission through orchestrator');
  }

  return response.json();
}

export async function fetchPipelineFromOrchestrator(missionId: string) {
  if (!ORCHESTRATOR_URL) {
    return { missionId, status: 'mocked', stages: [] };
  }

  const response = await fetch(`${ORCHESTRATOR_URL}/missions/${missionId}/pipeline`, {
    method: 'GET'
  });

  if (!response.ok) {
    throw new Error('Failed to fetch pipeline from orchestrator');
  }

  return response.json();
}

export async function fetchAnalyticsFromOrchestrator(missionId: string) {
  if (!ORCHESTRATOR_URL) {
    return { missionId, status: 'mocked', analytics: null };
  }

  const response = await fetch(`${ORCHESTRATOR_URL}/missions/${missionId}/analytics`, {
    method: 'GET'
  });

  if (!response.ok) {
    throw new Error('Failed to fetch analytics from orchestrator');
  }

  return response.json();
}
