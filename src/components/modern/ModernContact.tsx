import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Linkedin, 
  Github, 
  CheckCircle2, 
  AlertCircle, 
  MapPin, 
  Phone,
  Copy,
  Check
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const ModernContact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    try {
      const subject = formData.subject.trim() || 'Software Engineering / Opportunity Inquiry';
      const body = `Hello Kishore,\n\nI came across your portfolio and would like to connect regarding an opportunity / project.\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\nSubject: ${subject}\n\nMessage:\n${formData.message.trim()}`;

      // Open WhatsApp direct channel
      const whatsappUrl = `https://wa.me/91${personal.phone}?text=${encodeURIComponent(body)}`;
      window.open(whatsappUrl, '_blank');

      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono font-medium text-zinc-300 mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Have a project or opportunity in mind?
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            I'm open to discussing software development opportunities, interesting projects, and collaboration.
          </p>
        </div>

        {/* Contact Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Contact Details Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0c101c]/70 space-y-5">
              <h3 className="text-base font-semibold text-white">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0 mt-0.5">
                    <Mail size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-mono text-zinc-400 uppercase">Direct Email</div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-sm font-medium text-white hover:text-indigo-400 transition-colors truncate"
                      >
                        {personal.email}
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        className="p-1 rounded text-zinc-400 hover:text-white transition-colors"
                        title="Copy email address"
                        aria-label="Copy email"
                      >
                        {copiedEmail ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400 uppercase">Location</div>
                    <div className="text-sm font-medium text-white mt-0.5">
                      {personal.location}
                    </div>
                  </div>
                </div>

                {/* Availability Status */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Open to full-time SWE roles & client projects</span>
                </div>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all flex items-center gap-3 group"
              >
                <div className="p-2 rounded-lg bg-white/[0.05] text-white">
                  <Github size={18} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white group-hover:text-indigo-300 transition-colors">GitHub</div>
                  <div className="text-[10px] font-mono text-zinc-400">@kishoresharmaks</div>
                </div>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all flex items-center gap-3 group"
              >
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <Linkedin size={18} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white group-hover:text-indigo-300 transition-colors">LinkedIn</div>
                  <div className="text-[10px] font-mono text-zinc-400">kishore-sharma-t</div>
                </div>
              </a>
            </div>

          </div>

          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0c101c]/80 shadow-xl">
              
              {status === 'success' ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Inquiry Prepared & Delivered
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Opening WhatsApp to deliver your inquiry directly to Kishore. You can also send an email with one click:
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <a
                      href={`mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'Engineering Opportunity')}&body=${encodeURIComponent(
                        `Hello Kishore,\n\nI reviewed your portfolio and would like to connect regarding an opportunity.\n\nFrom: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
                      )}`}
                      className="px-4 py-2 rounded-lg text-xs font-semibold bg-white text-zinc-950 hover:bg-zinc-200 transition-colors flex items-center gap-1.5"
                    >
                      <Mail size={14} />
                      <span>Send as Direct Email</span>
                    </a>
                    <button
                      onClick={() => {
                        setStatus('idle');
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2 rounded-lg text-xs font-medium text-zinc-300 bg-white/[0.05] hover:bg-white/10 border border-white/10 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-zinc-300 mb-1.5">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Johnson"
                        className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white/[0.04] text-white placeholder-zinc-500 border ${
                          formErrors.name ? 'border-rose-500/80 focus:ring-rose-500' : 'border-white/10 focus:border-indigo-500'
                        } focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors`}
                        aria-invalid={Boolean(formErrors.name)}
                        aria-describedby={formErrors.name ? 'contact-name-error' : undefined}
                      />
                      {formErrors.name && (
                        <p id="contact-name-error" className="text-xs text-rose-400 mt-1">
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-zinc-300 mb-1.5">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white/[0.04] text-white placeholder-zinc-500 border ${
                          formErrors.email ? 'border-rose-500/80 focus:ring-rose-500' : 'border-white/10 focus:border-indigo-500'
                        } focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors`}
                        aria-invalid={Boolean(formErrors.email)}
                        aria-describedby={formErrors.email ? 'contact-email-error' : undefined}
                      />
                      {formErrors.email && (
                        <p id="contact-email-error" className="text-xs text-rose-400 mt-1">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-zinc-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Software Engineering Opportunity / Project Discussion"
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white/[0.04] text-white placeholder-zinc-500 border border-white/10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-zinc-300 mb-1.5">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your team, role requirements, or project details..."
                      className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white/[0.04] text-white placeholder-zinc-500 border ${
                        formErrors.message ? 'border-rose-500/80 focus:ring-rose-500' : 'border-white/10 focus:border-indigo-500'
                      } focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors resize-none`}
                      aria-invalid={Boolean(formErrors.message)}
                      aria-describedby={formErrors.message ? 'contact-message-error' : undefined}
                    />
                    {formErrors.message && (
                      <p id="contact-message-error" className="text-xs text-rose-400 mt-1">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-zinc-400">
                      Typically responds within 24 hours
                    </span>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 transition-all shadow-sm shadow-indigo-600/30 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                      <Send size={14} />
                      <span>{status === 'submitting' ? 'Preparing...' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
