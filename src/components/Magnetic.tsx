import { ReactNode, useRef } from "react";

type MagneticProps = {
  children: ReactNode;
  className?: string;
};

export function Magnetic({ children, className = "" }: MagneticProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    element.style.transform = `translate(${x * 0.07}px, ${y * 0.07}px)`;
  }

  function handleLeave() {
    const element = ref.current;
    if (!element) return;
    element.style.transform = "translate(0, 0)";
  }

  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} className={className}>
      {children}
    </div>
  );
}
