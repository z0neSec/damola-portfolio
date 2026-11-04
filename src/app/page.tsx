import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyNurse from "@/components/WhyNurse";
import ServicesJourney from "@/components/ServicesJourney";
import WorkSample from "@/components/WorkSample";
import Experience from "@/components/Experience";
import Toolkit from "@/components/Toolkit";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import { SITE } from "@/lib/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Adedolapo Mary Ademola",
  jobTitle: "Registered Nurse and Medical Virtual Assistant",
  address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
  sameAs: [SITE.linkedin],
};

export default function Home() {
  return (
    <div className="w-full overflow-x-clip bg-deep font-sans text-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <WhyNurse />
        <ServicesJourney />
        <WorkSample />
        <Experience />
        <Toolkit />
        <Credentials />
        <Contact />
      </main>
    </div>
  );
}
