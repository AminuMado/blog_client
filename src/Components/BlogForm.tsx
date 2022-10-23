import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const { state } = useAuthContext();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state.user) return;
    const newBlog = {
      title: title,
      content: content,
    };

    const response = await fetch("/api/blogs/", {
      method: "POST",
      body: JSON.stringify(newBlog),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.user.token}`,
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setContent("");
      setError(null);
      navigate("/profile");
    }
  };

  return (
    <div className="blogForm-container">
      <form onSubmit={handleSubmit} className="blogForm">
        <label htmlFor="title">Title</label>
        <input
          className="blogForm__input"
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="content">Content</label>
        <textarea
          className="blogForm__textarea"
          value={content}
          id="content"
          name="content"
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="blogForm__button">
          Submit
        </button>
      </form>
      {error && <div className="comment__input-error">{error}</div>}
    </div>
  );
};
export default BlogForm;
