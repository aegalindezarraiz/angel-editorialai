export function statusBadgeClass(status: string): string {
  if (['done', 'approved', 'published', 'scheduled'].includes(status)) return 'badge success';
  if (['running', 'research', 'approval'].includes(status)) return 'badge warning';
  if (['blocked'].includes(status)) return 'badge danger';
  return 'badge';
}

export function titleCase(value: string): string {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}
