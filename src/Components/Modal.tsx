import { useState } from "react";
import LoginForm from "./LoginForm";

type modalProps = {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};
const Modal = ({ isLogin, setIsLogin, isActive, setIsActive }: modalProps) => {
  const [signup_username, setSignup_username] = useState("");
  const [signup_email, setSignup_email] = useState("");
  const [signup_password, setSignup_password] = useState("");
  const [signup_confirmPassword, setSignup_confirmPassword] = useState("");

  return (
    <div className={`modal ${isActive ? "active" : ""}`}>
      <div className={`modal__signup ${isLogin ? "" : "active"}`}>
        <form>
          <label onClick={() => setIsLogin(!isLogin)}>Sign up</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required={true}
            value={signup_username}
            onChange={(e) => setSignup_username(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required={true}
            value={signup_email}
            onChange={(e) => setSignup_email(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required={true}
            value={signup_password}
            onChange={(e) => setSignup_password(e.target.value)}
          />
          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirm Password"
            required={true}
            value={signup_confirmPassword}
            onChange={(e) => setSignup_confirmPassword(e.target.value)}
          />
          <button>Sign up</button>
        </form>
      </div>
      <div className={`modal__login ${isLogin ? "active" : ""}`}>
        <label onClick={() => setIsLogin(!isLogin)}>Log In</label>
        <LoginForm />
      </div>
    </div>
  );
};
export default Modal;
