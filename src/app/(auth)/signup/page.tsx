import { Metadata } from "next";
import signupImage from "@/assets/unnamed.jpg";
import Image from "next/image";
import Link from 'next/link';
import SignUpForm from './SignUpForm';

export const metadata: Metadata = {
  title: "Зарегистрироваться",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="md:w1/2 w-full space-y-10 overflow-y-auto p-10">
          <div className="space-y-1 text-center">
            <h1 className="text-4xl font-bold">Регистрация</h1>
            <p className="text-muted-foreground">
              Место, где даже <span className="italic"> ты </span> может найти
              себе друга
            </p>
          </div>
          <div className="space-y-5">
            <SignUpForm />
            <Link href="/login" className="block text-center hover:underline">
              Уже есть аккаунт? Войти
            </Link>
          </div>
        </div>
        <Image
          src={signupImage}
          alt="Изображение входа в аккаунт"
          title="Изображение входа в аккаунт"
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
