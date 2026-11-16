import { styled } from 'goober'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Chat } from './components/Chat'
import { Contact } from './components/Contact'
import { CookieBanner } from './components/CookieBanner'
import { GrainOverlay } from './components/GrainOverlay'
import { MusicPlayer } from './components/MusicPlayer'
import { Nav } from './components/Nav'
import { ScrollHint } from './components/ScrollHint'
import { WorkDetail } from './components/WorkDetail'
import { WorkIndex } from './components/WorkIndex'
import { getProject, projects } from './data/projects'
import { useScrollProgress } from './hooks/useScrollProgress'
import { Experience } from './scene/Experience'

const Stage = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #000;
`

const FXScroll = styled('div')`
  position: fixed;
  inset: 0;
  z-index: 2;
  overflow: hidden auto;
  overscroll-behavior: none;
`

const ScrollSpacer = styled('div')`
  width: 100%;
  height: 620vh;
  pointer-events: none;
`

const Loader = styled('div')`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  background: #000;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 12px;
  transition: opacity 700ms ease;
`

type Overlay = 'none' | 'work' | 'contact'

export default function App() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [overlay, setOverlay] = useState<Overlay>('none')
  const [booting, setBooting] = useState(true)
  const project = useMemo(() => (slug ? getProject(slug) : undefined), [slug])
  const scrollEnabled = !project && overlay === 'none'
  const progress = useScrollProgress(scrollEnabled)

  useEffect(() => {
    const t = window.setTimeout(() => setBooting(false), 1200)
    return () => window.clearTimeout(t)
  }, [])

  useEffect(() => {
    if (project) setOverlay('none')
    document.title = project
      ? `${project.title} · Active Theory`
      : 'Active Theory · Creative Digital Experiences'
  }, [project])

  // Closing work detail when scrolling is simulated via Escape / close button
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (project) navigate('/')
        else setOverlay('none')
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navigate, project])

  return (
    <Stage id="Stage">
      <Experience scroll={progress} />
      <GrainOverlay />

      {scrollEnabled && (
        <FXScroll id="fx-scroll">
          <ScrollSpacer />
        </FXScroll>
      )}

      <MusicPlayer />
      <Nav
        onWork={() => {
          if (project) navigate('/')
          setOverlay('work')
        }}
        onContact={() => {
          if (project) navigate('/')
          setOverlay('contact')
        }}
      />

      <ScrollHint
        visible={scrollEnabled && progress < 0.04}
        label={progress < 0.02 ? 'Scroll Down' : 'Scroll'}
      />

      <Chat
        onPickTopic={(topic) => {
          if (topic.includes('website') || topic.includes('xr') || topic.includes('game')) {
            setOverlay('work')
          }
        }}
      />

      {overlay === 'work' && !project && (
        <WorkIndex
          projects={projects}
          onSelect={(s) => {
            setOverlay('none')
            navigate(`/work/${s}`)
          }}
          onClose={() => setOverlay('none')}
        />
      )}

      {overlay === 'contact' && !project && <Contact onClose={() => setOverlay('none')} />}

      {project && (
        <WorkDetail
          project={project}
          onClose={() => navigate('/')}
          onScrollClose={() => navigate('/')}
        />
      )}

      <CookieBanner />

      <Loader style={{ opacity: booting ? 1 : 0, pointerEvents: booting ? 'auto' : 'none' }}>
        Active Theory
      </Loader>
    </Stage>
  )
}
