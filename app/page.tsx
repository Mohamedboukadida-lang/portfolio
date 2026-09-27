import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Credentials } from "@/components/Credentials";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { education, profile } from "@/content/site";
import { siteUrl } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Backend / Software Engineer",
  email: `mailto:${profile.email}`,
  telephone: profile.phoneDisplay,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Passau",
    addressCountry: "DE",
  },
  alumniOf: education.map((item) => ({
    "@type": "EducationalOrganization",
    name: item.school,
  })),
  sameAs: [profile.linkedin, profile.github],
  knowsLanguage: ["en", "de", "fr", "ar"],
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
