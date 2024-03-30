import { OrbitControls } from "@react-three/drei";
import World from "./world/World";
import Figuras from "./figuras/Figuras";


const Experiencie = () => {
   
    return(
        <>
            <ambientLight/>
            <directionalLight position={[10,10,5]}/>
            <OrbitControls makeDefault/>
            <World/>
            <Figuras/>
        </>
        
    )
}

export default Experiencie;


// export default Experiencie;

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