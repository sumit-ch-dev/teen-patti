import { useState } from "react";
import "./App.css";
import TeenPattiGame from "./game/TeenPattiGame";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <TeenPattiGame />
      </div>
    </>
  );
}

export default App;
