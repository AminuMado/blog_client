import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
const Navbar = () => {
  const logout = useLogout();
  return (
    <nav className="navigation">
      <Link to="/blogs" className="navigation__home">
        Graphite
      </Link>
      <div className="navigation-menu">
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li onClick={logout}>
            <p>Log Out</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
