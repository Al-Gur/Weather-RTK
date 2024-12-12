import {setWeather} from "../weatherSlice.js";
import {setMessage} from "../messageSlice.js";
import {api_key, base_url} from "../../utils/constants.js";

export const getWeather = city => {
    return dispatch => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(result => result.json())
            .then(data => {
                dispatch(setWeather({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: new Date(data.sys.sunset * 1000)
                }))
                dispatch(setMessage(''))
            })
            .catch(e => {
                console.log(e);
                dispatch(setMessage('Enter correct city name'))
            })
    }
}