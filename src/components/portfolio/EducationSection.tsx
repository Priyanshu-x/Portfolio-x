import { education, certifications } from "@/data/portfolio";
import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
          Education & Certifications
        </h2>
        <div className="space-y-6 mb-10">
          {education.map((edu) => (
            <div key={edu.degree} className="neu-flat rounded-2xl p-6 bg-background">
              <div className="flex items-start gap-4">
                <div className="neu-flat-sm rounded-xl p-3 bg-background mt-1">
                  <GraduationCap size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-primary font-mono text-sm">{edu.specialization}</p>
                  <p className="text-muted-foreground text-sm">{edu.period}</p>
                  <ul className="mt-3 space-y-1">
                    {edu.highlights.map((h) => (
                      <li key={h} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="neu-flat rounded-2xl p-6 bg-background">
          <div className="flex items-center gap-3 mb-4">
            <div className="neu-flat-sm rounded-xl p-3 bg-background">
              <Award size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {certifications.map((cert) => (
              <div key={cert} className="neu-pressed rounded-lg p-3 bg-background">
                <span className="text-sm text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
