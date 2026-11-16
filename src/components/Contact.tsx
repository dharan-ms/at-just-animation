import { styled } from 'goober'

const Panel = styled('div')`
  position: fixed;
  inset: 0;
  z-index: 45;
  display: grid;
  place-items: center;
  padding: 10vh 6vw;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
`

const Card = styled('div')`
  width: min(520px, 100%);
  text-transform: uppercase;
  letter-spacing: 0.12em;
`

const Eyebrow = styled('p')`
  margin: 0 0 18px;
  font-size: 11px;
  opacity: 0.6;
`

const Title = styled('h2')`
  margin: 0 0 16px;
  font-size: clamp(22px, 4vw, 34px);
  font-weight: 400;
  letter-spacing: 0.16em;
`

const Body = styled('p')`
  margin: 0 0 28px;
  font-size: 12px;
  line-height: 1.7;
  opacity: 0.85;
  max-width: 42ch;
`

const Links = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`

const Pill = styled('a')`
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 999px;
  padding: 10px 16px;
  font-size: 11px;
  letter-spacing: 0.14em;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }
`

const Close = styled('button')`
  position: absolute;
  top: 24px;
  left: 24px;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 999px;
  padding: 10px 16px;
  cursor: pointer;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-size: 11px;
`

type Props = { onClose: () => void }

export function Contact({ onClose }: Props) {
  return (
    <Panel>
      <Close type="button" onClick={onClose}>
        &lt;- Close
      </Close>
      <Card>
        <Eyebrow>Contact</Eyebrow>
        <Title>Let’s make something</Title>
        <Body>
          Founded in 2012. We blend story, art & technology as an in-house team of passionate
          makers. Our industry-leading web toolset consistently delivers award-winning work through
          quality & performance.
        </Body>
        <Links>
          <Pill href="mailto:hello@activetheory.net">hello@activetheory.net</Pill>
          <Pill href="https://www.instagram.com/activetheory/" target="_blank" rel="noreferrer">
            Instagram
          </Pill>
          <Pill href="https://www.linkedin.com/company/active-theory" target="_blank" rel="noreferrer">
            LinkedIn
          </Pill>
        </Links>
      </Card>
    </Panel>
  )
}
