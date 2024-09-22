"use client";

import { initializeUsers } from "@/actions/fetch-users";
import { AuthProvider } from "@/components/auth/auth-context-provider";
import { RegisterForm } from "@/components/auth/form/register-form";
import Navbar from "@/components/geral/navbar/navbar";
import { User } from "@/types/user";
import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    const loadDataToLocalStorage = (key: string, data: User[]) => {
      const existingData = localStorage.getItem(key);

      if (!existingData) {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
      }

      return false;
    };

    const loadUsers = async () => {
      const users = initializeUsers();

      const newUsersLoaded = loadDataToLocalStorage("users", users);
    };

    loadUsers();
  }, []);

  return (
    <AuthProvider>
      <Navbar />

      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex flex-col gap-10 items-center justify-center h-full">
          <RegisterForm />
        </div>
      </main>
    </AuthProvider>
  );
}
