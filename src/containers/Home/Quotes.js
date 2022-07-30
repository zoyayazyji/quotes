import { useState, useEffect } from "react";
import axios from "../../axiosInit";
import Loader from "../../components/Loader/Loader";
import "./Quotes.css";
import QuotesList from "../../components/Quotes/QuotesList";


const Quotes = () => {

  const [quotes, setQuotes] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`/quotes.json`).then((response) => {
      const userArr = Object.keys(response.data).map(key => {
        return { id: key, quote: response.data[key] };
      });
      setQuotes(userArr);
      setLoading(false);
    }).catch(e => {
      console.log(e)
      setLoading(false);
    });
  }, []);

  if (!quotes) {
    return <Loader loading={loading} />
  };

  const deleteHandler = async (id) => {
    await axios.delete(`/quotes/${id}.json`).then((response) => {
      setQuotes(response.data);
    }).catch(e => {
      console.log(e)
      setLoading(false);
    })
    axios.get(`/quotes.json`).then((response) => {
      const userArr = Object.keys(response.data).map(key => {
        return { id: key, quote: response.data[key] };
      });
      setQuotes(userArr);
      setLoading(false);
    }).catch(e => {
      console.log(e)
      setLoading(false);
    });
  }
 
  return (
    <>
      <Loader loading={loading} />
      <div className="posts_container">
        {quotes ? quotes.map(quote => (
          <QuotesList
            key={quote.id}
            id={quote.id}
            author={quote.quote.author}
            category={quote.quote.category}
            text={quote.quote.text}
            deleteHandler={() => deleteHandler(quote.id)}
          />
        )) : (
          <div>No one Post yet</div>
        )}
      </div>
    </>
  );
};

export default Quotes;