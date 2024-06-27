import {useState, Suspense} from 'react'
import {Canvas } from '@react-three/fiber' 
import Loader from '../components/Loader'
import HomeInfo from '../components/HomeInfo'
import Island from '../models/Island'
import Sky from '../models/sky'




const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const adjustIslandForScnreenSize = () => {
    let screenScale = null;
    let screenPosition = [0,-8,-35];
    let rotation = [.1,6,0];
    if (window.innerWidth < 798){
      screenScale = [.9,.9,.9];
    } else {
      screenScale = [1,1,1];
    }

    return [screenScale,screenPosition, rotation]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScnreenSize();


  return (
    <section className="w-full h-screen relative"> 

{<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
  {currentStage && <HomeInfo currentStage = {currentStage} />}
</div>}
      <Canvas className = {`w-full h-screen  bg-transparent" ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
      camera = {{near : 0.1 , far : 1000}}
      >
        <Suspense fallback = {<Loader/>}>
          <directionalLight position={[1,1,1]} intensity={2} />
          <ambientLight intensity={.5} />
          <hemisphereLight skycolor = "#b1e1ff" groundColor = "#000000"/>
          <Sky isRotating  = {isRotating}/>
          <Island
            position = {islandPosition}
            scale = {islandScale}
            rotation = {islandRotation}
            isRotating = {isRotating}
            setIsRotating = {setIsRotating}
            setCurrentStage={setCurrentStage}
         />
        </Suspense>
      </Canvas>
    </section>
  )               
}

export default Home