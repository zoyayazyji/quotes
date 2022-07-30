import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axiosInit";
import Loader from "../../components/Loader/Loader";
import "./EachCategory.css";

const EachCategory = () => {
  const params = useParams();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`/quotes.json?orderBy="category"&equalTo="${params.id}"`).then((response) => {
      const userArr = Object.keys(response.data).map(key => {
        return { id: key, quote: response.data[key] };
      });
      setItem(userArr);
      setLoading(false);
    }).catch(e => {
      console.log(e);
      setLoading(false);
    });
    
  }, [params.id]);
  
  if (!item) {
    return <Loader loading={loading} />
  };

  return (<div className="eachQuote_container">
    {item.length >= 1 ? item.map(elem => (
      <div className="eachPost_container" key={elem.id}>
        <p className="eachQuote_author">Author : <strong>{elem.quote.author}</strong> </p>
        <p className="eachQuote_category">Category : <strong>{elem.quote.category}</strong></p>
        <p className="eachQuote_text">{elem.quote.text}</p>
        <hr />
      </div>
    )) : (<div className="eachPost_container" key={item[0].id}>
      <p className="eachQuote_author">Author : <strong>{item[0].quote.author}</strong> </p>
      <p className="eachQuote_author">Category : <strong>{item[0].quote.category}</strong></p>
      <p className="eachQuote_text">{item.quote.text}</p>
      <hr />
    </div>
    )}

  </div>)
};

export default EachCategory;