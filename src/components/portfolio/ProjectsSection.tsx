import { projects } from "@/data/portfolio";
import { FolderGit2, ArrowUpRight } from "lucide-react";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative border-t border-white/5">
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
        
        <div className="flex flex-col border-t border-white/10">
          {projects.map((project, i) => (
            <div
              key={project.title}
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
                  <div className="pt-8 flex flex-col md:flex-row gap-8 items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="flex-1">
                      <p className="text-muted-foreground leading-relaxed font-medium">
                        {project.description}
                      </p>
                    </div>
                    <button className="shrink-0 flex items-center gap-2 text-sm font-mono text-primary border border-primary/30 px-4 py-2 rounded hover:bg-primary/10 transition-colors">
                      <FolderGit2 size={16} />
                      Access Files
                      <ArrowUpRight size={16} />
                    </button>
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
