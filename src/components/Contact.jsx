import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send,
  AlertCircle,
  ExternalLink,
  FileText,
  Download
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' | 'activation' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleOpenMailClient = () => {
    const subject = encodeURIComponent(formData.subject || `Portfolio Message from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hi Satyam,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage('');
    setSubmissionStatus(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          subject: formData.subject || `Portfolio Inquiry from ${formData.name}`,
          message: formData.message,
          _subject: formData.subject || `Portfolio Inquiry from ${formData.name}`,
          _template: 'table'
        })
      });

      const data = await response.json().catch(() => ({}));

      if (data.success === 'true' || data.success === true) {
        setSubmissionStatus('success');
        setIsSubmitted(true);
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else if (data.message && data.message.toLowerCase().includes('activation')) {
        setSubmissionStatus('activation');
        setIsSubmitted(true);
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        });
      } else {
        setSubmissionStatus('error');
        setErrorMessage(data.message || 'Unable to send message via automated server. Please use direct email.');
      }
    } catch (err) {
      console.error('Submission failed:', err);
      setSubmissionStatus('error');
      setErrorMessage('Could not connect to the mail server. You can send directly via your mail client.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-3">
            <Mail size={13} />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="glow-gradient-text">Exceptional</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300/80 leading-relaxed">
            Interested in hiring me, collaborating on a project, or discussing software engineering? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/[0.08] space-y-6">
              <h3 className="text-xl font-bold text-white">Contact Information</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Feel free to reach out directly via email, phone, or connect on LinkedIn and GitHub.
              </p>

              {/* Email Card with Copy */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between group hover:border-indigo-500/30 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-semibold tracking-wider block">Email Address</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm font-medium text-white hover:text-indigo-300 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Card with Copy */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between group hover:border-indigo-500/30 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-semibold tracking-wider block">Phone / WhatsApp</span>
                    <a href={`tel:${personalInfo.phone}`} className="text-sm font-medium text-white hover:text-sky-300 transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 uppercase font-semibold tracking-wider block">Location</span>
                  <span className="text-sm font-medium text-white">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* CV Card */}
              <div className="p-4 rounded-2xl bg-indigo-500/[0.05] border border-indigo-500/20 flex items-center justify-between group hover:border-indigo-500/40 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <FileText size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] text-indigo-300 uppercase font-semibold tracking-wider block">Curriculum Vitae</span>
                    <span className="text-sm font-medium text-white">satyam-latest-cv.pdf</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    title="View CV in browser"
                    aria-label="View CV"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={personalInfo.resumeUrl}
                    download="satyam-latest-cv.pdf"
                    className="p-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer shadow-md"
                    title="Download CV"
                    aria-label="Download CV"
                  >
                    <Download size={16} />
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Social Links</span>
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/[0.08]">
              
              {isSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  {submissionStatus === 'activation' ? (
                    <>
                      <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mx-auto flex items-center justify-center">
                        <Check size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-white">One-Time Activation Required</h3>
                      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-left max-w-lg mx-auto text-xs text-amber-200/90 leading-relaxed space-y-2">
                        <p className="font-semibold text-amber-300">
                          FormSubmit has dispatched a verification email to:
                        </p>
                        <p className="font-mono text-white bg-black/40 px-3 py-1.5 rounded-lg border border-amber-500/20">
                          {personalInfo.email}
                        </p>
                        <p>
                          Please open your inbox or spam folder for <span className="font-semibold text-white">"Action Required: Confirm your FormSubmit endpoint"</span> and click <span className="font-semibold text-white">"Activate Form"</span>. Once activated, every message submitted will immediately land in your inbox!
                        </p>
                      </div>
                      <p className="text-slate-400 text-xs">
                        Want to ensure your message is received right now? Click below to send directly via your mail client:
                      </p>
                      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                        <button
                          type="button"
                          onClick={handleOpenMailClient}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 text-white text-xs font-medium shadow-lg hover:shadow-indigo-500/30 transition-transform hover:-translate-y-0.5 cursor-pointer"
                        >
                          <Mail size={14} />
                          <span>Open in Email App</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setIsSubmitted(false);
                            setSubmissionStatus(null);
                            setFormData({ name: '', email: '', subject: '', message: '' });
                          }}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white text-xs font-medium border border-white/10 transition-colors cursor-pointer"
                        >
                          <span>Send Another Message</span>
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                        <Check size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Message Dispatched!</h3>
                      <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                        Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your message has been sent to <span className="text-indigo-400 font-semibold">{personalInfo.email}</span>! I will review it and get back to you promptly.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setSubmissionStatus(null);
                          setFormData({ name: '', email: '', subject: '', message: '' });
                        }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white text-xs font-medium border border-white/10 transition-colors cursor-pointer mt-2"
                      >
                        <span>Send Another Message</span>
                      </button>
                    </>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
                  
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <AlertCircle size={16} className="text-rose-400 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleOpenMailClient}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500 text-white font-medium hover:bg-rose-600 transition-colors shrink-0 cursor-pointer"
                      >
                        <Mail size={13} />
                        <span>Open in Mail App</span>
                      </button>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-medium text-slate-300">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-500 text-sm outline-none focus:border-indigo-500 focus:bg-white/[0.06] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-medium text-slate-300">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-500 text-sm outline-none focus:border-indigo-500 focus:bg-white/[0.06] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-medium text-slate-300">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Project Opportunity / Full-time Role"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-500 text-sm outline-none focus:border-indigo-500 focus:bg-white/[0.06] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-medium text-slate-300">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Hi Satyam, I came across your portfolio and wanted to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-500 text-sm outline-none focus:border-indigo-500 focus:bg-white/[0.06] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-sky-500 text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-400">
                    <span>Or send directly using your email app:</span>
                    <button
                      type="button"
                      onClick={handleOpenMailClient}
                      className="text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 font-medium underline underline-offset-2 transition-colors cursor-pointer"
                    >
                      <span>Open Mail Client</span>
                      <ExternalLink size={12} />
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
}
