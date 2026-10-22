import { Link } from 'react-router-dom';
import {
  Search, Building2, UserCheck, ArrowRight, Shield, Clock,
  Heart, CheckCircle, ChevronDown, ChevronUp, Sparkles,
  Stethoscope, Users, Star, HeartPulse
} from 'lucide-react';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import SpecialtyCard from '../components/SpecialtyCard';
import { specialties } from '../data/specialties';
import { hospitals } from '../data/hospitals';
import { doctors } from '../data/doctors';
import { faqs } from '../data/faqs';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-hero relative overflow-hidden" id="hero">
        {/* Background decorations */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-blue-100/40 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 border border-teal-100 rounded-full mb-6">
                <HeartPulse className="w-4 h-4 text-teal-600" />
                <span className="text-sm font-medium text-teal-700">Healthcare Discovery Platform</span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-tight font-[var(--font-display)]">
                Your Health.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">
                  Our Priority.
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-lg">
                Discover trusted hospitals and experienced doctors near you, based on
                your healthcare needs.
              </p>

              {/* Search Bar */}
              <div className="mt-8 max-w-2xl">
                <SearchBar variant="hero" />
              </div>

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/hospitals" className="btn-primary" id="hero-find-hospitals">
                  <Building2 className="w-4 h-4" />
                  Find Hospitals
                </Link>
                <Link to="/doctors" className="btn-secondary" id="hero-explore-doctors">
                  <UserCheck className="w-4 h-4" />
                  Explore Doctors
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-10 flex gap-8">
                <div>
                  <p className="text-2xl font-bold text-slate-800">{hospitals.length}+</p>
                  <p className="text-sm text-slate-500">Hospitals</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">{doctors.length}+</p>
                  <p className="text-sm text-slate-500">Doctors</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">{specialties.length}+</p>
                  <p className="text-sm text-slate-500">Specialties</p>
                </div>
              </div>
            </div>

            {/* Right visual */}
            <div className="hidden lg:flex justify-center animate-fade-in-up stagger-2">
              <div className="relative">
                {/* Main card */}
                <div className="w-80 h-96 bg-gradient-to-br from-teal-500 to-teal-700 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-8 left-8 w-32 h-32 border-2 border-white rounded-full" />
                    <div className="absolute bottom-12 right-8 w-24 h-24 border-2 border-white rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white rounded-full" />
                  </div>
                  <div className="text-center text-white relative z-10">
                    <HeartPulse className="w-20 h-20 mx-auto mb-4 animate-float" />
                    <p className="text-xl font-bold">LifeAlign</p>
                    <p className="text-teal-200 text-sm mt-1">Find the Right Care</p>
                  </div>
                </div>

                {/* Floating cards */}
                <div className="absolute -top-4 -right-12 bg-white rounded-2xl shadow-lg p-4 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Trusted Care</p>
                      <p className="text-xs text-slate-500">Quality Assured</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-12 bg-white rounded-2xl shadow-lg p-4 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{doctors.length}+ Doctors</p>
                      <p className="text-xs text-slate-500">Experienced Team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Can We Help You With? */}
      <section className="py-20 bg-white" id="specialties-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 border border-teal-100 rounded-full text-sm font-medium text-teal-700 mb-4">
              <Sparkles className="w-4 h-4" />
              Find Care by Health Concern
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 font-[var(--font-display)]">
              What Can We Help You With?
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              Browse specialties or search by symptoms to find the right doctors and hospitals for your needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {specialties.map((specialty, index) => (
              <div key={specialty.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <SpecialtyCard specialty={specialty} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose LifeAlign */}
      <section className="py-20 bg-slate-50" id="why-choose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 font-[var(--font-display)]">
              Why Choose LifeAlign?
            </h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              We make finding the right healthcare simple, transparent, and accessible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Search,
                title: 'Smart Search',
                description: 'Search by symptom, condition, or specialty. Our intelligent matching helps you find the right care quickly.',
                gradient: 'from-teal-500 to-teal-600',
              },
              {
                icon: Shield,
                title: 'Trusted Profiles',
                description: 'Detailed hospital and doctor profiles with specialties, qualifications, and facilities to help you make informed decisions.',
                gradient: 'from-blue-500 to-blue-600',
              },
              {
                icon: Clock,
                title: 'Easy Access',
                description: 'Browse hospitals by city, specialty, or type. Find doctors by experience, consultation mode, and more.',
                gradient: 'from-green-500 to-green-600',
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 card-hover">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 font-[var(--font-display)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 font-[var(--font-display)]">
              How It Works
            </h2>
            <p className="mt-3 text-slate-500">Three simple steps to find the right care.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                icon: Search,
                title: 'Search',
                description: 'Enter your symptom, health concern, or choose a specialty to get started.',
              },
              {
                step: '02',
                icon: Star,
                title: 'Compare',
                description: 'Browse detailed profiles of hospitals and doctors. Compare specialties, experience, and facilities.',
              },
              {
                step: '03',
                icon: Heart,
                title: 'Connect',
                description: 'View doctor profiles and request an appointment with your preferred healthcare provider.',
              },
            ].map((item, i) => (
              <div key={i} className="relative text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-50 mb-5 group-hover:bg-teal-100 transition-colors">
                  <item.icon className="w-7 h-7 text-teal-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-600 text-white rounded-lg flex items-center justify-center text-xs font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-800 font-[var(--font-display)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Specialties */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800 text-white" id="featured-specialties">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold font-[var(--font-display)]">
              Featured Specialties
            </h2>
            <p className="mt-3 text-teal-200/80 max-w-2xl mx-auto">
              Explore our most sought-after medical specialties with experienced doctors and trusted hospitals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {specialties.slice(0, 4).map((spec) => {
              const Icon = spec.icon;
              return (
                <Link
                  key={spec.id}
                  to={`/specialties/${spec.id}`}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{spec.label}</h3>
                  <p className="text-teal-200/80 text-sm">{spec.name}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-teal-200 group-hover:text-white transition-colors">
                    View Doctors <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Healthcare FAQs */}
      <section className="py-20 bg-slate-50" id="faqs">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 font-[var(--font-display)]">
              Healthcare FAQs
            </h2>
            <p className="mt-3 text-slate-500">
              Common questions about using LifeAlign.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors"
                  id={`faq-toggle-${index}`}
                >
                  <span className="text-sm font-semibold text-slate-800 pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-teal-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-4 text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white" id="cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 font-[var(--font-display)] mb-4">
            Ready to Find the Right Care?
          </h2>
          <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
            Search for hospitals and doctors by your health concern, location, or specialty.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/hospitals" className="btn-primary text-base px-8 py-3">
              <Building2 className="w-5 h-5" />
              Find Hospitals
            </Link>
            <Link to="/doctors" className="btn-secondary text-base px-8 py-3">
              <Stethoscope className="w-5 h-5" />
              Find Doctors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
