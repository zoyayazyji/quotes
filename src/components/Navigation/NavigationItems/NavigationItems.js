import NavigationItem from "../NavigationItem/NavigationIyem";
import "./NavigationItems.css";


const NavigationItems = ({ name }) => {
  return <div className="NavigationItems">
    <NavigationItem to={`/${name}`}>{name}</NavigationItem>
  </div>
}
export default NavigationItems;

