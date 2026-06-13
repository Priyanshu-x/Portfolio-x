import React, { useEffect, useRef } from "react";

interface Bulb {
  originX: number;
  originY: number;
  length: number;
  angle: number;
  aVelocity: number;
  aAcceleration: number;
  damping: number;
  radius: number;
  color: string;
  label: string;
  name: string;
  img: HTMLImageElement | null;
}

// Exactly 3 sizes: Large 52, Medium 38, Small 28
const techStack = [
  { label: "Kali", name: "kalilinux", color: "#268BEE", size: 52 },
  { label: "Red Hat", name: "redhat", color: "#EE0000", size: 38 },
  { label: "Wireshark", name: "wireshark", color: "#1679A7", size: 28 },
  { label: "Metasploit", name: "metasploit", color: "#E83E3E", size: 38 },
  { label: "Burp Suite", name: "portswigger", color: "#FF6633", size: 28 }, // Replaced Nmap
  { label: "Python", name: "python", color: "#3572A5", size: 52 },
  { label: "MERN", name: "react", color: "#61DAFB", size: 52 },
  { label: "GCP", name: "googlecloud", color: "#4285F4", size: 38 },
  { label: "Docker", name: "docker", color: "#2496ED", size: 52 },
  { label: "MySQL", name: "mysql", color: "#00758F", size: 28 },
  { label: "Linux", name: "linux", color: "#FCC624", size: 38 },
  { label: "Git", name: "git", color: "#F05032", size: 38 },
  { label: "GitHub", name: "github", color: "#E0E0E0", size: 38 },
  { label: "VS Code", name: "visualstudiocode", color: "#007ACC", size: 28 }
];

