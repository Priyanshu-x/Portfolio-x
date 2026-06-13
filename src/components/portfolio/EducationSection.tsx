import { education, certifications } from "@/data/portfolio";
import { Terminal, ShieldCheck } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="mb-12 flex flex-col gap-2">
          <p className="text-primary font-mono text-sm tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Knowledge Base
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Education & Certifications
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Education Terminal */}
          <div className="lg:col-span-3 bg-[#050505] border border-white/10 rounded-xl p-6 md:p-8 font-mono shadow-2xl relative overflow-hidden">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
              <Terminal size={20} className="text-primary" />
              <span className="text-muted-foreground text-sm tracking-widest uppercase">root@priyanshu:~# tail -f /edu/records</span>
            </div>

            <div className="space-y-10">
              {education.map((edu, index) => (
                <div 
                  key={edu.degree} 
                  className="group animate-fade-slide-up"
                  style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}
                >
                  <div className="flex flex-col gap-1 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-primary/70 text-sm">[{edu.period}]</span>
                      <span className="text-emerald-400 text-sm font-bold">[CERT_INIT]</span>
                    </div>
                    <h3 className="text-foreground text-lg tracking-tight font-semibold mt-1">
                      {edu.degree}
                    </h3>
                    <span className="text-primary text-sm">{edu.specialization}</span>
                  </div>
                  <ul className="pl-4 border-l-2 border-white/10 group-hover:border-primary/50 transition-colors space-y-2 mt-3">
                    {edu.highlights.map((h) => (
                      <li key={h} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">&gt;</span>
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Block */}
          <div className="lg:col-span-2">
            <div className="backdrop-blur-md bg-[#0a0a0a]/80 border border-white/10 rounded-xl p-6 md:p-8 shadow-2xl h-full flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded bg-primary/10 border border-primary/20 text-primary">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground tracking-tight">Verified Credentials</h3>
              </div>
              
              <div className="flex flex-col gap-3 flex-1">
                {certifications.map((cert, index) => (
                  <div 
                    key={cert} 
                    className="group relative overflow-hidden rounded-lg p-4 border border-white/5 bg-black/40 hover:border-primary/40 transition-colors duration-300 animate-fade-slide-up"
                    style={{ animationDelay: `${(index + 3) * 100}ms`, animationFillMode: 'both' }}
                  >
                    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary/50 to-transparent group-hover:w-full group-hover:opacity-10 transition-all duration-300 pointer-events-none" />
                    <div className="relative z-10 flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary group-hover:shadow-[0_0_8px_rgba(0,243,255,0.8)] transition-all" />
                      <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                        {cert}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;
