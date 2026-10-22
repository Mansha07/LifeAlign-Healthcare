import { Link } from 'react-router-dom';
import { HeartPulse, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl gradient-teal flex items-center justify-center">
                <HeartPulse className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white font-[var(--font-display)]">
                Life<span className="text-teal-400">Align</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Find the right care, right when you need it. Discover trusted hospitals and
              experienced doctors near you.
            </p>
            <div className="flex items-center gap-2 px-3 py-2 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <span className="text-xs text-amber-400 font-medium">
                📋 Demo Project — All data is fictional
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/hospitals', label: 'Find Hospitals' },
                { to: '/doctors', label: 'Find Doctors' },
                { to: '/specialties', label: 'Specialties' },
                { to: '/search', label: 'Find Care' },
                { to: '/about', label: 'About Us' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Specialties
            </h3>
            <ul className="space-y-3">
              {['Cardiology', 'Orthopedics', 'Neurology', 'Dermatology', 'Pediatrics', 'General Medicine'].map(
                (spec) => (
                  <li key={spec}>
                    <Link
                      to={`/specialties`}
                      className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                    >
                      {spec}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact (Demo) */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Demo Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">
                  Demo Address, Tech Park, Bengaluru, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-sm text-slate-400">+91 00000 00000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-sm text-slate-400">demo@lifealign.example</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              &copy; {currentYear} LifeAlign. This is a demonstration project — not a real healthcare service.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-slate-500">Privacy Policy</span>
              <span className="text-xs text-slate-500">Terms of Use</span>
            </div>
          </div>

          {/* Medical Disclaimer */}
          <div className="mt-6 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
            <p className="text-xs text-slate-500 leading-relaxed">
              <span className="font-semibold text-slate-400">Medical Disclaimer:</span>{' '}
              LifeAlign is a demonstration healthcare discovery platform. It does not provide medical advice,
              diagnosis, or treatment. The information displayed, including hospital profiles, doctor listings,
              and specialty suggestions, is entirely fictional and created for illustration purposes only.
              Always consult with a qualified healthcare professional for medical concerns. In case of a medical
              emergency, call your local emergency number immediately.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
