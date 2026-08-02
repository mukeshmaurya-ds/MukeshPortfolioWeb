import dynamic from "next/dynamic";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Skills from "@/components/sections/skills/Skills";

const Projects = dynamic(
  () => import("@/components/sections/projects/Projects")
);

const Journey = dynamic(
  () => import("@/components/sections/journey/Journey")
);

const Certifications = dynamic(
  () =>
    import(
      "@/components/sections/certifications/Certifications"
    )
);

const Achievements = dynamic(
  () =>
    import(
      "@/components/sections/achievements/Achievements"
    )
);

const Contact = dynamic(
  () => import("@/components/sections/contact/Contact")
);

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Certifications />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </>
  );
}