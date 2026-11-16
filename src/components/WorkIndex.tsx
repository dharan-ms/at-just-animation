import { styled } from 'goober'
import type { Project } from '../data/projects'

const Panel = styled('div')`
  position: fixed;
  inset: 0;
  z-index: 45;
  display: grid;
  place-items: center;
  padding: 10vh 6vw;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(6px);
`

const List = styled('div')`
  width: min(720px, 100%);
  max-height: 70vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Item = styled('button')`
  background: none;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  padding: 14px 4px;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 13px;
  color: #f4f4f4;
  transition: opacity 160ms ease, padding-left 160ms ease;

  &:hover {
    opacity: 0.7;
    padding-left: 8px;
  }
`

const Meta = styled('span')`
  opacity: 0.55;
  font-size: 11px;
  white-space: nowrap;
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

type Props = {
  projects: Project[]
  onSelect: (slug: string) => void
  onClose: () => void
}

export function WorkIndex({ projects, onSelect, onClose }: Props) {
  return (
    <Panel>
      <Close type="button" onClick={onClose}>
        &lt;- Close
      </Close>
      <List>
        {projects.map((p) => (
          <Item key={p.slug} type="button" onClick={() => onSelect(p.slug)}>
            <span>{p.title}</span>
            <Meta>
              {p.year} / {p.client}
            </Meta>
          </Item>
        ))}
      </List>
    </Panel>
  )
}
