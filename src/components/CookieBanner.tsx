import { styled } from 'goober'
import { useEffect, useState } from 'react'

const Banner = styled('div')`
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 60;
  width: min(360px, calc(100vw - 36px));
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 16px;
  background: rgba(8, 10, 12, 0.82);
  backdrop-filter: blur(12px);
  padding: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 11px;
  line-height: 1.5;
`

const Text = styled('p')`
  margin: 0 0 12px;
  opacity: 0.85;

  a {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`

const Row = styled('div')`
  display: flex;
  gap: 10px;
`

const Btn = styled('button')`
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 999px;
  background: transparent;
  padding: 8px 12px;
  cursor: pointer;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 10px;

  &.accept {
    background: rgba(255, 255, 255, 0.08);
  }
`

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const key = 'at-cookies'
    if (!localStorage.getItem(key)) setVisible(true)
  }, [])

  if (!visible) return null

  const choose = (value: 'accept' | 'reject') => {
    localStorage.setItem('at-cookies', value)
    setVisible(false)
  }

  return (
    <Banner>
      <Text>
        Our site uses essential cookies and, with your consent, analytics cookies. Details in{' '}
        <a href="https://activetheory.notion.site/privacy" target="_blank" rel="noreferrer">
          Privacy Notice.
        </a>
      </Text>
      <Row>
        <Btn type="button" className="accept" onClick={() => choose('accept')}>
          Accept Cookies
        </Btn>
        <Btn type="button" onClick={() => choose('reject')}>
          Reject Cookies
        </Btn>
      </Row>
    </Banner>
  )
}
