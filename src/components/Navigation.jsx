import { NavLink } from "react-router-dom";
import image1 from "../images/3d-square.svg"
import image2 from "../images/discount-shape.svg"
import image3 from "../images/key-square.svg"
import image4 from "../images/message-question.svg"
import image5 from "../images/user-square.svg"
import image6 from "../images/wallet-money.svg"

const navItems = [
  { label: "Dashboard", path: "/", icon: image3 },
  { label: "Product", path: "/product", icon: image1 },
  { label: "Customers", path: "/customers", icon: image5 },
  { label: "Income", path: "/income", icon: image6 },
  { label: "Promote", path: "/promote", icon: image2 },
  { label: "Help", path: "/help", icon: image4 },
];

const NavItem = ({ children, path }) => {
  return (
    <li className="navigation__list-item">
      <NavLink className="navigation__link" to={path}>
        {children}
      </NavLink>
    </li>
  );
};

export const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navItems.map((item) => (
          <NavItem key={item.label} path={item.path}>
            <img src={item.icon} alt="icon" />
            {item.label}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

