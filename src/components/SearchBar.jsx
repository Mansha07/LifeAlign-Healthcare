import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, AlertTriangle, ArrowRight, X } from 'lucide-react';
import { searchSpecialties, specialties } from '../data/specialties';
import { cities } from '../data/hospitals';

export default function SearchBar({ variant = 'hero' }) {
  const [query, setQuery] = useState('');
  const [city, setCity] = useState('');
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    if (query.trim().length >= 2) {
      const result = searchSpecialties(query);
      setResults(result);
      setShowResults(true);
    } else {
      setResults(null);
      setShowResults(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSpecialtyClick = (specialtyId) => {
    setShowResults(false);
    setQuery('');
    navigate(`/specialties/${specialtyId}${city ? `?city=${city}` : ''}`);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}${city ? `&city=${city}` : ''}`);
      setShowResults(false);
    }
  };

  const isHero = variant === 'hero';

  return (
    <div ref={searchRef} className="relative w-full">
      <form onSubmit={handleSearchSubmit}>
        <div
          className={`flex flex-col sm:flex-row gap-3 ${
            isHero
              ? 'bg-white rounded-2xl shadow-xl border border-slate-100 p-3'
              : 'bg-white rounded-xl shadow-md border border-slate-200 p-2'
          }`}
        >
          {/* Search Input */}
          <div className="flex-1 flex items-center gap-2 px-3">
            <Search className="w-5 h-5 text-slate-400 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by symptom, condition, or specialty..."
              className="w-full py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none bg-transparent"
              id="search-input"
            />
            {query && (
              <button
                type="button"
                onClick={() => { setQuery(''); setResults(null); setShowResults(false); }}
                className="p-1 rounded-full hover:bg-slate-100"
              >
                <X className="w-4 h-4 text-slate-400" />
              </button>
            )}
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px bg-slate-200 my-2" />

          {/* City Select */}
          <div className="flex items-center gap-2 px-3 sm:w-48">
            <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full py-2.5 text-sm text-slate-700 focus:outline-none bg-transparent appearance-none cursor-pointer"
              id="search-city"
            >
              <option value="">All Cities</option>
              {cities.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="btn-primary sm:px-6"
            id="search-submit"
          >
            <Search className="w-4 h-4" />
            Search
          </button>
        </div>
      </form>

      {/* Results Dropdown */}
      {showResults && results && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-slate-100 z-50 overflow-hidden animate-fade-in">
          {results.emergency ? (
            <div className="p-5">
              <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-red-800 text-sm">
                    Emergency — Seek Immediate Medical Attention
                  </h4>
                  <p className="text-sm text-red-700 mt-1 leading-relaxed">
                    The symptoms you described may require immediate emergency care.
                    Please call <strong>112</strong> (India) or your local emergency number,
                    or go to the nearest emergency room immediately.
                  </p>
                  <p className="text-xs text-red-600 mt-2">
                    Do not rely on online booking for emergency situations.
                  </p>
                </div>
              </div>
            </div>
          ) : results.specialties.length > 0 ? (
            <div className="p-3">
              <p className="px-3 py-1.5 text-xs text-slate-500 font-medium uppercase tracking-wide">
                Suggested Specialties
              </p>
              <div className="mt-1">
                {results.specialties.map((spec) => {
                  const Icon = spec.icon;
                  return (
                    <button
                      key={spec.id}
                      onClick={() => handleSpecialtyClick(spec.id)}
                      className="w-full flex items-center gap-3 px-3 py-3 hover:bg-slate-50 rounded-lg transition-colors text-left group"
                    >
                      <div className={`w-10 h-10 rounded-xl ${spec.bgColor} flex items-center justify-center shrink-0`}>
                        <Icon className={`w-5 h-5 ${spec.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-800">{spec.label}</p>
                        <p className="text-xs text-slate-500">{spec.name}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-teal-500 transition-colors" />
                    </button>
                  );
                })}
              </div>
              <div className="px-3 py-2 mt-1 border-t border-slate-100">
                <p className="text-xs text-slate-400 leading-relaxed">
                  These suggestions are for finding relevant specialties, not medical diagnosis.
                  For urgent or severe symptoms, seek immediate medical attention.
                </p>
              </div>
            </div>
          ) : (
            <div className="p-5 text-center">
              <p className="text-sm text-slate-500">
                No matching specialties found. Try a different search term.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
