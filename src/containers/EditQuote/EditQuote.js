import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axiosInit";
import Loader from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { Title } from "../../components/Title/Title";
import { CATEGORIES } from "../../constants";
import Option from "../../components/AddQuotes/Option";
import "./EditQuote.css";

const EditQuote = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [inputCategoryValue, setInputCategoryValue] = useState();
  const [edit, setEdit] = useState();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    axios.get(`/quotes/${params.id}.json`).then((response) => {
      setEdit(response.data);
      setLoading(false);
    }).catch(e => {
      console.log(e);
      setLoading(false);
    });
  }, []);

  
  const saveEditHandler = async (e) => {
    e.preventDefault();
    const response = await axios.put(`/quotes/${params.id}.json`, {
      category: edit.category,
      author: edit.author,
      text:  edit.text,
      id: edit.id
    });
    setEdit({ ...edit, category: response.data.category, author: response.data.author, text: response.data.text, id: edit.id });
    navigate(`/`);
  };

  if (!edit) {
    return <Loader loading={loading} />
  };

  const changeHandlerName = (e) => {
    setEdit({...edit, author: e.target.value})
  };

  const changeHandlerText = (e) => {
    setEdit({...edit, text: e.target.value})
  };

  const handleChange = (e) => {
    setInputCategoryValue(e.target.value);
  };

  return <div className="edit_quote_container">
    <Title text="Edit post" />
    <label className="form_header">
      <p className="choose_categories"> Choose name of Category:</p>
      <select className="select" onChange={handleChange} >{edit.category}
        {CATEGORIES.map(element => {
          return <Option
            key={element.id}
            name={element.category}
            select={element.id}
          />
        })}
      </select>
    </label>
    <div className="records_form">
      <form className="form_records">
        <textarea placeholder="name" value={edit.author} onChange={changeHandlerName}></textarea>
        <textarea placeholder="text" value={edit.text} onChange={changeHandlerText}></textarea>
      
        <div>
          <button className="records_add_btn" onClick={saveEditHandler} >Save</button></div>
      </form>
    </div>;
  </div>
};

export default EditQuote;