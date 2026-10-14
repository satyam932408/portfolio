import { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Server, 
  Cloud, 
  Wrench, 
  Sparkles, 
  Cpu
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies', icon: Sparkles },
    { id: 'frontend', label: 'Frontend', icon: Layers },
    { id: 'backend', label: 'Backend & APIs', icon: Server },
    { id: 'databasesCloud', label: 'AWS Cloud & DB', icon: Cloud },
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'tools', label: 'Dev Tools', icon: Wrench },
  ];

  const getFilteredSkills = () => {
    if (activeTab === 'all') {
      return [
        { category: 'Languages', items: skillsData.languages, icon: Code2, color: 'text-sky-400' },
        { category: 'Frontend Ecosystem', items: skillsData.frontend, icon: Layers, color: 'text-indigo-400' },
        { category: 'Backend & Real-Time', items: skillsData.backend, icon: Server, color: 'text-purple-400' },
        { category: 'AWS Cloud & Databases', items: skillsData.databasesCloud, icon: Cloud, color: 'text-amber-400' },
        { category: 'Tools & Platforms', items: skillsData.tools, icon: Wrench, color: 'text-emerald-400' },
      ];
    }

    const mapping = {
      frontend: { category: 'Frontend Ecosystem', items: skillsData.frontend, icon: Layers, color: 'text-indigo-400' },
      backend: { category: 'Backend & Real-Time', items: skillsData.backend, icon: Server, color: 'text-purple-400' },
      databasesCloud: { category: 'AWS Cloud & Databases', items: skillsData.databasesCloud, icon: Cloud, color: 'text-amber-400' },
      languages: { category: 'Languages', items: skillsData.languages, icon: Code2, color: 'text-sky-400' },
      tools: { category: 'Tools & Platforms', items: skillsData.tools, icon: Wrench, color: 'text-emerald-400' },
    };

    return [mapping[activeTab]];
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-3">
            <Cpu size={13} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="glow-gradient-text">Tech Stack</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300/80 leading-relaxed">
            Full-stack engineering toolkit honed through production development at Icanio Technologies, competitive programming, and hands-on projects.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-500'
                    : 'bg-white/[0.04] text-slate-400 hover:text-slate-200 hover:bg-white/[0.08] border border-white/[0.06]'
                }`}
              >
                <Icon size={15} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-10">
          {getFilteredSkills().map((group) => {
            const GroupIcon = group.icon;
            return (
              <div key={group.category} className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/[0.08]">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.08]">
                  <div className={`p-2 rounded-xl bg-white/[0.05] border border-white/10 ${group.color}`}>
                    <GroupIcon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{group.category}</h3>
                    <p className="text-xs text-slate-400">{group.items.length} core technologies</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="glass-card rounded-2xl p-4 flex flex-col justify-between border border-white/[0.06] hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-200 group"
                    >
                      <div className="flex items-start justify-between gap-1 mb-2">
                        <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                          {skill.badge}
                        </span>
                      </div>

                      <div className="mt-2">
                        <div className="font-semibold text-white text-sm group-hover:text-indigo-300 transition-colors">
                          {skill.name}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-1">
                          {skill.level}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Cloud Architecture Callout */}
        <div className="mt-12 glass-panel rounded-3xl p-6 sm:p-8 border border-indigo-500/20 bg-gradient-to-r from-indigo-950/30 via-slate-900/40 to-sky-950/30">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                <Cloud size={14} />
                <span>AWS Cloud Native</span>
              </div>
              <h4 className="text-xl font-bold text-white">Hands-on Cloud Experience</h4>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                Deployed and maintained infrastructure across AWS S3, EC2 instances, Lambda serverless functions, DynamoDB, CloudFront distributions, and automated AWS CLI routines.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Amazon S3', 'Amazon EC2', 'AWS Lambda', 'DynamoDB', 'CloudFront', 'AWS CLI'].map((svc) => (
                <span key={svc} className="px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-xs font-mono text-indigo-300">
                  {svc}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
