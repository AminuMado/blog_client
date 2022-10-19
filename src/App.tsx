import "./App.css";
import Landing from "./Components/Landing";
import Blogs from "./Components/Blogs";
import Blog from "./Components/Blog";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Profile from "./Components/Profile";
import BlogForm from "./Components/BlogForm";
import UpdateBlog from "./Components/UpdateBlog";
import { useAuthContext } from "./hooks/useUserContext";
function App() {
  const { state } = useAuthContext();
  const user = state.user;
  console.log(user);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={!user ? <Landing /> : <Navigate to="/blogs" />}
          />
          <Route
            path="/blogs"
            element={user ? <Blogs /> : <Navigate to="/" />}
          />
          <Route
            path="/blogs/:blogId"
            element={user ? <Blog /> : <Navigate to="/" />}
          />
          <Route
            path="/profile"
            element={user ? <Profile /> : <Navigate to="/" />}
          />
          <Route
            path="/profile/newblog"
            element={user ? <BlogForm /> : <Navigate to="/" />}
          />
          <Route
            path="/profile/:blogId"
            element={user ? <UpdateBlog /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
