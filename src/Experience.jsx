import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


const Experiencie = () => {
    const boxRef = useRef(null);
    const boxRef2 = useRef(null);
    const sphere = useRef(null);
    const icosa = useRef(null);
    const octahe = useRef(null);
    
    useFrame(({clock}, delta)=>{
        boxRef.current.position.y = Math.cos(clock.getElapsedTime()); 
        boxRef.current.rotation.x += 1 * delta;
        boxRef2.current.position.y = Math.cos(clock.getElapsedTime()); 
        boxRef2.current.rotation.x += 1 * delta;
        sphere.current.position.y = Math.cos(clock.getElapsedTime()); 
        sphere.current.rotation.x += 1 * delta;
        icosa.current.position.y = Math.cos(clock.getElapsedTime()); 
        icosa.current.rotation.x += 1 * delta;
        octahe.current.position.y = Math.cos(clock.getElapsedTime()); 
        octahe.current.rotation.x += 1 * delta;
    })
    
    return(
        <>
            <ambientLight color={"white"} intensity={0.4}/> 
            <directionalLight position={[10,15,5]}/>
            <OrbitControls makeDefault/>

            <mesh ref={octahe} position={[-8,0,0]}>
                <octahedronGeometry radius={[10]}/>
                <meshNormalMaterial opacity={0.5} transparent={false}/>
            </mesh>

            <mesh ref={boxRef} position={[-4,0,0]}>
                <boxGeometry args={[2, 2, 2]}/>
                <meshPhysicalMaterial 
                    color={"purple"}
                    metalness={1.7}
                    reflectivity={0.8}
                    ior={5.5}
                    
                />
            </mesh>

            <mesh ref={sphere} position={[0,0,0]}>
                <sphereGeometry radius={[12]}/>
                <meshPhongMaterial color={"red"} specular={"red"} shininess={110} wireframe={true}/>
            </mesh>

            <mesh ref={boxRef2} position={[4,0,0]} >
                <boxGeometry args={[2, 2, 2]}/>
                <meshLambertMaterial
                    color={"Orange"} 
                    emissive={"red"} 
                    emissiveIntensity={0.5} 
                    opacity={20.8} 
                    
                />
            </mesh>

            <mesh ref={icosa} position={[8,0,0]}> 
                <icosahedronGeometry radius={[12]}/>
                <meshToonMaterial 
                    color={"gray"}
                    specular={"#ffffff"}
                    shininess={100}
                    
                />
            </mesh>            
        </>
        
    )
}

export default Experiencie;

// Esta parte de cuenta para este caso por experiencie hace parte de todo lo 3d
// const Experiencie = ({title, subtitle}) => {
//     return(
//         <>
//             <h1 className="title"> {title} </h1>
//             <samp> {subtitle}</samp>
//         </>
//     )

// }

// export default Experiencie;