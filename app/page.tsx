import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatStrip from "@/components/StatStrip";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import HowIWork from "@/components/HowIWork";
import AchievementsEducation from "@/components/AchievementsEducation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFE]">
      {/* Navigation Header */}
      <Header />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Stat Strip */}
        <StatStrip />

        {/* 3. About & Core Strengths */}
        <About />

        {/* 4. Experience (GeekyAnts) */}
        <Experience />

        {/* 5. Projects Showcase (Centerpiece) */}
        <Projects />

        {/* 6. Skills & Tooling */}
        <Skills />

        {/* 7. How I Work */}
        <HowIWork />

        {/* 8. Achievements & Education */}
        <AchievementsEducation />

        {/* 9. Contact & Inquiries */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
