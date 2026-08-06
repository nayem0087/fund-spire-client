import Hero from "@/components/Hero";
import TopCampaigns from "@/components/TopCampaigns";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <Hero/>
        <TopCampaigns/>
        <Testimonials/>
        <HowItWorks/>
    </div>
  );
}
