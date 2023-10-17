"use client"
import React, { useState } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';

const CityAutocomplete = ({ google }) => {
    const [predictions, setPredictions] = useState([]);

    const handlePlaceChange = (place) => {
        if (place && place.geometry) {
            const { lat, lng } = place.geometry.location;
            console.log('Selected city:', place.name);
            console.log('Latitude:', lat());
            console.log('Longitude:', lng());
        }
    };

    const handleInputChange = (event) => {
        const autocompleteService = new google.maps.places.AutocompleteService();
        const input = event.target.value;

        autocompleteService.getPlacePredictions(
            { input, types: ['(cities)'] },
            (predictions, status) => {
                if (status === 'OK') {
                    setPredictions(predictions);
                } else {
                    setPredictions([]);
                }
            }
        );
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter a city"
                onChange={handleInputChange}
            />
            <ul>
                {predictions.map((prediction) => (
                    <li
                        key={prediction.place_id}
                        onClick={() => handlePlaceChange(prediction)}
                    >
                        {prediction.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDRulpty_xzaYWrQb1MydzxXkXKAOdfz3I',
})(CityAutocomplete);
