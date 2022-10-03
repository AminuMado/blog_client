import { useEffect, useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
// access blogs from db
// Todos add props values to card component
type author = {
  id: string;
  username: string;
};
type comment = {
  id: string;
  createdAt: string;
  author: author;
};

type blog = {
  _id: string;
  title: string;
  content: string;
  published: boolean;
  createdAt: string;
  author: { id: string; username: string };
  comments: comment[];
  likes: author[];
};
const Blogs = () => {
  const [blogs, setBlogs] = useState<blog[]>([]);
  useEffect(() => {
    const getBlogs = async () => {
      const response = await fetch("/api/blogs");
      const json: blog[] = await response.json();
      if (response.ok) {
        setBlogs(json);
      }
    };
    getBlogs();
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
            {blogs.map((blog) => {
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
