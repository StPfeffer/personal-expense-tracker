import Link from "next/link";
import { ArrowRightIcon, GithubIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/geral/navbar/navbar";
import Footer from "@/components/geral/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="min-h-[calc(100vh-57px-97px)] flex-1">
        <div className="relative pb-10">
          <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              Personal expense tracker
            </h1>
            <span className="max-w-[750px] text-center text-lg font-light text-foreground">
              A stunning and functional retractable sidebar for Next.js using
              shadcn/ui complete with desktop and mobile responsiveness.
            </span>
            <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-6">
              <Button variant="default" asChild>
                <Link href="/dashboard">
                  Get Started
                  <ArrowRightIcon className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="/sobre"
                  rel="noopener noreferrer"
                >
                  Learn more
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
