import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const payload = await request.json();

  return NextResponse.json({
    missionId: 'mission-local-001',
    status: 'accepted',
    message: 'Mission accepted by local API route.',
    payload,
  });
}
