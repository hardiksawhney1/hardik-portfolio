"use client";

import { useState } from "react";
import Link from "next/link";
import { PERSONAL_INFO, PORTFOLIO_CONFIG } from "@/data/portfolio-data";
import { Mail, Phone, FileDown, Copy, Check, Send, Sparkles, ExternalLink, AlertCircle } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./Icons";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSent, setFormSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_CONFIG.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mailto fallback
    const mailtoUrl = `mailto:${PORTFOLIO_CONFIG.email}?subject=${encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAFCFE] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF4FC] text-xs font-bold uppercase tracking-wider text-[#244974] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#244974]" />
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A375A] tracking-tight">
            Let&apos;s Connect & Discuss High-Impact Work
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#69707A] leading-relaxed">
            Interested in frontend architecture zero-to-one, full-stack application development, or engineering leadership? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Cards */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E8F0] shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-[#1A375A]">
                Direct Communication Channels
              </h3>

              {/* Email Card with 1-click Copy */}
              <div className="p-4 rounded-xl bg-[#FAFCFE] border border-[#E2E8F0] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#69707A] flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#244974]" /> Direct Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#244974] hover:text-[#1A375A] bg-[#EBF4FC] px-2.5 py-1 rounded-md transition-colors cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" /> Copy
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PORTFOLIO_CONFIG.email}`}
                  className="text-sm sm:text-base font-bold text-[#1A375A] hover:text-[#244974] transition-colors block break-all"
                >
                  {PORTFOLIO_CONFIG.email}
                </a>
              </div>

              {/* LinkedIn Profile */}
              <div className="p-4 rounded-xl bg-[#FAFCFE] border border-[#E2E8F0] space-y-1">
                <div className="text-xs font-semibold text-[#69707A] flex items-center gap-1.5">
                  <LinkedInIcon className="w-3.5 h-3.5 text-[#244974]" /> Professional Network
                </div>
                <a
                  href={PORTFOLIO_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-[#1A375A] hover:text-[#244974] transition-colors flex items-center gap-1.5"
                >
                  <span>linkedin.com/in/hardik--sawhney</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* GitHub Link */}
              <div className="p-4 rounded-xl bg-[#FAFCFE] border border-[#E2E8F0] space-y-1">
                <div className="text-xs font-semibold text-[#69707A] flex items-center gap-1.5">
                  <GitHubIcon className="w-3.5 h-3.5 text-[#244974]" /> Code Repository
                </div>
                <a
                  href={PORTFOLIO_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-[#1A375A] hover:text-[#244974] transition-colors flex items-center gap-1.5"
                >
                  <span>github.com/hardiksawhney1</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Phone (Easy to remove / toggle via config) */}
              {PORTFOLIO_CONFIG.showPhoneNumber && (
                <div className="p-4 rounded-xl bg-[#FAFCFE] border border-[#E2E8F0] space-y-1">
                  <div className="text-xs font-semibold text-[#69707A] flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#244974]" /> Phone (Direct / WhatsApp)
                  </div>
                  <a
                    href={`tel:${PORTFOLIO_CONFIG.phone.replace(/\s+/g, "")}`}
                    className="text-sm font-bold text-[#1A375A] hover:text-[#244974] transition-colors block"
                  >
                    {PORTFOLIO_CONFIG.phone}
                  </a>
                </div>
              )}

              {/* Resume Link CTA */}
              <div className="pt-2">
                <Link
                  href="/resume"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#244974] hover:bg-[#1A375A] text-white text-xs font-semibold transition-all shadow-sm"
                >
                  <FileDown className="w-4 h-4 text-[#96C4F0]" />
                  View Resume & Download PDF
                </Link>
              </div>

            </div>

          </div>

          {/* Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#1A375A]">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-[#69707A] mt-1">
                  Submitting will draft an email directly to{" "}
                  <span className="text-[#244974] font-semibold">{PORTFOLIO_CONFIG.email}</span>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#1A375A]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FAFCFE] border border-[#E2E8F0] rounded-xl text-xs text-[#262C34] focus:outline-hidden focus:border-[#244974] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#1A375A]">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FAFCFE] border border-[#E2E8F0] rounded-xl text-xs text-[#262C34] focus:outline-hidden focus:border-[#244974] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#1A375A]">
                    Subject / Discussion Topic
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Frontend Engineering Opportunity / Contract"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAFCFE] border border-[#E2E8F0] rounded-xl text-xs text-[#262C34] focus:outline-hidden focus:border-[#244974] focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#1A375A]">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide context regarding the project, timeline, or engineering role..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAFCFE] border border-[#E2E8F0] rounded-xl text-xs text-[#262C34] focus:outline-hidden focus:border-[#244974] focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#244974] hover:bg-[#1A375A] text-white text-xs font-bold transition-all shadow-sm hover:shadow cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#96C4F0]" />
                  <span>Send Message (Draft via Email)</span>
                </button>
              </form>

              {formSent && (
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  Email client opened with your message. Thank you for connecting!
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
