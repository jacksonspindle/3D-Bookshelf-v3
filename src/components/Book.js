import React, { useRef, Suspense } from "react";
import { Canvas,useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { BoxGeometry } from 'three'
import { TextureLoader } from 'three'
import * as THREE from "three";
import instagramLogo from "./instagramLogo.png";




//     function BookCover(props){
        
//     const mesh = useRef();
//     // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
//     const base = new THREE.TextureLoader().load(props.cover);
    
//     console.log(props.cover)
    
//     return (
//             <mesh ref={mesh} >
//                 <boxGeometry args={[6, 9, props.width]}/>
//                 <meshStandardMaterial attach="material" map={base} />
//             </mesh>
//     )
// }

export default function Book(props){

   console.log(props.cover)
   const textureLoader = new THREE.TextureLoader()
    textureLoader.crossOrigin = ''
   const base = textureLoader.load(props.cover);



    // const bookCoverTexture = useLoader(TextureLoader, "./instagramLogo.png")

    return (
        <div className='canvasDiv'>
            <Canvas  className='canvas' >
               <Suspense fallback={null}>
               <ambientLight intensity={0.1}  />
                <directionalLight position={[0, 0, 0]} />
                {/* <BookCover cover={Book.props.cover} /> */}
                 <mesh  >
                        <boxGeometry args={[6, 9, props.width]}/>
                      <meshStandardMaterial attach="material" map={base} />
                   </mesh>                
                 <OrbitControls minDistance={12} maxDistance={12} />
                </Suspense>
            </Canvas>
        </div>
    )
}