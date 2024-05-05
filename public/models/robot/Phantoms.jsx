/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 phantoms.glb --transform 
Files: phantoms.glb [6.41MB] > /Users/jini.choi/Documents/jini/3d_gsap_test/public/models/robot/phantoms-transformed.glb [192.39KB] (97%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/phantoms-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cylindre005.geometry} material={nodes.Cylindre005.material} position={[-0.017, 2.754, -0.066]} rotation={[-Math.PI, 0, 0]} scale={0.582} />
      <mesh geometry={nodes.Cube001.geometry} material={materials.Metal} position={[-0.214, 0.163, 0.365]} rotation={[0, -0.152, 0]} scale={0.146} />
    </group>
  )
}

useGLTF.preload('/phantoms-transformed.glb')
