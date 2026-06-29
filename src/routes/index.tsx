import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sunny Bar — Bar de plage à Courseulles-sur-Mer | Cocktails & concerts" },
      { name: "description", content: "Sunny Bar : cocktails, concerts live et coucher de soleil face à la mer à Courseulles-sur-Mer en Normandie. Le bar de plage convivial de la Côte de Nacre." },
      { rel: "canonical", content: "/" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
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
