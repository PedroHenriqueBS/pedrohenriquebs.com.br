import { useEffect } from 'react'

const REVEALED_CLASSES = ['opacity-100', 'translate-y-0'] as const
const HIDDEN_CLASSES = ['opacity-0', 'translate-y-8'] as const

/**
 * Progressively reveals every `[data-reveal]` element as it enters the
 * viewport. Elements already visible on load (and users with reduced motion)
 * are never hidden.
 */
export function useRevealOnScroll(): void {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !('IntersectionObserver' in window)) return

    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    const reveal = (element: HTMLElement) => {
      element.classList.remove(...HIDDEN_CLASSES)
      element.classList.add(...REVEALED_CLASSES)
      observer.unobserve(element)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) reveal(entry.target as HTMLElement)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' },
    )

    const isInView = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect()
      return rect.top < window.innerHeight - 30 && rect.bottom > 0
    }

    for (const [index, element] of elements.entries()) {
      element.style.transitionDelay = `${(index % 3) * 90}ms`
      element.classList.add('transition-[opacity,transform]', 'duration-700', 'ease-out')
      if (isInView(element)) continue
      element.classList.add(...HIDDEN_CLASSES)
      observer.observe(element)
    }

    // Failsafe: nothing may stay hidden forever (e.g. observer never firing).
    const failsafe = setTimeout(() => {
      for (const element of elements) {
        if (element.classList.contains('opacity-0') && isInView(element)) reveal(element)
      }
    }, 2500)

    return () => {
      clearTimeout(failsafe)
      observer.disconnect()
    }
  }, [])
}
