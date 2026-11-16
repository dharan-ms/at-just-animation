import { styled, keyframes } from 'goober'

const drift = keyframes`
  0% { transform: translate(0, 0); }
  100% { transform: translate(-2%, 2%); }
`

const Overlay = styled('div')`
  position: fixed;
  inset: -20%;
  z-index: 25;
  pointer-events: none;
  opacity: 0.18;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  animation: ${drift} 0.35s steps(2) infinite;
`

const Scanlines = styled('div')`
  position: fixed;
  inset: 0;
  z-index: 24;
  pointer-events: none;
  background: repeating-linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0px,
    rgba(0, 0, 0, 0) 2px,
    rgba(0, 0, 0, 0.12) 3px
  );
  opacity: 0.35;
`

const Vignette = styled('div')`
  position: fixed;
  inset: 0;
  z-index: 23;
  pointer-events: none;
  background: radial-gradient(ellipse at center, transparent 35%, rgba(0, 0, 0, 0.55) 100%);
`

export function GrainOverlay() {
  return (
    <>
      <Overlay aria-hidden />
      <Scanlines aria-hidden />
      <Vignette aria-hidden />
    </>
  )
}
