import { skills } from "@/data/portfolio";
import { Cloud, Code, Database, GitBranch, Layout, Server, Shield } from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  "Programming Languages": Code,
  "Frontend Development": Layout,
  "Backend Development": Server,
  Databases: Database,
  "Tools & Platforms": GitBranch,
  "Core Areas": Cloud,
};

const SkillCategory = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => {
  const Icon = categoryIcons[title] ?? Shield;

  return (
    <div className="neu-flat rounded-2xl p-6 bg-background">
      <div className="flex items-center gap-3 mb-5">
        <div className="neu-flat-sm rounded-xl p-3 bg-background">
          <Icon size={24} className="text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="text-sm font-mono px-3 py-2 rounded-lg neu-pressed bg-background text-muted-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([title, items]) => (
            <SkillCategory key={title} title={title} items={items} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
