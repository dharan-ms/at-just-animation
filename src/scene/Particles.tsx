import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

export function Particles({ count = 900, scroll = 0 }: { count?: number; scroll?: number }) {
  const ref = useRef<THREE.Points>(null)
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    const speeds = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      const r = 1.2 + Math.random() * 4.5
      const theta = Math.random() * Math.PI * 2
      const y = (Math.random() - 0.45) * 4.5
      positions[i * 3] = Math.cos(theta) * r
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = Math.sin(theta) * r * 0.85
      speeds[i] = 0.15 + Math.random() * 0.55
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    ;(geo as THREE.BufferGeometry & { userData: { speeds: Float32Array } }).userData = { speeds }
    return geo
  }, [count])

  useFrame((_, dt) => {
    const pts = ref.current
    if (!pts) return
    const arr = pts.geometry.attributes.position.array as Float32Array
    const speeds = (pts.geometry as THREE.BufferGeometry & { userData: { speeds: Float32Array } })
      .userData.speeds
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += speeds[i] * dt * (0.25 + scroll * 0.4)
      if (arr[i * 3 + 1] > 2.8) arr[i * 3 + 1] = -2.4
    }
    pts.geometry.attributes.position.needsUpdate = true
    pts.rotation.y += dt * 0.03
  })

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.028}
        color="#e8c56a"
        transparent
        opacity={0.85}
        depthWrite={false}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
