import "./styles.css";
import {createRoot} from "react-dom/client";
import Experiencie from "./Experience";
import { Canvas } from "@react-three/fiber";


const root = createRoot(document.getElementById("root"));

root.render(
    <Canvas>
        <Experiencie/>
    </Canvas>
    
)
