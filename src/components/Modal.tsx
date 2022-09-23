import { useState } from "react";

const Modal = () => {
  const [signup_username, setSignup_username] = useState("");
  const [signup_email, setSignup_email] = useState("");
  const [signup_password, setSignup_password] = useState("");
  const [signup_confirmPassword, setSignup_confirmPassword] = useState("");
  const [login_email, setLogin_email] = useState("");
  const [login_password, setLogin_password] = useState("");
  console.log(signup_username);
  console.log(signup_email);
  console.log(signup_password);
  console.log(signup_confirmPassword);
  console.log(login_email);
  console.log(login_password);
  return (
    <div className="modal">
      <input id="chk" type="checkbox" aria-hidden="true" />
      <div className="signup">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input
            type="text"
            name="username"
            placeholder="User name"
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
      <div className="login">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Log In
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required={true}
            value={signup_email}
            onChange={(e) => setLogin_email(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required={true}
            value={signup_password}
            onChange={(e) => setLogin_password(e.target.value)}
          />
          <button>Log In</button>
        </form>
      </div>
    </div>
  );
};
export default Modal;
