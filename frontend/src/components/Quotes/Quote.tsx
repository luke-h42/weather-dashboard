import  {useEffect, useState } from 'react'
import './Quote.css'
import { IoReload } from "react-icons/io5";
import quotes from '../../assets/quotes.json'

const RandomQuote = () => {
  
    

    const [quote, setQuote] = useState("Giving back involves a certain amount of giving up.");
    const [author, setAuthor] = useState("Colin Powell");

    const getRandomQuote = () => {
        const randomNumber = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomNumber];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      
    }
  
    
    
    useEffect(() => {
      getRandomQuote()
  }, []);

    return (
    <div className='container' id="quote-box">
        <div className='quote' id="text">{quote} - {author}</div>
        <IoReload className='icon' size={30} color='white' onClick={getRandomQuote}/>
    </div>
  )
}

export default RandomQuote
