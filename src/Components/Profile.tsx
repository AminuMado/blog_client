import Navbar from "./Navbar";
const Profile = () => {
  // TODOs
  // This component should have a list of blogs for the user
  // The user comments too
  // A new post option
  // The posts hould have an update and delete options beside them
  // The new post should be a whole new page
  return (
    <>
      <Navbar />
      <div className="profile-container">
        <header className="profile-header">
          <h1 className="profile-title"> Welcome</h1>
          <p className="profile-subTitle">Hello The Man Himself</p>
        </header>
        <div>New Post</div>
        <div className="profile-posts-container">Post Container</div>
      </div>
    </>
  );
};
export default Profile;
