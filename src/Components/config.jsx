const fetchQuote = () => {
    return fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        return data[randomIndex];
      });
  };
  
  export default fetchQuote;
  