import { useState } from "react";
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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newComment = {
      content: comment,
      blog: "expecting a blog id",
      author: "also expecting an author id",
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
      console.log("new comment added", json);
    }
  };
  return (
    <div className="comment-input">
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
    </div>
  );
};
export default CommentForm;
