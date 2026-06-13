import { experience } from "@/data/portfolio";
import { Terminal } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="mb-12 flex flex-col gap-2">
          <p className="text-primary font-mono text-sm tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            System Event Logs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Professional Experience
          </h2>
        </div>

        <div className="bg-[#050505] border border-white/10 rounded-xl p-6 md:p-8 font-mono shadow-2xl relative overflow-hidden">
          {/* Subtle grid background for terminal feel */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_14px] pointer-events-none" />
          
          <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6 relative z-10">
            <Terminal size={20} className="text-primary" />
            <span className="text-muted-foreground text-sm tracking-widest uppercase">root@priyanshu:~# cat /var/log/experience.log</span>
          </div>

          <div className="space-y-8 relative z-10">
            {experience.map((item, index) => (
              <div 
                key={`${item.role}-${item.company}`} 
                className="group animate-fade-slide-up"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                  <span className="text-primary/70 text-sm whitespace-nowrap">
                    [{item.period}]
                  </span>
                  <span className="text-emerald-400 text-sm font-bold whitespace-nowrap">
                    [SYS_EXEC: {item.company.replace(/\s+/g, '_').toUpperCase()}]
                  </span>
                  <h3 className="text-foreground text-lg tracking-tight font-semibold">
                    {item.role}
                  </h3>
                </div>
                <div className="pl-0 md:pl-[calc(80px+1rem)]">
                  <p className="text-muted-foreground text-sm leading-relaxed border-l-2 border-white/10 pl-4 py-1 group-hover:border-primary/50 transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
            
            <div className="flex items-center gap-2 pt-4 animate-pulse">
              <span className="text-primary">root@priyanshu:~#</span>
              <span className="w-2.5 h-5 bg-foreground inline-block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
