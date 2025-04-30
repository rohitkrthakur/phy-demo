import Link from 'next/link';
import Image from 'next/image';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Incare', href: '/incare' },
  { label: 'Discover', href: '/discover' },
  { label: 'Connect', href: '/connect' },
];

export default function Navbar() {
  return (
    <nav className=" w-full flex items-center justify-between py-4 px-6 md:px-12">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <div className="w-12 h-12 relative">
            <Image
              src="/assets/Group 48.png"
              alt="Company Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
      </div>

      <div className="hidden md:flex bg-white/10 rounded-full px-4 py-2 backdrop-blur-md border border-white/20 shadow-lg">
  <ul className="flex space-x-8">
    {links.map((link) => (
      <li key={link.label}>
        <Link
          href={link.href}
          className="text-white hover:text-yellow-400 transition-colors duration-200"
        >
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
</div>

      <div>
        <Link 
          href="/signup" 
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-full px-6 py-2 transition-colors duration-200"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}