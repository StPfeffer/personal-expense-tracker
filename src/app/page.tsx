import Navbar from "@/components/geral/navbar/navbar";
import Footer from "@/components/geral/footer";
import { Hero } from "@/components/home/hero/hero";
import { Newsletter } from "@/components/home/newsletter";

import "@/styles/index.css";
import { Pricing } from "@/components/home/pricing";
import { Testimonials } from "@/components/home/testimonials";

export default function HomePage() {
  return (
    <div className="flex items-center flex-col min-h-screen">
      <div className="container">
        <Navbar />

        <main className="flex-1 items-center justify-center">
          <div className="relative pb-20 px-10 space-y-20 lg:px-5">
            <Hero />
            <Testimonials />
            <Pricing />
            <Newsletter />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
