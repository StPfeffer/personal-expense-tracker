import { Button, buttonVariants } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { HeroCards } from "./hero-cards";
import Link from "next/link";

export const Hero = () => {
  return (
    <section id="hero" className="grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#E2D18F]  to-[#E2B814] text-transparent bg-clip-text">
              Personal
            </span>{" "}
            expense tracker
          </h1>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Take control of your finances with our intuitive expense tracker.
          Start making smarter money decisions today!
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">
            <Link
              href="/dashboard"
            >
              Get Started
            </Link>
          </Button>

          <Link
            rel="noreferrer noopener"
            href="https://github.com/StPfeffer/personal-expense-tracker.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="relative ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="z-10">
        <HeroCards />
      </div>

      <div className="shadow"></div>
    </section>
  );
}
