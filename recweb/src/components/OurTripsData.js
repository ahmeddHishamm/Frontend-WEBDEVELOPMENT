import { useState } from "react";
import "./DestinationsStyles.css";

function OurTripsData(props) {
    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => {
        setShowMore(!showMore);
    };

    return (
        <div className={`t-card ${showMore ? "active" : ""}`} onClick={handleToggle}>
            <div className="t-image">
                <img src={props.image} alt="image" />
            </div>
            <h4>{props.heading}</h4>
            <p>Total: {props.Total || "N/A"}</p>

            {showMore && (
                <div className="t-more-info">

                    <p>Exchange rate: {props.exchange_rate || "N/A"}</p>
                    <p>Departure date: {props.departureDate || "N/A"}</p>
                    <p>Return date: {props.returnDate || "N/A"}</p>
                    <p>Foods: {props.foods || "N/A"}</p>
                    {/*<p>Locations: {props.locations || "N/A"}</p>*/}
                    <p>Cost Per Night: {props.Cpn || "N/A"}</p>
                    <p>Airfare cost: {props.airfare_cost || "N/A"}</p>
                    <p>Accommodation cost: {props.accommodation_cost || "N/A"}</p>
                    <p>Meal Cost: {props.meal_cost || "N/A"}</p>
                    <p>Weather: {props.weather || "N/A"}</p>





                </div>
            )}
        </div>
    );
}

export default OurTripsData;
