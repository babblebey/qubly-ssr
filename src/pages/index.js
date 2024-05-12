import { Inter } from "next/font/google";
import { Navbar, WhyQubly, Hero, ForEngineeringTeams, ForProductTeams, Testimonials, SignupForm, Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="font-body">
      <div className="bg-gradient-to-b from-white to-[#E2F1FF] -skew-y-6">
        <div className="skew-y-6">
          <Navbar />
          <Hero />
        </div>
      </div>
      <WhyQubly />
      <ForProductTeams />
      <ForEngineeringTeams />
      <Testimonials />
      <SignupForm />
      <Footer />
    </div>
  );
}
