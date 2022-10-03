import calendarIcon from "../Assets/images/calendar.png";
import authorIcon from "../Assets/images/user.png";
import Comment from "./Comment";
import Navbar from "./Navbar";
type author = {
  _id: string;
  username: string;
};
type comment = {
  _id: string;
  content: string;
  createdAt: string;
  author: author;
};

type blogProps = {
  _id: string;
  title: string;
  content: string;
  username: string;
  createdAt: string;
  comments: comment[];
};
// change all fixed details spots to dynamic spots
// read the information of the blog from the db
// This should use the query from the link to make a call to the db and use the returned information to populate this page
const Blog = ({
  _id,
  title,
  content,
  createdAt,
  username,
  comments,
}: blogProps) => {
  // title, blogdate,blog author,blog content
  return (
    <>
      <Navbar />
      <div className="blog-container">
        <header className="blog-header">
          <div className="blog__header-top">
            <h1>{title}</h1>
          </div>
          <div className="blog__header-bottom">
            <div className="blog__header-author">
              <img src={authorIcon} alt="author" />
              <h3>{username}</h3>
            </div>
            <div className="blog__header-date">
              <img src={calendarIcon} alt="calendar" />
              <h3>{createdAt}</h3>
            </div>
          </div>
        </header>
        <div className="blog-content-container">
          <p className="blog-content">{content}</p>
        </div>
        <div className="comment-container">
          <h1 className="comment-header">Comments</h1>
          <div className="comment-input">
            <form>
              <input type="text" name="comment" placeholder="Leave a comment" />
              <button type="submit">Submit</button>

              {/* this should be form with one input and be a controlled component but it should be in a comment compoenet */}
            </form>
          </div>
          <div className="comments">
            {comments.map((comment) => {
              return (
                <Comment
                  username={comment.author.username}
                  content={comment.content}
                  createdAt={comment.createdAt}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Blog;
