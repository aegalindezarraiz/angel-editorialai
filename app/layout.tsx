import './globals.css';
import { SidebarNav } from '@/components/sidebar-nav';
import { ContextPanel } from '@/components/context-panel';

export const metadata = {
  title: 'Angel Editorial AI',
  description: 'Multi-agent editorial command center'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <SidebarNav />
          <main className="main">{children}</main>
          <ContextPanel />
        </div>
      </body>
    </html>
  );
}
