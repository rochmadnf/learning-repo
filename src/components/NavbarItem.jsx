import { NavLink } from "react-router-dom";

export default function NavbarItem({ label, goto, ...props }) {
  return (
    <li className="nav-item">
      <NavLink
        to={goto}
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        {...props}
      >
        {label}
      </NavLink>
    </li>
  );
}
