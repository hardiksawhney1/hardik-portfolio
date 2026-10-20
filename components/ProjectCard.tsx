"use client";

import { ProjectItem } from "@/data/portfolio-data";
import ProjectMockup from "./ProjectMockup";
import { Calendar, UserCheck, CheckCircle2, ArrowRight, Layers, Sparkles } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  // Show first 3-4 bullets on card
  const previewBullets = project.impactBullets.slice(0, 4);

  return (
    <div className="group bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#96C4F0] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      
      {/* Top Media / Abstract Mockup Slot */}
      <div className="p-4 bg-[#FAFCFE] border-b border-[#E2E8F0] relative">
        <ProjectMockup type={project.abstractType} title={project.domainTitle} />

        {/* Category Pill */}
        <div className="absolute top-6 left-6 z-10">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#0F2238]/90 text-[#96C4F0] backdrop-blur-md border border-white/10 uppercase tracking-wider">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        
        <div className="space-y-3">
          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#69707A]">
            <span className="flex items-center gap-1 font-medium text-[#1A375A]">
              <Calendar className="w-3.5 h-3.5 text-[#244974]" />
              {project.period}
            </span>
            <span className="flex items-center gap-1 bg-[#EBF4FC] px-2 py-0.5 rounded text-[11px] font-semibold text-[#244974]">
              <UserCheck className="w-3 h-3 text-[#244974]" />
              {project.role}
            </span>
          </div>

          {/* Domain Title */}
          <h3 className="text-xl font-bold text-[#1A375A] group-hover:text-[#244974] transition-colors leading-snug">
            {project.domainTitle}
          </h3>

          {/* Impact Bullets */}
          <div className="space-y-2 pt-1">
            {previewBullets.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-[#262C34]/85 leading-relaxed">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#244974] shrink-0 mt-0.5" />
                <span className="line-clamp-2">{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Stack Chips & CTA Button */}
        <div className="space-y-4 pt-4 border-t border-[#E2E8F0] mt-4">
          
          {/* Stack Chips */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#FAFCFE] text-[#1A375A] border border-[#E2E8F0]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* View Details Button */}
          <button
            onClick={() => onSelect(project)}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-[#1A375A] bg-[#EBF4FC] hover:bg-[#244974] hover:text-white transition-all border border-[#96C4F0]/40 shadow-2xs group-hover:border-transparent cursor-pointer"
          >
            <span>View Full Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>

    </div>
  );
}
