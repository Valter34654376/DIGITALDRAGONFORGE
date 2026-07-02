import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { SpaceBackground } from "./components/SpaceBackground";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { VideoSection } from "./components/VideoSection";
import { TechCenter } from "./components/TechCenter";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Stack } from "./components/Stack";
import { WhyChoose } from "./components/WhyChoose";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Cursor } from "./components/Cursor";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 700);

    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.13 }
    );

    reveals.forEach(item => observer.observe(item));

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className={`loader ${loaded ? "hide" : ""}`}>
        <div className="loader-orb" />
        <p>DIGITAL DRAGON FORGE</p>
      </div>

      <Cursor />
      <SpaceBackground />
      <div className="scanlines" />

      <Header />

      <main>
        <Hero />
        <About />
        <VideoSection />
        <TechCenter />
        <Services />
        <Projects />
        <Stack />
        <WhyChoose />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
