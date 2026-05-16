import { useState, useRef, useEffect, useCallback } from "react";
import { terminalCommands, profile } from "@/data/portfolio";

const AVAILABLE_COMMANDS = Object.keys(terminalCommands);

const BOOT_LINES = [
  "Initializing PortfolioOS v1.0.0...",
  "Loading kernel modules... [OK]",
  "Mounting /dev/skills... [OK]",
  "Mounting /dev/projects... [OK]",
  "Starting network security daemon... [OK]",
  "Cloud services connected... [OK]",
  `Welcome, visitor. Type 'help' for available commands.`,
  "",
];

interface TerminalLine {
  type: "input" | "output" | "boot" | "error" | "matrix";
  content: string;
}

const TerminalMode = () => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isBooting, setIsBooting] = useState(true);
  const [showMatrix, setShowMatrix] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Boot sequence
  useEffect(() => {
    let i = 0;
    const bootInterval = setInterval(() => {
      if (i < BOOT_LINES.length) {
        setLines((prev) => [...prev, { type: "boot", content: BOOT_LINES[i] }]);
        i++;
      } else {
        clearInterval(bootInterval);
        setIsBooting(false);
      }
    }, 200);
    return () => clearInterval(bootInterval);
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines]);

  // Focus input
  useEffect(() => {
    if (!isBooting) inputRef.current?.focus();
  }, [isBooting]);

  const executeCommand = useCallback((cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();

    if (trimmed === "clear") {
      setLines([]);
      return;
    }

    if (trimmed === "matrix") {
      setShowMatrix(true);
      setTimeout(() => setShowMatrix(false), 4000);
      setLines((prev) => [
        ...prev,
        { type: "output", content: "Initiating matrix sequence..." },
      ]);
      return;
    }

    if (trimmed === "theme") {
      document.documentElement.classList.toggle("dark");
      setLines((prev) => [
        ...prev,
        { type: "output", content: "Theme toggled." },
      ]);
      return;
    }

    if (trimmed === "date") {
      setLines((prev) => [
        ...prev,
        { type: "output", content: new Date().toString() },
      ]);
      return;
    }

    const response = terminalCommands[trimmed];
    if (response) {
      setLines((prev) => [...prev, { type: "output", content: response }]);
    } else {
      setLines((prev) => [
        ...prev,
        {
          type: "error",
          content: `Command not found: ${trimmed}. Type 'help' for available commands.`,
        },
      ]);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLines((prev) => [
      ...prev,
      { type: "input", content: `${profile.name.split(' ')[0].toLowerCase()}@portfolio:~$ ${input}` },
    ]);

    setHistory((prev) => [input, ...prev]);
    setHistoryIndex(-1);
    executeCommand(input);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      if (input) {
        const match = AVAILABLE_COMMANDS.find((c) =>
          c.startsWith(input.toLowerCase())
        );
        if (match) setInput(match);
      }
    }
  };

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 pt-20 bg-background">
      {/* Matrix overlay */}
      {showMatrix && (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden bg-terminal-bg/90">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-terminal-fg font-mono text-xs opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                animationName: "matrixRain",
                animationDuration: `${1 + Math.random() * 3}s`,
                animationDelay: `${Math.random() * 2}s`,
                animationTimingFunction: "linear",
                animationIterationCount: "1",
                animationFillMode: "forwards",
              }}
            >
              {Array.from({ length: 20 })
                .map(() => String.fromCharCode(0x30a0 + Math.random() * 96))
                .join("\n")}
            </div>
          ))}
        </div>
      )}

      <div
        className="w-full max-w-4xl h-[80vh] rounded-2xl neu-flat bg-terminal-bg overflow-hidden flex flex-col animate-boot-flicker relative scanline"
        onClick={handleContainerClick}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-terminal-dim/30">
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-terminal-fg/80" />
          <span className="ml-3 text-xs font-mono text-terminal-dim">
            priyanshu@portfolio — bash
          </span>
        </div>

        {/* Terminal content */}
        <div
          ref={containerRef}
          className="flex-1 overflow-y-auto p-4 font-mono text-sm"
        >
          {lines.map((line, i) => (
            <div
              key={i}
              className={`mb-1 whitespace-pre-wrap break-words ${
                line.type === "input"
                  ? "text-terminal-fg terminal-glow"
                  : line.type === "boot"
                  ? "text-terminal-accent"
                  : line.type === "error"
                  ? "text-destructive"
                  : "text-terminal-fg/80"
              }`}
            >
              {line.content}
            </div>
          ))}

          {/* Input line */}
          {!isBooting && (
            <form onSubmit={handleSubmit} className="flex items-center">
              <span className="text-terminal-fg terminal-glow mr-2">
                {profile.name.split(' ')[0].toLowerCase()}@portfolio:~$
              </span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-terminal-fg outline-none font-mono text-sm caret-terminal-fg"
                autoFocus
                spellCheck={false}
                autoComplete="off"
              />
              <span className="terminal-cursor text-terminal-fg">▊</span>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default TerminalMode;
