import { useGLTF, useTexture } from "@react-three/drei"
import { RepeatWrapping } from "three";

export default function World(props){
    const {nodes, materials} = useGLTF("/assets/models/world/renderMundo.glb");
    const PATH = "/assets/textures/floort2/";
    const propsTexture = useTexture({
        map: PATH + "cobblestone_embedded_asphalt_diff_1k.jpg",
        displacementMap: PATH + "cobblestone_embedded_asphalt_disp_1k.png",
        normalMap: PATH + "cobblestone_embedded_asphalt_disp_1k.png",
        roughnessMap: PATH + "cobblestone_embedded_asphalt_rough_1k.png"

    });

    propsTexture.map.repeat.set(4,64);
    propsTexture.map.wrapS = propsTexture.map.wrapT = RepeatWrapping;

    propsTexture.normalMap.repeat.set(4,64);
    propsTexture.normalMap.wrapS = propsTexture.map.wrapT = RepeatWrapping;

    propsTexture.displacementMap.repeat.set(4,64);
    propsTexture.displacementMap.wrapS = propsTexture.map.wrapT = RepeatWrapping;

    propsTexture.roughnessMap.repeat.set(4,64);
    propsTexture.roughnessMap.wrapS = propsTexture.map.wrapT = RepeatWrapping;
    
    return(
        <mesh>
            <group {...props} dispose={null}>
                <group>
                    {/* <mesh geometry={nodes.walls.geometry} material={nodes.walls.material} /> */}
                    <mesh receiveShadow = {true} geometry={nodes.floor.geometry}>
                        <meshStandardMaterial {...propsTexture} metalness={0}/>
                    </mesh>
                    {/* <mesh castShadow = {true} geometry={nodes.WoodenFence.geometry} material={nodes.WoodenFence.material}>
                        <meshStandardMaterial color={"#FF8E07"}
                            metalness={0}
                            roughness={2}
                        />
                    </mesh> */}
                </group>
            </group>
        </mesh>
    );
}

useGLTF.preload('/assets/models/world/renderMundo.glb')