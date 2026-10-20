import React from "react";
import {
  PERSONAL_INFO,
  PORTFOLIO_CONFIG,
  EDUCATION,
  EXPERIENCE_DATA,
  EXPERIENCE_LABELED_BULLETS,
  RESUME_CONTRIBUTIONS,
  ACHIEVEMENTS,
  SKILL_CATEGORIES,
} from "@/data/portfolio-data";

export default function ResumeDocument() {
  return (
    <div className="print-page w-full max-w-[850px] mx-auto bg-white shadow-2xl rounded-sm overflow-hidden text-[#262C34] flex flex-col md:flex-row border border-[#E2E8F0]">
      
      {/* ================= LEFT SIDEBAR (NAVY) ================= */}
      <aside className="w-full md:w-[36%] bg-[#1A375A] text-white p-6 sm:p-7 flex flex-col justify-between shrink-0 space-y-6">
        
        {/* Name & Contact Info */}
        <div className="space-y-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-wider leading-none text-white">
              HARDIK
            </h1>
            <h1 className="text-3xl font-extrabold tracking-wider leading-none text-white mt-1">
              SAWHNEY
            </h1>
          </div>

          {/* Contact Details */}
          <div className="space-y-2 text-[11px] pt-1">
            {PORTFOLIO_CONFIG.showPhoneNumber && (
              <div>
                <div className="text-[10px] font-bold text-[#96C4F0] uppercase tracking-wider">
                  PHONE
                </div>
                <a
                  href={`tel:${PORTFOLIO_CONFIG.phone.replace(/\s+/g, "")}`}
                  className="hover:text-[#96C4F0] transition-colors"
                >
                  {PORTFOLIO_CONFIG.phone}
                </a>
              </div>
            )}

            <div>
              <div className="text-[10px] font-bold text-[#96C4F0] uppercase tracking-wider">
                EMAIL
              </div>
              <a
                href={`mailto:${PORTFOLIO_CONFIG.email}`}
                className="hover:text-[#96C4F0] transition-colors break-all"
              >
                {PORTFOLIO_CONFIG.email}
              </a>
            </div>

            <div>
              <div className="text-[10px] font-bold text-[#96C4F0] uppercase tracking-wider">
                LINKEDIN
              </div>
              <a
                href={PORTFOLIO_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#96C4F0] transition-colors break-all"
              >
                linkedin.com/in/hardik--sawhney
              </a>
            </div>

            <div>
              <div className="text-[10px] font-bold text-[#96C4F0] uppercase tracking-wider">
                GITHUB
              </div>
              <a
                href={PORTFOLIO_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#96C4F0] transition-colors break-all"
              >
                github.com/hardiksawhney1
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-1.5 pt-2 border-t border-white/15">
            <h2 className="text-[11px] font-bold text-[#96C4F0] uppercase tracking-widest">
              SUMMARY
            </h2>
            <p className="text-[11px] text-slate-200 leading-relaxed">
              Software Engineer with 2+ years of experience building high-performance Web and Mobile products; owned frontend architecture zero-to-one using React, Next.js, React Native and TypeScript, backed by Node/Nest.js APIs. Focused on Core Web Vitals, AI-assisted workflows and zero-defect releases.
            </p>
          </div>

          {/* Skills (Unified from SKILL_CATEGORIES) */}
          <div className="space-y-3 pt-2 border-t border-white/15">
            <h2 className="text-[11px] font-bold text-[#96C4F0] uppercase tracking-widest">
              SKILLS
            </h2>

            {SKILL_CATEGORIES.map((group) => (
              <div key={group.title} className="space-y-1.5">
                <div className="text-[10px] font-semibold text-slate-300">
                  {group.title}
                </div>
                <div className="flex flex-wrap gap-1">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-white/10 text-white border border-white/15 leading-none"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-1.5 pt-2 border-t border-white/15 text-[11px]">
            <h2 className="text-[11px] font-bold text-[#96C4F0] uppercase tracking-widest">
              EDUCATION
            </h2>
            <div className="font-bold text-white leading-tight">
              {EDUCATION.degree}
            </div>
            <div className="text-slate-200">
              {EDUCATION.institution}, {EDUCATION.location.split(",")[0]}
            </div>
            <div className="text-[10px] text-slate-300">
              {EDUCATION.duration}
            </div>
            <div className="text-[11px] font-bold text-[#96C4F0] pt-0.5">
              CGPA: {EDUCATION.cgpa}
            </div>
            <div className="text-[10px] text-slate-300 leading-snug">
              Coursework: {EDUCATION.coursework.join(", ")}
            </div>
          </div>
        </div>

      </aside>

      {/* ================= RIGHT MAIN SECTION (WHITE) ================= */}
      <main className="flex-1 bg-white p-6 sm:p-7 space-y-5">
        
        {/* Section 1: Professional Experience */}
        <section className="space-y-2">
          <h2 className="text-xs font-black tracking-[0.2em] uppercase text-[#1A375A] border-b-2 border-[#1A375A] pb-1">
            PROFESSIONAL EXPERIENCE
          </h2>

          <div className="pt-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-[#1A375A]">
                {EXPERIENCE_DATA.role}
              </span>
              <span className="text-[11px] font-semibold text-[#69707A]">
                {EXPERIENCE_DATA.duration}
              </span>
            </div>
            <div className="text-xs font-bold text-[#244974]">
              {EXPERIENCE_DATA.company}
            </div>

            <ul className="mt-2 space-y-1.5 text-[11px] text-[#262C34]/90 leading-relaxed">
              {EXPERIENCE_LABELED_BULLETS.map((b) => (
                <li key={b.label} className="flex items-start gap-2">
                  <span className="text-[#1A375A] font-bold">▪</span>
                  <span>
                    <strong className="text-[#1A375A]">{b.label}:</strong> {b.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 2: Key Engineering Contributions */}
        <section className="space-y-3">
          <h2 className="text-xs font-black tracking-[0.2em] uppercase text-[#1A375A] border-b-2 border-[#1A375A] pb-1">
            KEY ENGINEERING CONTRIBUTIONS
          </h2>

          {RESUME_CONTRIBUTIONS.map((proj) => (
            <div key={proj.title} className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <span className="text-xs font-bold text-[#1A375A]">
                    {proj.title}
                  </span>
                  <span className="text-[11px] text-[#69707A] italic ml-1">
                    | {proj.role}
                  </span>
                </div>
                <span className="text-[10px] font-medium text-[#69707A]">
                  {proj.stack}
                </span>
              </div>
              <ul className="space-y-1 text-[11px] text-[#262C34]/90 leading-relaxed">
                {proj.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#1A375A] font-bold">▪</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Section 3: Achievements */}
        <section className="space-y-2 pt-1">
          <h2 className="text-xs font-black tracking-[0.2em] uppercase text-[#1A375A] border-b-2 border-[#1A375A] pb-1">
            ACHIEVEMENTS
          </h2>
          <ul className="space-y-1.5 text-[11px] text-[#262C34]/90 leading-relaxed pt-0.5">
            {ACHIEVEMENTS.map((item) => (
              <li key={item.title} className="flex items-start gap-2">
                <span className="text-[#1A375A] font-bold">▪</span>
                <span>
                  <strong className="text-[#1A375A]">{item.title}:</strong> {item.description}
                </span>
              </li>
            ))}
          </ul>
        </section>

      </main>

    </div>
  );
}
