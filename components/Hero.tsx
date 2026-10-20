"use client";

import Link from "next/link";
import { PERSONAL_INFO, PORTFOLIO_CONFIG } from "@/data/portfolio-data";
import { ArrowRight, FileDown, Mail, MapPin, Sparkles, Code2, Layers, Cpu, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Top subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF4FC] border border-[#96C4F0]/50 text-xs font-semibold text-[#1A375A] shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Software Engineer II @ {PORTFOLIO_CONFIG.currentCompany}</span>
              <span className="text-[#96C4F0]">•</span>
              <span className="flex items-center gap-1 text-[#69707A]">
                <MapPin className="w-3 h-3 text-[#244974]" /> {PORTFOLIO_CONFIG.location}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1A375A] tracking-tight leading-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-[#244974]">
                {PERSONAL_INFO.title}{" "}
                <span className="text-sm sm:text-base font-normal text-[#69707A]">
                  (Frontend / Full-Stack: React, Next.js, React Native)
                </span>
              </p>
            </div>

            {/* Positioning line */}
            <p className="text-base sm:text-lg text-[#262C34]/90 font-medium leading-relaxed max-w-2xl">
              &ldquo;{PERSONAL_INFO.positioningLine}&rdquo;
            </p>

            {/* Hero Introduction */}
            <p className="text-sm sm:text-base text-[#69707A] leading-relaxed max-w-2xl">
              {PERSONAL_INFO.heroIntro}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#244974] hover:bg-[#1A375A] text-white text-sm font-semibold transition-all shadow-sm hover:shadow hover:scale-102"
              >
                Explore Case Studies
                <ArrowRight className="w-4 h-4 text-[#96C4F0]" />
              </a>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#EBF4FC] hover:bg-[#D6E8FA] text-[#1A375A] text-sm font-semibold border border-[#96C4F0]/60 transition-all shadow-2xs hover:scale-102"
              >
                <FileDown className="w-4 h-4 text-[#244974]" />
                View Resume & PDF
              </Link>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-[#F8FAFC] text-[#262C34] text-sm font-semibold border border-[#E2E8F0] transition-all hover:border-[#96C4F0]"
              >
                <Mail className="w-4 h-4 text-[#69707A]" />
                Get in Touch
              </a>
            </div>

            {/* Key Quality Markers */}
            <div className="pt-4 border-t border-[#E2E8F0] grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-xs font-medium text-[#262C34]">
                <CheckCircle2 className="w-4 h-4 text-[#244974] shrink-0" />
                <span>Zero-to-One Architecture</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#262C34]">
                <CheckCircle2 className="w-4 h-4 text-[#244974] shrink-0" />
                <span>~95% First-Time PR Approval</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#262C34]">
                <CheckCircle2 className="w-4 h-4 text-[#244974] shrink-0" />
                <span>Geekathon AI Winner</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code & Architecture Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative gradient border */}
              <div className="relative rounded-2xl bg-gradient-to-br from-[#1A375A] via-[#244974] to-[#0F2238] p-1 shadow-xl">
                
                {/* Code Window Container */}
                <div className="rounded-[14px] bg-[#0F2238] text-white p-5 space-y-4 font-mono text-xs overflow-hidden">
                  
                  {/* Window Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#EF4444]/80"></div>
                      <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80"></div>
                      <div className="w-3 h-3 rounded-full bg-[#10B981]/80"></div>
                      <span className="ml-2 text-[11px] text-[#96C4F0] font-sans">
                        hardik-architecture.ts
                      </span>
                    </div>
                    <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-[#96C4F0] font-sans">
                      Next.js 16 • React 19
                    </span>
                  </div>

                  {/* Code Snippet */}
                  <div className="space-y-1 text-[11px] leading-relaxed select-none">
                    <div className="text-[#96C4F0]">
                      <span className="text-white/40">01</span>{" "}
                      <span className="text-purple-300">interface</span>{" "}
                      <span className="text-amber-200">EngineerProfile</span> &#123;
                    </div>
                    <div className="pl-4 text-slate-300">
                      <span className="text-white/40">02</span> name:{" "}
                      <span className="text-emerald-300">&quot;Hardik Sawhney&quot;</span>;
                    </div>
                    <div className="pl-4 text-slate-300">
                      <span className="text-white/40">03</span> role:{" "}
                      <span className="text-emerald-300">&quot;Software Engineer II&quot;</span>;
                    </div>
                    <div className="pl-4 text-slate-300">
                      <span className="text-white/40">04</span> company:{" "}
                      <span className="text-emerald-300">&quot;GeekyAnts&quot;</span>;
                    </div>
                    <div className="pl-4 text-slate-300">
                      <span className="text-white/40">05</span> stack: [
                      <span className="text-emerald-300">&quot;Next.js&quot;</span>,{" "}
                      <span className="text-emerald-300">&quot;React Native&quot;</span>,{" "}
                      <span className="text-emerald-300">&quot;TypeScript&quot;</span>];
                    </div>
                    <div className="pl-4 text-slate-300">
                      <span className="text-white/40">06</span> performanceFocus:{" "}
                      <span className="text-amber-300">true</span>;
                    </div>
                    <div className="pl-4 text-slate-300">
                      <span className="text-white/40">07</span> aiAssistedSDLC:{" "}
                      <span className="text-amber-300">true</span>;
                    </div>
                    <div className="pl-4 text-slate-300">
                      <span className="text-white/40">08</span> prApprovalRate:{" "}
                      <span className="text-cyan-300">0.95</span>;
                    </div>
                    <div className="text-[#96C4F0]">
                      <span className="text-white/40">09</span> &#125;
                    </div>
                  </div>

                  {/* Visual Architecture Feature Box */}
                  <div className="mt-4 pt-3 border-t border-white/10 space-y-2">
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-sans">
                      Core Delivery Benchmarks
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-center font-sans">
                      <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                        <div className="text-base font-bold text-[#96C4F0]">40%</div>
                        <div className="text-[10px] text-slate-300">Dashboard Speedup</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2 border border-white/5">
                        <div className="text-base font-bold text-emerald-400">99.9%</div>
                        <div className="text-[10px] text-slate-300">Production Uptime</div>
                      </div>
                    </div>
                  </div>

                  {/* Terminal Status bar */}
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-sans pt-1">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      SSR / Edge Ready
                    </span>
                    <span className="text-[#96C4F0]">Bangalore, IN</span>
                  </div>

                </div>
              </div>

              {/* Floating Pill Accent 1 */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg border border-[#96C4F0]/40 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#EBF4FC] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#244974]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1A375A]">Geekathon Winner</div>
                  <div className="text-[10px] text-[#69707A]">AI Estimation Engine</div>
                </div>
              </div>

              {/* Floating Pill Accent 2 */}
              <div className="absolute -top-3 -right-3 bg-white rounded-xl p-3 shadow-lg border border-[#96C4F0]/40 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#EBF4FC] flex items-center justify-center">
                  <Layers className="w-4 h-4 text-[#244974]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1A375A]">5+ Products</div>
                  <div className="text-[10px] text-[#69707A]">5 Industries Shipped</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
