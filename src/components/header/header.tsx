"use client";

import { Button } from "@/components/ui/button"
import { ModeToggle } from "../ui/mode-toggle"
import { useRouter } from "next/navigation"
import HeaderLogo from "./logo";
import { NavLink, NavLinks } from "./nav-link";

export default function Header() {
  const router = useRouter();

  const navLinks = [
    <NavLink key="home" href="/">Home</NavLink>,
    <NavLink key="dashboard" href="/dashboard">Dashboard</NavLink>,
    <NavLink key="services" href="/sobre">Sobre</NavLink>,
  ]

  return (
    <nav className="py-4 sticky top-0 z-50 w-full">
      <div className="w-full mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <HeaderLogo />
          <NavLinks links={navLinks} />
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button size="sm" onClick={() => router.push("/login")}>Sign in</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
