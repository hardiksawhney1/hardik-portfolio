import { EXPERIENCE_DATA } from "@/data/portfolio-data";
import { Briefcase, Calendar, MapPin, CheckCircle, Code2, Cpu, Sparkles } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white border-y border-[#E2E8F0] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF4FC] text-xs font-bold uppercase tracking-wider text-[#244974] mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#244974]" />
            Career Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A375A] tracking-tight">
            Professional Engineering Track Record
          </h2>
          <p className="mt-3 text-base text-[#69707A]">
            Continuous engineering ownership across high-scale distributed applications.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#96C4F0]/60 space-y-8">
          
          {/* Active Node Bullet */}
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#244974] ring-4 ring-[#EBF4FC] border-2 border-white"></div>

          <div className="bg-[#FAFCFE] rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-6">
            
            {/* Header / Role Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-[#EBF4FC] text-[11px] font-bold text-[#1A375A] mb-2">
                  Full-Time • Core Contributor
                </div>
                <h3 className="text-2xl font-bold text-[#1A375A]">
                  {EXPERIENCE_DATA.role}
                </h3>
                <div className="text-base font-semibold text-[#244974] mt-0.5">
                  {EXPERIENCE_DATA.company}
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-1.5 text-xs text-[#69707A]">
                <div className="flex items-center gap-1.5 font-medium text-[#1A375A]">
                  <Calendar className="w-3.5 h-3.5 text-[#244974]" />
                  {EXPERIENCE_DATA.duration}
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#244974]" />
                  {EXPERIENCE_DATA.location}
                </div>
              </div>
            </div>

            {/* Role Summary */}
            <p className="text-sm sm:text-base font-medium text-[#262C34]/90 leading-relaxed">
              {EXPERIENCE_DATA.summary}
            </p>

            {/* Impact Bullets */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1A375A]">
                Key Engineering Highlights
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                {EXPERIENCE_DATA.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#262C34]/90 leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-[#244974] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivered Across Badge Bar */}
            <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="font-semibold text-[#1A375A]">Delivered Domains:</span>
              <div className="flex flex-wrap gap-2">
                {["Fintech", "Hospitality", "Healthcare", "Logistics", "Real Estate"].map((domain) => (
                  <span
                    key={domain}
                    className="px-2.5 py-1 rounded-md bg-white border border-[#E2E8F0] font-medium text-[#244974]"
                  >
                    {domain}
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
