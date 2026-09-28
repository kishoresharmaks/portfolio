import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  Code2, 
  Heart,
  Download,
  Terminal,
  RotateCcw,
  Zap,
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactFooter: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [generatedWaUrl, setGeneratedWaUrl] = useState<string>('');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSending(true);

    const messageText = 
`👋 *New Portfolio Inquiry*

👤 *Sender Name:* ${formState.name}
✉️ *Email:* ${formState.email}

💬 *Message:*
${formState.message}

---
_Sent via Kishoresharma Portfolio Terminal_`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/917695946750?text=${encodedMessage}`;
    setGeneratedWaUrl(whatsappUrl);

    setTimeout(() => {
      setIsSending(false);
      setFormSubmitted(true);
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  const handleResetForm = () => {
    setFormSubmitted(false);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <footer id="contact" className="relative pt-20 pb-12 bg-[#050811] border-t border-slate-800/80">
      
      {/* Background glow */}
      <div className="glow-orb bottom-10 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card text-xs font-semibold text-indigo-300 border border-indigo-500/20 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-amber-500">Great Together</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Open for full-time Software Engineer, Java Developer, and Full Stack roles. Direct messages are sent directly to my WhatsApp (+91 7695946750)!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto min-w-0 w-full">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4 min-w-0 w-full">
            
            {/* WhatsApp Direct Quick Card */}
            <a
              href="https://wa.me/917695946750?text=Hi%20Kishore%2C%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card bg-[#0e1b18]/90 p-5 rounded-2xl border border-emerald-500/30 flex items-center justify-between group hover:border-emerald-400/60 transition-all shadow-xl block"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-emerald-500/20 text-[#25D366] border border-emerald-500/30 shrink-0">
                  <SiWhatsapp className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block font-semibold">Direct WhatsApp Chat</span>
                  <span className="text-sm font-bold text-white hover:text-emerald-300 transition-colors">
                    +91 7695946750
                  </span>
                </div>
              </div>
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-300 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>

            {/* Email Card */}
            <div className="glass-card bg-[#0a0e1a]/90 p-5 rounded-2xl border border-slate-800 flex items-center justify-between group hover:border-indigo-500/40 transition-all shadow-xl">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Email Address</span>
                  <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="text-sm font-bold text-white hover:text-indigo-300 transition-colors">
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.email, 'email')}
                className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer border border-slate-700"
                title="Copy Email"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-card bg-[#0a0e1a]/90 p-5 rounded-2xl border border-slate-800 flex items-center justify-between group hover:border-cyan-500/40 transition-all shadow-xl">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Phone Number</span>
                  <a href={`tel:${PORTFOLIO_DATA.personal.phone}`} className="text-sm font-bold text-white hover:text-cyan-300 transition-colors">
                    +91 {PORTFOLIO_DATA.personal.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.phone, 'phone')}
                className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer border border-slate-700"
                title="Copy Phone"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card bg-[#0a0e1a]/90 p-5 rounded-2xl border border-slate-800 flex items-center gap-3.5 shadow-xl">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Location</span>
                <span className="text-sm font-bold text-white">
                  {PORTFOLIO_DATA.personal.location}
                </span>
              </div>
            </div>

            {/* Resume Download Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/80 via-slate-900 to-indigo-950/80 border border-indigo-500/30 flex items-center justify-between shadow-xl">
              <div>
                <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider block">Official Resume</span>
                <span className="text-xs text-slate-400">Download formatted PDF document</span>
              </div>
              <a
                href="file:///d:/Kishoresharma_Web_Developer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-2 transition-colors shadow-lg shadow-indigo-600/30 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>PDF Download</span>
              </a>
            </div>

          </div>

          {/* Right Column: Terminal Contact Console */}
          <div className="lg:col-span-7 min-w-0 w-full relative">
            <div className="relative rounded-2xl glass-card bg-[#0A0E1A] border border-slate-700/80 shadow-2xl overflow-hidden w-full">
              
              {/* Terminal Header */}
              <div className="bg-[#0e1424] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300 font-mono ml-2">
                    <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">whatsapp_dispatch.sh</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    WHATSAPP ACTIVE
                  </span>
                  {formSubmitted && (
                    <button
                      onClick={handleResetForm}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-mono transition-colors p-1 cursor-pointer"
                      title="Reset Terminal"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>RESET</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Terminal Content Body */}
              <div className="p-5 sm:p-6 font-mono text-xs leading-relaxed bg-[#070b14] text-slate-300">
                
                {formSubmitted ? (
                  /* Terminal Output Screen (Post-submit) */
                  <div className="space-y-4 py-3 animate-in fade-in duration-300">
                    <div className="text-slate-500">// Execution Command</div>
                    <div className="text-emerald-400 flex items-center gap-2 font-semibold">
                      <span>$</span>
                      <span>OPEN https://wa.me/917695946750</span>
                    </div>

                    <div className="space-y-1 text-slate-300">
                      <div className="text-emerald-400">✔ [200 OK] Formatting WhatsApp Message Payload... Done!</div>
                      <div className="text-emerald-400">✔ [200 OK] Target Phone: +91 7695946750... Validated!</div>
                      <div className="text-emerald-400">✔ [200 OK] Redirecting to WhatsApp Web / Mobile App... Launched!</div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0b1b16] border border-emerald-500/40 space-y-2 text-emerald-300 shadow-inner">
                      <div className="flex items-center gap-2 font-bold text-sm text-white">
                        <SiWhatsapp className="w-4 h-4 text-[#25D366]" />
                        <span>WHATSAPP MESSAGE GENERATED & LAUNCHED!</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans">
                        Your pre-formatted message for <span className="font-bold text-white">{formState.name}</span> has been dispatched to WhatsApp target <span className="text-emerald-300 font-mono">+91 7695946750</span>.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <a
                        href={generatedWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/30"
                      >
                        <SiWhatsapp className="w-4 h-4 text-white" />
                        <span>Open WhatsApp Again</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <button
                        onClick={handleResetForm}
                        className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer border border-slate-700"
                      >
                        <RotateCcw className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Reset Form</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Interactive Form Formatted as Terminal Prompt */
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Console Header Comment */}
                    <div className="text-slate-500 italic pb-1 border-b border-slate-800 flex items-center justify-between">
                      <span>// Message payload will be sent directly to WhatsApp (+91 7695946750)</span>
                      <SiWhatsapp className="w-4 h-4 text-[#25D366] shrink-0 ml-2" />
                    </div>

                    {/* Input Field 1: Sender Name */}
                    <div className="space-y-1.5">
                      <label className="text-slate-400 flex items-center gap-1.5 font-semibold">
                        <span className="text-purple-400 font-bold">$</span>
                        <span className="text-cyan-300">your_name</span>
                        <span className="text-slate-500">(required):</span>
                      </label>
                      <div className="relative flex items-center">
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="e.g. John Doe / HR Recruiter"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#0e1424] border border-slate-800 focus:border-emerald-500 text-white placeholder-slate-600 text-xs font-mono focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Input Field 2: Sender Email */}
                    <div className="space-y-1.5">
                      <label className="text-slate-400 flex items-center gap-1.5 font-semibold">
                        <span className="text-purple-400 font-bold">$</span>
                        <span className="text-cyan-300">your_email</span>
                        <span className="text-slate-500">(required):</span>
                      </label>
                      <div className="relative flex items-center">
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="e.g. john@company.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-[#0e1424] border border-slate-800 focus:border-emerald-500 text-white placeholder-slate-600 text-xs font-mono focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Input Field 3: Message Payload */}
                    <div className="space-y-1.5">
                      <label className="text-slate-400 flex items-center gap-1.5 font-semibold">
                        <span className="text-purple-400 font-bold">$</span>
                        <span className="text-cyan-300">message_payload</span>
                        <span className="text-slate-500">(required):</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Type your project requirements, hiring opportunity, or message details here..."
                        className="w-full px-4 py-2.5 rounded-xl bg-[#0e1424] border border-slate-800 focus:border-emerald-500 text-white placeholder-slate-600 text-xs font-mono focus:outline-none transition-colors resize-none leading-relaxed"
                      />
                    </div>

                    {/* Terminal Submit Command Button */}
                    <button
                      type="submit"
                      disabled={isSending}
                      className={`w-full py-3.5 rounded-xl font-mono font-bold text-xs shadow-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer ${
                        isSending
                          ? 'bg-emerald-500 text-black shadow-emerald-500/20'
                          : 'bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white shadow-emerald-600/30 hover:scale-[1.01]'
                      }`}
                    >
                      {isSending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                          <span>LAUNCHING WHATSAPP...</span>
                        </>
                      ) : (
                        <>
                          <SiWhatsapp className="w-4 h-4 text-white" />
                          <span>SEND DIRECTLY TO WHATSAPP (+91 7695946750)</span>
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>

              {/* Terminal Footer Bar */}
              <div className="bg-[#0e1424] px-4 py-2.5 border-t border-slate-800 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>WhatsApp Target: +91 7695946750</span>
                </span>
                <span className="text-emerald-400 font-semibold">Instant Mobile & Web Dispatch</span>
              </div>

            </div>
          </div>

        </div>

        {/* Footer Bottom Credentials Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-indigo-400" />
            <span>&copy; 2026 {PORTFOLIO_DATA.personal.name}. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500">
            <span>Built with React, Next.js architecture & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
