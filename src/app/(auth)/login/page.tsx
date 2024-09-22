"use client";

import { AuthProvider } from "@/components/auth/auth-context-provider";
import { LoginForm } from "@/components/geral/login/login-form";
import Navbar from "@/components/geral/navbar/navbar";

export default function Login() {
  return (
    <AuthProvider>
      <Navbar />

      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex flex-col gap-10 items-center justify-center h-full">
          <LoginForm />
        </div>
      </main>
    </AuthProvider>
  );
}
