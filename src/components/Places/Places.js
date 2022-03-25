import React, { useEffect, useState } from 'react';
import Destination from '../Destination/Destination';
import './Places.css'

const Places = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('places.json')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, []);

    console.log(places);

    return (
        <div className='places-container'>
            <div className="destination-container">
                {
                    places.map(place => <Destination
                        key={place.id}
                        place={place}
                    ></Destination>)
                }
            </div>
            <div className="cart-container">

            </div>
        </div>
    );
};

export default Places;
