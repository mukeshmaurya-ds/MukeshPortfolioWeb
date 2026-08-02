"use client";

import Container from "@/components/ui/Container";

import Background from "./Background";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        pt-24
      "
    >
      <Background />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <HeroContent />

          <HeroImage />
        </div>
      </Container>
      <ScrollIndicator />
    </section>
  );
}