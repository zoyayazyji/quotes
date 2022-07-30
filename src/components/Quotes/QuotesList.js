import { Link } from "react-router-dom"
import "./QuotesList.css";


const QuotesList = ({ author, text, category, id, deleteHandler }) => {
  return <div key={id}>
    <div className="list_quates">
      <p className="quote_category"> Category : <strong>{category}</strong> </p>
      <p className="quote_category"> Author: <strong>{author}</strong></p>
      <p className="quote_text">{text}</p>
      <div className="btn_container">
        <p className="remove_btn" onClick={deleteHandler}>Delete</p>
        <p className="remove_btn"><Link style={{ textDecoration: 'none', color: 'black' }} to={`/quotes/${id}/edit`}>Edit</Link></p>
      </div>
    </div>
  </div>;
};

export default QuotesList;