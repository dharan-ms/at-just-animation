import { useEffect, useState } from 'react'

export function useScrollProgress(enabled = true) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!enabled) return

    const el = document.getElementById('fx-scroll')
    if (!el) return

    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight
      setProgress(max > 0 ? el.scrollTop / max : 0)
    }

    onScroll()
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [enabled])

  return progress
}
