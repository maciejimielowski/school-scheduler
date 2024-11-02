"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { BookOpen, CalendarDays, GraduationCap, Users } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="flex items-center text-xl font-medium transition-colors hover:text-primary"
      >
        <GraduationCap className="mr-2 h-6 w-6" />
        Liceum Królowej Jadwigi
      </Link>
      <Link
        href="/schedule"
        className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <CalendarDays className="mr-2 h-4 w-4" />
        Plan Lekcji
      </Link>
      <Link
        href="/subjects"
        className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <BookOpen className="mr-2 h-4 w-4" />
        Przedmioty
      </Link>
      <Link
        href="/teachers"
        className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <Users className="mr-2 h-4 w-4" />
        Nauczyciele
      </Link>
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </nav>
  );
}