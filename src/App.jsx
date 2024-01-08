import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LayoutShell from "./LayoutShell";
import Header from "./components/Header";
import Card from "./components/Card";
import Main from "./components/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LayoutShell>
        <Header />
        <div className="px-8 py-3 bg-gray-50 h-full">
          <Main />
        </div>
      </LayoutShell>
    </>
  );
}

export default App;
