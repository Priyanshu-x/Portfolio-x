import { profile } from "@/data/portfolio";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const ContactItem = ({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) => {
  const content = (
    <div className="neu-flat rounded-xl p-5 bg-background flex items-center gap-4 group hover:scale-[1.02] transition-transform duration-200">
      <div className="neu-flat-sm rounded-lg p-3 bg-background">
        <Icon size={20} className="text-primary" />
      </div>
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
        <p className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return content;
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
          Get In Touch
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <ContactItem icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          <ContactItem icon={Github} label="GitHub" value="priyanshukushwaha" href={profile.github} />
          <ContactItem icon={Linkedin} label="LinkedIn" value="priyanshukushwaha" href={profile.linkedin} />
          <ContactItem icon={MapPin} label="Location" value={profile.location} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
