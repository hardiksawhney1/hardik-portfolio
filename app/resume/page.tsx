"use client";

import Link from "next/link";
import { ArrowLeft, Printer, Download, Sparkles } from "lucide-react";
import ResumeDocument from "@/components/ResumeDocument";
import { PORTFOLIO_CONFIG } from "@/data/portfolio-data";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9] py-6 sm:py-10 print:py-0 print:bg-white">

      {/* Top Floating Control Bar (Hidden when printing) */}
      <div className="no-print max-w-[850px] mx-auto px-4 mb-6">
        <div className="bg-white/90 backdrop-blur-md border border-[#E2E8F0] shadow-sm rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#1A375A] hover:text-[#244974] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#1A375A] bg-[#EBF4FC] hover:bg-[#D6E8FA] border border-[#96C4F0]/40 transition-all cursor-pointer shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5 text-[#244974]" />
              Print / Save PDF
            </button>

            <a
              href={PORTFOLIO_CONFIG.resumeUrl}
              download="Hardik_Sawhney_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#244974] hover:bg-[#1A375A] transition-all shadow-xs hover:shadow"
            >
              <Download className="w-3.5 h-3.5 text-[#96C4F0]" />
              Download PDF
            </a>
          </div>

        </div>
      </div>

      {/* Printable Resume Container */}
      <div className="px-2 sm:px-4 print:p-0">
        <ResumeDocument />
      </div>

    </div>
  );
}
