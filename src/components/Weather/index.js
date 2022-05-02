import './style.css'

import { BsDropletFill, BsToggleOn } from 'react-icons/bs'
import {ImArrowDown, ImArrowUp} from 'react-icons/im'

import {AiOutlineCloudSync} from 'react-icons/ai'
import {FaCloudShowersHeavy} from 'react-icons/fa'
import axios from 'axios'
import { useState } from 'react'

export const Weather = ({location}) => {
    const [data, setData] = useState(undefined);
    const fetchData = async (loc) => {
        let url = "https://community-open-weather-map.p.rapidapi.com/weather"
        const options = {
            params: {
              q: loc,
              lang: 'null',
              units: 'imperial',
            },
            headers: {
              'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
              'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
            }
          };
    
        try {
            let res = await axios.get(url, options)
            let response = await res.data
            // console.log(response);
            setData(response)
        } catch (e) {
          console.log(e.response.data?.message);
          return;
        }
    }

    console.log(location);
    fetchData(location);
    return (
        <div className='main'>
            <div className='header'>
                <p>Current Weather</p>
                <BsToggleOn size={25} color={'#00f'} />
            </div>
            <div className='content'>
                <div className='left'>
                    <p className='city'>{data?.name || 'Accra'}</p>
                    <div className='icons'>
                        <img src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon || '11d'}.png`} alt='temp-icon' />
                        <p className='temp'>{data?.main?.temp || 37} <sup>o</sup>C</p>
                    </div>
                    <p className='description'>{data?.weather[0]?.description || 'Clouds'}</p>
                </div>
                <div className='right'>
                    <p className='title'>Feels like {data?.main?.feels_like || 38.5} <sup>o</sup>C</p>
                    <div className='row-up'>
                        <div className='row'>
                            <ImArrowUp />
                            <p>{data?.main?.temp_max}<sup>o</sup>C</p>
                        </div>
                        <div className='row'>
                        <ImArrowDown />
                        <p>{data?.main?.temp_max}<sup>o</sup>C</p>
                        </div>
                    
                    </div>
                    <div className='row'>
                        <BsDropletFill />
                        <p>Humidity <span>{data?.main?.humidity || 32}%</span></p>
                    </div>
                    <div className='row'>
                        <FaCloudShowersHeavy />
                        <p>Wind <span>{data?.wind?.speed || 92}kph</span></p>
                    </div>
                    <div className='row'>
                        <AiOutlineCloudSync />
                        <p>{data?.main?.pressure || 1017} <span>1017hpa</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}