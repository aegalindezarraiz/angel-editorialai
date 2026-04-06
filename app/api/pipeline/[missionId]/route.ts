import { NextResponse } from 'next/server';

export async function GET(
  _request: Request,
  { params }: { params: { missionId: string } }
) {
  return NextResponse.json({
    missionId: params.missionId,
    status: 'ok',
    stages: [
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
      }
    ]
  });
}
