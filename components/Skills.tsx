"use client";

import { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolio-data";
import { Code, Server, Database, Wrench, Search, CheckCircle, Sparkles } from "lucide-react";

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState("");

  const icons = [
    <Code key="fe" className="w-5 h-5 text-[#244974]" />,
    <Server key="be" className="w-5 h-5 text-[#244974]" />,
    <Database key="db" className="w-5 h-5 text-[#244974]" />,
    <Wrench key="tool" className="w-5 h-5 text-[#244974]" />,
  ];

  return (
    <section id="skills" className="py-20 bg-white border-y border-[#E2E8F0] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF4FC] text-xs font-bold uppercase tracking-wider text-[#244974] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#244974]" />
              Technical Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A375A] tracking-tight">
              Skills, Frameworks & Tooling
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#69707A]">
              Full-stack capable capabilities organized across frontend architecture, API services, cloud databases, and AI-accelerated workflows.
            </p>
          </div>

          {/* Search Input for Quick Verification */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#69707A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter skills (e.g. Next.js, Stripe)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#FAFCFE] border border-[#E2E8F0] rounded-xl text-xs text-[#262C34] focus:outline-hidden focus:border-[#244974] focus:bg-white transition-all shadow-2xs"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#69707A] hover:text-[#1A375A]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, catIdx) => {
            const visibleSkills = category.skills.filter((skill) =>
              skill.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (searchTerm && visibleSkills.length === 0) return null;

            return (
              <div
                key={category.title}
                className="p-6 sm:p-7 rounded-2xl bg-[#FAFCFE] border border-[#E2E8F0] hover:border-[#96C4F0] shadow-2xs transition-all duration-200 space-y-5"
              >
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#EBF4FC] border border-[#96C4F0]/40 shrink-0">
                    {icons[catIdx]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A375A]">
                      {category.title}
                    </h3>
                    <p className="text-xs text-[#69707A] mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Chips / Tag Cloud */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {visibleSkills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        skill.highlight
                          ? "bg-white text-[#1A375A] border-2 border-[#96C4F0]/60 shadow-2xs"
                          : "bg-white text-[#262C34]/80 border border-[#E2E8F0]"
                      }`}
                    >
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#244974]"></span>
                      )}
                      {skill.name}
                    </span>
                  ))}
                </div>

                {/* Legend indicator */}
                <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] text-[#69707A]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#244974]"></span>
                    Primary Strength / Daily Driver
                  </span>
                  <span>{visibleSkills.length} Technologies</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
