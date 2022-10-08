import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { blog } from "../types";
import Card from "./Card";
import { DateTime } from "luxon";
const Profile = () => {
  // TODOs
  // This component should have a list of blogs for the user
  // The user comments too
  // A new post option
  // The posts hould have an update and delete options beside them
  // The new post should be a whole new page
  const [profileBlogs, setProfileBlogs] = useState<blog[] | null>(null);
  const formatDate = (date: string) => {
    return DateTime.fromISO(date).toFormat("MM-dd-yyyy");
  };
  useEffect(() => {
    const getProfileBlogs = async () => {
      const response = await fetch("/api/blogs/profile");
      const json: blog[] = await response.json();
      if (response.ok) {
        console.log(json);
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
          <h2 className="profile-subTitle">The Man Himself</h2>
        </header>

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
