import { FC } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

interface FooterLink {
  icon: string;
  href: string;
}

const footerLinks: FooterLink[] = [
  { icon: 'mdi:github', href: 'https://github.com' },
  { icon: 'mdi:linkedin', href: 'https://linkedin.com' },
  { icon: 'mdi:twitter', href: 'https://twitter.com' },
  { icon: 'mdi:instagram', href: 'https://instagram.com' },
];

const Footer: FC = () => {
  return (
    <footer className="fixed bottom-0 w-full z-50">
      <div className="bg-neoYellow-300 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] px-8 py-6 animate-in slide-in-from-bottom duration-500">
        <div className="flex flex-col items-center gap-6">
          <div className="space-y-2 text-center">
            <p className="text-black font-bold text-xl animate-in fade-in duration-700">
              Let's Connect!
            </p>
            <p className="text-sm text-black/70">Find me on social media</p>
          </div>
          <ul className="flex gap-8">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-black hover:text-foreground transition-colors relative group"
                >
                  <span className="relative z-10">
                    <Icon icon={link.icon} className="w-6 h-6" />
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-neoBlue-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 -z-10 rounded-full"></span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <p className="text-sm text-black/80 animate-in fade-in duration-1000">
              © {new Date().getFullYear()} Made with
            </p>
            <Icon icon="mdi:heart" className="w-4 h-4 text-red-500 animate-pulse" />
            <p className="text-sm text-black/80 animate-in fade-in duration-1000">
              using Next.js & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;