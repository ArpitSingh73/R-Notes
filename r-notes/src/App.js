import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
// import About from "./Components/About";
import Alert from "./Components/Alert";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
// import NoteState from "./Context/noteState";
import NoteState from "./Context/noteState";

import { useState } from "react";
function App() {
  const [alert, setAlert] = useState(null);
  const show = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />

          <Routes>
            <Route exact path="/" element={<Home show={show} />}></Route>

            {/* <Route exact path="/about" element={<About />}></Route> */}
            <Route exact path="/login" element={<Login show={show} />}></Route>

            <Route
              exact
              path="/signup"
              element={<Signup show={show} />}
            ></Route>
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
