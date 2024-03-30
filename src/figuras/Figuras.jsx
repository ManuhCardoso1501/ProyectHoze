import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Figuras(){
    const boxRef = useRef(null);
    const boxRef2 = useRef(null);
    const sphere = useRef(null);
    const icosa = useRef(null);
    const octahe = useRef(null);
    
    useFrame(({clock}, delta)=>{
        //boxRef.current.position.y = Math.cos(clock.getElapsedTime()); 
        boxRef.current.rotation.x += 1 * delta;
        //boxRef2.current.position.y = Math.cos(clock.getElapsedTime()); 
        boxRef2.current.rotation.x += 1 * delta;
        //sphere.current.position.y = Math.cos(clock.getElapsedTime()); 
        sphere.current.rotation.x += 1 * delta;
        //icosa.current.position.y = Math.cos(clock.getElapsedTime()); 
        icosa.current.rotation.x += 1 * delta;
        //octahe.current.position.y = Math.cos(clock.getElapsedTime()); 
        octahe.current.rotation.x += 1 * delta;
    })

    
    return(
        <group>
            <mesh ref={octahe} position={[0,5,80]}>
                <octahedronGeometry args={[5,0]} />
                <meshNormalMaterial opacity={0.5} transparent={false}/>
            </mesh>

            <mesh ref={boxRef} position={[0,5,50]}>
                <boxGeometry args={[7, 7, 7]}/>
                <meshPhysicalMaterial 
                    color={"purple"}
                    metalness={1.7}
                    reflectivity={0.8}
                    ior={5.5}
                    
                />
            </mesh>

            <mesh ref={sphere} position={[0,5,0]}>
                <sphereGeometry args={[5]}/>
                <meshPhongMaterial color={"red"} specular={"red"} shininess={110} wireframe={true}/>
            </mesh>

            <mesh ref={boxRef2} position={[0,5,-50]} >
                <boxGeometry args={[7, 7, 7]}/>
                <meshLambertMaterial
                    color={"Orange"} 
                    emissive={"red"} 
                    emissiveIntensity={0.5} 
                    opacity={20.8}   
                />
            </mesh>

            <mesh ref={icosa} position={[0,5,-80]}> 
                <icosahedronGeometry args={[5]}/>
                <meshToonMaterial 
                    color={"gray"}
                    specular={"#ffffff"}
                    shininess={100}
                />
            </mesh>
        </group>
    )
}