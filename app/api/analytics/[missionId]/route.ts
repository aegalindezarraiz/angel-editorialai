import { NextResponse } from 'next/server';

export async function GET(
  _request: Request,
  { params }: { params: { missionId: string } }
) {
  return NextResponse.json({
    missionId: params.missionId,
    status: 'ok',
    analytics: {
      overview: {
        impressions: '184K',
        engagementRate: '6.8%',
        saves: '2.1K',
        leads: '47'
      },
      topHooks: [
        'The biggest mistake happens before the process starts.',
        'Most people optimize the wrong variable.',
        'Speed without strategy is expensive.'
      ],
      topFormats: [
        { format: 'LinkedIn authority post', performance: 'High' },
        { format: 'Instagram carousel', performance: 'High' },
        { format: 'TikTok myth-busting short', performance: 'Medium-High' }
      ],
      recommendations: [
        'Increase framework-based LinkedIn posts.',
        'Turn top-performing hooks into short-form series.',
        'Use clearer CTAs in Instagram captions.',
        'Repurpose long-form blog intros into TikTok openers.'
      ]
    }
  });
}
