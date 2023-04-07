import React, { useState, useEffect } from "react";
import load from './load.gif';
import { makeStyles } from '@material-ui/core/styles';
import fetchQuote from './config';

const useStyles = makeStyles((theme) => ({
  quoteContainer:{
    backgroundColor: theme.palette.background.default, padding:'10px', margin:'5rem auto', width:'30%', minWidth:'18rem', boxShadow:'0 0 .5rem .5rem rgba(0, 0, 0, 0.5)'
  },
  button:{
    fontSize:'1.5rem', 
    backgroundColor:'#413eff', 
    borderRadius:'10px', 
    padding:'10px', 
    color:'#fff', 
    marginTop:'1rem'
  }
}));

function Quote() {
  const classes = useStyles();
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [color, setColor] = useState("#FF6633");

  useEffect(() => {
    fetchQuote().then(data => {
      setQuote(data);
      setColor(randomColor());
      setIsLoading(false);
    });
  }, []);

  const handleNewQuote = () => {
    setIsLoading(true);
    fetchQuote().then(data => {
      setQuote(data);
      setColor(randomColor());
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
    <div className={classes.container}>
        <h1>Quote Generator</h1>
    <div
      style={{backgroundColor: color}}
      className={classes.quoteContainer}
    >
        <button className={classes.button} onClick={handleNewQuote} >New Quote</button>
      {isLoading ? (
        loader
      ) : (
        <>
          <h2 className={classes.quote}>"{quote?.text}"</h2>
          <p className={classes.author}>- {quote?.author}</p>
        </>
      )}
    </div>
    </div>
  );
}

export default Quote;
