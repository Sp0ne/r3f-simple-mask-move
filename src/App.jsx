import * as THREE from 'three'

import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import {
  Mask,
  useMask,
  OrbitControls,
  PerspectiveCamera,
  Environment,
  useGLTF,
  RoundedBox,
  ContactShadows,
  MeshDistortMaterial
} from '@react-three/drei'
import { useControls } from 'leva'

import './styles.css'

function Elephant({ wireframe = false, invert = true, ...props }) {
  const group = useRef()
  const stencil = useMask(1, invert)
  const { nodes, materials } = useGLTF('/bblocks-elephpant.gltf')
  const { anim } = useControls({
    anim: false
  })
  useFrame(() => {
    if (anim) group.current.rotation.y = group.current.rotation.y += 0.01
  })
  return (
    <group ref={group} position={[0, 0, 0]} rotation={[0, -Math.PI / 2, 0]} dispose={null} castShadow receiveShadow {...props}>
      <mesh geometry={nodes.Elephant.geometry} material={materials['Material']} scale={0.2}>
        {wireframe ? <meshStandardMaterial color="#ffffff" wireframe {...stencil} /> : <meshPhongMaterial color="#e04de8" {...stencil} />}
      </mesh>
    </group>
  )
}
useGLTF.preload('/bblocks-elephpant.gltf')

function Box({ args = [1, 4, 1], radius = 0.05, smoothness = 4, color = 'white', wireframe = false, invert = true, ...boxProps }) {
  const boxRef = useRef()
  const stencil = useMask(1, invert)
  const { anim } = useControls({
    anim: false
  })
  useFrame(() => {
    if (anim) boxRef.current.rotation.y = boxRef.current.rotation.y += 0.01
  })
  return (
    <RoundedBox ref={boxRef} args={args} radius={radius} smoothness={smoothness} {...boxProps}>
      <meshPhongMaterial color={color} wireframe={wireframe} {...stencil} />
    </RoundedBox>
  )
}

function MaskedContent({ invert, ...props }) {
  const group = useRef()
  return (
    <group {...props} ref={group}>
      <Box args={[2, 2, 2]} position={[-2, 0, -2]} wireframe invert={invert} />
      <Elephant wireframe invert={invert} position={[2, -1, -2]} />
    </group>
  )
}

function PlaneMask({ colorWrite, ...props }) {
  const ref = useRef()
  const { viewport } = useThree()
  const vec = new THREE.Vector3()
  const [clicked, click] = useState(false)
  const { distortMask } = useControls({
    distortMask: false
  })
  useFrame(({ mouse }) => {
    ref.current.position.lerp(vec.set((mouse.x * viewport.width) / 4, (mouse.y * viewport.height) / 4, 4), 0.5)
  })

  return (
    <group ref={ref} position={[0, 0, 4]} onClick={() => click(!clicked)}>
      <Mask id={1} colorWrite={colorWrite} depthWrite={false}>
        {(spread) => (
          <>
            {clicked ? <planeGeometry args={[1, 1, 32, 32]} {...props} /> : <circleGeometry args={[0.5, 32]} {...props} />}
            {distortMask ? (
              <MeshDistortMaterial color={'#1d0b40'} distort={0.4} radius={1} speed={5} {...spread} />
            ) : (
              <meshStandardMaterial color={'#1d0b40'} {...spread} />
            )}
            {/* 
            <planeGeometry args={[0.5, 0.5, 32, 32]} {...props} /> 
            <meshStandardMaterial color={'#1d0b40'} {...spread} />
            */}
          </>
        )}
      </Mask>
    </group>
  )
}

function App() {
  const mainRef = useRef()
  const { colorWrite, orbitcontrols } = useControls({
    colorWrite: true,
    orbitcontrols: false
  })
  return (
    <main ref={mainRef}>
      <p className="tips">Click to change the geometry of the mask</p>
      <div className="webgl">
        <Canvas dpr={[1, 2]} shadows mode="concurrent" eventSource={mainRef}>
          <PerspectiveCamera position={[0, 0, 8]} far={50} makeDefault />
          <ambientLight intensity={0.3} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
          <Suspense fallback={null}>
            <PlaneMask colorWrite={colorWrite} />
            <MaskedContent invert={false} />
            <group>
              <Elephant position={[2, -1, -2]} />
              <Box color="#e04de8" args={[2, 2, 2]} position={[-2, 0, -2]} />
            </group>
          </Suspense>
          <Environment preset="city" />
          <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
          {orbitcontrols && <OrbitControls makeDefault />}
        </Canvas>
      </div>
      <footer className="footer">
        <span role="img" aria-label="hey">
          👋🏻
        </span>{' '}
        <a href="https://vinces.io" target="_blank" rel="noreferrer" title="Site Vinces.io">
          vinces.io
        </a>{' '}
        〢
        <a href="https://github.com/Sp0ne" target="_blank" rel="noreferrer" title="Github Vinces">
          @Sp0ne
        </a>
      </footer>
    </main>
  )
}

export default App
