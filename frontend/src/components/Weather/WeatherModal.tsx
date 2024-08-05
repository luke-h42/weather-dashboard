import { FormEvent, useState } from 'react'
import * as api from './weather-api.ts';
import { AiOutlineSearch } from 'react-icons/ai';


interface Props {
  changeLocation: (location : string) => void;
  changeTemp: (temp : number) => void;
  changeConditions: (condition : number) => void;
  onClose: () => void;
}

const WeatherModal = ({changeLocation, changeTemp, changeConditions, onClose}:Props) => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleLocationSubmit = async (event: FormEvent) => { 
        event.preventDefault();
        try {
          
          const locationWeather = await api.geocodeLocation(searchTerm);
          if (locationWeather === undefined) {
            alert("Invalid location entered");
          } else {
            changeTemp(locationWeather.current.temperature_2m);
            changeConditions(locationWeather.current.weather_code);
            changeLocation(searchTerm.toUpperCase())
            onClose()
          }
          
          
        } catch (e) {
          console.log(e);
        }
      };
  return (
    <>
    <div className='overlay' onClick={onClose}></div>
    <div className='modal'>
        <form onSubmit={(event) => handleLocationSubmit(event)}>
          <input type="text" required placeholder='Enter a location...' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}></input>
          <button type="submit" className='weather-submit-btn' ><AiOutlineSearch size={40} /></button>
        </form>
    </div>
    </>
  )
}

export default WeatherModal
