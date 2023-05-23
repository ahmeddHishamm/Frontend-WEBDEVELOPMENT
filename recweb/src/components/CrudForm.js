import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './FlightSearchFormStyles.css';

function CrudForm() {
    const [countryName, setCountryName] = useState('');
    const [airfareCost, setAirfareCost] = useState(0);
    const [avgCostPerNight, setAvgCostPerNight] = useState(0);
    const [accommodationCost, setAccommodationCost] = useState(0);
    const [mealCost, setMealCost] = useState(0);
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [currency, setCurrency] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        // create data object with captured user input
        const data = {
            country_name: countryName,
            airfare_cost: airfareCost,
            avg_cost_per_night: avgCostPerNight,
            accommodation_cost: accommodationCost,
            meal_cost: mealCost,
            departure_date: departureDate,
            return_date: returnDate,
            country_code: countryCode,
            latitude: latitude,
            longitude: longitude,
            currency: currency,
        };

        // make API call to create new trip with user input
        axios
            .post('/trips/create', data)
            .then((response) => console.log(response.data))
            .catch((error) => console.error(error));
    }

    return (
        <div className="crud-form-container">
            <form className="crud-form" onSubmit={handleSubmit}>
                <label>
                    Country Name:
                    <input
                        type="text"
                        value={countryName}
                        onChange={(event) => setCountryName(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Airfare Cost:
                    <input
                        type="number"
                        value={airfareCost}
                        onChange={(event) => setAirfareCost(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Average Cost Per Night:
                    <input
                        type="number"
                        value={avgCostPerNight}
                        onChange={(event) => setAvgCostPerNight(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Accommodation Cost:
                    <input
                        type="number"
                        value={accommodationCost}
                        onChange={(event) => setAccommodationCost(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Meal Cost:
                    <input
                        type="number"
                        value={mealCost}
                        onChange={(event) => setMealCost(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Departure Date:
                    <input
                        type="date"
                        value={departureDate}
                        onChange={(event) => setDepartureDate(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Return Date:
                    <input
                        type="date"
                        value={returnDate}
                        onChange={(event) => setReturnDate(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Country Code:
                    <input
                        type="text"
                        value={countryCode}
                        onChange={(event) => setCountryCode(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Latitude:
                    <input
                        type="text"
                        value={latitude}
                        onChange={(event) => setLatitude(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Longitude:
                    <input
                        type="text"
                        value={longitude}
                        onChange={(event) => setLongitude(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Currency:
                    <input
                        type="text"
                        value={currency}
                        onChange={(event) => setCurrency(event.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Create Trip</button>
            </form>
        </div>
    );
}

export default CrudForm;
