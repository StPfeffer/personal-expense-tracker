import {
  TrendingDown,
  Users,
  Settings,
  TrendingUp,
  CreditCard,
  LayoutGrid,
  LucideIcon
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname.includes("/dashboard"),
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "",
          label: "Transactions",
          active: pathname.includes("/posts"),
          icon: CreditCard,
          submenus: [
            {
              href: "/transactions",
              label: "Transactions",
              active: pathname === "/transactions"
            },
            {
              href: "/transactions/new",
              label: "New Transaction",
              active: pathname === "/transactions/new"
            }
          ]
        },
        {
          href: "/incomes",
          label: "Incomes",
          active: pathname.includes("/incomes"),
          icon: TrendingUp,
          submenus: []
        },
        {
          href: "/expenses",
          label: "Expenses",
          active: pathname.includes("/expenses"),
          icon: TrendingDown,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/account",
          label: "Account",
          active: pathname.includes("/account"),
          icon: Settings,
          submenus: []
        }
      ]
    }
  ];
}