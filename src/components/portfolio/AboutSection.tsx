import { profile } from "@/data/portfolio";
import { MapPin, Mail, Github, Linkedin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="neu-flat rounded-2xl p-8 md:p-12 bg-background">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-32 h-32 rounded-full neu-flat flex items-center justify-center bg-background">
              <span className="text-4xl font-bold text-primary font-mono">
                {profile.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {profile.name}
              </h1>
              <p className="text-primary font-mono text-lg mb-4">{profile.title}</p>
              <p className="text-foreground font-medium leading-relaxed mb-4">
                {profile.tagline}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">{profile.bio}</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <span className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin size={16} className="text-primary" /> {profile.location}
                </span>
                <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors">
                  <Mail size={16} className="text-primary" /> Email
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors">
                  <Github size={16} className="text-primary" /> GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors">
                  <Linkedin size={16} className="text-primary" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
