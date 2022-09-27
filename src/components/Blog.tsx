const Blog = () => {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <div className="blog__header-top">
          <h1>Post:The First Post</h1>
          <h2> - The Man Himself</h2>
        </div>
        <h3 className="blog__header-date">January 24th 2022</h3>
      </header>
      <div className="blog-content-container">
        <p className="blog-content">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Proin tristique, nibh at feugiat bibendum,
          ligula velit mollis neque, in condimentum felis ex a dui. Sed eu nulla
          lacus. Praesent lacinia est vitae lectus fermentum, in accumsan ante
          gravida. Quisque rutrum, felis non cursus porttitor, mauris velit
          posuere neque, placerat tristique tortor leo sit amet magna. Aliquam
          ut erat lacus. Duis sit amet odio a nunc posuere ullamcorper vel ut
          dui. Nam rutrum pharetra justo. Nam ac congue metus. Nullam venenatis,
          orci quis sodales pharetra, arcu orci sagittis ipsum, sed feugiat urna
          justo sodales lorem. Maecenas a sagittis turpis. In ac risus vel eros
          pulvinar maximus sit amet sodales lectus. Nunc sodales vitae turpis a
          molestie. Vivamus sollicitudin odio orci, quis pulvinar tellus
          hendrerit eget. Aenean nunc purus, auctor in ipsum eu, semper
          venenatis mi. Duis fringilla lobortis sem, vel bibendum orci mollis
          id. In eu quam nec sem ultricies elementum. Phasellus consectetur
          varius erat, ut dapibus dolor tempor nec. Aliquam augue risus, porta
          id velit eu, faucibus ornare ligula. Suspendisse suscipit, orci sit
          amet placerat vestibulum, velit quam ullamcorper arcu, ac viverra
          augue ligula ut tellus. Mauris sit amet ultrices mi, elementum
          pharetra mauris. Etiam luctus ullamcorper nulla, in rutrum velit
          faucibus ut. Nam sed ligula lacinia, congue ipsum nec, lobortis odio.
          Vivamus vel mollis nibh, vel aliquam velit.
        </p>
      </div>
      <div className="comment-container">
        <p>Log in to leave a comment</p>
        <h1 className="comment-header">Comments</h1>
        <div className="comments">
          <div className="comment">
            <p className="comment-content">This is a simple comment</p>
            <div className="comment-details">
              <p className="comment-author">By: The Man Himself</p>
              <p className="comment-date">September 16th 2022, 3:52:41 pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
