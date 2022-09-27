import "./App.css";
import Landing from "./components/Landing";
import Blogs from "./components/Blogs";
import Blog from "./components/Blog";
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
