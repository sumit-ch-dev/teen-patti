import { useState } from "react";
import "./App.css";
import TeenPattiGame from "./game/TeenPattiGame";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-2xl">
        <TeenPattiGame />
      </div>
    </>
  );
}

export default App;
