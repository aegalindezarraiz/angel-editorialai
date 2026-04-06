import { createMission, getAnalyticsData, getChannelStudioData, getDashboardData, getPipelineData } from '@/lib/mock-api';

const USE_MOCKS = true;

export async function fetchDashboardData() {
  if (USE_MOCKS) return getDashboardData();
  throw new Error('Real dashboard API not connected yet');
}

export async function fetchChannelStudioData() {
  if (USE_MOCKS) return getChannelStudioData();
  throw new Error('Real channel studio API not connected yet');
}

export async function fetchAnalyticsData() {
  if (USE_MOCKS) return getAnalyticsData();
  throw new Error('Real analytics API not connected yet');
}

export async function fetchPipelineData() {
  if (USE_MOCKS) return getPipelineData();
  throw new Error('Real pipeline API not connected yet');
}

export async function submitMission(input: Record<string, unknown>) {
  if (USE_MOCKS) return createMission(input);
  throw new Error('Real mission submission API not connected yet');
}
