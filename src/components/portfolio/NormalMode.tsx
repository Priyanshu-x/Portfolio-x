import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import ContactSection from "./ContactSection";

const NormalMode = () => {
  return (
    <div className="pt-20 pb-10 animate-fade-slide-up">
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <footer className="text-center py-8">
        <p className="text-sm text-muted-foreground font-mono">
          © 2025 Priyanshu Kushwaha — Built with React & TypeScript
        </p>
      </footer>
    </div>
  );
};

export default NormalMode;
