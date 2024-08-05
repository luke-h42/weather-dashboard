import { useState } from 'react'
import WeatherModal from './WeatherModal.tsx';
import {FaCirclePlus } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun,faMoon,faCloud,faCloudSunRain,faCloudMoonRain,faBolt,faSnowflake,faSmog, } from '@fortawesome/free-solid-svg-icons'
import './Weather.css'


interface Props {
  isEvening: Boolean;
}

type Views = "search" | "searched";

const Weather = ({isEvening}:Props) => {

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentTemp, setCurrentTemp] = useState<number>();
  const [currentConditions , setCurrentConditions] = useState<number>();
  const [currentView, setCurrentView] = useState<Views>("search");
  const [openModal, setOpenModal] = useState<Boolean>(false);
  const addLocation = (location : string) => {
    setSearchTerm(location);
    setCurrentView("searched");
  }
  const addTemp = (temp : number) => {
    setCurrentTemp(temp)
  }
  const addConditions = (conditions : number) => {
    setCurrentConditions(conditions)
  }
  const WEATHER_ICONS = {
    thunderstorm: [faBolt, faBolt],
    drizzle: [faCloudSunRain, faCloudMoonRain],
    rain: [faCloudSunRain, faCloudMoonRain],
    snow: [faSnowflake, faSnowflake],
    atmosphere: [faSmog, faSmog],
    clear: [faSun, faMoon],
    clouds: [faCloud, faCloud],
  };
  const icon = () => {
    if(currentConditions === 0 ) return WEATHER_ICONS.clear;
    if(currentConditions === 1||2||3) return WEATHER_ICONS.clouds;
    if(currentConditions === 45 || 48) return WEATHER_ICONS.clouds;
    if(currentConditions === 51 || 53 || 55  || 56 || 57) return WEATHER_ICONS.drizzle;
    if(currentConditions === 61 ||63 ||65||66||67||80||81||82) return WEATHER_ICONS.rain;
    if(currentConditions === 71||73||75||77||85||86) return WEATHER_ICONS.snow;
    if(currentConditions === 95 || 96 || 99) return WEATHER_ICONS.thunderstorm;
    else return WEATHER_ICONS.clouds;
  }

  return (
    <>
    <div className='weather-component'>

      {currentView === "search" && (<>
        <div className='add-location'>
          <div className='weather-title'>Weather</div>
          <button type='button' className='edit-location-btn' onClick={() => setOpenModal(true)} ><FaCirclePlus size={40} color='white'/></button>
      </div>
      </> )}
      {currentView === "searched" && (<>
        <div className='weather-div'>
        <div className='location'>
          <div className='location-submitted'>{searchTerm}</div>
          <button className='edit-location-btn' type='button' onClick={() => setOpenModal(true)}><FaPencilAlt size={15} color='white'/></button>
        </div>
        <FontAwesomeIcon className='weather-icon' icon={isEvening? icon()[1]:icon()[0] } />
        <div className='weather-temperature'>{currentTemp}°C</div> 
      </div>
      </>)}
      
      
      
    </div>
    {openModal ? <WeatherModal changeLocation={addLocation} changeTemp={addTemp} changeConditions={addConditions} onClose={() => setOpenModal(false)}/> : null}
    </>
    
  )
}

export default Weather
