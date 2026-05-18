import AvailableTutors from "@/components/AvailableTutors";
import Banner from "@/components/Banner";
import HowItWorks from "@/components/HowItWorks";
import WhyMediqueue from "@/components/WhyMediqueue";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <AvailableTutors></AvailableTutors>
      <WhyMediqueue></WhyMediqueue>
      <HowItWorks></HowItWorks>
    </>
  );
}
