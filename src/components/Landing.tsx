import bg_image from "../Assets/images/5.jpg";

const Landing = () => {
  return (
    <div className="landing">
      <img className="landing-background" src={bg_image} alt="background" />
      <div className="landing__content">
        <h1 className="landing__content__header"> Graphite </h1>
        <h3>
          Hello and welcome! Here I occasionally post about my thoughts and
          journey to become a Fullstack Developer.
        </h3>
        <div className="landing__content__links">
          <div className="landing__content_buttons">
            <button className="landing__button">Sign Up</button>
            <button className="landing__button">Log In</button>
          </div>
          <p className="test-account">
            Just Looking around? Use a Test account
          </p>
        </div>
      </div>
    </div>
  );
};
export default Landing;
