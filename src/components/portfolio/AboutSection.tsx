import React, { useState, useEffect } from "react";
import { profile } from "@/data/portfolio";
import { MapPin, Mail, Github, Linkedin, TerminalSquare } from "lucide-react";
import HangingBulbsCanvas from "./HangingBulbsCanvas";

const AboutSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check screen size
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Check motion preferences
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);
    
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      window.removeEventListener("resize", checkMobile);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <section id="about" className="relative flex flex-col h-[200vh] overflow-hidden">
      
      {/* Sticky Canvas Container */}
      <div className="w-full sticky top-0 h-[100vh] z-[1]">
        <HangingBulbsCanvas />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
      </div>

      {/* Intro Card - Sits in normal flow, scrolls over the canvas */}
      <div 
        className="relative z-[2] w-full pt-12 flex-1 flex flex-col"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, #0a0a0a 60px, #0a0a0a 100%)',
          borderTop: '1px solid rgba(0, 243, 255, 0.15)'
        }}
      >
        {/* Optimized Video Background for Intro Card */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          
          {prefersReducedMotion ? (
            <img
              src="/jellyfish-poster.jpg"
              alt="Jellyfish background"
              className="absolute top-0 right-0 w-full md:w-[50%] lg:w-[40%] h-full object-cover opacity-40 mix-blend-screen"
              style={{ 
                maskImage: 'linear-gradient(to right, transparent, black 40%)',
                WebkitMaskImage: '-webkit-linear-gradient(left, transparent, black 40%)'
              }}
            />
          ) : (
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              preload="metadata"
              poster="/jellyfish-poster.jpg"
              // @ts-ignore
              loading="lazy"
              className="absolute top-0 right-0 w-full md:w-[50%] lg:w-[40%] h-full object-cover mix-blend-screen"
              style={{ 
                maskImage: 'linear-gradient(to right, transparent, black 40%)',
                WebkitMaskImage: '-webkit-linear-gradient(left, transparent, black 40%)'
              }}
            >
              <source src={isMobile ? "/jellyfish-mobile.webm" : "/jellyfish-desktop.webm"} type="video/webm" />
              <source src="/jelly.mp4" type="video/mp4" />
            </video>
          )}

          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-red-950/20 to-black/80 backdrop-blur-[2px]" />
        </div>

        {/* Text Block Content */}
        <div className="max-w-5xl mx-auto px-6 relative z-20 w-full flex-1 flex flex-col justify-center">
          <div className="backdrop-blur-md bg-black/40 border border-white/5 hover:border-primary/20 transition-colors duration-500 rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
            <div className="flex flex-col gap-6 text-center md:text-left relative z-10">
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
              
              <div className="flex flex-wrap gap-6 justify-center md:justify-start mt-4 pt-6 border-t border-white/10">
                <span className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
                  <MapPin size={18} className="text-primary" /> {profile.location}
                </span>
                <a href={`mailto:${profile.email}`} className="group flex items-center gap-2 text-muted-foreground font-mono text-sm hover:text-primary transition-all">
                  <Mail size={18} className="text-primary group-hover:shadow-[0_0_10px_rgba(0,243,255,0.5)] rounded-full transition-all" /> Email Me
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-muted-foreground font-mono text-sm hover:text-primary transition-all">
                  <Github size={18} className="text-primary group-hover:shadow-[0_0_10px_rgba(0,243,255,0.5)] rounded-full transition-all" /> GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-muted-foreground font-mono text-sm hover:text-primary transition-all">
                  <Linkedin size={18} className="text-primary group-hover:shadow-[0_0_10px_rgba(0,243,255,0.5)] rounded-full transition-all" /> LinkedIn
                </a>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-4">
                <a href="#projects" className="px-6 py-2.5 rounded bg-primary/10 text-primary border border-primary/30 font-mono text-sm hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(0,243,255,0.4)] transition-all flex items-center gap-2">
                  View Projects <span className="font-sans">→</span>
                </a>
                <a href="/resume.pdf" download className="px-6 py-2.5 rounded bg-white/5 text-foreground border border-white/10 font-mono text-sm hover:bg-white/10 transition-all flex items-center gap-2">
                  Download Resume <span className="font-sans">↓</span>
                </a>
              </div>
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
