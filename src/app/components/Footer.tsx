import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Links */}
          <div className="flex flex-col space-y-6">
            {/* Logo */}
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

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400">
              ©2025 Inphynitics
            </div>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Learners</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Partners</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Developers</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Transactions</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Teaching Center</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Professional Education</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Courses</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Admissions</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Testimonial</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Programs</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">More</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Press</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Investors</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Terms</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Privacy</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Help</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;