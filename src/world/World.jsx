import { useGLTF, useTexture } from "@react-three/drei"
import { RepeatWrapping } from "three";

export default function World(props){
    const {nodes, materials} = useGLTF("/assets/models/world/renderMundo.glb");
    const PATH = "/assets/textures/floor/";
    const propsTexture = useTexture({
        map: PATH + "coast_sand_01_diff_1k.jpg",
        displacementMap: PATH + "coast_sand_01_disp_1k.png",
        normalMap: PATH + "coast_sand_01_nor_gl_1k.png",
        roughnessMap: PATH + "coast_sand_01_rough_1k_1.png"

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
                    <mesh geometry={nodes.walls.geometry} material={nodes.walls.material} />
                    <mesh geometry={nodes.floor.geometry}>
                        <meshStandardMaterial {...propsTexture}/>
                    </mesh>
                </group>
            </group>
        </mesh>
    );
}

useGLTF.preload('/assets/models/world/renderMundo.glb')