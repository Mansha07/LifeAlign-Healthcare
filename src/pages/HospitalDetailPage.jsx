import { useParams, Link } from 'react-router-dom';
import {
  MapPin, Phone, ExternalLink, ArrowLeft, Building2, CheckCircle,
  Stethoscope, Users, Shield, Clock, UserCircle, ArrowRight
} from 'lucide-react';
import { getHospitalById } from '../data/hospitals';
import { getDoctorsByHospital } from '../data/doctors';
import { specialties } from '../data/specialties';

export default function HospitalDetailPage() {
  const { id } = useParams();
  const hospital = getHospitalById(id);
  const hospitalDoctors = getDoctorsByHospital(id);

  if (!hospital) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <Building2 className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-700 mb-2">Hospital Not Found</h2>
          <p className="text-slate-500 mb-6">The hospital you are looking for does not exist.</p>
          <Link to="/hospitals" className="btn-primary">
            <ArrowLeft className="w-4 h-4" />
            Back to Hospitals
          </Link>
        </div>
      </div>
    );
  }

  const hospitalSpecialties = hospital.specialties
    .map((sId) => specialties.find((s) => s.id === sId))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to="/hospitals"
            className="inline-flex items-center gap-1.5 text-teal-200 hover:text-white text-sm mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Hospitals
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-white/20 text-xs font-semibold rounded-full">
                  {hospital.type}
                </span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-200 text-xs font-semibold rounded-full">
                  Demo Profile
                </span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-extrabold font-[var(--font-display)]">
                {hospital.name}
              </h1>
              <div className="flex items-center gap-2 mt-2 text-teal-100">
                <MapPin className="w-4 h-4" />
                <span>{hospital.address}</span>
              </div>
            </div>

            {hospital.mapLink && (
              <a
                href={hospital.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <ExternalLink className="w-4 h-4" />
                View on Map
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overview */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h2 className="text-xl font-bold text-slate-800 font-[var(--font-display)] mb-3">
                Overview
              </h2>
              <p className="text-slate-600 leading-relaxed">{hospital.description}</p>
            </div>

            {/* Specialties */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h2 className="text-xl font-bold text-slate-800 font-[var(--font-display)] mb-4">
                Specialties
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {hospitalSpecialties.map((spec) => {
                  const Icon = spec.icon;
                  return (
                    <Link
                      key={spec.id}
                      to={`/specialties/${spec.id}`}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className={`w-10 h-10 rounded-xl ${spec.bgColor} flex items-center justify-center shrink-0`}>
                        <Icon className={`w-5 h-5 ${spec.color}`} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">{spec.label}</p>
                        <p className="text-xs text-slate-500">{spec.name}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-300 ml-auto group-hover:text-teal-500 transition-colors" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Facilities */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h2 className="text-xl font-bold text-slate-800 font-[var(--font-display)] mb-4">
                Facilities
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {hospital.facilities.map((facility) => (
                  <div key={facility} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-teal-500 shrink-0" />
                    <span className="text-sm text-slate-700">{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Doctors */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-slate-800 font-[var(--font-display)]">
                  Doctors at This Hospital
                </h2>
                <span className="text-sm text-slate-500">{hospitalDoctors.length} Doctors</span>
              </div>

              {hospitalDoctors.length > 0 ? (
                <div className="space-y-4">
                  {hospitalDoctors.map((doctor) => {
                    const spec = specialties.find((s) => s.id === doctor.specialty);
                    return (
                      <Link
                        key={doctor.id}
                        to={`/doctors/${doctor.id}`}
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-slate-100 group"
                        id={`hospital-doctor-${doctor.id}`}
                      >
                        <div className={`w-12 h-12 rounded-xl ${spec?.bgColor || 'bg-slate-50'} flex items-center justify-center shrink-0`}>
                          <UserCircle className={`w-6 h-6 ${spec?.color || 'text-slate-400'}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-slate-800">{doctor.name}</p>
                          <p className={`text-xs font-medium ${spec?.color || 'text-slate-500'}`}>
                            {spec?.name || doctor.specialty}
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {doctor.experience} years experience • {doctor.qualifications}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-teal-500 transition-colors shrink-0" />
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <p className="text-sm text-slate-500">No doctors listed for this hospital.</p>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sticky top-24">
              {/* Hospital Image Placeholder */}
              <div className="h-40 bg-gradient-to-br from-teal-50 via-blue-50 to-green-50 rounded-xl flex items-center justify-center mb-5">
                <Building2 className="w-12 h-12 text-teal-200" />
              </div>

              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-teal-500 shrink-0" />
                  <span className="text-sm text-slate-700">{hospital.type} Hospital</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-teal-500 shrink-0" />
                  <span className="text-sm text-slate-700">{hospital.area}, {hospital.city}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Stethoscope className="w-4 h-4 text-teal-500 shrink-0" />
                  <span className="text-sm text-slate-700">{hospital.specialties.length} Specialties</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-teal-500 shrink-0" />
                  <span className="text-sm text-slate-700">{hospitalDoctors.length} Doctors</span>
                </div>
              </div>

              <Link
                to={`/doctors?hospital=${hospital.id}`}
                className="btn-primary w-full justify-center mb-3"
                id="find-doctor-at-hospital"
              >
                <Stethoscope className="w-4 h-4" />
                Find a Doctor at This Hospital
              </Link>

              {hospital.mapLink && (
                <a
                  href={hospital.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full justify-center"
                >
                  <ExternalLink className="w-4 h-4" />
                  Get Directions
                </a>
              )}

              {/* Demo notice */}
              <div className="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-xl">
                <p className="text-xs text-amber-700">
                  This is a demonstration profile. This hospital and its details are fictional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
