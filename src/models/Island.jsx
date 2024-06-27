import { useGLTF } from '@react-three/drei'
import { Html } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import {a} from '@react-spring/three'
import {useFrame, useThree} from '@react-three/fiber'

import islandScene from '../assets/3d/easter_island_low_poly.glb';

export function Island({
  isRotating,
  setIsRotating,
  setCurrentStage,
  currentFocusPoint,
  ...props
}){    const islandRef =  useRef();

  const {gl, viewport} = useThree();
  const { nodes, materials } = useGLTF(islandScene);
  const lastx = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    lastx.current = clientX;
  }

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);


  }

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating){
      
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    const delta = (clientX - lastx.current) / viewport.width;

    islandRef.current.rotation.y += delta * .01 * Math.PI;

    lastx.current = clientX;

    rotationSpeed.current = delta * .01 * Math.PI;
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft'){
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y += .01  * Math.PI;
    } else if (e.key === 'ArrowRight'){
      if (!isRotating) setIsRotating(true);
      islandRef.current.rotation.y -= .01  * Math.PI
    }
  }

  const handleKeyUp = (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
      setIsRotating(false);
    }
  }

  useFrame(() => {
    if (!isRotating){
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < .001){
        rotationSpeed.current = 0;
      }
      islandRef.current.rotation.y += rotationSpeed.current;
    } else{
      const rotation = islandRef.current.rotation.y; 

      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

    // Set the current stage based on the island's orientation
    switch (true) {
      case normalizedRotation >= 0 && normalizedRotation < 1.5:
        setCurrentStage(3);
        break;
      case normalizedRotation >= 1.5 && normalizedRotation < 3:
        setCurrentStage(2);
        break;
      case normalizedRotation >= 3 && normalizedRotation < 4.5:
        setCurrentStage(4);
        break;
      case normalizedRotation >= 4.5 && normalizedRotation < 6:
        setCurrentStage(5);
        break;
      case normalizedRotation >= 6 && normalizedRotation < 2 * Math.PI:
        setCurrentStage(1);
        break;
      default:
        setCurrentStage(null);
    }
  }
  })

  useEffect (() =>{
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return ()  => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])

  return (
    <a.group ref = {islandRef} {...props} >
      <group position={[-5.826, 9.715, -10.805]} rotation={[0, 0, 0.013]} scale={[10, 3, 6]}>
        <mesh
          geometry={nodes.Montanha_lambert13_0.geometry}
          material={materials.lambert13}
        />
        <mesh                
          geometry={nodes.Montanha_Neve_0.geometry}
          material={materials.Neve}
        />
      </group>
      <mesh             
        geometry={nodes.pCube35_pasted__lambert11_0.geometry}
        material={materials.pasted__lambert11}
        position={[10.609, 7.626, 15.525]}
        rotation={[0, 0.097, 0]}
        scale={[0.279, 3.071, 0.279]}
      />
      <mesh    
        geometry={nodes.pCone1_pasted__lambert7_0.geometry}
        material={materials.pasted__lambert7}
        position={[10.604, 9.332, 15.477]}
      />
      <mesh
        
        geometry={nodes.pCone2_pasted__lambert7_0.geometry}
        material={materials.pasted__lambert7}
        position={[10.604, 10.267, 15.477]}
        rotation={[0, 0.681, 0]}
        scale={0.789}
      />
      <mesh
        
        
        geometry={nodes.pCube36_pasted__lambert11_0.geometry}
        material={materials.pasted__lambert11}
        position={[11.085, 7.432, 12.883]}
        rotation={[0, 1.327, 0]}
        scale={[0.279, 2.674, 0.279]}
      />
      <mesh
        
        
        geometry={nodes.pCone3_pasted__lambert7_0.geometry}
        material={materials.pasted__lambert7}
        position={[11.08, 9.139, 12.836]}
        rotation={[0, 1.23, 0]}
        scale={[1, 0.871, 1]}
      />
      <mesh
        
        
        geometry={nodes.pCone4_pasted__lambert7_0.geometry}
        material={materials.pasted__lambert7}
        position={[11.08, 10.073, 12.836]}
        rotation={[0, 0.998, 0]}
        scale={[0.789, 0.687, 0.789]}
      />
      <mesh
        
        
        geometry={nodes.pCube37_pasted__lambert11_0.geometry}
        material={materials.pasted__lambert11}
        position={[14.248, 7.486, 11.907]}
        rotation={[-Math.PI, 0.617, -Math.PI]}
        scale={[0.279, 4.308, 0.279]}
      />
      <mesh
        
        
        geometry={nodes.pCone5_pasted__lambert7_0.geometry}
        material={materials.pasted__lambert7}
        position={[14.242, 9.193, 11.86]}
        rotation={[-Math.PI, 0.714, -Math.PI]}
        scale={[1, 1.403, 1]}
      />
      <mesh
        
        
        geometry={nodes.pCone6_pasted__lambert7_0.geometry}
        material={materials.pasted__lambert7}
        position={[14.242, 10.127, 11.86]}
        rotation={[-Math.PI, 1.154, -Math.PI]}
        scale={[0.789, 1.107, 0.789]}
      />
      <mesh
        
        
        geometry={nodes.pCube38_pasted__lambert11_0.geometry}
        material={materials.pasted__lambert11}
        position={[17.031, 8.691, 7.972]}
        rotation={[-Math.PI, 0.617, -Math.PI]}
        scale={[0.279, 4.308, 0.279]}
      />
      <mesh
        
        
        geometry={nodes.pCone7_pasted__lambert7_0.geometry}
        material={materials.pasted__lambert7}
        position={[17.026, 10.398, 7.924]}
        rotation={[-Math.PI, 0.543, -Math.PI]}
        scale={[1, 1.403, 1]}
      />
      <mesh
        
        
        geometry={nodes.pCone8_pasted__lambert7_0.geometry}
        material={materials.pasted__lambert7}
        position={[17.026, 11.332, 7.924]}
        rotation={[-Math.PI, 0.714, -Math.PI]}
        scale={[0.789, 1.107, 0.789]}
      />
      <mesh
        
        
        geometry={nodes.pCube39_pasted__lambert11_0.geometry}
        material={materials.pasted__lambert11}
        position={[17.031, 8.687, 7.972]}
        rotation={[-Math.PI, 0.617, -Math.PI]}
        scale={[0.279, 4.308, 0.279]}
      />
      <mesh
        
        
        geometry={nodes.pCone9_pasted__lambert7_0.geometry}
        material={materials.pasted__lambert7}
        position={[-14.482, 11.332, 7.924]}
        rotation={[-Math.PI, 0.372, -Math.PI]}
        scale={[0.789, 1.047, 0.789]}
      />
      <mesh
        
        
        geometry={nodes.pCone10_pasted__lambert7_0.geometry}
        material={materials.pasted__lambert7}
        position={[-14.482, 10.398, 7.924]}
        rotation={[-Math.PI, 0.714, -Math.PI]}
        scale={[1, 1.327, 1]}
      />
      <mesh
        
        
        geometry={nodes.pCube40_pasted__lambert11_0.geometry}
        material={materials.pasted__lambert11}
        position={[-14.476, 8.687, 7.972]}
        rotation={[-Math.PI, 0.617, -Math.PI]}
        scale={[0.279, 4.075, 0.279]}
      />
      <mesh
        
        
        geometry={nodes.pCone11_pasted__lambert7_0.geometry}
        material={materials.pasted__lambert7}
        position={[-10.636, 10.583, 15.175]}
        rotation={[-Math.PI, -0.845, -Math.PI]}
        scale={[0.789, 1.047, 0.789]}
      />
      <mesh
        
        
        geometry={nodes.pCone12_pasted__lambert7_0.geometry}
        material={materials.pasted__lambert7}
        position={[-10.636, 9.649, 15.175]}
        rotation={[-Math.PI, -0.489, -Math.PI]}
        scale={[1, 1.327, 1]}
      />
      <mesh
        
        
        geometry={nodes.pCube41_pasted__lambert11_0.geometry}
        material={materials.pasted__lambert11}
        position={[-10.631, 7.938, 15.222]}
        rotation={[-Math.PI, -0.339, -Math.PI]}
        scale={[0.279, 4.075, 0.279]}
      />
      <mesh
        
        
        geometry={nodes.pSphere6_lambert10_0.geometry}
        material={materials.lambert10}
        position={[3.668, 19.169, -11.174]}
        rotation={[-0.151, 0, 0.22]}
        scale={[0.293, 0.284, 0.284]}
      />
      <mesh
        
        
        geometry={nodes.pSphere1_lambert10_0.geometry}
        material={materials.lambert10}
        position={[4.656, 18.409, -11.174]}
        rotation={[0, 0, -0.238]}
        scale={[0.525, 0.509, 0.509]}
      />
      <mesh
        
        
        geometry={nodes.pSphere9_lambert10_0.geometry}
        material={materials.lambert10}
        position={[4.518, 20.225, -11.174]}
        rotation={[0, 0, -0.238]}
        scale={[0.664, 0.644, 0.644]}
      />
      <mesh
        
        
        geometry={nodes.pSphere10_lambert10_0.geometry}
        material={materials.lambert10}
        position={[5.111, 21.265, -11.174]}
        rotation={[0, 0, 0.977]}
        scale={[0.464, 0.449, 0.449]}
      />
      <mesh
        
        
        geometry={nodes.pSphere8_lambert10_0.geometry}
        material={materials.lambert10}
        position={[6.107, 19.207, -11.174]}
        rotation={[0, 0, -0.238]}
        scale={[0.245, 0.237, 0.237]}
      />
      <mesh
        
        
        geometry={nodes.pSphere7_lambert10_0.geometry}
        material={materials.lambert10}
        position={[4.963, 19.559, -11.174]}
        rotation={[0, 0, 0.225]}
        scale={[0.525, 0.509, 0.509]}
      />
      <mesh
        
        
        geometry={nodes.pSphere4_lambert10_0.geometry}
        material={materials.lambert10}
        position={[4.73, 19.442, -11.174]}
        rotation={[0.367, 0, 0]}
        scale={[0.525, 0.509, 0.509]}
      />
      <mesh
        
        
        geometry={nodes.pSphere2_lambert10_0.geometry}
        material={materials.lambert10}
        position={[5.118, 18.943, -11.174]}
        rotation={[-0.151, 0, 0.22]}
        scale={[0.525, 0.509, 0.509]}
      />
      <mesh
        
        
        geometry={nodes.pSphere3_lambert10_0.geometry}
        material={materials.lambert10}
        position={[4.965, 18.147, -11.017]}
        rotation={[0.105, 0.293, -0.03]}
        scale={[0.525, 0.509, 0.509]}
      />
      <mesh
        
        
        geometry={nodes.pSphere5_lambert1_0.geometry}
        material={materials.lambert1}
        position={[4.518, 20.225, -11.174]}
        rotation={[0, 0, -0.238]}
        scale={[0.525, 0.509, 0.509]}
      />
      <mesh
        
        
        geometry={nodes.pSphere11_lambert10_0.geometry}
        material={materials.lambert10}
        position={[3.832, 21.105, -11.174]}
        rotation={[Math.PI, -1.291, 2.904]}
        scale={[0.525, 0.509, 0.509]}
      />
      <mesh
        
        
        geometry={nodes.pSphere12_lambert10_0.geometry}
        material={materials.lambert10}
        position={[5.605, 20.511, -11.174]}
        rotation={[-2.637, -1.254, -2.438]}
        scale={[0.525, 0.509, 0.509]}
      />
      <mesh
        
        
        geometry={nodes.pSphere13_lambert10_0.geometry}
        material={materials.lambert10}
        position={[5.616, 21.916, -11.174]}
        rotation={[Math.PI, -1.291, -2.916]}
        scale={[0.525, 0.509, 0.509]}
      />
      <mesh
        
        
        geometry={nodes.pSphere14_lambert10_0.geometry}
        material={materials.lambert10}
        position={[4.685, 21.798, -11.174]}
        rotation={[2.193, -1.113, 2.245]}
        scale={[0.525, 0.509, 0.509]}
      />
      <mesh
        
        
        geometry={nodes.pSphere15_lambert10_0.geometry}
        material={materials.lambert10}
        position={[4.832, 22.581, -11.174]}
        rotation={[Math.PI, -1.291, 2.904]}
        scale={[0.664, 0.644, 0.644]}
      />
      <mesh
        
        
        geometry={nodes.pSphere16_lambert10_0.geometry}
        material={materials.lambert10}
        position={[5.425, 23.621, -11.174]}
        rotation={[Math.PI, -1.291, -2.164]}
        scale={[0.464, 0.449, 0.449]}
      />
      <mesh
        
        
        geometry={nodes.pSphere17_lambert10_0.geometry}
        material={materials.lambert10}
        position={[5.605, 20.511, -11.174]}
        rotation={[-2.637, -1.254, -2.438]}
        scale={[0.409, 0.396, 0.396]}
      />
      <mesh
        
        
        geometry={nodes.pSphere18_lambert10_0.geometry}
        material={materials.lambert10}
        position={[5.111, 21.265, -11.174]}
        rotation={[0, 0, 0.977]}
        scale={[0.401, 0.389, 0.389]}
      />
      <mesh
        
        
        geometry={nodes.pSphere19_lambert10_0.geometry}
        material={materials.lambert10}
        position={[5.616, 21.916, -11.174]}
        rotation={[Math.PI, -1.291, -2.916]}
        scale={[0.456, 0.442, 0.442]}
      />
      <mesh
        
        
        geometry={nodes.pSphere20_lambert10_0.geometry}
        material={materials.lambert10}
        position={[4.685, 21.798, -11.174]}
        rotation={[2.193, -1.113, 2.245]}
        scale={[0.451, 0.437, 0.437]}
      />
      <mesh
        
        
        geometry={nodes.pSphere21_lambert10_0.geometry}
        material={materials.lambert10}
        position={[3.832, 21.105, -11.174]}
        rotation={[Math.PI, -1.291, 2.904]}
        scale={[0.438, 0.424, 0.424]}
      />
      <mesh
        
        
        geometry={nodes.pSphere22_lambert10_0.geometry}
        material={materials.lambert10}
        position={[6.107, 19.207, -11.174]}
        rotation={[0, 0, -0.238]}
        scale={[0.197, 0.191, 0.191]}
      />
      <mesh
        
        
        geometry={nodes.pSphere23_lambert10_0.geometry}
        material={materials.lambert10}
        position={[3.668, 19.169, -11.174]}
        rotation={[-0.151, 0, 0.22]}
        scale={[0.232, 0.225, 0.225]}
      />
      <mesh
        
        
        geometry={nodes.pSphere24_lambert10_0.geometry}
        material={materials.lambert10}
        position={[4.656, 18.409, -11.174]}
        rotation={[0, 0, -0.238]}
        scale={[0.47, 0.455, 0.455]}
      />
      <mesh
        
        
        geometry={nodes.pSphere25_lambert10_0.geometry}
        material={materials.lambert10}
        position={[4.965, 18.147, -11.017]}
        rotation={[0.105, 0.293, -0.03]}
        scale={[0.448, 0.435, 0.435]}
      />
      <mesh
        
        
        geometry={nodes.pSphere26_lambert10_0.geometry}
        material={materials.lambert10}
        position={[5.118, 18.943, -11.174]}
        rotation={[-0.151, 0, 0.22]}
        scale={[0.452, 0.438, 0.438]}
      />
      <mesh
        
        
        geometry={nodes.pSphere27_lambert10_0.geometry}
        material={materials.lambert10}
        position={[4.963, 19.559, -11.174]}
        rotation={[0, 0, 0.225]}
        scale={[0.475, 0.46, 0.46]}
      />
      <mesh
        
        
        geometry={nodes.pSphere28_lambert10_0.geometry}
        material={materials.lambert10}
        position={[4.73, 19.442, -11.174]}
        rotation={[0.367, 0, 0]}
        scale={[0.474, 0.46, 0.46]}
      />
      <mesh
        
        
        geometry={nodes.pSphere29_lambert10_0.geometry}
        material={materials.lambert10}
        position={[4.832, 22.581, -11.174]}
        rotation={[Math.PI, -1.291, 2.904]}
        scale={[0.616, 0.597, 0.597]}
      />
      <mesh
        
        
        geometry={nodes.pSphere30_lambert10_0.geometry}
        material={materials.lambert10}
        position={[5.425, 23.621, -11.174]}
        rotation={[Math.PI, -1.291, -2.164]}
        scale={[0.408, 0.395, 0.395]}
      />
      <mesh
        
        
        geometry={nodes.Caixa2_pasted__lambert11_0.geometry}
        material={materials.pasted__lambert11}
        position={[-21.137, 6.057, 13.32]}
        rotation={[0, 0.703, 0.18]}
        scale={0.803}
      />
      <mesh
        
        
        geometry={nodes.Caixa1_pasted__lambert11_0.geometry}
        material={materials.pasted__lambert11}
        position={[-18.763, 6.321, 13.32]}
        rotation={[0, 0.703, 0]}
        scale={0.803}
      />
      <mesh
        
        
        geometry={nodes.Caixa_pasted__lambert11_0.geometry}
        material={materials.pasted__lambert11}
        position={[-18.763, 6.49, 11.815]}
        scale={0.803}
      />
      <mesh
        
        
        geometry={nodes.Agua_blinn1_0.geometry}
        material={materials.blinn1}
        position={[6.144, 8.259, 4.101]}
        rotation={[0.098, -0.277, 0.027]}
        scale={[12.032, 2.645, 44.098]}
      />
      <mesh
        
        
        geometry={nodes.Villager_lambert6_0.geometry}
        material={materials.lambert6}
        position={[16.035, 10.635, 2.329]}
        rotation={[-0.015, -0.132, -0.179]}
        scale={[0.712, 0.264, 0.453]}
      />
      <mesh
        
        
        geometry={nodes.Barco_lambert11_0.geometry}
        material={materials.lambert11}
        position={[-17.443, 6.012, 14.878]}
        rotation={[0.256, -0.438, 0.111]}
        scale={[1.476, 0.83, 1.223]}
      />
      <mesh
        
        
        geometry={nodes.pCube19_lambert6_0.geometry}
        material={materials.lambert6}
        position={[-9.871, 9.519, 3.384]}
        rotation={[-0.178, -0.153, 0.119]}
        scale={[0.964, 0.342, 1.064]}
      />
      <mesh
        
        
        geometry={nodes.pCube3_lambert6_0.geometry}
        material={materials.lambert6}
        position={[-0.442, 10.884, 0]}
        rotation={[-0.138, 0.018, -0.021]}
        scale={[0.816, 0.353, 0.816]}
      />
      <mesh
        
        
        geometry={nodes.pCube2_lambert6_0.geometry}
        material={materials.lambert6}
        position={[-3.642, 10.081, 0]}
        rotation={[-0.173, 0.355, 0.169]}
        scale={[0.97, 0.42, 0.97]}
      />
      <mesh
        
        
        geometry={nodes.pCube13_lambert10_0.geometry}
        material={materials.lambert10}
        position={[-15.448, 17.032, -8.551]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-4.807, 1.748, 1.748]}
      />
      <mesh
        
        
        geometry={nodes.pCube14_lambert10_0.geometry}
        material={materials.lambert10}
        position={[28.381, 16.573, 0.061]}
        rotation={[Math.PI, -1.266, 0]}
        scale={[-5.105, 1.856, 1.375]}
      />
      <mesh
        
        
        geometry={nodes.pCube42_lambert10_0.geometry}
        material={materials.lambert10}
        position={[-15.643, 17.032, -8.551]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-4.423, 1.608, 1.608]}
      />
      <mesh
        
        
        geometry={nodes.pCube43_lambert10_0.geometry}
        material={materials.lambert10}
        position={[28.282, 16.573, 0.375]}
        rotation={[Math.PI, -1.266, 0]}
        scale={[-4.623, 1.681, 1.245]}
      />
      <mesh
        
        
        geometry={nodes.pCylinder1_Grama_0.geometry}
        material={materials.Grama}
        position={[-0.054, 5.933, 0]}
        scale={[12.801, 2.52, 12.801]}
      />
      <mesh
        
        
        geometry={nodes.pCylinder2_lambert8_0.geometry}
        material={materials.lambert8}
        position={[-0.382, 5.865, 1.363]}
        scale={[14.195, 0.869, 12.801]}
      />
      <mesh
        
        
        geometry={nodes.pCube28_lambert1_0.geometry}
        material={materials.lambert1}
        position={[-1.575, 6.674, 19.088]}
        rotation={[0, 0.36, 0]}
        scale={[0.448, 0.936, 0.448]}
      />
      <mesh
        
        
        geometry={nodes.pCube16_lambert1_0.geometry}
        material={materials.lambert1}
        position={[-0.121, 8.167, 10.779]}
        rotation={[0.17, 0, -0.163]}
        scale={[2.246, 1.813, 2.246]}
      />
      <mesh
        
        
        geometry={nodes.pCube26_lambert1_0.geometry}
        material={materials.lambert1}
        position={[-1.282, 8.167, 10.779]}
        rotation={[-2.872, -0.54, -2.951]}
        scale={[1.488, 1.201, 1.488]}
      />
      <mesh
        
        
        geometry={nodes.pCube27_lambert1_0.geometry}
        material={materials.lambert1}
        position={[2.165, 7.22, 16.946]}
        rotation={[-0.053, 1.007, 0.226]}
        scale={0.947}
      />
      <mesh
        
        
        geometry={nodes.pCube29_lambert1_0.geometry}
        material={materials.lambert1}
        position={[-0.284, 6.579, 18.588]}
        rotation={[0, 1.558, 0]}
        scale={[0.831, 0.581, 0.8]}
      />
      <mesh
        
        
        geometry={nodes.pCube25_lambert1_0.geometry}
        material={materials.lambert1}
        position={[0.893, 7.086, 15.04]}
        scale={[0.292, 0.822, 0.292]}
      />
      <mesh
        
        
        geometry={nodes.pCube24_lambert1_0.geometry}
        material={materials.lambert1}
        position={[0.893, 7.196, 12.426]}
        scale={0.292}
      />
      <mesh
        
        
        geometry={nodes.pCube6_lambert1_0.geometry}
        material={materials.lambert1}
        position={[7.103, 7.177, 14.269]}
        scale={1.067}
      />
      <mesh
        
        
        geometry={nodes.pCube17_lambert1_0.geometry}
        material={materials.lambert1}
        position={[10.04, 8.922, 4.114]}
        rotation={[0, 0.004, 0.353]}
        scale={1.067}
      />
      <mesh
        
        
        geometry={nodes.pCube21_lambert1_0.geometry}
        material={materials.lambert1}
        position={[5.031, 8.602, 1.955]}
        rotation={[0, 0.496, 0]}
        scale={[1.372, 1.372, 0.78]}
      />
      <mesh
        
        
        geometry={nodes.pCube5_lambert1_0.geometry}
        material={materials.lambert1}
        position={[1.336, 9.049, 1.333]}
        scale={0.855}
      />
      <mesh
        
        
        geometry={nodes.pCube4_lambert1_0.geometry}
        material={materials.lambert1}
        position={[-3.401, 8.292, 3.182]}
        scale={0.855}
      />
      <mesh
        
        
        geometry={nodes.pCube22_lambert1_0.geometry}
        material={materials.lambert1}
        position={[7.534, 8.363, 1.333]}
        scale={0.292}
      />
      <mesh
        
        
        geometry={nodes.pCube23_lambert1_0.geometry}
        material={materials.lambert1}
        position={[8.082, 8.251, 1.333]}
        rotation={[0, 0.625, 0]}
        scale={0.292}
      />
      <mesh
        
        
        geometry={nodes.pCube30_lambert1_0.geometry}
        material={materials.lambert1}
        position={[-12.381, 8.371, 8.302]}
        rotation={[0.253, 0, 0]}
        scale={0.855}
      />
      <mesh
        
        
        geometry={nodes.pCube31_lambert1_0.geometry}
        material={materials.lambert1}
        position={[-5.351, 8.111, 13.015]}
        rotation={[0, 0.494, 0]}
        scale={0.855}
      />
      <mesh
        
        
        geometry={nodes.pCylinder12_lambert11_0.geometry}
        material={materials.lambert11}
        position={[3.054, 7.826, 13.358]}
        rotation={[0.103, 0, 0]}
        scale={[0.07, 0.417, 0.07]}
      />
      <mesh
        
        
        geometry={nodes.pCylinder11_lambert11_0.geometry}
        material={materials.lambert11}
        position={[2.255, 7.703, 14.245]}
        rotation={[0.103, 0, 0]}
        scale={[0.07, 0.417, 0.07]}
      />
      <mesh
        
        
        geometry={nodes.pCylinder13_lambert11_0.geometry}
        material={materials.lambert11}
        position={[2.405, 7.944, 14.186]}
        rotation={[-1.462, 0.062, -0.664]}
        scale={[0.07, 1.256, 0.07]}
      />
      <mesh
        
        
        geometry={nodes.pCylinder10_lambert11_0.geometry}
        material={materials.lambert11}
        position={[1.618, 7.702, 15.994]}
        rotation={[-1.383, 0, 0]}
        scale={[0.07, 0.895, 0.07]}
      />
      <mesh
        
        
        geometry={nodes.pCylinder9_lambert11_0.geometry}
        material={materials.lambert11}
        position={[1.618, 7.63, 15.096]}
        rotation={[0.148, 0, 0]}
        scale={[0.07, 0.417, 0.07]}
      />
      <mesh
        
        
        geometry={nodes.pCylinder8_lambert11_0.geometry}
        material={materials.lambert11}
        position={[1.618, 7.376, 15.982]}
        rotation={[0.148, 0, 0]}
        scale={[0.07, 0.417, 0.07]}
      />
      <mesh
        
        
        geometry={nodes.pCylinder7_lambert11_0.geometry}
        material={materials.lambert11}
        position={[1.618, 7.344, 16.857]}
        rotation={[0.103, 0, 0]}
        scale={[0.07, 0.417, 0.07]}
      />
      <mesh
        
        
        geometry={nodes.pCylinder5_lambert11_0.geometry}
        material={materials.lambert11}
        position={[1.618, 7.278, 18.326]}
        rotation={[-1.383, 0, 0]}
        scale={[0.07, 1.492, 0.07]}
      />
      <mesh
        
        
        geometry={nodes.pCylinder6_lambert11_0.geometry}
        material={materials.lambert11}
        position={[1.618, 7.09, 17.79]}
        rotation={[0.103, 0, 0]}
        scale={[0.07, 0.417, 0.07]}
      />
      <mesh
        
        
        geometry={nodes.pCylinder4_lambert11_0.geometry}
        material={materials.lambert11}
        position={[1.618, 7.017, 18.777]}
        rotation={[0.148, 0, 0]}
        scale={[0.07, 0.417, 0.07]}
      />
      <mesh
        
        
        geometry={nodes.pCylinder3_lambert11_0.geometry}
        material={materials.lambert11}
        position={[1.618, 6.763, 19.71]}
        rotation={[0.148, 0, 0]}
        scale={[0.07, 0.417, 0.07]}
      />
      <mesh
        
        
        geometry={nodes.pCylinder14_lambert11_0.geometry}
        material={materials.lambert11}
        position={[3.468, 8.055, 7.49]}
        rotation={[0.103, 0, 0]}
        scale={[0.07, 0.417, 0.07]}
      />
      <mesh
        
        
        geometry={nodes.pCylinder15_lambert11_0.geometry}
        material={materials.lambert11}
        position={[2.49, 8.007, 8.083]}
        rotation={[0.103, 0, 0]}
        scale={[0.07, 0.417, 0.07]}
      />
      <mesh
        
        
        geometry={nodes.pCylinder16_lambert11_0.geometry}
        material={materials.lambert11}
        position={[1.389, 7.934, 8.663]}
        rotation={[0.148, 0, 0]}
        scale={[0.07, 0.417, 0.07]}
      />
      <mesh
        
        
        geometry={nodes.pCylinder17_lambert11_0.geometry}
        material={materials.lambert11}
        position={[2.414, 8.214, 8.11]}
        rotation={[-1.444, 0.028, -1.084]}
        scale={[0.07, 1.256, 0.07]}
      />
      <mesh
        
        
        geometry={nodes.Mar_e_moto_blinn1_0.geometry}
        material={materials.blinn1}
        position={[0, 5.965, 0]}
        scale={94.073}
      />
      <mesh
        
        
        geometry={nodes.Mar_e_moto1_lambert5_0.geometry}
        material={materials.lambert5}
        position={[0, 5.698, 0]}
        scale={94.073}
      />
    </a.group>
  )
}

export default Island; 