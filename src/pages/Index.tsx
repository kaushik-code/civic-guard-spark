import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import CivicCreditsSection from "@/components/CivicCreditsSection";
import TrustSection from "@/components/TrustSection";
import MarketSection from "@/components/MarketSection";
import WhyNowSection from "@/components/WhyNowSection";
import FounderSection from "@/components/FounderSection";
import InvestorCTASection from "@/components/InvestorCTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <CivicCreditsSection />
      <TrustSection />
      <MarketSection />
      <WhyNowSection />
      <FounderSection />
      <InvestorCTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
