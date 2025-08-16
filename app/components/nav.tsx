import { NavLink } from "@remix-run/react";
import { encodeDynamicPath } from "~/utils/dynamicUrlsHandler";

function Nav() {
  return (
    <nav>
      {/* Header */}
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
      {/* Navigation Links */}
      <ul className="h-full">
        {["home wear", "cloth"].map((cat) => (
          <li key={"category_" + encodeDynamicPath(cat)}>
            <NavLink to={`/category/${encodeDynamicPath(cat)}`}>{cat}</NavLink>
          </li>
        ))}
      </ul>
      {/* Footer */}
      <ul>
        <li>
          <NavLink to="logout">Logout</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
