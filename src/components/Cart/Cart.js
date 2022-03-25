import React from 'react';
import SelectedPlace from '../SelectedPlace/SelectedPlace';
import './Cart.css'

const Cart = ({ cart }) => {
    return (
        <div className='cart'>
            <h3>Selected Destination</h3>
            {
                cart.map(selectedPlace => <SelectedPlace key={selectedPlace.id} selectedPlace={selectedPlace}  ></SelectedPlace>)
            }
        </div>
    );
};

export default Cart;