import { ACHIEVEMENTS, EDUCATION } from "@/data/portfolio-data";
import { Award, GraduationCap, Trophy, Sparkles, BookOpen, CheckCircle2, Star } from "lucide-react";

export default function AchievementsEducation() {
  return (
    <section id="education" className="py-20 bg-white border-y border-[#E2E8F0] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF4FC] text-xs font-bold uppercase tracking-wider text-[#244974] mb-3">
            <Trophy className="w-3.5 h-3.5 text-[#244974]" />
            Recognition & Academic Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A375A] tracking-tight">
            Achievements & Education
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#69707A]">
            Verified milestones across AI hackathons, production delivery benchmarks, and computer science foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Achievements Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-[#1A375A] flex items-center gap-2">
              <Award className="w-5 h-5 text-[#244974]" />
              Key Achievements & Recognition
            </h3>

            <div className="space-y-4">
              {ACHIEVEMENTS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FAFCFE] border border-[#E2E8F0] hover:border-[#96C4F0] shadow-2xs transition-all duration-200 space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#244974] bg-[#EBF4FC] px-2.5 py-0.5 rounded-full border border-[#96C4F0]/30 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-[#244974]" />
                      {item.highlight}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-[#1A375A] group-hover:text-[#244974] transition-colors">
                      {item.title}
                    </h4>
                    <div className="text-xs font-semibold text-[#244974] mt-0.5">
                      {item.subtitle}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#69707A] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-[#1A375A] flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#244974]" />
              Academic Foundation
            </h3>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#FAFCFE] border border-[#E2E8F0] shadow-sm space-y-6">
              
              {/* Institution and Degree */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-[#1A375A] bg-[#EBF4FC] px-2.5 py-0.5 rounded-md">
                  {EDUCATION.duration}
                </span>
                <h4 className="text-lg font-bold text-[#1A375A]">
                  {EDUCATION.degree}
                </h4>
                <div className="text-sm font-semibold text-[#244974]">
                  {EDUCATION.institution}, {EDUCATION.location}
                </div>
              </div>

              {/* CGPA Highlight Box */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-[#1A375A] to-[#244974] text-white flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#96C4F0] font-semibold">
                    Cumulative Grade Point Average
                  </div>
                  <div className="text-3xl font-extrabold text-white mt-0.5">
                    {EDUCATION.cgpa}
                  </div>
                </div>
                <div className="text-right text-xs text-slate-300">
                  <span className="inline-block px-2 py-1 rounded bg-white/10 text-white font-medium">
                    Top Academic Tier
                  </span>
                </div>
              </div>

              {/* Core Coursework */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#1A375A] flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#244974]" />
                  Core Coursework & Foundations
                </div>
                <div className="flex flex-wrap gap-2">
                  {EDUCATION.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-2.5 py-1 rounded-md bg-white border border-[#E2E8F0] text-xs font-medium text-[#262C34]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
