"use client";

import React, { createContext, useContext, useMemo, useState } from 'react';

type AppStateValue = {
  activeMissionId: string | null;
  setActiveMissionId: (value: string | null) => void;
  autonomyMode: 'guided' | 'supervised' | 'high';
  setAutonomyMode: (value: 'guided' | 'supervised' | 'high') => void;
};

const AppStateContext = createContext<AppStateValue | undefined>(undefined);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [activeMissionId, setActiveMissionId] = useState<string | null>('m-001');
  const [autonomyMode, setAutonomyMode] = useState<'guided' | 'supervised' | 'high'>('guided');

  const value = useMemo(
    () => ({ activeMissionId, setActiveMissionId, autonomyMode, setAutonomyMode }),
    [activeMissionId, autonomyMode]
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within AppStateProvider');
  }
  return context;
}
