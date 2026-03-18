import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { SignatureMenu } from '@/components/SignatureMenu';
import { Features } from '@/components/Features';
import { Amenities } from '@/components/Amenities';
import { Gallery } from '@/components/Gallery';
import { Reviews } from '@/components/Reviews';
import { LocationContact } from '@/components/LocationContact';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <SignatureMenu />
        <Features />
        <Amenities />
        <Gallery />
        <Reviews />
        <LocationContact />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
