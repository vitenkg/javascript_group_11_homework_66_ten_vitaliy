import {BASE_URL_GET_ALL, COUNTRY_URL} from "../../config";
import DisplayCountry from "../../Component/DisplayCountry/DisplayCountry";
import DisplayInfo from "../../Component/DisplayInfo/DisplayInfo";
import {useEffect, useState} from "react";
import axiosApi from "../../axiosApi";
import './Country.css';
import withErrorHandler from "../../hoc/withErrorHandler";


const Country = () => {
    const [countries, setCountries] = useState(null);
    const [countryInfo, setCountryInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosApi.get(BASE_URL_GET_ALL);
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
            const response = await axiosApi.get(COUNTRY_URL + alfa)
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

export default withErrorHandler(Country, axiosApi);