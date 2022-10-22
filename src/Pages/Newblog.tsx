import BlogForm from "../Components/BlogForm";
import Navbar from "../Components/Navbar";

export const Newblog = () => {
  return (
    <div className="newblog-container">
      <Navbar />
      <BlogForm />
    </div>
  );
};
