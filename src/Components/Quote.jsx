import React, { useState, useEffect } from "react";
import load from './load.gif'

function Quote() {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex]);
        setIsLoading(false);
      });
  }, []);

  const handleNewQuote = () => {
    setIsLoading(true);
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex]);
        setIsLoading(false);
      });
  };

  const randomColor = () => {
    const colors = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const loader = (
    <div className="loader">
      <img src={load} alt="loading"/>
    </div>
  );

  return (
    <div className="container">
        <h1>Quote Generator</h1>
    <div
      style={{ backgroundColor: quote && randomColor(), padding:'10px', margin:'5rem auto', width:'30%', minWidth:'18rem', boxShadow:'0 0 .5rem .5rem rgba(0, 0, 0, 0.5)' }}
      className="quote-container"
    >
        <button onClick={handleNewQuote} style={{fontSize:'1.5rem', backgroundColor:'#413eff', borderRadius:'10px', padding:'10px', color:'#fff', marginTop:'1rem'}}>New Quote</button>
      {isLoading ? (
        loader
      ) : (
        <>
          <h2 className="quote">"{quote?.text}"</h2>
          <p className="author">- {quote?.author}</p>
        </>
      )}
    </div>
    </div>
  );
}

export default Quote;
