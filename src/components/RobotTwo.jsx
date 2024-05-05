import { useGLTF, useScroll } from "@react-three/drei";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

export function RobotTwo(props) {
  const robotTwo = useGLTF("./models/robot/phantoms.glb");

  const robotTwoRef = useRef();
  const robotTwoScroll = useScroll();
  const robotTwoTl = useRef();

  useFrame((state, delta) => {
    robotTwoTl.current.seek(
      robotTwoScroll.offset * robotTwoTl.current.duration()
    );
  });

  useLayoutEffect(() => {
    robotTwoTl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
    });

    robotTwoTl.current
      .to(robotTwoRef.current.rotation, { y: -1 }, 2)
      .to(robotTwoRef.current.position, { x: 1 }, 2)

      .to(robotTwoRef.current.rotation, { y: 1 }, 6)
      .to(robotTwoRef.current.position, { x: -1 }, 6)

      .to(robotTwoRef.current.rotation, { y: 0 }, 11)
      .to(robotTwoRef.current.rotation, { x: 1 }, 11)
      .to(robotTwoRef.current.position, { x: 0 }, 11)

      .to(robotTwoRef.current.rotation, { y: 0 }, 13)
      .to(robotTwoRef.current.rotation, { x: -1 }, 13)
      .to(robotTwoRef.current.position, { x: 0 }, 13)

      .to(robotTwoRef.current.rotation, { y: 0 }, 16)
      .to(robotTwoRef.current.rotation, { x: 0 }, 16)
      .to(robotTwoRef.current.position, { x: 0 }, 16)

      .to(robotTwoRef.current.rotation, { y: 0 }, 20)
      .to(robotTwoRef.current.rotation, { x: 0 }, 20)
      .to(robotTwoRef.current.position, { x: 0 }, 20);
  }, []);

  const scene = robotTwo.scene;

  let cube003, cube003_1;

  scene.traverse((child) => {
    if (child.isMesh) {
      if (child.name === "Cube003") {
        cube003 = child;
      } else if (child.name === "Cube003_1") {
        cube003_1 = child;
      }
    }
  });

  if (!scene) {
    return null;
  }

  return (
    <group {...props} dispose={null} ref={robotTwoRef}>
      <group
        position={[-0.214, 0.163, 0.365]}
        rotation={[0, 0, 0]}
        scale={0.146}
      >
        <mesh
          castShadow
          geometry={cube003.geometry}
          position={cube003.position}
          rotation={cube003.rotation}
          scale={cube003.scale}
        >
          <meshPhysicalMaterial
            color="#aaa"
            roughness={0.2}
            metalness={1}
            reflectivity={0.5}
            iridescence={0.3}
            iridescenceIOR={1}
            iridescenceThicknessRange={[100, 100]}
          />
        </mesh>
        <mesh
          castShadow
          geometry={cube003_1.geometry}
          position={cube003_1.position}
          rotation={cube003_1.rotation}
          scale={cube003_1.scale}
        >
          <meshPhysicalMaterial
            color="#000"
            roughness={1}
            emissive={"#000"}
            clearcoat={1}
            metalness={0}
            reflectivity={0.2}
            iridescence={0.1}
            iridescenceIOR={1}
            iridescenceThicknessRange={[100, 1000]}
          />
        </mesh>
      </group>
    </group>
  );
}
