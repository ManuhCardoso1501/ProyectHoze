import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Experiencie = () => {
    const boxRef = useRef(null);
    useFrame((state, delta)=>{
        boxRef.current.rotation.x += 1 * delta;
    })
    return(
        <>
            <ambientLight/>
            <directionalLight position={[10,10,5]}/>
            <OrbitControls makeDefault/>
            <mesh ref={boxRef}>
                <boxGeometry args={[2, 2, 2]}/>
                <meshStandardMaterial color={"purple"}/>
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