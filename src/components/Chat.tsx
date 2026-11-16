import { styled } from 'goober'
import { useMemo, useState } from 'react'

const Wrap = styled('div')`
  position: fixed;
  left: 18px;
  bottom: 18px;
  z-index: 40;
  width: min(360px, calc(100vw - 36px));
`

const Shell = styled('div')`
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 999px;
  background: rgba(8, 10, 12, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  overflow: hidden;
  transition: border-radius 220ms ease, background 220ms ease;
`

const Expanded = styled('div')`
  max-height: 260px;
  overflow: auto;
  padding: 14px 16px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Msg = styled('button')`
  background: none;
  border: 0;
  padding: 0;
  text-align: left;
  cursor: pointer;
  color: rgba(244, 244, 244, 0.9);
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  &:hover {
    opacity: 0.7;
  }
`

const Prompt = styled('p')`
  margin: 4px 0 0;
  font-size: 12px;
  letter-spacing: 0.06em;
  color: rgb(244, 244, 244);
`

const Input = styled('textarea')`
  width: 100%;
  resize: none;
  border: 0;
  outline: none;
  background: transparent;
  padding: 12px 16px;
  min-height: 44px;
  max-height: 88px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 1.4;

  &::placeholder {
    color: rgba(244, 244, 244, 0.55);
  }
`

const replies: Record<string, string> = {
  games: 'We build real-time multiplayer worlds and game-like web experiences.',
  multiplayer: 'From Paper Planes to Secret Sky — shared presence across devices.',
  'xr / vr / ai': 'XR, VR and generative AI sit at the center of our recent work.',
  installations: 'Physical + digital installations for conferences, museums and brands.',
  websites: 'Award-winning WebGL websites that become part of the brand story.',
}

type Props = {
  onPickTopic?: (topic: string) => void
}

export function Chat({ onPickTopic }: Props) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [answer, setAnswer] = useState<string | null>(null)

  const suggestions = useMemo(
    () => ['-> games', '-> multiplayer', '-> XR / VR / AI', '-> installations', '-> websites'],
    [],
  )

  const ask = (raw: string) => {
    const key = raw.replace(/^->\s*/, '').trim().toLowerCase()
    const hit =
      Object.entries(replies).find(([k]) => key.includes(k))?.[1] ??
      'Founded in 2012. We blend story, art & technology as an in-house team of passionate makers.'
    setAnswer(hit)
    onPickTopic?.(key)
  }

  return (
    <Wrap>
      <Shell style={{ borderRadius: open || answer ? '18px' : '999px' }}>
        {(open || answer) && (
          <Expanded>
            {suggestions.map((s) => (
              <Msg
                key={s}
                type="button"
                className="home"
                title={s}
                onClick={() => {
                  setOpen(true)
                  ask(s)
                }}
              >
                {s}
              </Msg>
            ))}
            <Prompt>{answer ?? 'What are you looking for?'}</Prompt>
          </Expanded>
        )}
        <Input
          maxLength={100}
          rows={1}
          placeholder="Ask me anything..."
          value={value}
          onFocus={() => setOpen(true)}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              if (value.trim()) {
                ask(value)
                setValue('')
              }
            }
          }}
        />
      </Shell>
    </Wrap>
  )
}
