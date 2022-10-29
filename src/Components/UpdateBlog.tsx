import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Navbar from "./Navbar";

const UpdateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let params = useParams();
  let navigate = useNavigate();
  const user = useAuthContext().state.user;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return;
    // This updates the blog from on the db
    // We need to get the id from the params on the route
    const updatedBlog = {
      title: title,
      content: content,
    };
    const response = await fetch(
      `https://fierce-cove-49308.herokuapp.com/api/blogs/${params.blogId}`,
      {
        method: "PATCH",
        body: JSON.stringify(updatedBlog),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    if (!response.ok) return;

    if (response.ok) {
      navigate("/profile");
    }
  };
  useEffect(() => {
    const getBlog = async () => {
      if (!user) return;
      setTitle("");
      setContent("");
      setIsLoading(false);
      const response = await fetch(
        "https://fierce-cove-49308.herokuapp.com/api/blogs/" + params.blogId,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
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
    <>
      <Navbar />
      <div className="blogForm-container">
        {isLoading ? (
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
            <button className="blogForm__button" type="submit">
              Submit
            </button>
          </form>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};
export default UpdateBlog;
