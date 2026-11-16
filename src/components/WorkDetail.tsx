import { styled } from 'goober'
import { useEffect } from 'react'
import type { Project } from '../data/projects'

const Stage = styled('div')`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: grid;
  place-items: center;
  padding: 8vh 4vw 12vh;
  background: radial-gradient(ellipse at 20% 10%, rgba(40, 90, 80, 0.28), transparent 45%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.72));
`

const Frame = styled('article')`
  position: relative;
  width: min(920px, 92vw);
  height: min(560px, 62vh);
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.55);
  background: #111;
`

const Media = styled('div')<{ $src: string; $accent: string }>`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, transparent 35%, rgba(0, 0, 0, 0.78) 100%),
    radial-gradient(circle at 70% 20%, ${(p) => p.$accent}33, transparent 45%),
    url(${(p) => p.$src}) center/cover no-repeat;
  filter: saturate(1.05) contrast(1.05);
  transform: scale(1.02);
`

const Copy = styled('div')`
  position: absolute;
  left: 22px;
  right: 22px;
  bottom: 22px;
  max-width: 520px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`

const Title = styled('h1')`
  margin: 0 0 8px;
  font-size: clamp(18px, 2.4vw, 28px);
  font-weight: 400;
  letter-spacing: 0.14em;
`

const Meta = styled('p')`
  margin: 0 0 12px;
  font-size: 11px;
  opacity: 0.75;
  letter-spacing: 0.16em;
`

const Desc = styled('p')`
  margin: 0 0 16px;
  font-size: 11px;
  line-height: 1.55;
  opacity: 0.88;
  max-width: 46ch;
`

const Actions = styled('div')`
  display: flex;
  gap: 18px;
  align-items: center;
  font-size: 11px;
  letter-spacing: 0.14em;
`

const Action = styled('button')`
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #f4f4f4;

  &:hover {
    opacity: 0.7;
  }
`

const ActionLink = styled('a')`
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #f4f4f4;
  text-decoration: underline;
  text-underline-offset: 4px;

  &:hover {
    opacity: 0.7;
  }
`

const ScrollClose = styled('div')`
  position: absolute;
  top: 6vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 51;
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  opacity: 0.75;
  pointer-events: none;
`

const Rail = styled('div')`
  position: absolute;
  left: 22px;
  top: 18%;
  bottom: 28%;
  width: 2px;
  display: none;

  @media (min-width: 900px) {
    display: block;
  }
`

type Props = {
  project: Project
  onClose: () => void
  onScrollClose?: () => void
}

export function WorkDetail({ project, onClose, onScrollClose }: Props) {
  useEffect(() => {
    let acc = 0
    const onWheel = (e: WheelEvent) => {
      acc += Math.abs(e.deltaY)
      if (acc > 180) onScrollClose?.()
    }
    window.addEventListener('wheel', onWheel, { passive: true })
    return () => window.removeEventListener('wheel', onWheel)
  }, [onScrollClose])

  return (
    <Stage role="dialog" aria-label={project.title}>
      <ScrollClose>Scroll to Close</ScrollClose>
      <Frame>
        <Media $src={project.image} $accent={project.accent} />
        <Copy>
          <Title>{project.title}</Title>
          <Meta>{project.tags}</Meta>
          <Desc>{project.description}</Desc>
          <Actions>
            {project.link && (
              <ActionLink href={project.link} target="_blank" rel="noreferrer">
                Project Link
              </ActionLink>
            )}
            <Action type="button" onClick={onClose}>
              &lt;- Close
            </Action>
          </Actions>
        </Copy>
        <Rail aria-hidden />
      </Frame>
    </Stage>
  )
}
