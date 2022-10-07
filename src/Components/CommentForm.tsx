import { useState } from "react";
import { useParams } from "react-router-dom";
import { useBlogContext } from "../hooks/useBlogContext";
type comment = {
  _id: string;
  content: string;
  createdAt: string;
  username: string;
  blogId: string;
};
/**
 * -------------- Todos ----------------
 * note that this component is incomplete to create a new comment there has to be a blog to post to and a user that is creating such a post
 * for now i only have the content. To get the blog id maybe look into query parameters as the blog id will always be on the path to the page
 * this form exist
 * for the author there should be a way to store the author id in a context and be able to use it or using jwts or something that needs to be
 * figured out also. But this is the template id use for now
 */
const CommentForm = () => {
  const [comment, setComment] = useState("");
  const [error, setError] = useState(null);
  const params = useParams();
  const { setBlog } = useBlogContext();
  const addNewComment = (comment: comment) => {
    setBlog((prev) => {
      if (prev) {
        return { ...prev, comments: [...prev.comments, comment] };
      } else return prev;
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newComment = {
      content: comment,
      blogId: params.blogId,
      // username is the other field but this will be handled by the server by using the authenticated and saved session user details
    };

    const response = await fetch("/api/comment/create", {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setComment("");
      setError(null);
      addNewComment(json);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="comment"
        placeholder="Leave a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Submit</button>
      {error && <div className="comment__input-error">{error}</div>}
    </form>
  );
};
export default CommentForm;
