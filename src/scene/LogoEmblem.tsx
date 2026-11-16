import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { logoObj } from './theatre'

export function LogoEmblem({ scroll }: { scroll: number }) {
  const group = useRef<THREE.Group>(null)
  const ribbons = useRef<THREE.Group>(null)

  useEffect(() => {
    const unsub = logoObj.onValuesChange((v) => {
      if (!group.current) return
      group.current.rotation.y = v.rotationY
      group.current.position.y = v.positionY
      group.current.scale.setScalar(v.scale)
      if (ribbons.current) ribbons.current.rotation.z = v.ribbonTwist
    })
    return unsub
  }, [])

  useFrame((_, dt) => {
    if (!group.current) return
    const t = performance.now() * 0.001
    group.current.rotation.y += dt * 0.12
    group.current.position.y = Math.sin(t * 0.7) * 0.04 - scroll * 0.35
    group.current.rotation.x = scroll * 0.28
    if (ribbons.current) {
      ribbons.current.rotation.y = t * 0.2
      ribbons.current.position.y = -0.62 - scroll * 0.2
    }
  })

  const chrome = {
    color: '#d7dde8',
    metalness: 1,
    roughness: 0.14,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    envMapIntensity: 1.6,
  } as const

  return (
    <group ref={group} position={[0, 0.12, 0]}>
      {/* Outer ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.78, 0.05, 48, 160]} />
        <meshPhysicalMaterial
          {...chrome}
          iridescence={0.7}
          iridescenceIOR={1.3}
          iridescenceThicknessRange={[120, 480]}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.78, 0.014, 24, 160]} />
        <meshBasicMaterial color="#8ecbff" transparent opacity={0.28} />
      </mesh>

      {/* Active Theory lowercase "a" mark */}
      <Text
        position={[0.02, -0.02, 0.06]}
        fontSize={0.95}
        anchorX="center"
        anchorY="middle"
        letterSpacing={-0.04}
        color="#e8eef6"
      >
        a
        <meshPhysicalMaterial {...chrome} />
      </Text>

      {/* Glass ribbons under the emblem */}
      <group ref={ribbons} position={[0, -0.62, 0]}>
        {[0, 1].map((i) => (
          <mesh key={i} rotation={[0.2 + i * 0.08, 0.1, i === 0 ? 0.45 : -0.5]} scale={[1, 1, 0.6]}>
            <torusGeometry args={[0.62 + i * 0.1, 0.011, 16, 128, Math.PI * 1.2]} />
            <meshPhysicalMaterial
              color="#c5d0de"
              metalness={0.85}
              roughness={0.18}
              transparent
              opacity={0.5}
              transmission={0.45}
              thickness={0.5}
            />
          </mesh>
        ))}
      </group>
    </group>
  )
}
