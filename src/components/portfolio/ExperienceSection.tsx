import { experience } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
          Current Experience
        </h2>
        <div className="space-y-6">
          {experience.map((item) => (
            <div key={`${item.role}-${item.company}`} className="neu-flat rounded-2xl p-6 bg-background">
              <div className="flex items-start gap-4">
                <div className="neu-flat-sm rounded-xl p-3 bg-background mt-1">
                  <Briefcase size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                  <p className="text-primary font-mono text-sm">
                    {item.company} • {item.period}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
