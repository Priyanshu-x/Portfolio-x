import { useState, useEffect } from "react";
import Navbar from "@/components/portfolio/Navbar";
import NormalMode from "@/components/portfolio/NormalMode";
import TerminalMode from "@/components/portfolio/TerminalMode";

const Index = () => {
  const [isTerminalMode, setIsTerminalMode] = useState(() => {
    return localStorage.getItem("portfolioMode") === "terminal";
  });
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    localStorage.setItem("portfolioMode", isTerminalMode ? "terminal" : "normal");
  }, [isTerminalMode]);

  // Keyboard shortcut: Ctrl + ` to toggle
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "`") {
        e.preventDefault();
        toggleMode();
      }
      if (e.key === "Escape" && isTerminalMode) {
        toggleMode();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isTerminalMode]);

  const toggleMode = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTerminalMode((prev) => !prev);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 300);
  };

  return (
    <div className={`min-h-screen bg-background ${isTransitioning ? "animate-morph" : ""}`}>
      <Navbar isTerminalMode={isTerminalMode} onToggleMode={toggleMode} />
      {isTerminalMode ? <TerminalMode /> : <NormalMode />}
    </div>
  );
};

export default Index;
