import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";

import PrinterScreen from "./components/PrinterScreen";

function App() {
  return (
    <Canvas camera={{ fov: 35, near: 0.1, far: 82 }}>
      <Perf />
      <ambientLight />
      <Suspense fallback={null}>
        <PrinterScreen />
      </Suspense>
    </Canvas>
  );
}

export default App;
