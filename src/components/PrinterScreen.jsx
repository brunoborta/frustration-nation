import { Environment } from "@react-three/drei";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";

import PrinterFactory from "./Factories/PrinterFactory";
import { Suspense } from "react";

export default function PrinterScreen() {
  return (
    <>
      <color attach="background" args={["#FFECCC"]} />
      <Suspense fallback={null}>
        <Environment preset="dawn" />
        <PrinterFactory printerCount={70} />
        <EffectComposer multisampling={0}>
          <DepthOfField focalLength={0.3} focalDistance={0.4} bokehScale={14} />
        </EffectComposer>
      </Suspense>
    </>
  );
}
