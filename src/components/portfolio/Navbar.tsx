import { Terminal, Layout, Crosshair } from "lucide-react";

interface NavbarProps {
  isTerminalMode: boolean;
  onToggleMode: () => void;
}

const Navbar = ({ isTerminalMode, onToggleMode }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        
        {/* Left HUD Element */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center justify-center w-8 h-8 rounded bg-primary/5 border border-primary/20 text-primary">
            <Crosshair size={16} />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs font-bold text-foreground tracking-widest uppercase">
              PK<span className="text-primary animate-pulse">_</span>SYS
            </span>
            <span className="font-mono text-[9px] text-muted-foreground tracking-widest uppercase hidden md:inline-block">
              V.2026.01_ONLINE
            </span>
          </div>
        </div>

        {/* Center Links (HUD Targeting Brackets style) */}
        {!isTerminalMode && (
          <div className="hidden md:flex items-center gap-6 px-8 py-2 rounded-full border border-white/5 bg-black/40">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-mono tracking-widest text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item.toUpperCase()}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        )}

        {/* Right Action */}
        <button
          onClick={onToggleMode}
          className="group relative flex items-center gap-2 px-4 py-2 rounded bg-black/60 border border-primary/30 text-primary text-xs font-mono uppercase tracking-widest hover:bg-primary/10 transition-colors focus-visible:ring-1 focus-visible:ring-primary outline-none"
        >
          {isTerminalMode ? (
            <>
              <Layout size={14} />
              <span className="hidden sm:inline">GUI_MODE</span>
            </>
          ) : (
            <>
              <Terminal size={14} />
              <span className="hidden sm:inline">TERMINAL</span>
            </>
          )}
          {/* Subtle corner brackets on hover */}
          <span className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
