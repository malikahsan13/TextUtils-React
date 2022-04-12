import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled", "success");
      setInterval(() => {
        document.title = "Light Mode is Enabled";
      }, 1500);
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode is Enabled", "success");
      setInterval(() => {
        document.title = "Dark Mode is Enabled";
      }, 1500);
    }
  };

  return (
    <Router>
      {/* <Navbar title="My Blog" abouttext="About Us Text" /> */}
      <Navbar title="My Blog" mode={mode} enableDarkMode={toggleMode} />

      <div className="container">
        <Routes>
          <Route path="/" element={
            <TextForm
              heading="Please Write some Text Here"
              mode={mode}
              showAlert={showAlert}
            />
          } />
          <Route path="/about" element={
            <About heading="About Us" />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
