"use client"

import { useRouter } from 'next/navigation'
import { Input } from './ui/input';
import { SearchIcon } from 'lucide-react';

export default function SearchField() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const q = (form.q as HTMLInputElement).value.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
  }

  return (
    <form onSubmit={handleSubmit} method='GET' action="/search">
      <div className="relative">
        <Input name="q" placeholder="Поиск" className="pe-10 bg-secondary" />
        <SearchIcon className="absolute right-3 top-1/2 size-5 -translate-y-1/2 transform to-muted-foreground" />
      </div>
    </form>
  );
}