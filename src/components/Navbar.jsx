import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          MO<span>.</span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end>
            {({ isActive }) => (
              <span className={isActive ? "active" : undefined}>Home</span>
            )}
          </NavLink>

          <NavLink to="/about" end>
            {({ isActive }) => (
              <span className={isActive ? "active" : undefined}>About</span>
            )}
          </NavLink>

          <NavLink to="/skills" end>
            {({ isActive }) => (
              <span className={isActive ? "active" : undefined}>Skills</span>
            )}
          </NavLink>

          <NavLink to="/projects" end>
            {({ isActive }) => (
              <span className={isActive ? "active" : undefined}>Projects</span>
            )}
          </NavLink>

          <NavLink to="/experience" end>
            {({ isActive }) => (
              <span className={isActive ? "active" : undefined}>
                Experience
              </span>
            )}
          </NavLink>

          <NavLink to="/contact" end>
            {({ isActive }) => (
              <span className={isActive ? "active" : undefined}>Contact</span>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
