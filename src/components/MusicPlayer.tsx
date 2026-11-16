import { styled } from 'goober'
import { useState } from 'react'

const Player = styled('div')`
  position: fixed;
  top: 22px;
  left: 22px;
  z-index: 40;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  background: rgba(8, 10, 12, 0.35);
  backdrop-filter: blur(8px);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.8;
`

const Btn = styled('button')`
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
  color: inherit;
`

export function MusicPlayer() {
  const [on, setOn] = useState(false)
  return (
    <Player aria-label="Music player">
      <Btn type="button" aria-label="Toggle Audio" onClick={() => setOn((v) => !v)}>
        {on ? '>>' : '<<'}
      </Btn>
      <span>{on ? 'Song--Artist' : 'Toggle Audio'}</span>
      <Btn type="button" aria-label="Next track" onClick={() => setOn(true)}>
        {'>>'}
      </Btn>
    </Player>
  )
}
