import { Canvas } from "@react-three/fiber";
import PrinterScreen from "./PrinterScreen";

function App() {
  return (
    <Canvas camera={{ fov: 35, near: 0.1, far: 100 }}>
      <ambientLight />
      <PrinterScreen printerCount={100} />
    </Canvas>
  );
}

export default App;
