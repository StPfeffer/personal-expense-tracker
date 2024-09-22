"use client";

import { Button, buttonVariants } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Link from "next/link";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { ModeToggle } from "../../ui/mode-toggle";
import MountainIcon from "../../icon/mountain";
import DesktopNavLinks from "./desktop-nav-link";
import MobileNavLinks from "./mobile-nav-link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Navbar() {
  const router = useRouter();

  return (
    <header className="z-[50] top-0 flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-background/95 backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
      <Link href="#" className="mr-6 flex items-center" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>

      <NavigationMenu className="hidden lg:flex">
        <DesktopNavLinks />
      </NavigationMenu>

      <MobileNavLinks />

      <div className="ml-auto flex items-center">
        <Link
          rel="noreferrer noopener"
          href="https://github.com/StPfeffer/personal-expense-tracker.git"
          target="_blank"
          className="mr-4"
        >
          <GitHubLogoIcon className="ml-2 w-5 h-5" />
        </Link>

        <ModeToggle className="mr-4" />

        <Button onClick={() => router.push("/login")}>Sign In</Button>
      </div>
    </header>
  )
}
