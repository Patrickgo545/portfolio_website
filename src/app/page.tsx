import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <section id="hero"><Hero /></section>
      <About />
      <Projects />
      <Resume />
      <Contact />
    </main>
  );
}
