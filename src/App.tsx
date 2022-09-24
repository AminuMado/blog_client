import "./App.css";
import Landing from "./components/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
