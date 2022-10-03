import { useState } from "react";
import Modal from "./Modal";
import bg_image from "../Assets/images/5.jpg";

const Landing = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsActive(false)}
        className={`overlay ${isActive ? "active" : ""}`}
      ></div>
      <div className="landing">
        <Modal
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          isActive={isActive}
          setIsActive={setIsActive}
        />

        <img className="landing-background" src={bg_image} alt="background" />
        <div className="landing__content">
          <h1 className="landing__content__header"> Graphite </h1>
          <h3>
            Hello and welcome! Here I occasionally post about my thoughts and
            journey to become a Fullstack Developer.
          </h3>
          <div className="landing__content__links">
            <div className="landing__content_buttons">
              <button
                onClick={() => {
                  setIsLogin(false);
                  setIsActive(true);
                }}
                className="landing__button"
              >
                Sign Up
              </button>
              <button
                onClick={() => {
                  setIsLogin(true);
                  setIsActive(true);
                }}
                className="landing__button"
              >
                Log In
              </button>
            </div>
            <p className="test-account">
              Just Looking around? Use a Test account
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Landing;
