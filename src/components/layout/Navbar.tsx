"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import clublogo from "../../app/assets/dsai-club-logo.png";
import { cn } from "../../lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Team", href: "/team" },
  { label: "Projects & Events", href: "/projects_events" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src={clublogo}
            alt="DSAI Club logo"
            className="w-10 h-10 md:w-11 md:h-11 rounded-lg object-contain bg-white/90 p-1 shadow-sm transition-transform duration-200 group-hover:scale-105"
            priority
          />

          <span className="text-xl font-bold text-foreground">DSAI</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 md:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                  isActive
                    ? "bg-secondary text-primary"
                    : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
export default Navbar;