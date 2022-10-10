import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let params = useParams();
  let navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This updates the blog from on the db
    // We need to get the id from the params on the route
    const updatedBlog = {
      title: title,
      content: content,
    };
    const response = await fetch(`/api/blogs/${params.blogId}`, {
      method: "PATCH",
      body: JSON.stringify(updatedBlog),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) return;

    if (response.ok) {
      navigate("/profile");
    }
  };
  useEffect(() => {
    const getBlog = async () => {
      setTitle("");
      setContent("");
      setIsLoading(false);
      const response = await fetch("/api/blogs/" + params.blogId);
      const json = await response.json();

      if (response.ok) {
        setTitle(json.title);
        setContent(json.content);
        setIsLoading(true);
      }
    };
    getBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {isLoading ? (
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
      ) : (
        <div>Loading...</div>
      )}
      {error && <div className="comment__input-error">{error}</div>}
    </div>
  );
};
export default UpdateBlog;
