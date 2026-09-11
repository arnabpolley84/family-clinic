import React, { useState } from 'react';
import { X, Calendar, Clock, Phone, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinicData';
import { AppointmentFormData } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    phone: '',
    date: '',
    time: '6:30 PM',
    service: 'Dental Cleaning',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const constructWhatsAppMessage = () => {
    const text = encodeURIComponent(
      `Hello My Family Clinic,\nI would like to request an appointment:\nName: ${formData.name}\nPhone: ${formData.phone}\nPreferred Date: ${formData.date || 'Earliest available'}\nPreferred Time: ${formData.time}\nService: ${formData.service}\nNotes: ${formData.message || 'None'}`
    );
    return `https://wa.me/919007206671?text=${text}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#0e1111]/85 backdrop-blur-md"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-[#131717] border border-white/10 shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#181f1f]">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#c8ad8d] block">
              Appointment Request
            </span>
            <h3 id="modal-title" className="font-serif text-xl sm:text-2xl text-[#f4f0e8]">
              My Family Clinic
            </h3>
            <span className="font-bengali text-xs text-[#9ba3a1]">
              মি ফ্যামেলী ক্লিনিক · Kalikapur, Kolkata
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-[#9ba3a1] hover:text-[#f4f0e8] hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="space-y-6 text-center py-4">
              <div className="w-14 h-14 rounded-full bg-[#c8ad8d]/10 text-[#c8ad8d] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h4 className="font-serif text-2xl text-[#f4f0e8]">
                  Request Prepared
                </h4>
                <p className="text-sm text-[#d1d5db] font-light leading-relaxed">
                  Thank you, <span className="font-medium text-[#f4f0e8]">{formData.name}</span>. Please note that My Family Clinic opens at <span className="text-[#c8ad8d] font-semibold">{CLINIC_DATA.hours}</span> daily.
                </p>
                <p className="text-xs text-[#9ba3a1]">
                  To confirm your preferred slot promptly, you can send this request directly to our desk on WhatsApp or call us directly.
                </p>
              </div>

              {/* Action buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={constructWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-[#0e1111] font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp ({CLINIC_DATA.phone})</span>
                </a>

                <a
                  href={`tel:${CLINIC_DATA.phoneRaw}`}
                  className="w-full py-3.5 px-4 rounded-full bg-[#c8ad8d] hover:bg-[#d8c2a4] text-[#0e1111] font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Directly: {CLINIC_DATA.phone}</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="text-xs text-[#9ba3a1] hover:text-[#f4f0e8] transition-colors pt-2 block mx-auto cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-[#181f1f] p-3 rounded-lg border border-white/5 text-xs text-[#9ba3a1] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#c8ad8d] shrink-0" />
                <span>Clinic Hours: <strong>Opens at 6:00 PM</strong> daily. Evening slots recommended.</span>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9ba3a1] mb-1.5 font-medium">
                  Patient Name <span className="text-[#c8ad8d]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sankar Roy"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0e1111] border border-white/10 text-[#f4f0e8] text-sm focus:outline-none focus:border-[#c8ad8d] transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9ba3a1] mb-1.5 font-medium">
                  Contact Phone Number <span className="text-[#c8ad8d]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 098300 XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0e1111] border border-white/10 text-[#f4f0e8] text-sm focus:outline-none focus:border-[#c8ad8d] transition-colors"
                />
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#9ba3a1] mb-1.5 font-medium">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0e1111] border border-white/10 text-[#f4f0e8] text-sm focus:outline-none focus:border-[#c8ad8d] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#9ba3a1] mb-1.5 font-medium">
                    Preferred Time
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0e1111] border border-white/10 text-[#f4f0e8] text-sm focus:outline-none focus:border-[#c8ad8d] transition-colors"
                  >
                    <option value="6:00 PM">6:00 PM (Clinic opens)</option>
                    <option value="6:30 PM">6:30 PM</option>
                    <option value="7:00 PM">7:00 PM</option>
                    <option value="7:30 PM">7:30 PM</option>
                    <option value="8:00 PM">8:00 PM</option>
                    <option value="8:30 PM">8:30 PM</option>
                    <option value="9:00 PM">9:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#9ba3a1] mb-1.5 font-medium">
                  Message / Concerns
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your dental concern, scaling request, or routine check-up..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0e1111] border border-white/10 text-[#f4f0e8] text-sm focus:outline-none focus:border-[#c8ad8d] transition-colors resize-none"
                />
              </div>

              {/* Submit Action */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#c8ad8d] hover:bg-[#d8c2a4] text-[#0e1111] font-semibold text-sm tracking-wide transition-all shadow-md active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Appointment Request</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <span className="text-xs text-[#9ba3a1]">
                  Prefer an immediate call?{' '}
                  <a href={`tel:${CLINIC_DATA.phoneRaw}`} className="text-[#c8ad8d] underline hover:text-[#f4f0e8]">
                    Call {CLINIC_DATA.phone}
                  </a>
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
