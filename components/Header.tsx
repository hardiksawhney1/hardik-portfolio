"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PERSONAL_INFO, PORTFOLIO_CONFIG } from "@/data/portfolio-data";
import { Menu, X, FileDown, Mail } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "How I Work", href: "#how-i-work" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAFCFE]/90 backdrop-blur-md border-b border-[#244974]/10 shadow-xs"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Monogram */}
          <Link
            href="#"
            className="group flex items-center gap-3 focus:outline-hidden"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1A375A] to-[#244974] flex items-center justify-center text-white font-bold text-base shadow-sm group-hover:scale-105 transition-transform duration-200">
              <span className="text-[#96C4F0]">H</span>S
            </div>
            <div>
              <div className="text-base font-bold text-[#1A375A] tracking-tight group-hover:text-[#244974] transition-colors">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs font-medium text-[#69707A] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                SE II @ {PORTFOLIO_CONFIG.currentCompany}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[#262C34]/80 hover:text-[#244974] hover:bg-[#EBF4FC]/60 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#1A375A] bg-[#EBF4FC] hover:bg-[#D6E8FA] border border-[#96C4F0]/40 rounded-lg transition-all shadow-2xs hover:scale-102"
            >
              <FileDown className="w-3.5 h-3.5 text-[#244974]" />
              Resume
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#244974] hover:bg-[#1A375A] rounded-lg transition-all shadow-xs hover:shadow-sm hover:scale-102"
            >
              <Mail className="w-3.5 h-3.5 text-[#96C4F0]" />
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              href="/resume"
              aria-label="View Resume"
              className="p-2 text-xs font-medium text-[#1A375A] bg-[#EBF4FC] rounded-lg"
            >
              <FileDown className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#262C34] hover:text-[#244974] rounded-lg focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-b border-[#244974]/10 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-sm font-medium text-[#262C34] hover:text-[#244974] hover:bg-[#EBF4FC]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#E2E8F0] flex flex-col gap-2">
            <Link
              href="/resume"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#1A375A] bg-[#EBF4FC] rounded-lg"
            >
              <FileDown className="w-4 h-4 text-[#244974]" />
              View Resume
            </Link>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#244974] rounded-lg"
            >
              <Mail className="w-4 h-4 text-[#96C4F0]" />
              Contact Hardik
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
