import Link from 'next/link';
import { navItems } from '@/mock-data/dashboard';

export function SidebarNav() {
  return (
    <aside className="sidebar">
      <div className="brand">Angel Editorial AI</div>
      <nav className="nav-list">
        {navItems.map((item) => (
          <Link className="nav-item" key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
