import { OrbitControls } from "@react-three/drei";
import World from "./world/World";
import Ligths from "./ligths/Ligths";
import Figuras from "./figuras/Figuras";
import EnviromentsEdit from "./environments/EnviromentsEdit";
import { Perf } from "r3f-perf";
import { Suspense } from "react";



const Experiencie = () => {
   
    return(
        <>
            <Perf position="top-left"/>
            <Suspense fallback={null}>
                <Ligths/>
                <World/>
                <EnviromentsEdit/>
                <Figuras/>
            </Suspense>
            <OrbitControls makeDefault/>
              
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