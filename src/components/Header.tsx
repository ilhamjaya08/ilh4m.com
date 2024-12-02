import { FC } from 'react';
import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Header: FC = () => {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-1/2 z-50">
      <nav className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-4 rounded-3xl">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-2xl font-bold hover:text-gray-700 transition-colors"
          >
            Portfolio
          </Link>
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-medium hover:text-gray-700 transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
