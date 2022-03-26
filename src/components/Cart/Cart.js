import React from 'react';
import SelectedPlace from '../SelectedPlace/SelectedPlace';
import './Cart.css'

const Cart = ({ cart }) => {
    const chooseBtn = () => {
        const random = Math.floor(Math.random() * 4 + 1);
    }
    return (
        <div className='cart'>
            <h3>Selected Destination</h3>
            {
                cart.map(selectedPlace => <SelectedPlace key={selectedPlace.id} selectedPlace={selectedPlace}  ></SelectedPlace>)
            }
            <button onClick={chooseBtn}>Choose One</button>
        </div>
    );
};

export default Cart;