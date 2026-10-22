import { useState, useMemo } from 'react';
import { Search, MapPin, Filter, Building2, X, SlidersHorizontal } from 'lucide-react';
import HospitalCard from '../components/HospitalCard';
import { hospitals, cities, hospitalTypes } from '../data/hospitals';
import { specialties } from '../data/specialties';

export default function HospitalsPage() {
  const [filters, setFilters] = useState({
    city: '',
    area: '',
    specialty: '',
    name: '',
    type: '',
  });
  const [showFilters, setShowFilters] = useState(false);

  const filteredHospitals = useMemo(() => {
    return hospitals.filter((h) => {
      if (filters.city && h.city !== filters.city) return false;
      if (filters.area && !h.area.toLowerCase().includes(filters.area.toLowerCase())) return false;
      if (filters.specialty && !h.specialties.includes(filters.specialty)) return false;
      if (filters.name && !h.name.toLowerCase().includes(filters.name.toLowerCase())) return false;
      if (filters.type && h.type !== filters.type) return false;
      return true;
    });
  }, [filters]);

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  const clearFilters = () => {
    setFilters({ city: '', area: '', specialty: '', name: '', type: '' });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl lg:text-4xl font-extrabold font-[var(--font-display)]">
              Find Hospitals
            </h1>
            <p className="mt-3 text-teal-100 text-lg">
              Discover trusted hospitals near you. Browse by city, specialty, or hospital type.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Hospital Name Search */}
            <div className="flex-1 flex items-center gap-2 px-3 bg-slate-50 rounded-xl">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                type="text"
                value={filters.name}
                onChange={(e) => setFilters({ ...filters, name: e.target.value })}
                placeholder="Search hospital by name..."
                className="w-full py-2.5 text-sm bg-transparent focus:outline-none"
                id="hospital-search-name"
              />
              {filters.name && (
                <button onClick={() => setFilters({ ...filters, name: '' })} className="p-1 hover:bg-slate-200 rounded-full">
                  <X className="w-4 h-4 text-slate-400" />
                </button>
              )}
            </div>

            {/* City Filter */}
            <div className="flex items-center gap-2 px-3 bg-slate-50 rounded-xl lg:w-44">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
              <select
                value={filters.city}
                onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                className="w-full py-2.5 text-sm bg-transparent focus:outline-none appearance-none cursor-pointer"
                id="hospital-filter-city"
              >
                <option value="">All Cities</option>
                {cities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Mobile toggle filters */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden btn-secondary justify-center"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
            </button>

            {/* Desktop filters */}
            <div className="hidden lg:flex items-center gap-3">
              <select
                value={filters.specialty}
                onChange={(e) => setFilters({ ...filters, specialty: e.target.value })}
                className="px-3 py-2.5 text-sm bg-slate-50 border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/30 appearance-none cursor-pointer"
                id="hospital-filter-specialty"
              >
                <option value="">All Specialties</option>
                {specialties.map((s) => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>

              <select
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                className="px-3 py-2.5 text-sm bg-slate-50 border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/30 appearance-none cursor-pointer"
                id="hospital-filter-type"
              >
                <option value="">All Types</option>
                {hospitalTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>

              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-red-500 hover:text-red-600 font-medium flex items-center gap-1"
                >
                  <X className="w-4 h-4" />
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Mobile Expanded Filters */}
          {showFilters && (
            <div className="lg:hidden mt-4 pt-4 border-t border-slate-100 space-y-3">
              <div>
                <label className="text-xs font-medium text-slate-500 mb-1 block">Area</label>
                <input
                  type="text"
                  value={filters.area}
                  onChange={(e) => setFilters({ ...filters, area: e.target.value })}
                  placeholder="Filter by area..."
                  className="w-full px-3 py-2.5 text-sm bg-slate-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/30"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-500 mb-1 block">Specialty</label>
                <select
                  value={filters.specialty}
                  onChange={(e) => setFilters({ ...filters, specialty: e.target.value })}
                  className="w-full px-3 py-2.5 text-sm bg-slate-50 rounded-xl focus:outline-none appearance-none"
                >
                  <option value="">All Specialties</option>
                  {specialties.map((s) => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-slate-500 mb-1 block">Hospital Type</label>
                <select
                  value={filters.type}
                  onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                  className="w-full px-3 py-2.5 text-sm bg-slate-50 rounded-xl focus:outline-none appearance-none"
                >
                  <option value="">All Types</option>
                  {hospitalTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              {activeFiltersCount > 0 && (
                <button onClick={clearFilters} className="text-sm text-red-500 font-medium">
                  Clear all filters
                </button>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-slate-500">
            Showing <span className="font-semibold text-slate-700">{filteredHospitals.length}</span> hospital{filteredHospitals.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Hospital Grid */}
        {filteredHospitals.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHospitals.map((hospital) => (
              <HospitalCard key={hospital.id} hospital={hospital} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-100">
            <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-700 mb-2">No hospitals found</h3>
            <p className="text-sm text-slate-500 mb-4">
              Try adjusting your filters or search criteria.
            </p>
            <button onClick={clearFilters} className="btn-primary">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
