"use client";

import { useEffect } from "react";
import { ProjectItem } from "@/data/portfolio-data";
import { X, Calendar, UserCheck, Layers, CheckCircle2, Cpu, BarChart2, ShieldCheck, ArrowUpRight } from "lucide-react";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0F2238]/60 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div
        className="relative w-full max-w-3xl my-8 bg-white rounded-2xl shadow-2xl border border-[#244974]/20 overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Banner */}
        <div className="px-6 py-6 bg-gradient-to-r from-[#1A375A] to-[#244974] text-white">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1.5">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#96C4F0]/20 text-[#96C4F0] border border-[#96C4F0]/30 uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {project.domainTitle}
              </h3>
              <p className="text-xs text-[#96C4F0] font-medium flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                {project.period}
                <span className="text-white/40">•</span>
                <UserCheck className="w-3.5 h-3.5" />
                {project.role}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Key Metrics Banner */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#FAFCFE] border border-[#E2E8F0]">
                  <div className="text-xl font-extrabold text-[#1A375A]">{m.value}</div>
                  <div className="text-xs text-[#69707A] font-medium mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Scope & Role Highlight */}
          <div className="p-4 rounded-xl bg-[#EBF4FC]/60 border border-[#96C4F0]/40 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#244974] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-[#1A375A] uppercase tracking-wider">
                Delivery Scope & Ownership
              </div>
              <div className="text-xs sm:text-sm text-[#262C34]/90 font-medium mt-0.5">
                {project.ownership}
              </div>
            </div>
          </div>

          {/* Impact Bullets */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#1A375A] uppercase tracking-wider flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-[#244974]" />
              Engineering Deliverables & Impact
            </h4>
            <div className="space-y-2.5">
              {project.impactBullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#262C34]/90 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#244974] shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Highlights */}
          <div className="space-y-3 pt-2">
            <h4 className="text-sm font-bold text-[#1A375A] uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#244974]" />
              Architecture Decisions & Solutions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.architectureHighlights.map((arch, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#262C34] leading-relaxed">
                  <span className="font-semibold text-[#1A375A] block mb-1">
                    Pattern {idx + 1}
                  </span>
                  {arch}
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-2 pt-2 border-t border-[#E2E8F0]">
            <div className="text-xs font-bold text-[#1A375A] uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#244974]" /> Technology Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#EBF4FC] text-[#1A375A] border border-[#96C4F0]/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between">
          <span className="text-xs text-[#69707A]">
            Verified Engineering Implementation
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#1A375A] bg-white hover:bg-[#EBF4FC] border border-[#E2E8F0] rounded-lg transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
}
