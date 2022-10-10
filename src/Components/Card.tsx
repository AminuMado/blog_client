import { Link } from "react-router-dom";
import commentIcon from "../Assets/images/comment.svg";

type cardProps = {
  id: string;
  title: string;
  content: string;
  username: string;
  createdAt: string;
  commentsCount: number;
  options: boolean;
};
const Card = ({
  id,
  title,
  content,
  username,
  createdAt,
  commentsCount,
  options,
}: cardProps) => {
  const handleDelete = async () => {
    // This deletes the comment from the db
    const response = await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) return;

    if (response.ok) {
      //Todo
      // This removes the comment from the state to keep it in sync with the db
      // Going to try something new here and just refresh the page
      window.location.reload();
    }
  };
  return (
    <div className="card">
      <h2 className="card-title">
        {title.length > 19 ? title.slice(0, 19) + "..." : title}
      </h2>
      <div className="card-detailsWrapper">
        <p className="card-details">
          {content.length > 60 ? content.slice(0, 59) + "..." : content}
        </p>
        <Link to={`/blogs/${id}`}> Read More..</Link>
      </div>
      <div className="card-authorInfo">
        <span className="card-author">
          <strong>{username}</strong>
        </span>
        <span className="card-published">{createdAt}</span>
        <div className="card-commentWrapper">
          <img src={commentIcon} alt="chat" className="card-chatIcon" />
          <span className="card-chatCount">{commentsCount}</span>
        </div>
      </div>
      {options && (
        <div className="card-options">
          <Link to={`/profile/${id}`}> Edit</Link>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};
export default Card;
