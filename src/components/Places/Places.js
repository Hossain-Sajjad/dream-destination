import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Destination from '../Destination/Destination';
import './Places.css'

const Places = () => {
    const [places, setPlaces] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('places.json')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, []);

    const handleAddToCart = (selectedPlace) => {
        if (cart.length >= 4) {
            alert("Can't choose more than 4!")
        }
        else {
            let newCart = [];
            const exists = cart.find(place => place.id === selectedPlace.id);
            if (!exists) {
                newCart = [...cart, selectedPlace];
            }
            else {
                const rest = cart.filter(place => place.id !== selectedPlace.id);
                newCart = [...rest, exists];
            }
            setCart(newCart);
        }
    }
    const clearBtn = () => {
        setCart([]);
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
            <div>
                <Cart cart={cart} clearBtn={clearBtn}></Cart>
            </div>
        </div>
    );
};

export default Places;
