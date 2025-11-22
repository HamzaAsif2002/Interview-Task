import { FormArea } from "./components/formArea.jsx";
import { TextArea } from "./components/textArea.jsx";

export default function App() {
  return (
    <div
      className="w-full flex flex-col md:flex-row justify-between gap-8 "
      style={{ backgroundColor: "#3b2e7f" }}
    >
      <TextArea />
      <FormArea />
    </div>
  );
}
