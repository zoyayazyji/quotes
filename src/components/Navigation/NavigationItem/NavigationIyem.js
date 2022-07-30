import { NavLink } from "react-router-dom";
import "./NavigationItem.css";


const NavigationItem = ({ children, to, end }) => {
  return <p className="NavigationItem">
    <NavLink to={to} end={end}>{children}</NavLink>
  </p>;
};

export default NavigationItem;