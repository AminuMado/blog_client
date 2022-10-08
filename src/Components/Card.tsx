import { Link } from "react-router-dom";
import commentIcon from "../Assets/images/comment.svg";

// Todos
// We caan destructure this by having a props property
// id, title, content , username, created date,likescount
// replace all fixed details with dynamic variables
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
          <button>Edit</button>
          <button>Delete</button>
        </div>
      )}
    </div>
  );
};
export default Card;
