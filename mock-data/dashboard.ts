import { Mission, NavItem, PipelineStage, TrendSignal } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'New Mission', href: '/new-mission' },
  { label: 'Content Pipeline', href: '/content-pipeline' },
  { label: 'Channel Studio', href: '/channel-studio' },
  { label: 'Trend Radar', href: '/trend-radar' },
  { label: 'Calendar', href: '/calendar' },
  { label: 'Asset Library', href: '/asset-library' },
  { label: 'Analytics', href: '/analytics' },
  { label: 'Memory', href: '/memory' },
  { label: 'Settings', href: '/settings' }
];

export const activeMissions: Mission[] = [
  {
    id: 'm-001',
    title: 'Authority Engine for Migration Strategy',
    objective: 'Build trust and conversion through educational content.',
    channels: ['LinkedIn', 'Instagram', 'Blog'],
    status: 'research',
    dueDate: '2026-04-08'
  },
  {
    id: 'm-002',
    title: 'Fast Response Trend Campaign',
    objective: 'Exploit a rising conversation with short-cycle assets.',
    channels: ['LinkedIn', 'TikTok', 'Instagram'],
    status: 'approval',
    dueDate: '2026-04-06'
  },
  {
    id: 'm-003',
    title: 'Long-form Blog Repurposing Sprint',
    objective: 'Convert one flagship article into multi-format content.',
    channels: ['Blog', 'LinkedIn', 'TikTok'],
    status: 'scheduled',
    dueDate: '2026-04-10'
  }
];

export const pipelineSnapshot: PipelineStage[] = [
  {
    id: 'p-01',
    title: 'Trend Scan',
    agent: 'Trend Intelligence Agent',
    status: 'done',
    summary: '3 high-relevance signals detected for LinkedIn and TikTok.'
  },
  {
    id: 'p-02',
    title: 'Research',
    agent: 'Market Research Agent',
    status: 'running',
    summary: 'Mapping audience objections and proof sources.'
  },
  {
    id: 'p-03',
    title: 'Thesis',
    agent: 'Editorial Strategy Agent',
    status: 'pending',
    summary: 'Waiting for research artifacts.'
  },
  {
    id: 'p-04',
    title: 'Channel Assets',
    agent: 'LinkedIn / Instagram / TikTok Agents',
    status: 'pending',
    summary: 'Will derive channel-native assets from the source article.'
  },
  {
    id: 'p-05',
    title: 'QA',
    agent: 'Creative QA Agent',
    status: 'pending',
    summary: 'Validation gate for quality and platform fit.'
  },
  {
    id: 'p-06',
    title: 'Publishing',
    agent: 'Publishing Agent',
    status: 'pending',
    summary: 'Packaging and scheduling for connected channels.'
  }
];

export const trendSignals: TrendSignal[] = [
  { topic: 'Trust-first authority content', channel: 'LinkedIn', urgency: 'high' },
  { topic: 'Myth-busting educational reels', channel: 'Instagram', urgency: 'medium' },
  { topic: 'Short contrarian scripts', channel: 'TikTok', urgency: 'high' }
];
