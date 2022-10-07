import { useEffect } from "react";
import { useBlogsContext } from "../hooks/useBlogsContext";
import Card from "./Card";
import Navbar from "./Navbar";
import { DateTime } from "luxon";
enum BlogsActionKind {
  GET = "GET_BLOGS",
  CREATE = "CREATE_BLOG",
}

const Blogs = () => {
  const { state, dispatch } = useBlogsContext();
  const formatDate = (date: string) => {
    return DateTime.fromISO(date).toFormat("MM-dd-yyyy");
  };
  useEffect(() => {
    const getBlogs = async () => {
      const response = await fetch("/api/blogs");
      const json: typeof state.blogs = await response.json();
      if (response.ok) {
        console.log(json);
        dispatch({ type: BlogsActionKind.GET, payload: json });
      }
    };
    getBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <header className="blogs-header">
          <h1 className="blogs-title"> Graphite</h1>
          <p className="blogs-subTitle">Thoughts, stories and ideas</p>
        </header>
        <div className="blogs-container">
          <div className="blogs">
            {state.blogs.map((blog) => {
              return (
                <Card
                  key={blog._id}
                  id={blog._id}
                  title={blog.title}
                  content={blog.content}
                  username={blog.author.username}
                  createdAt={formatDate(blog.createdAt)}
                  commentsCount={blog.comments.length}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Blogs;
