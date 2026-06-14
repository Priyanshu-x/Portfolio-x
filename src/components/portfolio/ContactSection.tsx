import { useState } from "react";
import { profile } from "@/data/portfolio";
import { Mail, Github, Linkedin, MapPin, Radio, Send, Loader2, CheckCircle2, XCircle } from "lucide-react";

const ContactItem = ({
  icon: Icon,
  label,
  value,
  href,
  delay = 0
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
  delay?: number;
}) => {
  const content = (
    <div
      className="group relative flex items-center gap-4 p-4 rounded-lg bg-black/40 border border-white/5 hover:border-primary/40 hover:bg-white/[0.02] transition-all duration-300 overflow-hidden animate-fade-slide-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out pointer-events-none" />

      <div className="relative z-10 p-2 rounded bg-primary/5 text-primary border border-primary/20 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300">
        <Icon size={18} />
      </div>

      <div className="relative z-10 flex-1">
        <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest mb-0.5">{label}</p>
        <p className="text-sm font-medium text-foreground/90 group-hover:text-primary transition-colors font-mono">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block outline-none focus-visible:ring-1 focus-visible:ring-primary rounded-lg">
        {content}
      </a>
    );
  }
  return <div className="block">{content}</div>;
};

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch (err) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 relative z-10">

        <div className="mb-16 flex flex-col items-center justify-center gap-2 text-center">
          <div className="relative flex items-center justify-center w-16 h-16 mb-4">
            {/* CSS Radar Ping Effect */}
            <div className="absolute inset-0 rounded-full border border-primary/40 animate-ping opacity-75" />
            <div className="absolute inset-2 rounded-full border border-primary/60 animate-ping opacity-50" style={{ animationDelay: '500ms' }} />
            <div className="relative z-10 p-3 rounded-full bg-primary/10 border border-primary text-primary shadow-[0_0_20px_rgba(0,243,255,0.4)]">
              <Radio size={24} />
            </div>
          </div>

          <p className="text-primary font-mono text-sm tracking-widest uppercase">
            Secure Communication Channel
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Initiate Uplink
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <ContactItem icon={Mail} label="Email Address" value={profile.email} href={`mailto:${profile.email}`} delay={100} />
          <ContactItem icon={MapPin} label="Current Location" value={profile.location} delay={200} />
          <ContactItem icon={Github} label="GitHub Profile" value="github.com/priyanshu-x" href={profile.github} delay={300} />
          <ContactItem icon={Linkedin} label="LinkedIn Network" value="linkedin.com/in/priyanshu-x" href={profile.linkedin} delay={400} />
        </div>

        {/* Working terminal-style form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-12 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              name="email"
              required
              placeholder="visitor@email.com"
              className="flex-1 p-4 rounded-lg bg-black/50 border border-white/5 font-mono text-sm text-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_rgba(0,243,255,0.1)] transition-all"
            />
          </div>
          <div className="relative">
            <textarea
              name="message"
              required
              rows={3}
              placeholder="> Type your message..."
              className="w-full p-4 rounded-lg bg-black/50 border border-white/5 font-mono text-sm text-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_rgba(0,243,255,0.1)] transition-all resize-none"
            />
            <button
              type="submit"
              disabled={formStatus === "loading" || formStatus === "success"}
              className="absolute bottom-4 right-4 text-primary bg-primary/10 hover:bg-primary/20 border border-primary/30 p-2 rounded transition-colors disabled:opacity-50 flex items-center justify-center"
            >
              {formStatus === "loading" ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            </button>
          </div>

          {/* Terminal Response Line */}
          {formStatus === "success" && (
            <div className="flex items-center gap-2 text-green-400 font-mono text-xs animate-fade-in">
              <CheckCircle2 size={14} /> <span>&gt; transmission successful. secure link established.</span>
            </div>
          )}
          {formStatus === "error" && (
            <div className="flex items-center gap-2 text-red-400 font-mono text-xs animate-fade-in">
              <XCircle size={14} /> <span>&gt; transmission failed. please check connection.</span>
            </div>
          )}
        </form>

      </div>
    </section>
  );
};

export default ContactSection;
