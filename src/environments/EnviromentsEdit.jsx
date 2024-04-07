import { Environment, Sky, Sparkles } from "@react-three/drei";

export default function EnviromentsEdit(){
    return<>
        {/* <Environment 
            files={"/assets/hdris/kloppenheim_02_4k.hdr"}
            background={true}
            environmentIntensity={0.1}
            ground={{
                height:20,
                scale:200,
                radius:500
            }}

        /> */}
        <Sky
            //sunPosition={[0,0,-1]}
            inclination={0}
            //azimuth={180}
            
        />

        <Sparkles
            color={"white"}
            count={500}
            size={10}
            scale={150}
            speed={0.5}
        />
    </>
}