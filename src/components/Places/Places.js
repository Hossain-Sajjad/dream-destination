import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Destination from '../Destination/Destination';
import './Places.css'

const Places = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('places.json')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, []);

    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
    }

    return (
        <div className='places-container'>
            <div className="destination-container">
                {
                    places.map(place => <Destination
                        key={place.id}
                        place={place}
                        handleAddToCart={handleAddToCart}
                    ></Destination>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Places;
