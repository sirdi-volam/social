import { Metadata } from "next";
import LoginForm from "./LoginForm";
import Link from "next/link";
import loginImage from "@/assets/unnamed.jpg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Вход",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="p10 w-full space-y-10 overflow-y-auto md:w-1/2">
          <h1 className="text-center text-3xl font-bold">Вход</h1>
          <div className="space-y-5">
            <LoginForm />
            <Link href="/signup" className="block text-center hover:underline">
              Нет аккаунта? Зарегистрируйтесь
            </Link>
          </div>
        </div>
        <Image
          src={loginImage}
          alt="Изображение входа в аккаунт"
          title="Изображение входа в аккаунт"
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
