import { useEffect } from "react";
import { useBlogsContext } from "../hooks/useBlogsContext";
import Card from "./Card";
import Navbar from "./Navbar";
// access blogs from db
// Todos add props values to card component
type author = {
  _id: string;
  username: string;
};
type comment = {
  _id: string;
  content: string;
  createdAt: string;
  author: author;
  blogId: string;
};
enum BlogsActionKind {
  GET = "GET_BLOGS",
  CREATE = "CREATE_BLOG",
}
type blog = {
  _id: string;
  title: string;
  content: string;
  published: boolean;
  createdAt: string;
  author: author;
  comments: comment[];
  likes: author[];
};
const Blogs = () => {
  const { state, dispatch } = useBlogsContext();
  useEffect(() => {
    const getBlogs = async () => {
      const response = await fetch("/api/blogs");
      const json: blog[] = await response.json();
      if (response.ok) {
        dispatch({ type: BlogsActionKind.GET, payload: json });
      }
    };
    getBlogs();
  });

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
                <>
                  <Card
                    id={blog._id}
                    title={blog.title}
                    content={blog.content}
                    username={blog.author.username}
                    createdAt={blog.createdAt}
                    commentsCount={blog.comments.length}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Blogs;
