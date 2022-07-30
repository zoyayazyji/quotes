import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.jpg";
import "./Logo.css";

const Logo = () => {
  return <Link to="/" className="Logo">
    <img src={logo} alt="Range Rover" />

  </Link>
};

export default Logo;