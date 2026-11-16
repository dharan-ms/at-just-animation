import { styled } from 'goober'

const Pill = styled('nav')`
  position: fixed;
  top: 22px;
  right: 22px;
  z-index: 40;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 18px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 999px;
  background: rgba(8, 10, 12, 0.45);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  letter-spacing: 0.14em;
  font-size: 12px;
  text-transform: uppercase;
`

const LinkBtn = styled('button')`
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
  color: rgba(244, 244, 244, 0.92);
  transition: opacity 180ms ease;

  &:hover {
    opacity: 0.65;
  }
`

const Divider = styled('span')`
  opacity: 0.45;
`

type Props = {
  onWork: () => void
  onContact: () => void
}

export function Nav({ onWork, onContact }: Props) {
  return (
    <Pill aria-label="Primary">
      <LinkBtn type="button" onClick={onWork} aria-label="Work">
        Work
      </LinkBtn>
      <Divider>—</Divider>
      <LinkBtn type="button" onClick={onContact} aria-label="Contact">
        Contact
      </LinkBtn>
    </Pill>
  )
}
