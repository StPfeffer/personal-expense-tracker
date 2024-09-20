import { LoginForm } from "@/components/login-form";

export default function Login() {
  return (
    <main className=" font-bold w-full h-screen relative">
      <div className="flex flex-col gap-10 items-center justify-center h-full">
        <LoginForm />
      </div>
    </main>
  );
}
