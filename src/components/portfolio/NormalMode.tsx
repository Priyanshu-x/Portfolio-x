import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import ContactSection from "./ContactSection";

const NormalMode = () => {
  return (
    <div className="animate-fade-slide-up relative z-10">
      <AboutSection />
      
      {/* A subtle grid background for the sections below hero to give it a cyber feel */}
      <div className="relative z-20 bg-background/95">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
        
        <footer className="relative z-10 text-center py-8 border-t border-border/30 mt-10">
          <p className="text-sm text-muted-foreground font-mono">
            © 2026 Priyanshu Kushwaha — Built with <span className="text-primary animate-pulse">⚡</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default NormalMode;
