import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

export default function PrinterFactory({ printerCount }) {
  const { nodes, materials } = useGLTF("/printer-v2-transformed.glb");
  return (
    <>
      {Array.from({ length: printerCount }, (_, index) => (
        <Printer
          key={index}
          z={-index - 5}
          nodes={nodes}
          materials={materials}
        />
      ))}
    </>
  );
}

function Printer({ z = 0, nodes, materials }) {
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);
  const ref = useRef();

  const [data] = useState({
    // Viewport goes from -1 to 1
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
    rotationX: Math.random() * Math.PI,
    rotationY: Math.random() * Math.PI,
    rotationZ: Math.random() * Math.PI,
  });

  useFrame(() => {
    ref.current.position.set(data.x * width, (data.y += 0.02), z);
    ref.current.rotation.set(
      (data.rotationX += 0.005),
      (data.rotationY += 0.005),
      (data.rotationZ += 0.005)
    );
    if (data.y > height) {
      data.y = -height;
    }
  });
  return (
    <group dispose={null} ref={ref} scale={7}>
      <mesh
        geometry={nodes.Cube_0.geometry}
        material={materials.PaletteMaterial001}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.15, 0.075, 0.06]}
      />
    </group>
  );
}
