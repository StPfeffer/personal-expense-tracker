import { NavLinkProps } from "@/components/geral/navbar/types";

export function getNavLinks(): NavLinkProps[] {
  return [
    {
      href: "/",
      label: "Home"
    },
    {
      href: "/dashboard",
      label: "Dashboard"
    },
    {
      href: "/about",
      label: "About"
    }
  ]
}