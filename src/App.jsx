import { LeftArea } from "./components/LeftArea.jsx";
import { RightArea } from "./components/RightArea.jsx";

export default function App() {
  return (
    <div
      className="w-full flex flex-col md:flex-row justify-between gap-8 "
      style={{ backgroundColor: "#3b2e7f" }}
    >
      <LeftArea />
      <RightArea />
    </div>
  );
}
