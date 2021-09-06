import React, {useEffect, useState} from 'react';
import {COUNTRY_URL} from "../../config";
import './DisplayInfo.css';
import axiosApi from "../../axiosApi";

const DisplayInfo = props => {
    const [borders, setBorders] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (props.CountryInfo !== null) {
                const bordersC = props.CountryInfo.borders.map(async border => {
                    return await axiosApi.get(COUNTRY_URL + border);
                });
                const bordersCountry = await Promise.all(bordersC);
                setBorders(bordersCountry.map(border => {
                    return border.data.name
                }));
            }

        };
        fetchData().catch(e => console.error(e));
    }, [props.CountryInfo]);

    return props.CountryInfo && (
        <div className="CountryInfo">
            <p>Страна {props.CountryInfo.name}</p>
            <p><img src={props.CountryInfo.flag} width="150px" height="auto" alt="FLAG"/></p>
            <p>Столица {props.CountryInfo.capital}</p>
            <p>Регион {props.CountryInfo.region}</p>
            <p>Насаление {props.CountryInfo.population} чел</p>
            {borders && (<ul>{borders.length > 0 ? 'Граничит с:' : null}{borders.map((border, i) => {
                return (<li key={i}><p>{border}</p></li>)
            })}</ul>)}
        </div>
    );
};

export default DisplayInfo;