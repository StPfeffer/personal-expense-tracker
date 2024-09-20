import { ReactNode } from "react"
import { NavLinkProps } from "./types"
import Link from "next/link"

function NavLinks({
  links
}: {
  links: ReactNode[]
}) {
  return (
    <nav className="hidden md:flex gap-4">
      {links.map((link, index) => (
        <span key={index}>{link}</span>
      ))}
    </nav>
  )
}

function NavLink({
  href,
  children
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className="font-medium flex items-center text-sm transition-colors hover:underline"
      prefetch={false}
    >
      {children}
    </Link>
  )
}

export { NavLink, NavLinks };