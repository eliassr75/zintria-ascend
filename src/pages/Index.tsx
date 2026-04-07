import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ValueProposition from "@/components/landing/ValueProposition";
import HowItWorks from "@/components/landing/HowItWorks";
import Audiences from "@/components/landing/Audiences";
import Differentials from "@/components/landing/Differentials";
import PerformanceSection from "@/components/landing/PerformanceSection";
import SocialProof from "@/components/landing/SocialProof";
import CTASection from "@/components/landing/CTASection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <HowItWorks />
      <Audiences />
      <PerformanceSection />
      <Differentials />
      <SocialProof />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
