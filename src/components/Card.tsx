import commentIcon from "../Assets/images/comment.svg";
const Card = () => {
  return (
    <div className="card">
      <h2 className="card-title"> The first blog post</h2>
      <div className="card-detailsWrapper">
        <p className="card-details">
          This should be a very long details and details and details. We need to
          be able...
        </p>
        <a href="/blogs/blogId">
          Read More..
          {/* add a link to the post here in the anchor tag */}
        </a>
      </div>
      <div className="card-authorInfo">
        <span className="card-author">
          <strong>The Man Himself</strong>
        </span>
        <span className="card-published">27 September 2022</span>
        <div className="card-commentWrapper">
          <img src={commentIcon} alt="chat" className="card-chatIcon" />
          <span className="card-chatCount">10</span>
        </div>
      </div>
    </div>
  );
};
export default Card;
