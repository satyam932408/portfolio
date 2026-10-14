import { 
  GraduationCap, 
  Award, 
  Code2, 
  Cloud, 
  Users, 
  BookOpen, 
  CheckCircle, 
  Terminal,
  HeartHandshake,
  ExternalLink,
  FileCheck
} from 'lucide-react';
import { personalInfo, education, certificationsAndAchievements } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle backdrop glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-3">
            <Terminal size={13} />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="glow-gradient-text">Satyam Jha</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300/80 leading-relaxed">
            Information Technology undergraduate & Full Stack Software Developer passionate about high-performance web systems, cloud architectures, and algorithmic problem-solving.
          </p>
        </div>

        {/* Top Grid: Bio & Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Bio Card */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 relative">

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Code2 size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Engineering Objective</h3>
                <p className="text-xs text-indigo-400">Full-Stack Developer • Problem Solver</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-base mb-6">
              {personalInfo.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/[0.08]">
              <div className="flex items-start gap-2.5">
                <CheckCircle size={18} className="text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-300">Hands-on with React.js, Next.js & Node.js</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle size={18} className="text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-300">AWS Cloud Services (S3, EC2, Lambda, DynamoDB)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle size={18} className="text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-300">250+ Data Structures & Algorithms Solved</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle size={18} className="text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-300">Mentored 400+ students in hands-on workshops</span>
              </div>
            </div>
          </div>

          {/* Quick Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            <div className="glass-card rounded-2xl p-5 border border-white/[0.06]">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                  <Cloud size={18} />
                </div>
                <h4 className="text-base font-semibold text-white">Cloud & Backend</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Building RESTful APIs with Node.js and Express, coupled with AWS serverless (Lambda), S3 storage, and DynamoDB/MySQL persistence.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-5 border border-white/[0.06]">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <Award size={18} />
                </div>
                <h4 className="text-base font-semibold text-white">Competitive DSA</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Strong analytical foundation in C++ and JavaScript. Shortlisted for <span className="text-indigo-300 font-medium">TCS Prime</span> via high-difficulty national contest.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-5 border border-white/[0.06]">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Users size={18} />
                </div>
                <h4 className="text-base font-semibold text-white">Leadership & Training</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Conducted technical robotics & programming workshops for 400+ students with Robokart and university innovation club.
              </p>
            </div>

          </div>

        </div>

        {/* Education & Academic Journey */}
        <div className="mt-8 mb-16">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="text-indigo-400" size={22} />
            <h3 className="text-2xl font-bold text-white">Education Timeline</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((item) => (
              <div
                key={item.institution}
                className="glass-card rounded-2xl p-6 relative border border-white/[0.08] hover:border-indigo-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-indigo-400 font-mono mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                      {item.period}
                    </span>
                    <span className="text-slate-400">{item.location}</span>
                  </div>
                  <h4 className="text-base font-bold text-white mt-1">
                    {item.degree}
                  </h4>
                  <p className="text-sm font-medium text-slate-300 mt-1">
                    {item.institution}
                  </p>
                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Certifications Section */}
        <div className="mt-12 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <BookOpen className="text-sky-400" size={22} />
              <h3 className="text-2xl font-bold text-white">Verified Certifications</h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              Click any certificate to inspect official PDF credential
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {certificationsAndAchievements.certifications.map((cert) => (
              <div
                key={cert.title}
                className="glass-card rounded-2xl p-6 border border-white/[0.08] hover:border-indigo-500/40 flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <FileCheck className="text-emerald-400 shrink-0" size={18} />
                      <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                        {cert.issuer}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                      {cert.badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {cert.title}
                  </h4>

                  {cert.credentialId && (
                    <div className="mt-1 text-[11px] font-mono text-slate-400">
                      ID: <span className="text-slate-300">{cert.credentialId}</span>
                    </div>
                  )}

                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between">
                  {cert.instructor ? (
                    <span className="text-[11px] text-slate-400">
                      Instructor: <span className="text-slate-200">{cert.instructor}</span>
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-400">
                      Verified Completion
                    </span>
                  )}

                  <a
                    href={cert.fileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600/80 hover:bg-indigo-600 text-white text-xs font-medium transition-colors"
                  >
                    <span>View PDF</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages & Passions Row */}
        <div className="mt-8 glass-panel rounded-2xl p-6 border border-white/[0.08]">
          <div className="flex items-center gap-2 mb-4">
            <HeartHandshake className="text-purple-400" size={20} />
            <h4 className="text-lg font-bold text-white">Languages & Passions</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Languages Known</span>
              <div className="flex flex-wrap gap-2">
                {certificationsAndAchievements.languagesKnown.map((lang) => (
                  <span key={lang} className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs text-slate-200 font-medium">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Interests & Hobbies</span>
              <div className="flex flex-wrap gap-2">
                {certificationsAndAchievements.interests.map((interest) => (
                  <span key={interest} className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300 font-medium">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
