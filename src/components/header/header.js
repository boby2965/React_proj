import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-left">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            About
          </a>
          <a href="#" className="nav-link">
            Contact
          </a>
          <a href="#" className="nav-link active">
            Services
          </a>
        </div>
        <div className="nav-right">
          <a href="#" className="login">
            Login
          </a>
          <a href="#" className="signin">
            Sign in
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
