
import './Country.css';
import axios from "axios";
import {BASE_URL_GET_ALL, COUNTRY_URL} from "../../config";
import DisplayCountry from "../../Component/DisplayCountry/DisplayCountry";
import DisplayInfo from "../../Component/DisplayInfo/DisplayInfo";
import {useEffect, useState} from "react";

const Country = () => {
    const [countries, setCountries] = useState(null);
    const [countryInfo, setCountryInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(BASE_URL_GET_ALL);
            setCountries(response.data.map(city =>
                ({
                ...city,
                id: Math.random()
            })));
        }

        fetchData().catch(e => console.log(e));
    }, []);


    const onCountryHandle = alfa => {
        console.log(alfa);
        const fetchData = async () => {
            const response = await axios.get(COUNTRY_URL + alfa)
            setCountryInfo(response.data);
        };
        fetchData().catch(e => console.log(e));
    };


    return (
        <div className="Container">
            <DisplayCountry
                onCountryHandle={onCountryHandle}
                Countries={countries}
            />
            <DisplayInfo
                CountryInfo={countryInfo}
            />
        </div>
    );
};

export default Country;