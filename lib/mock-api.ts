import { activeMissions, pipelineSnapshot, trendSignals } from '@/mock-data/dashboard';
import { analyticsData } from '@/mock-data/analytics';
import { channelAssets } from '@/mock-data/channel-studio';

export async function getDashboardData() {
  return Promise.resolve({
    activeMissions,
    pipelineSnapshot,
    trendSignals,
  });
}

export async function getChannelStudioData() {
  return Promise.resolve(channelAssets);
}

export async function getAnalyticsData() {
  return Promise.resolve(analyticsData);
}

export async function getPipelineData() {
  return Promise.resolve(pipelineSnapshot);
}

export async function createMission(input: Record<string, unknown>) {
  return Promise.resolve({
    id: 'mission-mock-created',
    status: 'draft',
    input,
  });
}
