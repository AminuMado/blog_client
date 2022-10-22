import { useEffect } from "react";
import calendarIcon from "../Assets/images/calendar.png";
import authorIcon from "../Assets/images/user.png";
import { useBlogContext } from "../hooks/useBlogContext";
import Comment from "./Comment";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { DateTime } from "luxon";
import CommentForm from "./CommentForm";
import { useAuthContext } from "../hooks/useAuthContext";
// change all fixed details spots to dynamic spots
// read the information of the blog from the db
// This should use the query from the link to make a call to the db and use the returned information to populate this page
const Blog = () => {
  const { blog, setBlog } = useBlogContext();
  let params = useParams();
  const user = useAuthContext().state.user;
  const formatDate = (date: string) => {
    return DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL);
  };
  useEffect(() => {
    setBlog(null);
    if (!user) return;
    const getBlog = async () => {
      const response = await fetch("/api/blogs/" + params.blogId, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json: typeof blog = await response.json();

      if (response.ok) {
        setBlog(json);
      }
    };
    getBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />

      <div className="blog-container">
        <header className="blog-header">
          <div className="blog__header-top">
            {blog ? <h1>{blog.title}</h1> : <h1>loading...</h1>}
          </div>
          <div className="blog__header-bottom">
            <div className="blog__header-author">
              <img src={authorIcon} alt="author" />
              {blog && <h3>{blog.author.username}</h3>}
            </div>
            <div className="blog__header-date">
              <img src={calendarIcon} alt="calendar" />
              {blog && <h3>{formatDate(blog.createdAt)}</h3>}
            </div>
          </div>
        </header>
        <div className="blog-content-container">
          {blog && <p className="blog-content">{blog.content}</p>}
        </div>
        <div className="comment-container">
          <h1 className="comment-header">Comments</h1>
          <div className="comment-input">{blog && <CommentForm />}</div>
          <div className="comments">
            {blog?.comments.map((comment) => {
              return (
                <Comment
                  id={comment._id}
                  username={comment.username}
                  content={comment.content}
                  createdAt={comment.createdAt}
                  key={comment._id}
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
