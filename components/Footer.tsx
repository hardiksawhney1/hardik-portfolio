import Link from "next/link";
import { PERSONAL_INFO, PORTFOLIO_CONFIG } from "@/data/portfolio-data";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-[#0F2238] text-white border-t border-[#1A375A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1A375A] to-[#244974] flex items-center justify-center text-white font-bold text-base shadow-sm border border-white/10">
                <span className="text-[#96C4F0]">H</span>S
              </div>
              <div>
                <div className="text-base font-bold text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </div>
                <div className="text-xs text-[#96C4F0]">
                  {PERSONAL_INFO.title} • {PORTFOLIO_CONFIG.currentCompany}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              &ldquo;{PERSONAL_INFO.positioningLine}&rdquo;
            </p>

            <div className="text-xs text-slate-400">
              Bangalore, India • Available for high-impact technical roles
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#96C4F0]">
              Quick Navigation
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About & Core Strengths
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  GeekyAnts Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Case Studies & Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#how-i-work" className="hover:text-white transition-colors">
                  How I Work
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-white transition-colors">
                  Achievements & Education
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Hardik
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Documents (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#96C4F0]">
              Connect & Verify
            </div>
            
            <div className="space-y-2 text-xs text-slate-300">
              <div>
                <span className="text-slate-400 block text-[11px]">Direct Email:</span>
                <a
                  href={`mailto:${PORTFOLIO_CONFIG.email}`}
                  className="text-white hover:text-[#96C4F0] font-medium"
                >
                  {PORTFOLIO_CONFIG.email}
                </a>
              </div>

              <div>
                <span className="text-slate-400 block text-[11px] mb-0.5">LinkedIn:</span>
                <a
                  href={PORTFOLIO_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#96C4F0] font-medium flex items-center gap-1.5"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 text-[#96C4F0]" />
                  <span>linkedin.com/in/hardik--sawhney</span>
                </a>
              </div>

              <div>
                <span className="text-slate-400 block text-[11px] mb-0.5">GitHub:</span>
                <a
                  href={PORTFOLIO_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#96C4F0] font-medium flex items-center gap-1.5"
                >
                  <GitHubIcon className="w-3.5 h-3.5 text-[#96C4F0]" />
                  <span>github.com/hardiksawhney1</span>
                </a>
              </div>

              {PORTFOLIO_CONFIG.showPhoneNumber && (
                <div>
                  <span className="text-slate-400 block text-[11px]">Phone:</span>
                  <a
                    href={`tel:${PORTFOLIO_CONFIG.phone.replace(/\s+/g, "")}`}
                    className="text-white hover:text-[#96C4F0] font-medium"
                  >
                    {PORTFOLIO_CONFIG.phone}
                  </a>
                </div>
              )}
            </div>

            <div className="pt-2">
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all"
              >
                View Resume & Download PDF
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; 2026 Hardik Sawhney. All rights reserved.
          </div>

          <div className="flex items-center gap-1 text-[11px]">
            <span>Crafted with</span>
            <span className="text-[#96C4F0]">Next.js 16</span>
            <span>•</span>
            <span className="text-[#96C4F0]">TypeScript</span>
            <span>•</span>
            <span className="text-[#96C4F0]">Tailwind CSS</span>
          </div>

          <a
            href="#"
            className="flex items-center gap-1.5 text-xs text-[#96C4F0] hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </footer>
  );
}
