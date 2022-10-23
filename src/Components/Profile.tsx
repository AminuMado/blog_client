import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { blog } from "../types";
import Card from "./Card";
import { DateTime } from "luxon";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
const Profile = () => {
  const [profileBlogs, setProfileBlogs] = useState<blog[] | null>(null);
  const user = useAuthContext().state.user;
  const formatDate = (date: string) => {
    return DateTime.fromISO(date).toFormat("MM-dd-yyyy");
  };
  useEffect(() => {
    if (!user) return;
    const getProfileBlogs = async () => {
      const response = await fetch("/api/blogs/profile", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json: blog[] = await response.json();
      if (response.ok) {
        setProfileBlogs(json);
      }
    };
    getProfileBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navbar />
      <div className="profile-container">
        <header className="profile-header">
          <h1 className="profile-title"> Hello</h1>
          <h2 className="profile-subTitle">{user?.username}</h2>
        </header>

        <Link to="./newblog">
          <button className="profile__newBlog">New Blog</button>
        </Link>

        <div className="profile-posts-container">
          <h1>Your Posts</h1>
          <div className="profile-posts">
            {profileBlogs?.map((blog) => {
              return (
                <Card
                  key={blog._id}
                  id={blog._id}
                  title={blog.title}
                  content={blog.content}
                  username={blog.author.username}
                  createdAt={formatDate(blog.createdAt)}
                  commentsCount={blog.comments.length}
                  options={true}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
