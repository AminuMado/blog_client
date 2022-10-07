import { useState } from "react";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newBlog = {
      title: title,
      content: content,
    };

    const response = await fetch("/api/blogs/", {
      method: "POST",
      body: JSON.stringify(newBlog),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      console.log("new blog", json);
      setTitle("");
      setContent("");
      setError(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="content">Content</label>
        <textarea
          value={content}
          id="content"
          name="content"
          onChange={(e) => setContent(e.target.value)}
        />
        <label htmlFor="published">Published</label>
        <input type="checkbox" id="published" name="published" />
        <button type="submit">Submit</button>
      </form>
      {error && <div className="comment__input-error">{error}</div>}
    </div>
  );
};
export default BlogForm;
