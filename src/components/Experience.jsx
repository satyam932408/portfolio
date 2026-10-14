import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Trophy, 
  Award, 
  Users, 
  Sparkles
} from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/30">
      {/* Background glow */}
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-sky-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
            <Briefcase size={13} />
            <span>Career & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="glow-gradient-text">Achievements</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300/80 leading-relaxed">
            Professional development journey across enterprise software engineering, technical training, and competitive algorithmic challenges.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 max-w-4xl mx-auto mb-20">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/[0.08] relative group hover:border-indigo-500/40 transition-all duration-300"
            >
              {/* Top Row: Role, Company & Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/[0.06]">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-slate-300 font-medium text-sm">
                    <span className="text-indigo-400 font-semibold">{exp.company}</span>
                    <span>•</span>
                    <span className="text-slate-400 text-xs flex items-center gap-1">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 flex items-center gap-1.5">
                    <Calendar size={13} />
                    {exp.period}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white/[0.05] text-[11px] font-medium text-slate-300">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Responsibilities & Deliverables
                </h4>
                <div className="space-y-2.5">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Honors & Achievements Banner */}
        <div className="glass-panel rounded-3xl p-8 border border-white/[0.08] relative overflow-hidden">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="text-amber-400" size={24} />
            <h3 className="text-2xl font-bold text-white">Honors & Milestones</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Achievement 1 */}
            <div className="glass-card rounded-2xl p-6 border border-white/[0.06] hover:border-amber-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                <Award size={20} />
              </div>
              <div className="text-2xl font-extrabold text-white tracking-tight">250+ DSA Solved</div>
              <div className="text-sm font-semibold text-slate-200 mt-1">LeetCode & Platforms</div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Consistent problem-solving in C++ and JavaScript focusing on optimal time & space complexity, Trees, Graphs, and Dynamic Programming.
              </p>
            </div>

            {/* Achievement 2 */}
            <div className="glass-card rounded-2xl p-6 border border-white/[0.06] hover:border-indigo-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                <Sparkles size={20} />
              </div>
              <div className="text-2xl font-extrabold text-white tracking-tight">TCS Prime</div>
              <div className="text-sm font-semibold text-slate-200 mt-1">National Shortlist</div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Selected for the prestigious TCS Prime role following a rigorous national-level technical assessment testing advanced algorithms and engineering aptitude.
              </p>
            </div>

            {/* Achievement 3 */}
            <div className="glass-card rounded-2xl p-6 border border-white/[0.06] hover:border-emerald-500/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <Users size={20} />
              </div>
              <div className="text-2xl font-extrabold text-white tracking-tight">400+ Students</div>
              <div className="text-sm font-semibold text-slate-200 mt-1">Mentored & Trained</div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Delivered hands-on training sessions on embedded microcontrollers, C/C++ algorithms, and hardware integration under innovation initiatives.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
