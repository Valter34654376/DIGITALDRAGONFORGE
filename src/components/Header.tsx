import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { navigation } from "../data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a href="#inicio" className="brand" aria-label="Digital Dragon Forge">
        <span className="brand-mark">DDF</span>
        <span className="brand-text">DIGITAL<b>DRAGON</b>FORGE</span>
      </a>

      <button className="menu-button" onClick={() => setOpen(!open)}>
        {open ? "FECHAR" : "MENU"}
      </button>

      <nav className={open ? "open" : ""}>
        {navigation.map(item => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="nav-cta" href="#contato" onClick={() => setOpen(false)}>
          Solicitar projeto <ArrowRight size={16} />
        </a>
      </nav>
    </header>
  );
}
