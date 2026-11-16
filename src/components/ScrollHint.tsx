import { styled, keyframes } from 'goober'

const pulse = keyframes`
  0%, 100% { opacity: 0.35; transform: translateY(0); }
  50% { opacity: 0.95; transform: translateY(3px); }
`

const Hint = styled('div')`
  position: fixed;
  top: 28%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  letter-spacing: 0.22em;
  font-size: 11px;
  text-transform: uppercase;
  color: rgba(220, 228, 236, 0.78);
  pointer-events: none;
  animation: ${pulse} 2.4s ease-in-out infinite;
  transition: opacity 400ms ease;
`

export function ScrollHint({ visible, label = 'Scroll Down' }: { visible: boolean; label?: string }) {
  return <Hint style={{ opacity: visible ? 1 : 0 }}>{label}</Hint>
}
