import clockIcon from "../Assets/images/cloc.png";
import authorIcon from "../Assets/images/user.png";
import { DateTime } from "luxon";
import { useBlogContext } from "../hooks/useBlogContext";
import { useAuthContext } from "../hooks/useUserContext";

type commentProps = {
  id: string;
  username: string;
  content: string;
  createdAt: string;
};

const Comment = ({ id, username, content, createdAt }: commentProps) => {
  // Context Blog
  const { setBlog } = useBlogContext();
  const user = useAuthContext().state.user;
  const formatDate = (date: string) => {
    return DateTime.fromISO(date).toRelativeCalendar();
  };

  const deleteCommentInState = (commentId: string) => {
    setBlog((prev) => {
      if (prev) {
        const newComments = prev.comments.filter(
          (comment) => comment._id !== commentId
        );
        return { ...prev, comments: newComments };
      } else return prev;
    });
  };
  const deleteComment = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!user) return;
    // This deletes the comment from the db
    const response = await fetch(`/api/comment/${id}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    if (!response.ok) return;

    if (response.ok) {
      // This removes the comment from the state to keep it in sync with the db
      deleteCommentInState(id);
    }
  };
  return (
    <>
      <div className="comment">
        <p className="comment-content">{content} </p>
        <div className="comment-details">
          <div className="comment__details-author">
            <img src={authorIcon} alt="author" />
            <p className="comment-author">{username}</p>
          </div>
          <div className="comment__details-date">
            <img src={clockIcon} alt="calendar" />
            <p className="comment-date">{formatDate(createdAt)}</p>
          </div>
        </div>
      </div>

      <button onClick={deleteComment}>Delete</button>
    </>
  );
};
export default Comment;
