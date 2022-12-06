import { NavLink } from "react-router-dom";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 border-bottom">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Mention
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavbarItem goto={`/`} label="Home" />
            <NavbarItem goto={`/about`} label="About" />
          </ul>

          <ul className="navbar-nav mb-2 mb-lg-0">
            <NavbarItem goto={`/login`} label="Login" />
            <NavbarItem goto={`/register`} label="Register" />
          </ul>
        </div>
      </div>
    </nav>
  );
}
