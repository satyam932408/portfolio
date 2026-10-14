import { useState, useEffect } from 'react';
import { 
  ArrowUp, 
  Terminal, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Copy, 
  Check, 
  Sparkles, 
  Send
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Live IST (Indian Standard Time) Clock
  useEffect(() => {
    const updateTime = () => {
      const timeStr = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(new Date());
      setCurrentTime(timeStr);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#07080c] relative overflow-hidden text-slate-300">
      {/* Background ambient gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-indigo-500/10 via-sky-500/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top Call-to-Action Glass Card */}
        <div className="relative rounded-2xl p-6 sm:p-8 mb-12 bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-purple-950/40 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-300">
                <Sparkles size={13} className="text-indigo-400" />
                <span>Let's collaborate</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Have an opportunity or project in mind?
              </h3>
              <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed">
                I'm actively open to full-time Software Engineering roles, full-stack development, and exciting engineering challenges. Let's connect!
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-sky-500 text-white font-medium text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Send size={15} />
                <span>Send Message</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white font-medium text-sm border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={15} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={15} className="text-indigo-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/[0.08]">
          {/* Brand & Live Status */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-purple-500 p-[1px] shadow-lg shadow-indigo-500/20">
                <div className="w-full h-full bg-[#0d1017] rounded-[11px] flex items-center justify-center text-indigo-400">
                  <Terminal size={19} />
                </div>
              </div>
              <div>
                <span className="font-extrabold text-white text-lg tracking-tight">
                  {personalInfo.name}
                </span>
                <p className="text-xs text-indigo-400 font-medium">
                  {personalInfo.role}
                </p>
              </div>
            </div>

            {/* Live Location & Local Time */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 font-medium">Available for full-time opportunities</span>
              </div>

              <div className="flex items-center gap-1.5 text-slate-400">
                <MapPin size={13} className="text-sky-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>

              {currentTime && (
                <div className="flex items-center gap-1.5 text-slate-400 font-mono">
                  <Clock size={13} className="text-indigo-400 shrink-0" />
                  <span>Mumbai (IST): {currentTime}</span>
                </div>
              )}
            </div>
          </div>

          {/* Connect & Social Profiles */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/20 text-slate-300 hover:text-white transition-all group"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} className="text-slate-400 group-hover:text-white transition-colors" />
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/20 text-slate-300 hover:text-white transition-all group"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} className="text-sky-400 group-hover:text-sky-300 transition-colors" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/20 text-slate-300 hover:text-white transition-all group"
              aria-label="Send Email"
            >
              <Mail size={16} className="text-indigo-400 group-hover:text-indigo-300 transition-colors" />
              <span>Email</span>
            </a>

            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/20 text-slate-300 hover:text-white transition-all group"
              aria-label="Direct Phone"
            >
              <Phone size={16} className="text-emerald-400 group-hover:text-emerald-300 transition-colors" />
              <span>Call</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {CURRENT_YEAR} {personalInfo.name}. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white text-xs font-medium border border-white/10 hover:border-white/20 transition-all cursor-pointer group"
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
