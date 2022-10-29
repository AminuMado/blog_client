import { Link } from "react-router-dom";
import commentIcon from "../Assets/images/comment.svg";
import deleteIcon from "../Assets/images/trash.png";
import editIcon from "../Assets/images/edit.png";

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
          {content.length > 60 ? content.slice(0, 50) + "..." : content}
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
          <Link to={`/profile/${id}`}>
            <img src={editIcon} alt="edit" className="card-editIcon" />
          </Link>
          <button>
            <Link to={`/profile/${id}/delete`}>
              <img src={deleteIcon} alt="delete" className="card-deleteIcon" />
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};
export default Card;
