import "./App.css";
import Landing from "./Components/Landing";
import Blogs from "./Components/Blogs";
import Blog from "./Components/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile";
import BlogForm from "./Components/BlogForm";
import UpdateBlog from "./Components/UpdateBlog";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:blogId" element={<Blog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/newblog" element={<BlogForm />} />
          <Route path="/profile/:blogId" element={<UpdateBlog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
