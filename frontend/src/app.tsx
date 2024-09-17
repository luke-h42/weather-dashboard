import Weather from "./components/Weather/Weather"
import './app.css'
import MessageBackground from "./components/MessageBackground/MessageBackground";
import Quote from "./components/Quotes/Quote";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
      setLoading(true);
      setTimeout( () => {
        setLoading(false);
      }, 3000)
  
  }, []);


    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    
    useEffect(() => {
      const intervalId = setInterval(() => {
        const now = new Date();
        setHours(now.getHours());
        setMinutes(now.getMinutes());
      }, 1000);
      return () => clearInterval(intervalId);
    }, []);
    const timeHours = hours.toString().padStart(2, '0');
    const timeMinutes = minutes.toString().padStart(2, '0');
    const isMorning  = hours > 6 && hours < 12;
    const isAfternoon = hours >= 12 && hours < 17;
    const isEvening = hours >= 17 || hours >= 0 && hours <= 6;
    
    
    
    

  return (
    <div className="app">
      { loading?  
      <div className='loading-screen'>
      <BarLoader
        color={'black'}
        loading={loading}
        height={4}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
      :
      
      <div >
        
        <MessageBackground isMorning={isMorning} isAfternoon={isAfternoon} isEvening={isEvening} hours={timeHours} minutes={timeMinutes}/> 
        <Weather isEvening={isEvening} />
        <Quote />
      </div>
}
    </div>
  )
}

export default App
