import { profile } from "@/data/portfolio";
import { MapPin, Mail, Github, Linkedin, TerminalSquare } from "lucide-react";
import HangingBulbsCanvas from "./HangingBulbsCanvas";

const AboutSection = () => {
  return (
    <section id="about" className="relative flex flex-col pt-16 pb-16 min-h-[100vh]">
      
      {/* Fixed Height Canvas Container */}
      <div className="w-full relative overflow-hidden" style={{ height: '58vh' }}>
        <HangingBulbsCanvas />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
      </div>

      {/* Text Block Below Canvas */}
      <div className="max-w-5xl mx-auto px-6 relative z-20 w-full pt-8 flex-1 flex flex-col justify-center">
        <div className="backdrop-blur-md bg-black/40 border border-border/50 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight drop-shadow-lg">
              {profile.name}
            </h1>
            
            <div className="flex items-center justify-center md:justify-start gap-3 text-primary font-mono text-lg md:text-xl font-semibold">
              <TerminalSquare size={24} className="animate-pulse" />
              <span className="typewriter-effect">{profile.title}</span>
            </div>
            
            <p className="text-foreground/90 font-medium leading-relaxed text-lg max-w-3xl">
              {profile.tagline}
            </p>
            
            <p className="text-muted-foreground leading-relaxed max-w-4xl text-base md:text-lg">
              {profile.bio}
            </p>
            
            <div className="flex flex-wrap gap-6 justify-center md:justify-start mt-4 pt-6 border-t border-border/30">
              <span className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
                <MapPin size={18} className="text-primary" /> {profile.location}
              </span>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-muted-foreground font-mono text-sm hover:text-primary transition-all hover:scale-105">
                <Mail size={18} className="text-primary" /> Email Me
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground font-mono text-sm hover:text-primary transition-all hover:scale-105">
                <Github size={18} className="text-primary" /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground font-mono text-sm hover:text-primary transition-all hover:scale-105">
                <Linkedin size={18} className="text-primary" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Typewriter CSS inline for simplicity */}
      <style>{`
        .typewriter-effect {
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid hsl(var(--primary));
          animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: hsl(var(--primary)); }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
