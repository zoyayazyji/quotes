import Logo from "../../Logo/Logo";
import "./Toolbar.css";
import NavigationItem from "../NavigationItem/NavigationIyem";


const Toolbar = () => {
  
  return <>
    <header className="Toolbar">
      <Logo />
      <div className="Toolbar_main">
        <NavigationItem to="/">Quates</NavigationItem>
        <NavigationItem to="/quotes/add">Submit New Quotes</NavigationItem>
      </div>
    </header>

  </>
};

export default Toolbar;