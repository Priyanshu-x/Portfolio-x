import { Terminal, Layout } from "lucide-react";

interface NavbarProps {
  isTerminalMode: boolean;
  onToggleMode: () => void;
}

const Navbar = ({ isTerminalMode, onToggleMode }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="neu-flat rounded-xl px-5 py-2.5 bg-background">
          <span className="font-mono text-sm font-bold text-foreground">
            PK<span className="text-primary">_</span>
          </span>
        </div>

        {!isTerminalMode && (
          <div className="hidden md:flex items-center gap-1 neu-flat rounded-xl bg-background px-2 py-1.5">
            {["About", "Skills", "Projects", "Experience", "Education", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground transition-colors neu-button bg-background"
              >
                {item}
              </a>
            ))}
          </div>
        )}

        <button
          onClick={onToggleMode}
          className="neu-button rounded-xl px-5 py-2.5 bg-background flex items-center gap-2 text-sm font-medium text-foreground"
        >
          {isTerminalMode ? (
            <>
              <Layout size={16} className="text-primary" />
              <span className="hidden sm:inline">GUI Mode</span>
            </>
          ) : (
            <>
              <Terminal size={16} className="text-primary" />
              <span className="hidden sm:inline">Terminal</span>
            </>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
