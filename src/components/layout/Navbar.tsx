"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import LuvantLogo from "@/components/brand/LuvantLogo";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";
import { NAV_LINKS } from "@/lib/constants";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6">
        <motion.nav
          initial={false}
          animate={{
            backgroundColor: scrolled
              ? "rgba(10, 10, 10, 0.8)"
              : "rgba(10, 10, 10, 0)",
            borderColor: scrolled
              ? "rgba(255, 255, 255, 0.06)"
              : "rgba(255, 255, 255, 0)",
            boxShadow: scrolled
              ? "0 4px 30px rgba(0, 0, 0, 0.3)"
              : "0 0 0 rgba(0, 0, 0, 0)",
          }}
          transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-2xl border px-5 backdrop-blur-xl"
        >
          {/* Logo */}
          <Link href="/" aria-label="Ir al inicio" className="shrink-0">
            <LuvantLogo variant="horizontal" size={24} />
          </Link>

          {/* Desktop links — centered */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative rounded-lg px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-luvant-500 hover:text-luvant-300"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg bg-white/[0.06]"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <Button
                as="a"
                href="/contacto"
                size="sm"
                className="h-8 rounded-lg px-4 text-[13px]"
              >
                Hablemos
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="inline-flex items-center justify-center rounded-lg p-1.5 text-luvant-400 transition-colors hover:text-white md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu size={20} />
            </button>
          </div>
        </motion.nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
