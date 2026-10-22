import { Link } from 'react-router-dom';
import { MapPin, Award, Clock, ArrowRight, Video, Building2, UserCircle } from 'lucide-react';
import { specialties } from '../data/specialties';
import { getHospitalById } from '../data/hospitals';

export default function DoctorCard({ doctor }) {
  const specialty = specialties.find((s) => s.id === doctor.specialty);
  const hospital = getHospitalById(doctor.hospital);

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm card-hover overflow-hidden" id={`doctor-card-${doctor.id}`}>
      <div className="p-5">
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className={`w-16 h-16 rounded-2xl ${specialty?.bgColor || 'bg-slate-50'} flex items-center justify-center shrink-0`}>
            <UserCircle className={`w-9 h-9 ${specialty?.color || 'text-slate-400'}`} />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-base font-bold text-slate-800 font-[var(--font-display)]">
              {doctor.name}
            </h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              {specialty && (
                <span className={`text-sm font-medium ${specialty.color}`}>
                  {specialty.name}
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500 mt-1">{doctor.qualifications}</p>
          </div>
        </div>

        {/* Details */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Clock className="w-3.5 h-3.5 text-teal-500" />
            {doctor.experience} Years Experience
          </div>
          {hospital && (
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Building2 className="w-3.5 h-3.5 text-blue-500" />
              {hospital.name}
            </div>
          )}
          {hospital && (
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              {hospital.area}, {hospital.city}
            </div>
          )}
        </div>

        {/* Consultation type badges */}
        <div className="flex items-center gap-2 mt-3">
          {doctor.consultationType.map((type) => (
            <span
              key={type}
              className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg ${
                type === 'Online'
                  ? 'bg-blue-50 text-blue-600'
                  : 'bg-green-50 text-green-600'
              }`}
            >
              {type === 'Online' && <Video className="w-3 h-3" />}
              {type}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 mt-3 line-clamp-2 leading-relaxed">
          {doctor.description}
        </p>

        <Link
          to={`/doctors/${doctor.id}`}
          className="btn-secondary w-full justify-center text-sm mt-4"
          id={`view-doctor-${doctor.id}`}
        >
          View Profile
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
