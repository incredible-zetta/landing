"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

/**
 * Initializes scroll-driven motion for the landing page.
 * Targets data attributes set on Astro markup; cleans up on unmount.
 */
export function ScrollMotion() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        el.style.opacity = "1"
        el.style.transform = "none"
      })
      return
    }

    const ctx = gsap.context(() => {
      gsap.set("[data-reveal]", { opacity: 0, y: 36 })
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 88%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.08,
            overwrite: true,
          }),
      })

      document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = Number(el.dataset.parallax || 0.2)
        gsap.to(el, {
          yPercent: speed * 30,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement || el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        })
      })

      const marquee = document.querySelector<HTMLElement>("[data-marquee-track]")
      if (marquee) {
        const distance = marquee.scrollWidth / 2
        gsap.to(marquee, {
          x: -distance,
          duration: 28,
          ease: "none",
          repeat: -1,
        })
      }

      const stack = document.querySelector<HTMLElement>("[data-stack]")
      if (stack && window.matchMedia("(min-width: 1024px)").matches) {
        const panels = gsap.utils.toArray<HTMLElement>("[data-stack-panel]")
        panels.forEach((panel, i) => {
          if (i === 0) return
          gsap.fromTo(
            panel,
            { yPercent: 28, opacity: 0.35 },
            {
              yPercent: 0,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                start: "top 80%",
                end: "top 30%",
                scrub: true,
              },
            },
          )
        })
      }

      const story = document.querySelector<HTMLElement>("[data-story]")
      if (story && window.matchMedia("(min-width: 768px)").matches) {
        const lines = gsap.utils.toArray<HTMLElement>("[data-story-line]")
        gsap.fromTo(
          lines,
          { yPercent: 40, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            stagger: 0.15,
            ease: "none",
            scrollTrigger: {
              trigger: story,
              start: "top 70%",
              end: "top 25%",
              scrub: true,
            },
          },
        )
      }

      gsap.fromTo(
        "[data-hero-brand]",
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.05 },
      )
      gsap.fromTo(
        "[data-hero-copy]",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.2, stagger: 0.1 },
      )
    })

    return () => ctx.revert()
  }, [])

  return null
}
