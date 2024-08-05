import morningImage from "../../assets/morning.jpg"
import afternoonImage from "../../assets/afternoon.jpg"
import eveningImage from "../../assets/evening.jpg"
import './MessageBackground.css'

import { useState, useEffect } from "react";

interface MessageBackgroundProps {
    isEvening: boolean;
    isAfternoon: boolean;
    isMorning: boolean;
    hours: string;
    minutes: string;
  }
  

const MessageBackground = ({isAfternoon, isMorning, isEvening, hours, minutes}:MessageBackgroundProps) => {
    const [useBackgroundImage, setUseBackgroundImage] = useState<string>("");
    const [greeting, setGreeting] = useState<string>("How are you today?");
    useEffect(() => {
        const checkImage = () => {
            if (isMorning) {
                setUseBackgroundImage(morningImage);
                setGreeting("Good morning.")
            } else if (isAfternoon) {
                setUseBackgroundImage(afternoonImage);
                setGreeting("Good afternoon.")
            } else if (isEvening) {
                setUseBackgroundImage(eveningImage);
                setGreeting("Good evening.")
            }
        };
       

        checkImage();
    }, [isMorning, isAfternoon, isEvening]);


    const css ={
        backgroundImage: `url(${useBackgroundImage})`,
        height: '100vh',
        width: '100%',
        backgroundRepeat: `no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }
    
  return (
    <div style={css} className="central-area" >
        <div className="central-div">
            <div className="time">
                <p>{hours}</p>
                <span>:</span>
                <p>{minutes}</p>
            </div>
            <div className="greeting">
                {greeting}
            </div>
        </div>
        
    </div>
  )
}

export default MessageBackground
