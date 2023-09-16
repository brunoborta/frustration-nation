import { Suspense } from "react";
import { Environment } from "@react-three/drei";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";

import Printer from "./Printer";

export default function PrinterScreen({ printerCount = 100 }) {
  return (
    <>
      <color attach="background" args={["blueviolet"]} />
      <Suspense>
        <Environment preset="dawn" />
        {Array.from({ length: printerCount }, (_, index) => (
          <Printer key={index} z={-index} />
        ))}
        <EffectComposer multisampling={0}>
          <DepthOfField focalLength={0} focalDistance={0} bokehScale={10} />
        </EffectComposer>
      </Suspense>
    </>
  );
}
