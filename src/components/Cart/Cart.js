import React, { useState } from 'react';
import ChoosenPlace from '../ChoosenPlace/ChoosenPlace';
import SelectedPlace from '../SelectedPlace/SelectedPlace';
import './Cart.css'

const Cart = ({ cart }) => {
    const [choosenPlace, setChoosenPlace] = useState([]);
    const chooseBtn = () => {
        const random = Math.floor(Math.random() * 4);
        const abc = cart.find(item => cart.indexOf(item) === random)
        setChoosenPlace(abc);
    }
    return (
        <div className='cart'>
            <h3>Select 4 Destination</h3>
            {
                cart.map(selectedPlace => <SelectedPlace key={selectedPlace.id} selectedPlace={selectedPlace}  ></SelectedPlace>)
            }
            <ChoosenPlace choosenPlace={choosenPlace}></ChoosenPlace>
            <button onClick={chooseBtn}>Lucky One</button>
        </div>
    );
};

export default Cart;