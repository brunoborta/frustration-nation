import { Canvas, useFrame } from "@react-three/fiber";
import Printer from "./Printer";

function App() {
  return (
    <Canvas camera={{ position: [4, 2, 2] }}>
      <ambientLight intensity={3} />
      <Printer scale={8} />
    </Canvas>
  );
}

export default App;
