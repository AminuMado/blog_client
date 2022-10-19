import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

type modalProps = {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};
const Modal = ({ isLogin, setIsLogin, isActive, setIsActive }: modalProps) => {
  return (
    <div className={`modal ${isActive ? "active" : ""}`}>
      <div className={`modal__signup ${isLogin ? "" : "active"}`}>
        <label onClick={() => setIsLogin(!isLogin)}>Sign up</label>
        <SignupForm />
      </div>
      <div className={`modal__login ${isLogin ? "active" : ""}`}>
        <label onClick={() => setIsLogin(!isLogin)}>Log In</label>
        <LoginForm />
      </div>
    </div>
  );
};
export default Modal;
