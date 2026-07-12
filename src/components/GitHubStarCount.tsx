"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"
import { cn } from "~/lib/utils"

function formatStars(n: number) {
  return new Intl.NumberFormat("en", {
    notation: n >= 1000 ? "compact" : "standard",
    maximumFractionDigits: 1,
  }).format(n)
}

function broadcastStars(count: number) {
  document.querySelectorAll<HTMLElement>("[data-repo-stars]").forEach((el) => {
    // Keep compact formatting only inside the live navbar widget.
    if (el.closest("[data-repo-stars-live]")) {
      el.textContent = formatStars(count)
    } else {
      el.textContent = count.toLocaleString()
    }
  })
  document.dispatchEvent(
    new CustomEvent("zetta:stars", { detail: { stars: count } }),
  )
}

export function GitHubStarCount({
  initial = 0,
  apiUrl,
  className,
  showIcon = true,
}: {
  initial?: number
  apiUrl: string
  className?: string
  showIcon?: boolean
}) {
  const [stars, setStars] = useState(initial)

  useEffect(() => {
    let cancelled = false

    const refresh = async () => {
      try {
        const res = await fetch(apiUrl, {
          headers: { Accept: "application/vnd.github+json" },
        })
        if (!res.ok) return
        const repo = await res.json()
        if (cancelled) return
        if (typeof repo?.stargazers_count === "number") {
          setStars(repo.stargazers_count)
          broadcastStars(repo.stargazers_count)
        }
      } catch {
        /* keep last known value */
      }
    }

    refresh()
    const id = window.setInterval(refresh, 60_000)
    return () => {
      cancelled = true
      window.clearInterval(id)
    }
  }, [apiUrl])

  return (
    <span
      className={cn("inline-flex items-center gap-1 tabular-nums", className)}
      data-repo-stars-live
      title={`${stars.toLocaleString()} GitHub stars`}
    >
      {showIcon ? <Star className="size-3.5 fill-current opacity-70" /> : null}
      <span data-repo-stars>{formatStars(stars)}</span>
    </span>
  )
}