const hexToRgb = (hex: string) => {
  const bigint = parseInt(hex.replace("#", ""), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
};

const HangingBulbsCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let bulbs: Bulb[] = [];
    const gravity = 0.4;
    let isRunning = true;
    
    let mouse = { x: -1000, y: -1000, px: -1000, py: -1000, vx: 0, vy: 0 };
    
    const loadImages = async () => {
      const loadedBulbs = await Promise.all(
        techStack.map(async (tech) => {
          let img: HTMLImageElement | null = null;
          try {
            const response = await fetch(`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${tech.name}.svg`);
            if (response.ok) {
              let svgText = await response.text();
              if (!svgText.includes('fill=')) {
                svgText = svgText.replace('<svg ', `<svg fill="${tech.color}" `);
              } else {
                svgText = svgText.replace(/fill=".*?"/g, `fill="${tech.color}"`);
              }
              const blob = new Blob([svgText], { type: 'image/svg+xml' });
              const url = URL.createObjectURL(blob);
              
              img = await new Promise((resolve) => {
                const iObj = new Image();
                iObj.onload = () => resolve(iObj);
                iObj.onerror = () => resolve(null);
                iObj.src = url;
              });
            }
          } catch (e) {
            console.error(`Failed to load SVG for ${tech.name}`, e);
          }
          
          return {
            originX: 0,
            originY: 0,
            length: 0,
            angle: (Math.random() - 0.5) * 0.3,
            aVelocity: 0,
            aAcceleration: 0,
            damping: 0.98 + Math.random() * 0.01,
            radius: tech.size,
            color: tech.color,
            label: tech.label,
            name: tech.name,
            img
          };
        })
      );
      
      if (isRunning) {
        bulbs = loadedBulbs;
        resizeCanvas();
      }
    };

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      
      const spacing = canvas.width / (bulbs.length + 1);
      
      bulbs.forEach((bulb, i) => {
        bulb.radius = techStack[i].size;
        
        let pivotX = spacing * (i + 1);
        // Clamp pivot to prevent edge clipping at rest
        bulb.originX = Math.max(bulb.radius + 20, Math.min(canvas.width - bulb.radius - 20, pivotX));
        bulb.originY = -20;
        
        // Ensure bulb glass never exits the bottom of the canvas
        const capH = bulb.radius * 0.6;
        // Total lowest possible Y is: originY + length + capH + radius * 2
        // We want this to be <= canvas.height - 10
        const maxAllowedLength = canvas.height - bulb.originY - capH - (bulb.radius * 2) - 10;
        
        const minLength = canvas.height * 0.15;
        const varLength = canvas.height * 0.35;
        let desiredLength = minLength + (Math.sin(i * 1.5) * 0.5 + 0.5) * varLength;
        
        bulb.length = Math.min(desiredLength, Math.max(0, maxAllowedLength));
      });
    };

    const drawBulb = (bulb: Bulb) => {
      const L = bulb.length;
      const r = bulb.radius;
      const capH = r * 0.6;
      const capW = r * 0.8;
      const bulbCenterY = L + capH + r;
      const rgb = hexToRgb(bulb.color);

      const globalX = bulb.originX + Math.sin(bulb.angle) * bulbCenterY;
      const globalY = bulb.originY + Math.cos(bulb.angle) * bulbCenterY;

      const grad = ctx.createRadialGradient(globalX, globalY, 0, globalX, globalY, r * 3.5);
      grad.addColorStop(0, `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.15)`);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(globalX, globalY, r * 3.5, 0, Math.PI*2);
      ctx.fill();

      ctx.save();
      ctx.translate(bulb.originX, bulb.originY);
      ctx.rotate(bulb.angle);

      // String
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, L);
      ctx.strokeStyle = bulb.color;
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = 0.4;
      ctx.shadowBlur = 8;
      ctx.shadowColor = bulb.color;
      ctx.stroke();
      ctx.globalAlpha = 1.0;
      ctx.shadowBlur = 0;

      // Screw Cap
      ctx.beginPath();
      ctx.rect(-capW/2, L, capW, capH);
      ctx.fillStyle = "#333";
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#111";
      ctx.stroke();
      for(let i=1; i<4; i++) {
         ctx.beginPath();
         ctx.moveTo(-capW/2, L + (capH/4)*i);
         ctx.lineTo(capW/2, L + (capH/4)*i);
         ctx.stroke();
      }

      // Bulb Glass
      ctx.beginPath();
      const neckW = r * 0.6;
      ctx.moveTo(-neckW/2, L + capH);
      ctx.lineTo(neckW/2, L + capH);
      ctx.bezierCurveTo(neckW/2, L + capH + r*0.5, r, bulbCenterY - r*0.5, r, bulbCenterY);
      ctx.arc(0, bulbCenterY, r, 0, Math.PI);
      ctx.bezierCurveTo(-r, bulbCenterY - r*0.5, -neckW/2, L + capH + r*0.5, -neckW/2, L + capH);
      ctx.closePath();

      ctx.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.1)`;
      ctx.fill();

      ctx.strokeStyle = bulb.color;
      ctx.lineWidth = 1.5;
      ctx.shadowBlur = 20;
      ctx.shadowColor = bulb.color;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Logo
      if (bulb.img) {
        const size = r * 1.1; 
        ctx.drawImage(bulb.img, -size/2, bulbCenterY - size/2, size, size);
      } else {
        // Safe fallback circle if image still failed
        ctx.beginPath();
        ctx.arc(0, bulbCenterY, r*0.3, 0, Math.PI*2);
        ctx.strokeStyle = bulb.color;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, bulbCenterY, r*0.1, 0, Math.PI*2);
        ctx.fillStyle = bulb.color;
        ctx.fill();
      }

      ctx.restore();

      const dx = mouse.x - globalX;
      const dy = mouse.y - globalY;
      const dist = Math.sqrt(dx*dx + dy*dy);
      
      if (dist < r * 1.5 && (Math.abs(mouse.vx) > 0.5 || Math.abs(mouse.vy) > 0.5)) {
        bulb.aVelocity += (mouse.vx * 0.0005);
      }
    };

    const updatePhysics = () => {
      mouse.vx = mouse.x - mouse.px;
      mouse.vy = mouse.y - mouse.py;
      
      bulbs.forEach(bulb => {
        if (bulb.length > 0) {
          bulb.aAcceleration = (-gravity / bulb.length) * Math.sin(bulb.angle);
          bulb.aVelocity += bulb.aAcceleration;
          bulb.aVelocity *= bulb.damping;
          bulb.angle += bulb.aVelocity;

          // Wall Repulsion Logic
          const r = bulb.radius;
          const capH = r * 0.6;
          const bulbCenterY = bulb.length + capH + r;
          const globalX = bulb.originX + Math.sin(bulb.angle) * bulbCenterY;

          // If bulb hits left boundary
          if (globalX < r + 15) {
             bulb.aVelocity += 0.002;
          }
          // If bulb hits right boundary
          if (globalX > canvas.width - r - 15) {
             bulb.aVelocity -= 0.002;
          }
        }
      });
      
      mouse.px = mouse.x;
      mouse.py = mouse.y;
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      updatePhysics();
      bulbs.forEach(drawBulb);
      
      if (isRunning) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const handleResize = () => resizeCanvas();
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    loadImages().then(() => {
      render();
    });

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      isRunning = false;
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full absolute top-0 left-0 z-0 pointer-events-auto"
      style={{ background: 'transparent' }}
    />
  );
};

export default HangingBulbsCanvas;
