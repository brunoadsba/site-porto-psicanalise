"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre" },
    { href: "/servicos", label: "Serviços" },
    { href: "/blog", label: "Blog" },
    { href: "/depoimentos", label: "Depoimentos" },
    { href: "/contato", label: "Contato" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600">
            <span className="text-xl font-bold text-white">P</span>
          </div>
          <span className="text-xl font-semibold text-gray-900">Psicanálise</span>
        </Link>

        <div className="hidden md:flex md:items-center md:space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-4 py-2 text-base font-medium transition-colors hover:text-indigo-600 ${
                isActive(item.href)
                  ? "text-indigo-600"
                  : "text-gray-700"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" />
              )}
            </Link>
          ))}
          <Link
            href="/agendamento"
            className="rounded-full bg-indigo-600 px-8 py-2.5 text-base font-semibold text-white transition-colors hover:bg-indigo-700 shadow-md hover:shadow-lg"
          >
            Agendar
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-gray-900"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 border-t bg-white px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  isActive(item.href)
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/agendamento"
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-md bg-indigo-600 px-3 py-2 text-base font-medium text-white hover:bg-indigo-700"
            >
              Agendar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

