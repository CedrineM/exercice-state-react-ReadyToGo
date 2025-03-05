import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <>
      <header>
        <h1>🚀 Ready To Go</h1>
      </header>
      <main>
        <div className="container">
          <div className="all-button-div">
            <Button state={switch1} setState={setSwitch1} />
            <Button state={switch2} setState={setSwitch2} />
            <Button state={switch3} setState={setSwitch3} />
            <button
              className={
                switch1 === true
                  ? "button-desactive"
                  : switch2 === true
                  ? "button-desactive"
                  : switch3 === true
                  ? "button-desactive"
                  : "button-active"
              }
              onClick={() => {
                setSwitch1(false);
                setSwitch2(false);
                setSwitch3(false);
              }}
            >
              OFF ALL
            </button>
          </div>
          <div
            className={switch1 && switch2 && switch3 === true ? "green" : "red"}
          >
            <p>
              {switch1 && switch2 && switch3 === true ? "Go !" : "No Way !"}
            </p>
          </div>
        </div>
      </main>
      <footer>
        <span>Made with React at Le Reacteur by Me</span>
      </footer>
    </>
  );
}

export default App;
