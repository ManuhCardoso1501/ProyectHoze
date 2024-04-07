import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo, useRef } from "react";
import { Color, Light, PointLightHelper, SpotLightHelper } from "three";



const Ligths = () => {
    const spotLightRef = useRef(null);
    useHelper(spotLightRef, SpotLightHelper);
    const pointLightRef = useRef(null);
    useHelper(pointLightRef,PointLightHelper);
    const optionSpotLight = useMemo(() =>{
        return{
            intensityED: {value: 9000, min: 0, max: 9000, step:1},
            colorED: {value: "white"}
        }
    })
    const {intensityED, colorED} = useControls("SheperLigtsControls", optionSpotLight)
    
    return<>
        <ambientLight 
            //color={new Color('#2d464c')} 
            intensity={0.4}
        />
        {/* <directionalLight 
            castShadow = {true}
            position={[2,10,-80]}
            color={new Color('#FFF000')}
            intensity={20}
            distance={2}
            shadow-mapSize = {[2048, 2048]} //Definir la sombra
            /> */}

        <pointLight
            ref={pointLightRef}
            castShadow = {true}
            position={[0,-5,80]}
            color={new Color('red')}
            intensity={300}
            distance={10}
            />

        <pointLight
            castShadow = {true}
            position={[0,10,48]}
            color={new Color('yellow')}
            intensity={3000}
            distance={25}
            
        />
        <spotLight
            ref={spotLightRef}
            castShadow = {true}
            position={[0,15,5]}
            color={colorED}
            intensity={intensityED}
            angle={Math.PI/4}
            distance={30}
            
        />

        <spotLight
            castShadow = {true}
            position={[0,5,-65]}
            color={"green"}
            intensity={9000}
            angle={Math.PI/3}
            
        />

        <pointLight
            castShadow = {true}
            position={[0,16,-95]}
            color={"gray"}
            intensity={9000}
            distance={55}
        />
    </> 
}

export default Ligths;