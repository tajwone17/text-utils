import "./App.css";
import About from "../src/Components/About/About.js";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm/TextForm.js";
import { useState } from "react";
import Alert from "./Components/Alert.js";

function App() {
  const [mode, setMode] = useState("light");
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
     
      setMode("dark");
      document.body.style.backgroundColor='#042743'
      document.body.style.color='white'
      showAlert("Dark Mode has been enabled","success")
    } else {
      setMode("light");
     
      document.body.style.backgroundColor='white'
      document.body.style.color='#042743'
      showAlert("Light Mode has been enabled","success")
    }
  };

  return (
    <div className="App">
      <Navbar mode={mode} toggleMode={toggleMode}  />
      <Alert alert={alert}/>
      <TextForm heading="Enter the text to analyze below " mode={mode} showAlert={showAlert}/>
      <About />
    </div>
  );
}

export default App;
