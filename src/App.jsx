import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import History from "./components/History";

function App() {
  // State to manage the display value
  const [display, setDisplay] = useState("");
  // State to store the calculation history
  const [history, setHistory] = useState([]);

  // Function to handle button clicks and update display
  const handleClick = (value) => {
    setDisplay(display + value);
  };

  // Function to clear the display
  const clearDisplay = () => {
    setDisplay("");
  };

  // Function to delete the last character from the display
  const deleteLast = () => {
    setDisplay(display.slice(0, -1));
  };

  // Function to evaluate the expression and update history
  const calculateResult = () => {
    try {
      const result = eval(display).toString(); // evaluate display
      setDisplay(result);
      setHistory([...history, `${display} = ${result}`]);
    } catch {
      setDisplay("Error");
    }
  };

  // Function to clear the calculation history
  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="container"> {/* Main container to center calculator */}
      <div className="calculator"> {/* Calculator body */}
        <Display value={display} /> {/* Display screen */}
        <Buttons handleClick={handleClick} clearDisplay={clearDisplay} deleteLast={deleteLast} calculateResult={calculateResult} /> {/* Buttons section */}
      </div>
      <History history={history} clearHistory={clearHistory} /> {/* History section */}
    </div>
  );
}

export default App;