import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Atmosphere } from "@/components/sections/Atmosphere";
import { Events } from "@/components/sections/Events";
import { DrinksPreview } from "@/components/sections/DrinksPreview";
import { Hours } from "@/components/sections/Hours";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";
import { MapEmbed } from "@/components/sections/MapEmbed";

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Atmosphere />
        <Events />
        <DrinksPreview />
        <Hours />
        <Gallery />
        <Reviews />
        <Contact />
        <MapEmbed />
      </main>
      <Footer />
    </>
  );
}
