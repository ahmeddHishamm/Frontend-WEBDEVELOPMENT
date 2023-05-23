




import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import "./FlightSearchFormStyles.css"

function FlightSearchForm() {
    const [budget, setBudget] = useState(0);
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [isBudgetEditable, setIsBudgetEditable] = useState(true);
    const [isDestinationEditable, setIsDestinationEditable] = useState(true);
    const [responseData, setResponseData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBudgetChange = (event) => {
        if (isBudgetEditable) {
            setBudget(event.target.value);
            setIsDestinationEditable(false);
        }
    };

    const handleDestinationChange = (event) => {
        if (isDestinationEditable) {
            setDestination(event.target.value);
            setIsBudgetEditable(false);
        }
    };

    const handleReset = () => {
        setDepartureDate('');
        setReturnDate('');
        setDestination('');
        setIsBudgetEditable(true);
        setIsDestinationEditable(true);
        setBudget(0);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // Create the search criteria object
        const searchCriteria = {
            country_name: destination,
            departure_date: departureDate,
            return_date: returnDate,
            Total: budget,
        };

        // Send the search request to the server using axios
        axios.get('http://localhost:8080/api/data/trips/range', { params: searchCriteria })
            .then(response => {
                console.log(response.data);
                setResponseData(response.data);
                setIsModalOpen(true);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit} onReset={handleReset} className="flight-search-form">
                <div className="form-group">
                    <label className="form-label" htmlFor="destination">To</label>
                    <input type="text" className="form-control" id="destination" value={destination} onChange={handleDestinationChange} placeholder="Country" required={!isBudgetEditable} disabled={!isDestinationEditable} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="budget">By Budget</label>
                    <input type="range" className="form-control-range" id="budget" value={budget} min="0" max="7000" step="1" onChange={handleBudgetChange} disabled={!isBudgetEditable} />
                    <span>{`$${budget}`}</span>
                </div>
                <div className="form-group">
                    <div className="form-row">
                        <div className="col">
                            <label className="form-label" htmlFor="departureDate">Depart</label>
                            <input type="date" className="form-control" id="departureDate" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} required={!isDestinationEditable} disabled={!isDestinationEditable && !isBudgetEditable} />
                        </div>
                        <div className="col">
                            <label className="form-label" htmlFor="returnDate">Return</label>
                            <input type="date" className="form-control" id="returnDate" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} required={!isDestinationEditable} disabled={!isDestinationEditable && !isBudgetEditable} />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Search Flights</button>
                <button type="reset" className="btn btn-secondary">Reset</button>
            </form>
            <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="modal">
                <button className="close-button" onClick={() => setIsModalOpen(false)}>X</button>
                <div className="modal-content">
                    {responseData && (
                        <pre>{JSON.stringify(responseData, null, 2)}</pre>
                    )}
                </div>
            </Modal>
        </div>
    );
}

export default FlightSearchForm;














// import React, { useState } from 'react';
// import axios from 'axios';
// import "./FlightSearchFormStyles.css"
//
// function FlightSearchForm() {
//     const [budget, setBudget] = useState(0);
//     const [destination, setDestination] = useState('');
//     const [departureDate, setDepartureDate] = useState('');
//     const [returnDate, setReturnDate] = useState('');
//     const [isBudgetEditable, setIsBudgetEditable] = useState(true);
//     const [isDestinationEditable, setIsDestinationEditable] = useState(true);
//
//     const handleBudgetChange = (event) => {
//         if (isBudgetEditable) {
//             setBudget(event.target.value);
//             setIsDestinationEditable(false);
//         }
//     };
//
//     const handleDestinationChange = (event) => {
//         if (isDestinationEditable) {
//             setDestination(event.target.value);
//             setIsBudgetEditable(false);
//         }
//     };
//
//     // const handleDateChange = (event, setterFunc) => {
//     //     setterFunc(event.target.value);
//     //     setIsDestinationEditable(false);
//     //     setIsBudgetEditable(false);
//     // };
//
//     const handleReset = () => {
//         setDepartureDate('');
//         setReturnDate('');
//         setDestination('');
//         setIsBudgetEditable(true);
//         setIsDestinationEditable(true);
//         setBudget(0);
//     }
//
//     const handleSubmit = (event) => {
//         event.preventDefault();
//
//         // Create the search criteria object
//         const searchCriteria = {
//             country_name: destination,
//             departure_date: departureDate,
//             return_date: returnDate,
//             Total: budget,
//         };
//
//         // Send the search request to the server using axios
//         axios.get('http://localhost:8080/api/data/trips/range', { params: searchCriteria })
//             .then(response => {
//                 console.log(response.data);
//                 // Do something with the response data (e.g. display it to the user)
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     };
//
//     return (
//         <form onSubmit={handleSubmit} onReset={handleReset} className="flight-search-form">
//             <div className="form-group">
//                 <label className="form-label" htmlFor="destination">To</label>
//                 <input type="text" className="form-control" id="destination" value={destination} onChange={handleDestinationChange} placeholder="City or airport" required={!isBudgetEditable} disabled={!isDestinationEditable} />
//             </div>
//             <div className="form-group">
//                 <label className="form-label" htmlFor="budget">By Budget</label>
//                 <input type="range" className="form-control-range" id="budget" value={budget} min="0" max="7000" step="1" onChange={handleBudgetChange} disabled={!isBudgetEditable} />
//                 <span>{`$${budget}`}</span>
//             </div>
//             <div className="form-group">
//                 <div className="form-row">
//                     <div className="col">
//                         <label className="form-label" htmlFor="departureDate">Depart</label>
//                         <input type="date" className="form-control" id="departureDate" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} required={!isDestinationEditable} disabled={!isDestinationEditable && !isBudgetEditable} />
//                     </div>
//                     <div className="col">
//                         <label className="form-label" htmlFor="returnDate">Return</label>
//                         <input type="date" className="form-control" id="returnDate" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} required={!isDestinationEditable} disabled={!isDestinationEditable && !isBudgetEditable} />
//                     </div>
//                 </div>
//             </div>
//             <button type="submit" className="btn btn-primary">Search Flights</button>
//             <button type="reset" className="btn btn-secondary">Reset</button>
//         </form>
//     );
// }
//
// export default FlightSearchForm;
