import { WORK_PHILOSOPHY, PERSONAL_INFO } from "@/data/portfolio-data";
import { Rocket, ShieldCheck, Cpu, MessageSquareCode, CheckCircle2, Compass, Award, Target, Sparkles } from "lucide-react";

export default function HowIWork() {
  const icons = {
    Rocket: <Rocket className="w-5 h-5 text-[#244974]" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#244974]" />,
    Cpu: <Cpu className="w-5 h-5 text-[#244974]" />,
    MessageSquareCode: <MessageSquareCode className="w-5 h-5 text-[#244974]" />,
  };

  return (
    <section id="how-i-work" className="py-20 md:py-28 bg-[#FAFCFE] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF4FC] text-xs font-bold uppercase tracking-wider text-[#244974] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#244974]" />
            Operating Principles
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A375A] tracking-tight">
            How I Work & Deliver
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#69707A] leading-relaxed">
            A disciplined engineering process centered on high ownership, rigorous self-testing, upfront architectural clarity, and clear cross-functional alignment.
          </p>
        </div>

        {/* 4 Core Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {WORK_PHILOSOPHY.map((pillar) => (
            <div
              key={pillar.id}
              className="p-7 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#96C4F0] shadow-2xs hover:shadow-sm transition-all duration-200 flex flex-col justify-between space-y-5"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-xl bg-[#EBF4FC] border border-[#96C4F0]/40">
                    {icons[pillar.iconName]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A375A]">
                      {pillar.title}
                    </h3>
                    <div className="text-xs font-medium text-[#244974]">
                      {pillar.tagline}
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 pt-3">
                  {pillar.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#262C34]/85 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#244974] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#F1F5F9] text-[11px] font-semibold text-[#69707A] flex items-center justify-between">
                <span>Disciplined Engineering Standard</span>
                <span className="text-[#244974]">Production Ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* Self-Image, Key Traits & Trajectory Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Engineering Ethos Card */}
          <div className="p-6 rounded-2xl bg-[#1A375A] text-white space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#96C4F0]">
              <Target className="w-4 h-4 text-[#96C4F0]" />
              Engineering Ethos
            </div>
            <h4 className="text-base font-bold text-white">
              Root-Cause Focus Over Quick Fixes
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {PERSONAL_INFO.selfImage}
            </p>
          </div>

          {/* Core Traits Card */}
          <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#244974]">
              <Award className="w-4 h-4 text-[#244974]" />
              Distinctive Traits
            </div>
            <h4 className="text-base font-bold text-[#1A375A]">
              Reliability Under Real-World Complexity
            </h4>
            <div className="space-y-1.5 text-xs text-[#262C34]/80">
              {PERSONAL_INFO.traits.map((trait, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#244974] shrink-0"></span>
                  <span>{trait}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Where I'm Headed */}
          <div className="p-6 rounded-2xl bg-[#EBF4FC]/80 border border-[#96C4F0]/50 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A375A]">
              <Compass className="w-4 h-4 text-[#244974]" />
              Where I&apos;m Headed
            </div>
            <h4 className="text-base font-bold text-[#1A375A]">
              System Design & Strategic Impact
            </h4>
            <p className="text-xs text-[#262C34]/90 leading-relaxed">
              {PERSONAL_INFO.whereImHeaded}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
