import { useState } from "react";
import { useParams } from "react-router-dom";
import { useBlogContext } from "../hooks/useBlogContext";
import { useAuthContext } from "../hooks/useAuthContext";
type comment = {
  _id: string;
  content: string;
  createdAt: string;
  username: string;
  blogId: string;
};

const CommentForm = () => {
  const [comment, setComment] = useState("");
  const [error, setError] = useState(null);
  const params = useParams();
  const { setBlog } = useBlogContext();
  const user = useAuthContext().state.user;
  const addNewComment = (comment: comment) => {
    setBlog((prev) => {
      if (prev) {
        return { ...prev, comments: [...prev.comments, comment] };
      } else return prev;
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return;
    const newComment = {
      content: comment,
      blogId: params.blogId,
    };

    const response = await fetch("/api/comment/create", {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
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
