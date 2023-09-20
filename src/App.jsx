import { Canvas } from "@react-three/fiber";

import PrinterScreen from "./components/PrinterScreen";
import Overlay from "./components/Overlay";

function App() {
  return (
    <>
      <Canvas
        gl={{ antialias: false }}
        camera={{ fov: 25, near: 0.1, far: 82 }}
      >
        {/* <Perf /> */}
        <PrinterScreen />
      </Canvas>
      <Overlay />
    </>
  );
}

export default App;
