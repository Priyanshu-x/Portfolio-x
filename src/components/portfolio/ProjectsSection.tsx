import { useState, useRef, useEffect } from "react";
import { projects } from "@/data/portfolio";
import { FolderGit2, ArrowUpRight } from "lucide-react";

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      id="projects" 
      className="py-24 relative border-t border-white/5" 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="mb-16 flex flex-col gap-2">
          <p className="text-primary font-mono text-sm tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Classified Dossiers
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Active Operations
          </h2>
        </div>
        
        {/* Floating Image Preview overlay for desktop */}
        {!isMobile && hoveredIndex !== null && projects[hoveredIndex]?.image && (
          <div 
            className="pointer-events-none absolute z-50 overflow-hidden rounded-lg border border-white/10 shadow-2xl transition-transform duration-200 ease-out"
            style={{
              width: (projects[hoveredIndex] as any).imageOrientation === "portrait" ? '220px' : '380px',
              height: (projects[hoveredIndex] as any).imageOrientation === "portrait" ? '440px' : '240px',
              transform: `translate(${mousePos.x + 20}px, ${mousePos.y + 20}px)`,
              top: 0,
              left: 0
            }}
          >
            <img 
              src={projects[hoveredIndex].image} 
              alt="Project Preview" 
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        )}

        <div className="flex flex-col border-t border-white/10 relative">
          {projects.map((project, i) => (
            <div
              key={project.title}
              onMouseEnter={() => setHoveredIndex(i)}
              className="group relative border-b border-white/10 py-8 transition-colors hover:bg-white/[0.02] overflow-hidden"
            >
              {/* Subtle hover background sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out pointer-events-none" />
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 relative z-10">
                <div className="flex flex-col gap-1">
                  <h3 className="text-3xl md:text-5xl font-bold text-foreground/70 group-hover:text-foreground transition-colors tracking-tighter">
                    {project.title}
                  </h3>
                  <span className={`text-xs font-mono uppercase tracking-widest mt-2 ${project.status === 'Completed' ? 'text-primary' : 'text-muted-foreground'}`}>
                    [ STATUS: {project.status} ]
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 md:max-w-[50%]">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-1 rounded bg-black/50 border border-white/5 text-muted-foreground/80 group-hover:border-primary/20 group-hover:text-primary transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Accordion Expansion Content */}
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                <div className="overflow-hidden">
                  <div className="pt-8 flex flex-col lg:flex-row gap-8 items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="flex-1 flex flex-col gap-4">
                      <p className="text-muted-foreground leading-relaxed font-medium">
                        {project.description}
                      </p>
                      
                      {/* Mobile static image fallback */}
                      {isMobile && project.image && (
                        <div className="w-full h-48 rounded-lg overflow-hidden border border-white/10 mt-2">
                          <img src={project.image} alt="Preview" className="w-full h-full object-cover opacity-80" />
                        </div>
                      )}
                    </div>
                    
                    <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 text-sm font-mono text-foreground border border-white/20 px-4 py-2 rounded hover:bg-white/5 transition-colors">
                          <FolderGit2 size={16} />
                          Source Code
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 text-sm font-mono text-primary border border-primary/30 px-4 py-2 rounded hover:bg-primary/10 transition-colors">
                          Access Live
                          <ArrowUpRight size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
