import { projects } from "@/data/portfolio";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="neu-flat rounded-2xl p-6 bg-background group hover:scale-[1.02] transition-transform duration-200"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <span
                  className={`text-xs font-mono px-3 py-1 rounded-full neu-flat-sm ${
                    project.status === "Completed"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg neu-pressed bg-background text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
