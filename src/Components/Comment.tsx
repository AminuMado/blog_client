import clockIcon from "../Assets/images/cloc.png";
import authorIcon from "../Assets/images/user.png";
type commentProps = {
  username: string;
  content: string;
  createdAt: string;
};

const Comment = ({ username, content, createdAt }: commentProps) => {
  return (
    <div className="comment">
      <p className="comment-content">{content} </p>
      <div className="comment-details">
        <div className="comment__details-author">
          <img src={authorIcon} alt="author" />
          <p className="comment-author">{username}</p>
        </div>
        <div className="comment__details-date">
          <img src={clockIcon} alt="calendar" />
          <p className="comment-date">{createdAt}</p>
        </div>
      </div>
    </div>
  );
};
export default Comment;
