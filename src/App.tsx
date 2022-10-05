import "./App.css";
import Landing from "./Components/Landing";
import Blogs from "./Components/Blogs";
import Blog from "./Components/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:blogId" element={<Blog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
