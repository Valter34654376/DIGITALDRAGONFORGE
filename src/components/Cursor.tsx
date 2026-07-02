import { useEffect, useRef } from "react";

export function Cursor() {
  const cursor = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = cursor.current;
    if (!el) return;

    const move = (event: MouseEvent) => {
      el.style.left = `${event.clientX}px`;
      el.style.top = `${event.clientY}px`;
    };

    const add = () => el.classList.add("active");
    const remove = () => el.classList.remove("active");

    const targets = document.querySelectorAll("a, button, .magnetic, .service-card, .project-card");
    targets.forEach(target => {
      target.addEventListener("mouseenter", add);
      target.addEventListener("mouseleave", remove);
    });

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      targets.forEach(target => {
        target.removeEventListener("mouseenter", add);
        target.removeEventListener("mouseleave", remove);
      });
    };
  }, []);

  return <div className="custom-cursor" ref={cursor} />;
}
