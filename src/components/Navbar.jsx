
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HeartPulse, Search } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/hospitals', label: 'Find Hospitals' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Demo Banner */}
      <div className="demo-banner">
        📋 DEMO PROJECT — This is a demonstration website. All data is fictional.
      </div>

      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
            ? 'glass shadow-lg border-b border-slate-100'
            : 'bg-white/95 backdrop-blur-sm'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group"
              id="nav-logo"
            >
              <div className="w-9 h-9 rounded-xl gradient-teal flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <HeartPulse className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-[var(--font-display)] text-slate-800">
                Life<span className="text-teal-600">Align</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive(link.to)
                      ? 'text-teal-700 bg-teal-50'
                      : 'text-slate-600 hover:text-teal-700 hover:bg-slate-50'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Find Care Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/hospitals"
                id="nav-find-care"
                className="btn-primary"
              >
                <Search className="w-4 h-4" />
                Find Care
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              id="nav-mobile-toggle"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="px-4 pb-4 pt-2 space-y-1 bg-white border-t border-slate-100">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${isActive(link.to)
                    ? 'text-teal-700 bg-teal-50'
                    : 'text-slate-600 hover:text-teal-700 hover:bg-slate-50'
                  }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/hospitals"
              className="block mt-2 text-center btn-primary w-full justify-center"
            >
              <Search className="w-4 h-4" />
              Find Care
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
