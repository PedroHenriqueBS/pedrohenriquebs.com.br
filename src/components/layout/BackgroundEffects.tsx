/** Fixed decorative background: subtle dev-grid + top glow. */
export function BackgroundEffects() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 [background-image:linear-gradient(--alpha(var(--color-accent)/4%)_1px,transparent_1px),linear-gradient(90deg,--alpha(var(--color-accent)/4%)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_90%_70%_at_50%_0%,black_40%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -top-[220px] left-1/2 z-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full [background:radial-gradient(closest-side,--alpha(var(--color-accent)/9%),transparent)]"
      />
    </>
  )
}
