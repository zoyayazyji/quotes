import { Link } from "react-router-dom"
import "./Quote.css";
import { CATEGORIES } from "../../constants"


const Quote = () => {
 
  return <>
    <div className="menu_category_container" >
      <p className="title_list">List of categories :</p>
      <li className="all" key="all"><Link  style={{ textDecoration: 'none', color: 'rgb(253, 122, 75)' }} to={`/`}>All</Link></li>
      {CATEGORIES.map((element, i) => (
        <form key={i} >
          <li  className="menu_category" ><Link style={{ textDecoration: 'none', color: 'rgb(253, 122, 75)'}} to={`/quotes/${element.category}`}>{element.category}</Link></li>
          </form>
      ))}
    </div>

  </>
};

export default Quote;

