import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import CivicCreditsSection from "@/components/CivicCreditsSection";
import TrustSection from "@/components/TrustSection";
import MarketSection from "@/components/MarketSection";
import PilotCitiesSection from "@/components/PilotCitiesSection";
import WhyNowSection from "@/components/WhyNowSection";
import FounderSection from "@/components/FounderSection";
import InvestorCTASection from "@/components/InvestorCTASection";
import FooterSection from "@/components/FooterSection";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden cursor-none">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <div className="section-divider" />
      <ProblemSection />
      <div className="section-divider" />
      <SolutionSection />
      <div className="section-divider" />
      <CivicCreditsSection />
      <div className="section-divider" />
      <TrustSection />
      <div className="section-divider" />
      <MarketSection />
      <div className="section-divider" />
      <PilotCitiesSection />
      <div className="section-divider" />
      <WhyNowSection />
      <div className="section-divider" />
      <FounderSection />
      <div className="section-divider" />
      <InvestorCTASection />
      <FooterSection />
      <StickyCTA />
    </div>
  );
};

export default Index;

