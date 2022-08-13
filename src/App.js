// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  //state that tells that mode is dark or light
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      showAlert("Light mode on!", "success");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      showAlert("Dark mode on!", "success");
      document.body.style.backgroundColor = "#042743";
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        linkName="About"
        mode={mode}
        toggleMode={toggleMode}
      ></Navbar>
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          mode={mode}
          heading="Enter the text to analyze"
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;

// #212529
