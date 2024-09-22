"use client";

import { useAuth } from '@/components/auth/auth-context-provider';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

const NavbarRight = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
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

      {user &&
        <>
          <Button onClick={() => router.push("/dashboard")}>
            Welcome, {user.name.split(" ").at(0)}
          </Button>

          <Button className="ml-2" onClick={logout} variant="ghost">
            <LogOut className="w-6 h-6" />
          </Button>
        </>
      }
      {!user &&
        <Button onClick={() => router.push("/login")}>Sign In</Button>
      }
    </div>
  )
}

export default NavbarRight