"use client";

import { useState } from "react";
import { PROJECTS, ProjectItem } from "@/data/portfolio-data";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Sparkles, Filter, Code2, Layers } from "lucide-react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = [
    "All",
    "Next.js",
    "Enterprise / Analytics",
    "Mobile & Web",
    "Workflow / Modernization",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#FAFCFE] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF4FC] text-xs font-bold uppercase tracking-wider text-[#244974] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#244974]" />
              Featured Engineering Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A375A] tracking-tight">
              Production Case Studies & Platforms
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#69707A] leading-relaxed">
              Domain-focused case studies detailing frontend architecture zero-to-one, performance optimizations, complex integrations, and measurable business outcomes.
            </p>
          </div>

          {/* Neutral framing badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#E2E8F0] text-xs text-[#262C34] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#244974]"></span>
            <span>Domain-classified architectures • 5+ Products</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#E2E8F0]">
          <span className="text-xs font-semibold text-[#69707A] flex items-center gap-1.5 mr-2">
            <Filter className="w-3.5 h-3.5 text-[#244974]" /> Filter by Domain:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#244974] text-white shadow-xs"
                  : "bg-white text-[#69707A] hover:text-[#1A375A] hover:bg-[#EBF4FC] border border-[#E2E8F0]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid (Most recent first) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(proj) => setActiveProject(proj)}
            />
          ))}
        </div>

        {/* Interactive Case Study Modal */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />

      </div>
    </section>
  );
}
