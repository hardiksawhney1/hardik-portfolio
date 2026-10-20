import { HEADLINE_NUMBERS } from "@/data/portfolio-data";
import { TrendingUp, Award, Zap, Shield, Clock, BarChart3 } from "lucide-react";

export default function StatStrip() {
  const icons = [
    <Clock key="1" className="w-5 h-5 text-[#96C4F0]" />,
    <Shield key="2" className="w-5 h-5 text-[#96C4F0]" />,
    <Zap key="3" className="w-5 h-5 text-[#96C4F0]" />,
    <TrendingUp key="4" className="w-5 h-5 text-[#96C4F0]" />,
    <BarChart3 key="5" className="w-5 h-5 text-[#96C4F0]" />,
    <Award key="6" className="w-5 h-5 text-[#96C4F0]" />,
  ];

  return (
    <section className="py-12 bg-white border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-6 flex items-center justify-between">
          <div className="text-xs font-bold uppercase tracking-widest text-[#244974]">
            Engineering Benchmarks & Measured Outcomes
          </div>
          <span className="text-xs text-[#69707A]">
            Verified production data
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {HEADLINE_NUMBERS.map((stat, idx) => (
            <div
              key={stat.label}
              className="group p-4 rounded-xl bg-[#FAFCFE] hover:bg-[#EBF4FC]/70 border border-[#E2E8F0] hover:border-[#96C4F0] transition-all duration-200 hover:-translate-y-1 shadow-2xs hover:shadow-xs"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="p-2 rounded-lg bg-[#EBF4FC] group-hover:bg-white text-[#244974] transition-colors">
                  {icons[idx]}
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#1A375A] tracking-tight group-hover:text-[#244974]">
                {stat.number}
              </div>
              <div className="text-xs font-semibold text-[#262C34] mt-1 line-clamp-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#69707A] mt-0.5 leading-snug">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
