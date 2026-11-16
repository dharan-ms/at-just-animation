import { Environment, PerspectiveCamera } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { cameraObj } from './theatre'
import { LogoEmblem } from './LogoEmblem'
import { Particles } from './Particles'

function SceneCamera({ scroll }: { scroll: number }) {
  const cam = useRef<THREE.PerspectiveCamera>(null)

  useEffect(() => {
    return cameraObj.onValuesChange((v) => {
      if (!cam.current) return
      cam.current.position.z = v.z
      cam.current.position.y = v.y
      cam.current.fov = v.fov
      cam.current.updateProjectionMatrix()
    })
  }, [])

  useFrame(({ clock, pointer }) => {
    if (!cam.current) return
    const t = clock.elapsedTime
    cam.current.position.x = THREE.MathUtils.lerp(
      cam.current.position.x,
      pointer.x * 0.25,
      0.04,
    )
    cam.current.position.y = THREE.MathUtils.lerp(
      cam.current.position.y,
      0.15 + pointer.y * 0.12 - scroll * 0.8,
      0.04,
    )
    cam.current.position.z = THREE.MathUtils.lerp(cam.current.position.z, 4.2 - scroll * 1.6, 0.05)
    cam.current.lookAt(0, Math.sin(t * 0.2) * 0.05 - scroll * 0.3, 0)
  })

  return <PerspectiveCamera ref={cam} makeDefault position={[0, 0.15, 4.2]} fov={42} />
}

function Atmosphere({ scroll }: { scroll: number }) {
  const color = useMemo(() => {
    const c = new THREE.Color().setHSL(0.48 - scroll * 0.08, 0.35, 0.035 + scroll * 0.01)
    return `#${c.getHexString()}`
  }, [scroll])

  return (
    <>
      <color attach="background" args={[color]} />
      <fog attach="fog" args={[color, 3.5, 12]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 4, 2]} intensity={1.4} color="#cfe3ff" />
      <pointLight position={[-2.5, 1.5, 1]} intensity={2.2} color="#4fd0c8" distance={8} />
      <pointLight position={[1.5, -1, 2]} intensity={1.4} color="#e8b45a" distance={7} />
      <mesh position={[0, -1.8 - scroll * 0.4, -1]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[6, 64]} />
        <meshStandardMaterial color="#0a1014" roughness={0.95} metalness={0.2} />
      </mesh>
    </>
  )
}

function World({ scroll }: { scroll: number }) {
  return (
    <>
      <SceneCamera scroll={scroll} />
      <Atmosphere scroll={scroll} />
      <hemisphereLight args={['#9ecbff', '#0a1014', 0.55]} />
      <spotLight
        position={[2.5, 3.5, 3]}
        angle={0.55}
        penumbra={0.6}
        intensity={3.2}
        color="#ffffff"
      />
      <LogoEmblem scroll={scroll} />
      <Particles scroll={scroll} />
      <Suspense fallback={null}>
        <Environment preset="warehouse" environmentIntensity={0.55} />
      </Suspense>
    </>
  )
}

export function Experience({ scroll }: { scroll: number }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', background: '#000' }}
    >
      <World scroll={scroll} />
    </Canvas>
  )
}
