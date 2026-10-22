import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function SpecialtyCard({ specialty }) {
  const IconComponent = specialty.icon;

  return (
    <Link
      to={`/specialties/${specialty.id}`}
      className="group bg-white rounded-2xl border border-slate-100 shadow-sm p-5 card-hover block"
      id={`specialty-card-${specialty.id}`}
    >
      <div className={`w-12 h-12 rounded-xl ${specialty.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
        <IconComponent className={`w-6 h-6 ${specialty.color}`} />
      </div>
      <h3 className="text-base font-bold text-slate-800 mb-1 font-[var(--font-display)]">
        {specialty.label}
      </h3>
      <p className="text-xs text-teal-600 font-medium mb-2">{specialty.name}</p>
      <p className="text-sm text-slate-500 leading-relaxed mb-3 line-clamp-2">
        {specialty.description}
      </p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-teal-600 group-hover:gap-2 transition-all">
        Explore <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </Link>
  );
}
