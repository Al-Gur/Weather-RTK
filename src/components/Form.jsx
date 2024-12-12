import {useState} from "react";
import {useDispatch} from "react-redux";
import {setWeather} from "../actions/weatherAction.js";
import {setMessage} from "../actions/messageAction.js";
import {getWeather} from "../features/api/weatherAction.js";


const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const getCity = e => {
        e.preventDefault();
        dispatch(getWeather(city));
        setCity('');
    }

    return (
        <form onSubmit={getCity}>
            <input onChange={e => setCity(e.target.value)} type="text" value={city} />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;