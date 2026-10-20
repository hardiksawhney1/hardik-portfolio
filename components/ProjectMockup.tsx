"use client";

import { ProjectItem } from "@/data/portfolio-data";
import { BarChart3, Calendar, Layers, MapPin, Calculator, ShieldCheck, Activity, Search, RefreshCw, MessageSquare } from "lucide-react";

interface ProjectMockupProps {
  type: ProjectItem["abstractType"];
  title: string;
}

export default function ProjectMockup({ type, title }: ProjectMockupProps) {
  if (type === "analytics") {
    return (
      <div className="w-full h-48 sm:h-52 rounded-xl bg-[#0F2238] p-4 text-white flex flex-col justify-between border border-[#96C4F0]/20 font-mono text-[11px] relative overflow-hidden select-none">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#96C4F0]/10 rounded-full blur-2xl pointer-events-none"></div>

        {/* Top Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-[#96C4F0] font-sans font-semibold">Snowflake / OpenSearch Ingestion</span>
          </div>
          <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] text-slate-300">Live 60fps</span>
        </div>

        {/* Visual Heatmap / Chart Representation */}
        <div className="grid grid-cols-6 gap-1.5 my-2">
          <div className="h-16 bg-[#244974]/80 rounded flex items-end p-1">
            <div className="w-full bg-[#96C4F0] rounded-xs h-3/5"></div>
          </div>
          <div className="h-16 bg-[#244974]/80 rounded flex items-end p-1">
            <div className="w-full bg-[#96C4F0] rounded-xs h-4/5"></div>
          </div>
          <div className="h-16 bg-[#244974]/80 rounded flex items-end p-1">
            <div className="w-full bg-[#96C4F0] rounded-xs h-2/5"></div>
          </div>
          <div className="h-16 bg-[#244974]/80 rounded flex items-end p-1">
            <div className="w-full bg-emerald-400 rounded-xs h-full"></div>
          </div>
          <div className="h-16 bg-[#244974]/80 rounded flex items-end p-1">
            <div className="w-full bg-[#96C4F0] rounded-xs h-4/6"></div>
          </div>
          <div className="h-16 bg-[#244974]/80 rounded flex items-end p-1">
            <div className="w-full bg-[#96C4F0] rounded-xs h-5/6"></div>
          </div>
        </div>

        {/* Status Bottom */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10 font-sans text-[10px] text-slate-300">
          <span className="flex items-center gap-1 text-emerald-300">
            <Activity className="w-3 h-3" /> Dashboard Load: -40%
          </span>
          <span className="text-[#96C4F0]">Stripe Subscriptions Active</span>
        </div>
      </div>
    );
  }

  if (type === "booking") {
    return (
      <div className="w-full h-48 sm:h-52 rounded-xl bg-[#1A375A] p-4 text-white flex flex-col justify-between border border-[#96C4F0]/20 text-[11px] select-none relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="text-[#96C4F0] font-semibold flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" /> Dynamic Booking Engine
          </span>
          <span className="bg-[#244974] px-2 py-0.5 rounded text-[10px] text-emerald-300">
            Finix Locked
          </span>
        </div>

        {/* Room Availability Matrix */}
        <div className="bg-[#0F2238]/60 p-2.5 rounded-lg border border-white/5 space-y-1.5">
          <div className="flex justify-between text-[10px] text-slate-400">
            <span>HotelBeds API Orchestration</span>
            <span className="text-emerald-400">Verified</span>
          </div>
          <div className="grid grid-cols-4 gap-1.5 text-center">
            <div className="bg-[#244974] py-1.5 rounded text-[10px]">Deluxe Suite</div>
            <div className="bg-[#244974] py-1.5 rounded text-[10px]">Exec Room</div>
            <div className="bg-emerald-600/80 py-1.5 rounded text-[10px]">Available</div>
            <div className="bg-[#244974] py-1.5 rounded text-[10px]">Auto-Lock</div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-slate-300">
          <span className="flex items-center gap-1 text-[#96C4F0]">
            <MapPin className="w-3 h-3" /> Google Maps Discovery
          </span>
          <span className="text-slate-400">Bug share ~10–15%</span>
        </div>
      </div>
    );
  }

  if (type === "healthcare") {
    return (
      <div className="w-full h-48 sm:h-52 rounded-xl bg-[#0F2238] p-4 text-white flex flex-col justify-between border border-[#96C4F0]/20 text-[11px] select-none relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="text-[#96C4F0] font-semibold flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" /> Turborepo Monorepo
          </span>
          <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px]">
            Zero Regressions
          </span>
        </div>

        {/* Monorepo package architecture */}
        <div className="space-y-1.5 my-1">
          <div className="flex items-center justify-between bg-white/5 px-2.5 py-1.5 rounded border border-white/5 text-[10px]">
            <span className="font-mono text-purple-300">@platform/ui-shadcn</span>
            <span className="text-[#96C4F0]">Modernized Primitives</span>
          </div>
          <div className="flex items-center justify-between bg-white/5 px-2.5 py-1.5 rounded border border-white/5 text-[10px]">
            <span className="font-mono text-amber-300">@platform/graphql-hasura</span>
            <span className="text-slate-300">Typed Queries</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-slate-300">
          <span className="text-[#96C4F0]">Accelerated 3+ internal teams</span>
          <span className="text-emerald-400">SE II Mentorship</span>
        </div>
      </div>
    );
  }

  if (type === "marketplace") {
    return (
      <div className="w-full h-48 sm:h-52 rounded-xl bg-[#1A375A] p-4 text-white flex flex-col justify-between border border-[#96C4F0]/20 text-[11px] select-none relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <span className="text-[#96C4F0] font-semibold flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5" /> Web & Mobile (Expo)
          </span>
          <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px] font-bold">
            99.9% Uptime
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 my-1">
          <div className="bg-[#0F2238] p-2 rounded-lg border border-white/5 space-y-1">
            <div className="text-[10px] text-slate-400 flex items-center gap-1">
              <RefreshCw className="w-3 h-3 text-[#96C4F0]" /> Live Auction
            </div>
            <div className="text-xs font-bold text-white">WebSocket Stream</div>
          </div>
          <div className="bg-[#0F2238] p-2 rounded-lg border border-white/5 space-y-1">
            <div className="text-[10px] text-slate-400 flex items-center gap-1">
              <MessageSquare className="w-3 h-3 text-[#96C4F0]" /> Chat Delivery
            </div>
            <div className="text-xs font-bold text-emerald-300">Read Receipts</div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-slate-300">
          <span>Stripe SDK + In-App Web</span>
          <span className="text-[#96C4F0]">Deep-Linking Validated</span>
        </div>
      </div>
    );
  }

  // Fintech
  return (
    <div className="w-full h-48 sm:h-52 rounded-xl bg-[#0F2238] p-4 text-white flex flex-col justify-between border border-[#96C4F0]/20 text-[11px] select-none relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <span className="text-[#96C4F0] font-semibold flex items-center gap-1.5">
          <Calculator className="w-3.5 h-3.5" /> EMI Calculator & Onboarding
        </span>
        <span className="bg-[#244974] text-[#96C4F0] px-2 py-0.5 rounded text-[10px]">
          Web + Expo-Web
        </span>
      </div>

      <div className="bg-white/5 p-2.5 rounded-lg border border-white/5 space-y-2">
        <div className="flex justify-between text-[10px]">
          <span className="text-slate-300">Loan Onboarding Progress</span>
          <span className="text-emerald-400 font-bold">Step 3 of 4</span>
        </div>
        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
          <div className="bg-[#96C4F0] h-full w-3/4 rounded-full"></div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-slate-300">
        <span className="text-emerald-300 font-semibold">100% State Persistence</span>
        <span className="text-[#96C4F0]">Multi-Persona Workflows</span>
      </div>
    </div>
  );
}
