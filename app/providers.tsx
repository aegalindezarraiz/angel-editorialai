"use client";

import { AppStateProvider } from '@/context/app-state';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <AppStateProvider>{children}</AppStateProvider>;
}
