import { Navbar } from "@/components/Navbar";
import { TopContactBar } from "@/components/TopContactBar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { OurPromise } from "@/components/OurPromise";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <TopContactBar />
        <Navbar />
      </div>
      <main>
        <Hero />
        <TrustBar />
        <OurPromise />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <CTA />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
