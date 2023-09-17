import { Environment } from "@react-three/drei";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";

import PrinterFactory from "./Factories/PrinterFactory";

export default function PrinterScreen() {
  return (
    <>
      <color attach="background" args={["#FFECCC"]} />
      <Environment preset="dawn" />
      <PrinterFactory printerCount={70} />
      <EffectComposer>
        <DepthOfField focalLength={0.3} focalDistance={0.4} bokehScale={14} />
      </EffectComposer>
    </>
  );
}
