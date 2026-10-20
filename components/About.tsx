"use client";

import Image from "next/image";
import { PERSONAL_INFO, PORTFOLIO_CONFIG, CORE_STRENGTHS } from "@/data/portfolio-data";
import { MapPin, Mail, Building2, CheckCircle2, Sparkles, Layers, Cpu } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./Icons";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAFCFE] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF4FC] text-xs font-bold uppercase tracking-wider text-[#244974] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#244974]" />
            About & Core Strengths
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A375A] tracking-tight">
            Engineering Zero-to-One Products With Performance at the Core
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#69707A] leading-relaxed">
            Bridging technical depth with product intuition to ship dependable web and mobile applications.
          </p>
        </div>

        {/* Profile Card & Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Photo Card & Details (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Portrait Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm space-y-5">
              
              {/* Profile Image Container */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-gradient-to-br from-[#1A375A] to-[#244974] flex items-center justify-center border border-[#96C4F0]/30 group">
                <Image
                  src={PORTFOLIO_CONFIG.photoUrl}
                  alt={PERSONAL_INFO.name}
                  width={360}
                  height={360}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  priority
                />

                {/* Identity Badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#0F2238]/90 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10 text-center shadow-lg">
                  <div className="text-[11px] font-bold text-[#EBF4FC]">
                    Hardik Sawhney
                  </div>
                  <div className="text-[10px] text-[#96C4F0] font-medium">
                    Software Engineer II • GeekyAnts
                  </div>
                </div>
              </div>

              {/* Bio Meta Pills */}
              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-center justify-between py-2 border-b border-[#F1F5F9]">
                  <span className="text-[#69707A] flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#244974]" /> Current Role
                  </span>
                  <span className="font-semibold text-[#1A375A]">
                    SE II @ {PORTFOLIO_CONFIG.currentCompany}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-[#F1F5F9]">
                  <span className="text-[#69707A] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#244974]" /> Location
                  </span>
                  <span className="font-semibold text-[#1A375A]">
                    {PORTFOLIO_CONFIG.location}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-[#F1F5F9]">
                  <span className="text-[#69707A] flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#244974]" /> Email
                  </span>
                  <a
                    href={`mailto:${PORTFOLIO_CONFIG.email}`}
                    className="font-semibold text-[#244974] hover:underline"
                  >
                    {PORTFOLIO_CONFIG.email}
                  </a>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-[#F1F5F9]">
                  <span className="text-[#69707A] flex items-center gap-1.5">
                    <LinkedInIcon className="w-3.5 h-3.5 text-[#244974]" /> LinkedIn
                  </span>
                  <a
                    href={PORTFOLIO_CONFIG.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#244974] hover:underline"
                  >
                    /in/hardik--sawhney
                  </a>
                </div>

                <div className="flex items-center justify-between py-2">
                  <span className="text-[#69707A] flex items-center gap-1.5">
                    <GitHubIcon className="w-3.5 h-3.5 text-[#244974]" /> GitHub
                  </span>
                  <a
                    href={PORTFOLIO_CONFIG.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#244974] hover:underline"
                  >
                    /hardiksawhney1
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Quote / Philosophy Note */}
            <div className="p-5 rounded-2xl bg-[#EBF4FC]/60 border border-[#96C4F0]/40 text-xs text-[#262C34] leading-relaxed">
              <span className="font-bold text-[#1A375A] block mb-1">
                Engineering Ethos:
              </span>
              &ldquo;{PERSONAL_INFO.selfImage}&rdquo;
            </div>

          </div>

          {/* Right Column: Narrative & 7 Core Strengths (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Bio Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-[#1A375A]">
                Full-Stack Delivery With Frontend Depth
              </h3>
              <p className="text-sm sm:text-base text-[#262C34]/90 leading-relaxed">
                {PERSONAL_INFO.shortBio}
              </p>
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs sm:text-sm text-[#69707A] leading-relaxed">
                <span className="font-semibold text-[#1A375A]">Domain Breadth: </span>
                Delivered across <strong className="text-[#244974]">Fintech</strong>,{" "}
                <strong className="text-[#244974]">Hospitality</strong>,{" "}
                <strong className="text-[#244974]">Healthcare</strong>,{" "}
                <strong className="text-[#244974]">Logistics</strong>, and{" "}
                <strong className="text-[#244974]">Real Estate</strong>, balancing rapid sprint cadences with long-term code health.
              </div>
            </div>

            {/* Core Strengths Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#1A375A]">
                  Core Capabilities
                </h3>
                <span className="text-xs text-[#69707A]">
                  7 key pillars of execution
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CORE_STRENGTHS.map((strength) => (
                  <div
                    key={strength.title}
                    className="p-5 rounded-xl bg-white hover:bg-[#FAFCFE] border border-[#E2E8F0] hover:border-[#96C4F0] transition-all duration-200 shadow-2xs hover:shadow-xs space-y-2 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-[#244974] bg-[#EBF4FC] px-2.5 py-0.5 rounded-full border border-[#96C4F0]/30">
                        {strength.badge}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-[#96C4F0] group-hover:text-[#244974] transition-colors" />
                    </div>

                    <h4 className="text-sm font-bold text-[#1A375A] group-hover:text-[#244974] transition-colors">
                      {strength.title}
                    </h4>

                    <p className="text-xs text-[#69707A] leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
