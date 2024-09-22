"use client";

import Link from "next/link";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import MountainIcon from "../../icon/mountain";
import DesktopNavLinks from "./desktop-nav-link";
import MobileNavLinks from "./mobile-nav-link";
import { AuthProvider } from "@/components/auth/auth-context-provider";
import NavbarRight from "./navbar-right";

export default function Navbar() {
  return (
    <AuthProvider>
      <header className="z-[50] top-0 flex sticky h-20 w-full shrink-0 items-center px-4 md:px-6 bg-background/95 backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <Link href="#" className="mr-6 flex items-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <DesktopNavLinks />
        </NavigationMenu>

        <MobileNavLinks />

        <NavbarRight />
      </header>
    </AuthProvider>
  )
}
