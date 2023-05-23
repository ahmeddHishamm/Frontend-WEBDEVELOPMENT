

import OurTripsData from "./OurTripsData";
import "./OurTripsStyles.css";
import Trip1 from "../assets/swiss-landscape--wallpaper.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

function OurTrips() {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/data")
            .then((response) => {
                console.log(response.data);
                // Use Promise.all to make requests for weather and exchange rate for each country in trips
                Promise.all(
                    response.data.map((trip) => {
                        return axios.get(
                            `http://localhost:8080/api/weather/weather/${trip.country_name}`
                        ).then((weatherResponse) => {

                            trip.weather = weatherResponse.data;
                            return axios.get(
                                `http://localhost:8080/api/exchange/exchangerate/${trip.country_name}`
                            ).then((exchangeResponse) => {
                                trip.exchange_rate = exchangeResponse.data;
                                return trip;
                            });
                        });
                    })
                ).then((allResponses) => {
                    // Update state with all trip data (including weather and exchange rate)
                    setTrips(allResponses);
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, []); // empty dependency array means this effect runs only once on mount

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-GB");
    };

    return (
        <div className="trip">
            <h1> Our Trips</h1>
            <p>Check out the Trips Made Exclusively for Avventura users!</p>

            {trips.map(
                (
                    {
                        id,
                        accommodation_cost,
                        airfare_cost,
                        avg_cost_per_night,
                        country_name,
                        departure_date,
                        meal_cost,
                        return_date,
                        country_code,
                        Total,
                        longitude,
                        latitude,
                        currency,
                        weather,
                        exchange_rate
                    },
                    index
                ) => {
                    const firstFiveForecasts = weather.forecast.slice(0, 5);
                    const forecastList = firstFiveForecasts.map((forecast, i) => (
                        <li key={i}>
                            {forecast.temperatureInCelsius}&deg;C - {forecast.weatherDescription}
                        </li>
                    ));
                    return (
                        <div className="tripcard" key={id}>
                            <OurTripsData
                                image={Trip1}
                                heading={country_name}
                                Total={Total}
                                departureDate={formatDate(departure_date)}
                                returnDate={formatDate(return_date)}
                                foods=""
                                meal_cost={meal_cost}
                                Cpn={avg_cost_per_night}
                                airfare_cost={airfare_cost}
                                accommodation_cost={accommodation_cost}
                                 weather={forecastList}
                                exchange_rate={exchange_rate.converted_amount}
                            />

                        </div>
                    );
                }
            )}
        </div>
    );
}

export default OurTrips;