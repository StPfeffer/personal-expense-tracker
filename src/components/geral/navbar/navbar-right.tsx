"use client";

import { UserNav } from '@/components/admin-panel/navbar/user-nav';
import { useAuth } from '@/components/auth/auth-context-provider';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

const NavbarRight = () => {
  const { user } = useAuth();
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
        <UserNav />
      }
      {!user &&
        <Button onClick={() => router.push("/login")}>Sign In</Button>
      }
    </div>
  )
}

export default NavbarRight