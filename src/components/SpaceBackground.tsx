import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
  alpha: number;
};

export function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    const mouse = { x: 0.5, y: 0.5 };

    const stars: Star[] = Array.from({ length: 420 }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
      size: 0.6 + Math.random() * 2.2,
      speed: 0.00008 + Math.random() * 0.00025,
      alpha: 0.25 + Math.random() * 0.75
    }));

    function resize() {
      const ratio = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function draw(time: number) {
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createRadialGradient(width * 0.72, height * 0.25, 0, width * 0.72, height * 0.25, width * 0.9);
      gradient.addColorStop(0, "rgba(255,35,61,.20)");
      gradient.addColorStop(0.36, "rgba(255,107,0,.07)");
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const parallaxX = (mouse.x - 0.5) * 42;
      const parallaxY = (mouse.y - 0.5) * 42;

      stars.forEach((star, index) => {
        star.y += star.speed * (1 + star.z * 4);
        if (star.y > 1.05) {
          star.y = -0.05;
          star.x = Math.random();
        }

        const depth = 0.25 + star.z;
        const x = star.x * width + parallaxX * depth;
        const y = star.y * height + parallaxY * depth;
        const twinkle = 0.45 + Math.sin(time * 0.003 + index) * 0.35;

        ctx.beginPath();
        ctx.arc(x, y, star.size * depth, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, ${90 + Math.floor(star.z * 80)}, ${100 + Math.floor(star.z * 40)}, ${star.alpha * twinkle})`;
        ctx.fill();

        if (index % 18 === 0) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + 38 * depth, y + 8 * depth);
          ctx.strokeStyle = `rgba(255,35,61,${0.08 * depth})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      frame = requestAnimationFrame(draw);
    }

    function handleMouse(event: MouseEvent) {
      mouse.x = event.clientX / window.innerWidth;
      mouse.y = event.clientY / window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouse);
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return <canvas className="space-background" ref={canvasRef} />;
}
