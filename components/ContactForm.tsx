
import React, { useState } from 'react';
import { COURSES, WHATSAPP_1, WHATSAPP_2 } from '../constants';
import { InquiryFormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch("https://formspree.io/f/mjggydgo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          course: '',
          message: ''
        });
        setTimeout(() => setIsSuccess(false), 8000);
      } else {
        const data = await response.json();
        // Fix: Use a more compatible property check instead of Object.hasOwn for older ES targets
        if (data && typeof data === 'object' && 'errors' in data) {
          setError(data['errors'].map((error: any) => error['message']).join(', '));
        } else {
          setError("Oops! There was a problem submitting your form. Please try again.");
        }
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="enroll" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-sky-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-heading mb-6">Start Your Journey with Us</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Ready to take flight? Fill out the form and our admission counselors will reach out to you within 24 hours to discuss your career path.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Direct Support</h4>
                  <p className="text-slate-600">{WHATSAPP_1}</p>
                  <p className="text-slate-600">{WHATSAPP_2}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Visit Campus</h4>
                  <p className="text-slate-600">Rivers Aviation Academy, Mumbai, Maharashtra, India</p>
                </div>
              </div>

              <div className="pt-6 flex gap-4">
                <a href={`https://wa.me/${WHATSAPP_1.replace('+', '')}`} className="flex-1 bg-[#25D366] text-white py-3 px-4 rounded-xl text-center font-bold hover:brightness-110 transition-all flex items-center justify-center space-x-2">
                  <i className="fab fa-whatsapp"></i>
                  <span>WhatsApp 1</span>
                </a>
                <a href={`https://wa.me/${WHATSAPP_2.replace('+', '')}`} className="flex-1 bg-[#25D366] text-white py-3 px-4 rounded-xl text-center font-bold hover:brightness-110 transition-all flex items-center justify-center space-x-2">
                  <i className="fab fa-whatsapp"></i>
                  <span>WhatsApp 2</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-xl">
            {isSuccess ? (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <i className="fas fa-check text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Application Received!</h3>
                <p className="text-slate-600">Our counselor will call you shortly on the provided number.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-blue-600 font-semibold text-sm hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl mb-4">
                    <i className="fas fa-exclamation-circle mr-2"></i>
                    {error}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Interested Course</label>
                  <select 
                    name="course"
                    required
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none"
                  >
                    <option value="">Select a course</option>
                    {COURSES.map(course => (
                      <option key={course.id} value={course.title}>{course.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message (Optional)</label>
                  <textarea 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                    placeholder="Tell us about your career goals..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform active:scale-[0.98] flex items-center justify-center"
                >
                  {isSubmitting ? <i className="fas fa-spinner fa-spin mr-3"></i> : null}
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
