const Header = () => {
  return (
    <header class="header">
      <nav class="navbar">
        <div class="nav-left">
          <a href="#" class="nav-link">
            Home
          </a>
          <a href="#" class="nav-link">
            About
          </a>
          <a href="#" class="nav-link">
            Contact
          </a>
          <a href="#" class="nav-link active">
            Services
          </a>
        </div>
        <div class="nav-right">
          <a href="#" class="login">
            Login
          </a>
          <a href="#" class="signin">
            Sign in
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
