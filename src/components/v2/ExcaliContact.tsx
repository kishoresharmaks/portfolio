import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { ScotchTape, PushPin, DoodleStar, ScribbleUnderline, SketchStamp } from './ExcaliSvgDoodles';
import { RoughButton, RoughStickyNote, RoughBadge } from './RoughElements';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Download, 
  CheckCircle2, 
  Github, 
  Linkedin
} from 'lucide-react';

export const ExcaliContact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.message.trim()) return;

    // Form professional direct inquiry message
    const formattedSubject = formState.subject?.trim() || 'Software Engineering / Opportunity Inquiry';
    const text = encodeURIComponent(
      `Hello Kishore,\n\nI reviewed your software engineering portfolio and would like to get in touch regarding an opportunity / project.\n\nFrom: ${formState.name.trim()} (${formState.email.trim()})\nSubject: ${formattedSubject}\n\nMessage:\n${formState.message.trim()}`
    );
    const whatsappUrl = `https://wa.me/91${personal.phone}?text=${text}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    setStatus('sent');
  };

  return (
    <footer id="contact" className="pt-16 pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t-2 border-dashed border-stone-300">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-block">
          <RoughBadge variant="yellow" className="mb-3 text-sm">
            Let's Collaborate • Available for Hire
          </RoughBadge>
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-hand font-extrabold text-stone-900 tracking-tight">
          Get In Touch &{' '}
          <span className="relative inline-block text-stone-900">
            Let's Build Together
            <ScribbleUnderline color="#ffd43b" />
          </span>
        </h2>
        <p className="font-sans text-stone-600 mt-2 text-sm sm:text-base">
          Direct lines to discuss software engineering roles, backend architecture, or client projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Left Column: Sketch Notepad Contact Form (7 cols) */}
        <div className="lg:col-span-7 relative bg-[#fffdfa] border-3 border-stone-800 rounded-2xl p-6 sm:p-8 shadow-sketch-xl">
          <ScotchTape className="-top-3 left-12 w-32 h-6 opacity-90 -rotate-1" />
          <PushPin className="-top-3.5 right-10" />

          <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-stone-800">
            <div>
              <span className="font-mono text-xs text-stone-500 uppercase">Direct Channel</span>
              <h3 className="font-hand font-extrabold text-2xl text-stone-900">
                Send a Message
              </h3>
            </div>
            <span className="font-hand text-sm px-3 py-1 bg-[#fff9db] border border-stone-800 rounded-md shadow-sketch-sm">
              Instant Dispatch
            </span>
          </div>

          {status === 'sent' ? (
            <div className="py-12 text-center bg-[#ebfbee] border-2 border-stone-800 rounded-xl p-6">
              <CheckCircle2 size={44} className="mx-auto text-emerald-600 mb-3" />
              <h4 className="font-hand font-extrabold text-2xl text-stone-900">
                Message Ready for Dispatch!
              </h4>
              <p className="font-sans text-stone-700 text-sm mt-1 max-w-md mx-auto">
                Opening WhatsApp to deliver your inquiry directly to Kishore. You can also send an email with one click:
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href={`mailto:${personal.email}?subject=${encodeURIComponent(formState.subject || 'Software Engineering Inquiry')}&body=${encodeURIComponent(
                    `Hello Kishore,\n\nI reviewed your portfolio and would like to connect regarding an opportunity.\n\nFrom: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`
                  )}`}
                  className="px-4 py-2 bg-white text-stone-900 font-hand text-sm font-bold rounded-lg border-2 border-stone-800 shadow-sketch hover:bg-stone-50 flex items-center gap-2"
                >
                  <Mail size={15} />
                  <span>Send as Direct Email</span>
                </a>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-4 py-2 bg-stone-900 text-amber-300 font-hand text-sm font-bold rounded-lg border-2 border-stone-800 shadow-sketch"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-hand font-bold text-base text-stone-900 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-3.5 py-2.5 bg-white border-2 border-stone-800 rounded-lg font-sans text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-800 shadow-sketch-sm"
                  />
                </div>

                <div>
                  <label className="block font-hand font-bold text-base text-stone-900 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 bg-white border-2 border-stone-800 rounded-lg font-sans text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-800 shadow-sketch-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block font-hand font-bold text-base text-stone-900 mb-1">
                  Topic / Subject
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Software Engineering Role / Project Inquiry"
                  className="w-full px-3.5 py-2.5 bg-white border-2 border-stone-800 rounded-lg font-sans text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-800 shadow-sketch-sm"
                />
              </div>

              <div>
                <label className="block font-hand font-bold text-base text-stone-900 mb-1">
                  Your Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your team, project requirements, or role opportunities..."
                  className="w-full px-3.5 py-2.5 bg-white border-2 border-stone-800 rounded-lg font-sans text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-800 shadow-sketch-sm resize-none"
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-xs text-stone-500">
                  ⚡ Typically responds within 2-4 hours
                </span>

                <RoughButton
                  type="submit"
                  variant="yellow"
                  size="md"
                  className="flex items-center gap-2"
                >
                  <Send size={16} />
                  <span>Dispatch via WhatsApp / Mail</span>
                </RoughButton>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Contact Cards & Quick Details (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          {/* Direct Details Card */}
          <div className="bg-[#fff9db] border-3 border-stone-800 rounded-2xl p-6 shadow-sketch-lg relative rotate-1">
            <ScotchTape className="-top-3 right-10 w-28 h-6 opacity-85 -rotate-2" />
            <h4 className="font-hand font-extrabold text-2xl text-stone-900 mb-4">
              Direct Contact Lines
            </h4>

            <div className="space-y-3 font-sans text-sm">
              <a 
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 p-2.5 bg-white border-2 border-stone-800 rounded-lg hover:bg-stone-50 transition-all shadow-sketch-sm group"
              >
                <div className="p-2 bg-[#d0ebff] border border-stone-800 rounded-md">
                  <Mail size={18} className="text-stone-900" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-stone-500">Direct Email</div>
                  <div className="font-bold text-stone-900 group-hover:underline">{personal.email}</div>
                </div>
              </a>

              <a 
                href={`tel:${personal.phone}`}
                className="flex items-center gap-3 p-2.5 bg-white border-2 border-stone-800 rounded-lg hover:bg-stone-50 transition-all shadow-sketch-sm group"
              >
                <div className="p-2 bg-[#d3f9d8] border border-stone-800 rounded-md">
                  <Phone size={18} className="text-stone-900" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-stone-500">Direct Phone / WhatsApp</div>
                  <div className="font-bold text-stone-900 group-hover:underline">+91 {personal.phone}</div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-2.5 bg-white border-2 border-stone-800 rounded-lg shadow-sketch-sm">
                <div className="p-2 bg-[#fcc2d7] border border-stone-800 rounded-md">
                  <MapPin size={18} className="text-stone-900" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-stone-500">Current Base</div>
                  <div className="font-bold text-stone-900">{personal.location}</div>
                </div>
              </div>
            </div>

            {/* Resume button */}
            <div className="mt-5 pt-4 border-t-2 border-dashed border-stone-400 flex items-center justify-between">
              <a
                href={personal.resumeUrl}
                download="Kishoresharma_T_SDE_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 text-amber-300 font-hand text-base font-bold rounded-lg border-2 border-stone-800 shadow-sketch hover:bg-stone-800 transition-all active:translate-x-[1px] active:translate-y-[1px]"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>

              <span className="font-hand font-bold text-xs bg-white px-2 py-1 rounded border border-stone-800">
                PDF Updated 2026
              </span>
            </div>
          </div>

          {/* Social Profiles & Theme Switcher Pill */}
          <div className="bg-white border-2 border-stone-800 rounded-xl p-5 shadow-sketch-md">
            <div className="text-xs font-mono uppercase text-stone-500 mb-3">Online Profiles</div>
            <div className="flex flex-wrap gap-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-stone-100 hover:bg-stone-200 border-2 border-stone-800 rounded-lg text-xs font-mono font-bold text-stone-900 shadow-sketch-sm transition-all"
              >
                <Github size={15} />
                <span>GitHub</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#e7f5ff] hover:bg-[#d0ebff] border-2 border-stone-800 rounded-lg text-xs font-mono font-bold text-blue-900 shadow-sketch-sm transition-all"
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Handcrafted Footer Credits */}
      <div className="pt-8 border-t-2 border-stone-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-600">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
          <span>© 2026 Kishoresharma T • Handcrafted Engineering Portfolio</span>
        </div>

        <div className="flex items-center gap-4">
          <button 
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-stone-950 font-hand font-bold text-sm underline decoration-wavy flex items-center gap-1 active:translate-y-0.5 cursor-pointer text-stone-700 hover:text-stone-950 transition-colors"
            title="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
