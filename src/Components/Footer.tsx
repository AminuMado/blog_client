import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <p>
          Made by
          <a
            href="https://github.com/aminumado"
            target="_blank"
            rel="noreferrer"
          >
            aminumado
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
