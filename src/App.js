import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
// import About from "./components/About";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [modeStatus, setModeStatus] = useState("Dark Mode");
  const [alert, setAlert] = useState({
    msg: "You can see your text preview at the end of the page and also you can replace specific words with another word",
    type: "info",
  });
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setInterval(() => {
      setAlert(null);
    }, 3000);
  };
  // setInterval(() => {
  //   let titles = ['Get started by pasting your text here...', 'Welcome to Text Tweaker!'];
  //   let index = 0;

  //   setBodyTitle(titles[index]);
  //   index = (index + 1) % titles.length;
  // }, 3000);

  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeStatus("Light Mode");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
    } else {
      setMode("light");
      setModeStatus("Dark Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#212529";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextTweaker"
          f1="Home"
          f2="About"
          f3="More Utilities"
          f4="Help"
          mode={mode}
          modeStatus={modeStatus}
          handleMode={handleMode}
        />
        <Alert alert={alert} />
        <div>
          {/* <Routes> */}
            {/* <Route exact path="/about" element={ */}
            {/* <About mode={mode}/> */}
            {/* // } /> */}
              
            
            {/* <Route exact path="/" element={  */}
            <TextForm
                showAlert={showAlert}
                heading="Welcome to Text Tweaker!"
                mode={mode}
              />
              {/* }/> */}
             
            
          {/* </Routes> */}
        </div>
        <div className="stick-btm"><Footer /></div>
      {/*  </Router> */}
    </>
  );
}

export default App;
