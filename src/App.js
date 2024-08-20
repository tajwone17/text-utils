import "./App.css";
import About from "../src/Components/About/About.js";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm/TextForm.js";
import { useState } from "react";
import Alert from "./Components/Alert.js";
import {
  BrowserRouter as Router,
  Routes, // Updated from Switch to Routes
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#042743';
      showAlert("Light Mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes> {/* Replaced Switch with Routes */}
          <Route exact path="/about" element={<About />} /> {/* Updated route structure */}
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below " mode={mode} showAlert={showAlert} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
