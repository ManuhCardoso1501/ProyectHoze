import "./styles.css";
import {createRoot} from "react-dom/client";
import Experiencie from "./Experience";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
const root = createRoot(document.getElementById("root"));


root.render(
    <Canvas
        camera={
            {
                position: [1,0,10]
            }
        }
    >
        <Experiencie/>
    </Canvas>
    
)
