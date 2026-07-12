"use client"

import { useEffect, useState } from "react"
import { Menu, Star } from "lucide-react"
import { Button } from "~/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet"

type NavLink = { label: string; href: string }

export function MobileNav({
  links,
  github,
  stars = 0,
}: {
  links: NavLink[]
  github: { label: string; count: string; href: string }
  stars?: number
  apiUrl?: string
}) {
  const [liveStars, setLiveStars] = useState(stars)

  useEffect(() => {
    const onStars = (e: Event) => {
      const detail = (e as CustomEvent<{ stars: number }>).detail
      if (typeof detail?.stars === "number") setLiveStars(detail.stars)
    }
    document.addEventListener("zetta:stars", onStars)
    return () => document.removeEventListener("zetta:stars", onStars)
  }, [])

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="lg:hidden"
          aria-label="Open menu"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[min(100%,20rem)]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="mt-4 flex flex-col gap-1 px-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`${github.href}/stargazers`}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center justify-between gap-2 rounded-lg border border-border px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <span className="inline-flex items-center gap-2">
              {github.label}
            </span>
            <span className="inline-flex items-center gap-1 tabular-nums text-muted-foreground">
              <Star className="size-3.5 fill-current opacity-70" />
              <span data-repo-stars>{liveStars.toLocaleString()}</span>
            </span>
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
