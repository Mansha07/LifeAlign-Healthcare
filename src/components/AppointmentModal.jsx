import { useState } from 'react';
import { X, Calendar, User, Mail, Building2, Stethoscope, CheckCircle, AlertTriangle } from 'lucide-react';

export default function AppointmentModal({ isOpen, onClose, doctor, hospital }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Jane Doe (Demo)',
    email: 'demo@example.com',
    date: '',
    doctor: doctor?.name || '',
    hospital: hospital?.name || '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({
      name: 'Jane Doe (Demo)',
      email: 'demo@example.com',
      date: '',
      doctor: doctor?.name || '',
      hospital: hospital?.name || '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-fade-in-up">
        {/* Header */}
        <div className="gradient-teal text-white px-6 py-5 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold">Request Appointment</h2>
              <p className="text-teal-100 text-sm mt-0.5">Demo — No real booking</p>
            </div>
            <button
              onClick={handleClose}
              className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Demo Notice */}
            <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-xl">
              <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-700 leading-relaxed">
                This is a demonstration website. No appointment will be booked and no
                personal data will be sent to any server. The form is pre-filled with
                fictional information.
              </p>
            </div>

            {/* Patient Name */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1.5">
                <User className="w-4 h-4 text-slate-400" />
                Patient Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1.5">
                <Mail className="w-4 h-4 text-slate-400" />
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all"
                required
              />
            </div>

            {/* Preferred Date */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                Preferred Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all"
                required
              />
            </div>

            {/* Doctor */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1.5">
                <Stethoscope className="w-4 h-4 text-slate-400" />
                Preferred Doctor
              </label>
              <input
                type="text"
                value={formData.doctor}
                onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all"
                readOnly={!!doctor}
              />
            </div>

            {/* Hospital */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-1.5">
                <Building2 className="w-4 h-4 text-slate-400" />
                Hospital
              </label>
              <input
                type="text"
                value={formData.hospital}
                onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-all"
                readOnly={!!hospital}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full btn-primary justify-center text-base py-3"
              id="appointment-submit"
            >
              <Calendar className="w-4 h-4" />
              Request Appointment (Demo)
            </button>
          </form>
        ) : (
          /* Confirmation */
          <div className="p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-teal-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              Demo Request Received
            </h3>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed">
              This is a demonstration website.{' '}
              <span className="font-semibold text-slate-700">
                No appointment has been booked.
              </span>{' '}
              No personal data was collected or transmitted. In a production application,
              you would receive a confirmation email and further instructions.
            </p>
            <div className="bg-slate-50 rounded-xl p-4 mb-6 text-left">
              <p className="text-xs text-slate-500 mb-2 font-semibold uppercase tracking-wide">
                Demo Summary
              </p>
              <div className="space-y-1.5 text-sm text-slate-600">
                <p><span className="font-medium">Patient:</span> {formData.name}</p>
                <p><span className="font-medium">Doctor:</span> {formData.doctor}</p>
                <p><span className="font-medium">Hospital:</span> {formData.hospital}</p>
                <p><span className="font-medium">Date:</span> {formData.date}</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="btn-primary justify-center w-full"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
