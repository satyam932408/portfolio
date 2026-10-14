import { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle2, 
  X,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filterOptions = ['All', 'React', 'Next.js', 'Backend'];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'React') return p.tags.some(t => t.toLowerCase().includes('react'));
    if (activeFilter === 'Next.js') return p.tags.some(t => t.toLowerCase().includes('next'));
    if (activeFilter === 'Backend') return p.tags.some(t => t.toLowerCase().includes('node') || t.toLowerCase().includes('mongo') || t.toLowerCase().includes('rest'));
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-3">
              <FolderGit2 size={13} />
              <span>Production Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured <span className="glow-gradient-text">Software Projects</span>
            </h2>
            <p className="mt-3 text-base text-slate-300/80 leading-relaxed">
              Real-world client applications, full-stack systems, and developer productivity tools built with React, Next.js, Node.js, and cloud backends.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/satyam932408"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 text-sm font-medium transition-colors"
            >
              <GithubIcon size={16} />
              <span>View All on GitHub</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setActiveFilter(opt)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === opt
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-white/[0.04] text-slate-400 hover:text-slate-200 hover:bg-white/[0.07] border border-white/[0.06]'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl overflow-hidden border border-white/[0.08] flex flex-col justify-between group hover:border-indigo-500/40"
            >
              <div>
                {/* Project Header Banner with decorative mockup */}
                <div className={`p-6 bg-gradient-to-br ${project.gradient} border-b border-white/[0.06] relative`}>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-indigo-300">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-black/40 text-slate-300 hover:text-white hover:bg-black/60 transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <GithubIcon size={14} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-black/40 text-slate-300 hover:text-white hover:bg-black/60 transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="pt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.07] text-[11px] font-mono text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-white/[0.06] mt-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 py-2 transition-colors cursor-pointer"
                >
                  Inspect Architecture →
                </button>
                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600/80 hover:bg-indigo-600 text-white text-xs font-medium transition-colors"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Architecture Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in">
          <div className="glass-panel max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 mb-3">
              <span>{selectedProject.category}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              {selectedProject.title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedProject.longDescription}
            </p>

            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Engineering Highlights
              </h4>
              <div className="space-y-2">
                {selectedProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-xs text-slate-300">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 text-xs font-medium border border-white/10 transition-colors"
                >
                  <GithubIcon size={15} />
                  <span>View Source</span>
                </a>
              )}
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors"
                >
                  <span>Launch Live Preview</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
