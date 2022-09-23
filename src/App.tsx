import React from "react";
import "./App.css";
import Landing from "./components/Landing";
import Modal from "./components/Modal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Modal />
        <Routes>
          <Route path="/" element={<Landing />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
