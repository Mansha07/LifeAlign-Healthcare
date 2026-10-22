import { Link } from 'react-router-dom';
import { MapPin, Stethoscope, ArrowRight, Building2, Users } from 'lucide-react';
import { specialties } from '../data/specialties';
import { getDoctorsByHospital } from '../data/doctors';

export default function HospitalCard({ hospital }) {
  const hospitalDoctors = getDoctorsByHospital(hospital.id);
  const hospitalSpecialties = hospital.specialties.map(
    (sId) => specialties.find((s) => s.id === sId)?.name
  ).filter(Boolean);

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm card-hover overflow-hidden" id={`hospital-card-${hospital.id}`}>
      {/* Image */}
      <div className="h-48 bg-gradient-to-br from-teal-50 via-blue-50 to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Building2 className="w-16 h-16 text-teal-200" />
        </div>
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-teal-700 rounded-full border border-teal-100">
            {hospital.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-800 mb-1 font-[var(--font-display)]">
          {hospital.name}
        </h3>
        <div className="flex items-center gap-1.5 text-sm text-slate-500 mb-3">
          <MapPin className="w-3.5 h-3.5 text-teal-500" />
          {hospital.area}, {hospital.city}
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
          {hospital.description}
        </p>

        {/* Specialties */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {hospitalSpecialties.slice(0, 3).map((spec) => (
            <span
              key={spec}
              className="px-2.5 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-lg"
            >
              {spec}
            </span>
          ))}
          {hospitalSpecialties.length > 3 && (
            <span className="px-2.5 py-1 bg-slate-50 text-slate-500 text-xs font-medium rounded-lg">
              +{hospitalSpecialties.length - 3} more
            </span>
          )}
        </div>

        {/* Doctors count */}
        <div className="flex items-center gap-1.5 text-sm text-slate-500 mb-4">
          <Users className="w-3.5 h-3.5 text-blue-500" />
          {hospitalDoctors.length} Doctor{hospitalDoctors.length !== 1 ? 's' : ''} Available
        </div>

        <Link
          to={`/hospitals/${hospital.id}`}
          className="btn-secondary w-full justify-center text-sm"
          id={`view-hospital-${hospital.id}`}
        >
          View Hospital
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
