import { Navbar } from "@/components/Navbar";
import { TopContactBar } from "@/components/TopContactBar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { ServiceArea } from "@/components/ServiceArea";
import { FAQ } from "@/components/FAQ";
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
        <Services />
        <Gallery />
        <WhyChooseUs />
        <Testimonials />
        <About />
        <ServiceArea />
        <FAQ />
        <CTA />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
