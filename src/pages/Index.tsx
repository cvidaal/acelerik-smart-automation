import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import CasesSection from "@/components/CasesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WhatWeDoSection />
      <ServicesSection />
      <ProcessSection />
      <CasesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
