import React, { useState } from "react";
import Form from "../../components/AddQuotes/Form";
import { Title } from "../../components/Title/Title";


const AddQuates = () => {
  const [quote, setQuote] = useState([]);

  return (
    <>
      <div className="add_post_container">
        <Title
          text="Submit new Quote"
        />
        <Form
          setQuote={setQuote}
        />
      </div>
    </>
  );
};

export default AddQuates;