import React from 'react';
import './DisplayCountry.css';

const DisplayCountry = (props) => {
    return props.Countries && (
        <div className="CountryList">
            <ul>
                {props.Countries.map(country => (
                    <li
                        key={country.id}
                        onClick={() => props.onCountryHandle(country.alpha3Code)}
                        className="List"
                    >{country.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayCountry;