import axios from "../../axiosInit";
import { v4 as uuid } from "uuid";
import React, { useState } from 'react';
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";
import { CATEGORIES } from "../../constants";
import Option from "../../components/AddQuotes/Option";
import "./Form.css";

const Form = ({ setQuote }) => {

  const [loading, setLoading] = useState(false);
  const [inputAuthorValue, setInputAuthorValue] = useState();
  const [inputCategoryValue, setInputCategoryValue] = useState();
  const [inputTextValue, setInputTextValue] = useState();

  const navigate = useNavigate();

  const changeAuthorHandler = (e) => {
    setInputAuthorValue(e.target.value);
  };

  const changeTextHandler = (e) => {
    setInputTextValue(e.target.value);
  };

  const taskHandler = async (event) => {
    event.preventDefault();

    setQuote({ category: inputCategoryValue, author: inputAuthorValue, text: inputTextValue, id: uuid() });
    const record =
      { category: inputCategoryValue ? inputCategoryValue : "Love", author: inputAuthorValue ? inputAuthorValue : "Anonymous", text: inputTextValue ? inputTextValue : "Nothing to say", id: uuid() }
    setLoading(true);
    try {
      await axios.post("/quotes.json", record);
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
    }
    navigate(`/`);
  };
  const handleChange = (e) => {
    setInputCategoryValue(e.target.value);
  };

  return (
    <>
      <Loader loading={loading} />
      <div className="records_form">
        <form className="form_records"  >
          <label>
            <p className="name_categories"> Choose name of Category:</p>
            <select className="select" onChange={handleChange}>
              {CATEGORIES.map(element => {
                return <Option
                  key={element.id}
                  name={element.category}
                  select={element.id}
                />
              })}
            </select>
          </label>
          <textarea name="text" onChange={changeTextHandler} value={inputTextValue} placeholder="text" ></textarea>
          <textarea name="author" onChange={changeAuthorHandler} value={inputAuthorValue} placeholder="author" ></textarea>
          <div>
            <button className="records_add_btn" onClick={taskHandler}>Add</button></div>
        </form>
      </div>
    </>
  );
};

export default Form;