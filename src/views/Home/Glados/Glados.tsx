import { useAnimations, useGLTF, useScroll } from '@react-three/drei'
import { useEffect, useLayoutEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import THREE from 'three'

function Glados(props: any) {
  // This hook gives you offets, ranges and other useful things
  const scroll = useScroll()
  const { scene, nodes, animations } = useGLTF('/snowman_monster.glb')
  const { actions } = useAnimations(animations, scene);

  useLayoutEffect(() => {
    Object.values(nodes).forEach((node) => {
      // node.receiveShadow = node.castShadow = true
      node.frustumCulled = false;
    })
  })
  //
  useEffect(() => {
    console.log(actions);
    if (actions === null) return
    actions['Idle']!.play().paused = false
  }, [actions])
  //
  // useFrame((state, delta) => {
  //   const action = actions['Take 001']
  //
  //   if (action === null) return
  //   // The offset is between 0 and 1, you can apply it to your models any way you like
  //   const offset = 1 - scroll.offset
  //   action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)
  //   state.camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * -10)
  //   state.camera.lookAt(0, 0, 0)
  // })

  return <primitive object={scene} {...props}/>
}

useGLTF.preload('/snowman_monster.glb')


export default Glados;
