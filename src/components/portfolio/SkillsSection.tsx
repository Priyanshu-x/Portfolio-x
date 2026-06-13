import { skills } from "@/data/portfolio";
import { Cloud, Code, Database, GitBranch, Layout, Server, Shield, Cpu } from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  "Programming Languages": Code,
  "Frontend Development": Layout,
  "Backend Development": Server,
  "Databases": Database,
  "Tools & Platforms": GitBranch,
  "Core Areas": Shield,
};

const SkillCategory = ({
  title,
  items,
  className = "",
}: {
  title: string;
  items: string[];
  className?: string;
}) => {
  const Icon = categoryIcons[title] ?? Cpu;

  return (
    <div className={`group relative overflow-hidden backdrop-blur-md bg-[#0a0a0a]/80 border border-white/5 hover:border-primary/40 rounded-2xl p-6 transition-all duration-300 flex flex-col ${className}`}>
      {/* Sleek top-right corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />
      
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <div className="p-2 rounded bg-black/50 border border-white/5 group-hover:border-primary/20 group-hover:text-primary text-muted-foreground transition-colors duration-300">
          <Icon size={20} />
        </div>
        <h3 className="text-sm uppercase tracking-widest font-mono text-foreground/80 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-auto relative z-10">
        {items.map((skill) => (
          <span
            key={skill}
            className="text-xs font-mono px-2.5 py-1 rounded border border-white/10 bg-black/40 text-muted-foreground group-hover:border-primary/30 group-hover:text-foreground transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const entries = Object.entries(skills);
  
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="mb-12 flex flex-col gap-2">
          <p className="text-primary font-mono text-sm tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            System Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Technical Architecture
          </h2>
        </div>
        
        {/* Sleek Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          {entries.map(([title, items], index) => {
            // Assign varied spans for bento box effect
            let spanClass = "col-span-1";
            if (title === "Programming Languages" || title === "Core Areas") {
              spanClass = "md:col-span-2 lg:col-span-2";
            }
            if (title === "Frontend Development") {
               spanClass = "md:col-span-1 lg:col-span-2 lg:row-span-2";
            }
            
            return (
              <SkillCategory 
                key={title} 
                title={title} 
                items={items} 
                className={spanClass}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
