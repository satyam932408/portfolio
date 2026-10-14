import { useState, useEffect } from 'react';
import { ArrowDown, Mail, Code2, Cpu, CheckCircle2, FileText, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, stats } from '../data/portfolioData';

const ROTATING_TITLES = [
  'Full Stack Software Developer',
  'React.js & Next.js Specialist',
  'Node.js & Express API Architect',
  'AWS Cloud & Serverless Practitioner',
  '250+ LeetCode DSA Problem Solver'
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 70;

  useEffect(() => {
    const currentFullText = ROTATING_TITLES[titleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % ROTATING_TITLES.length);
        }
      }
    }, isDeleting ? 35 : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, typingSpeed]);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-sky-500/15 to-purple-600/20 blur-[130px] rounded-full pointer-events-none -z-10 animate-glow" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-indigo-500/10 blur-[110px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-indigo-300">
                {personalInfo.status}
              </span>
            </div>

            {/* Main Title & Typewriter */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Hi, I'm <span className="glow-gradient-text">{personalInfo.name}</span>
              </h1>
              <div className="h-12 sm:h-14 flex items-center">
                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 font-mono">
                  {displayText}
                  <span className="inline-block w-2.5 h-6 ml-1 bg-indigo-400 animate-pulse align-middle"></span>
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl font-normal">
              {personalInfo.tagline}
            </p>

            {/* Quick CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-sky-500 text-white font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowDown size={16} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white font-medium border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail size={16} className="text-sky-400" />
                <span>Contact Me</span>
              </a>

              <a
                href="#terminal"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-indigo-300 hover:text-indigo-200 font-mono text-sm border border-indigo-500/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Code2 size={16} />
                <span>CLI Terminal</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 hover:text-white font-medium border border-indigo-500/30 hover:border-indigo-500/50 transition-all duration-200 hover:-translate-y-0.5"
                title="View and download Satyam's CV (PDF)"
              >
                <FileText size={16} className="text-indigo-400" />
                <span>CV / Resume</span>
                <Download size={14} className="opacity-70" />
              </a>
            </div>

            {/* Socials & Location */}
            <div className="pt-4 flex items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code & Architecture Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-sky-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>

              {/* Code window card */}
              <div className="relative rounded-2xl bg-[#0c1017] border border-white/10 shadow-2xl overflow-hidden font-mono text-xs">
                {/* Window Header */}
                <div className="px-4 py-3 bg-[#080b11] border-b border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                    <Code2 size={13} className="text-indigo-400" />
                    <span>satyam</span>
                  </div>
                  <div className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Production Ready
                  </div>
                </div>

                {/* Code Body */}
                <div className="p-5 text-left space-y-2 text-slate-300 leading-relaxed overflow-x-auto">
                  <p className="text-slate-500">// Satyam Jha Developer Configuration</p>
                  <p>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-sky-400">softwareDeveloper</span> = {'{'}
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-300">'{personalInfo.name}'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">role:</span>{' '}
                    <span className="text-emerald-300">'{personalInfo.role}'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">coreStack:</span> [
                    <span className="text-amber-300">'React.js'</span>,{' '}
                    <span className="text-amber-300">'Next.js'</span>,{' '}
                    <span className="text-amber-300">'Node.js'</span>,{' '}
                    <span className="text-amber-300">'AWS'</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">dsaMilestone:</span>{' '}
                    <span className="text-emerald-400">'250+ Problems Solved'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">company:</span>{' '}
                    <span className="text-purple-300">'Icanio Technologies'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">readyForHire:</span>{' '}
                    <span className="text-emerald-400">true</span>
                  </p>
                  <p>{'}'};</p>

                  <div className="pt-3 mt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Cpu size={13} className="text-sky-400" />
                      <span>Node.js / React / AWS CLI</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-400">
                      <CheckCircle2 size={13} />
                      <span>Clean Architecture</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-10 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all duration-300 text-left group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-indigo-400 transition-colors">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-200">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
