import React, { useState } from 'react';
import ChoosenPlace from '../ChoosenPlace/ChoosenPlace';
import SelectedPlace from '../SelectedPlace/SelectedPlace';
import './Cart.css'

const Cart = ({ cart, clearBtn, chooseBtn, choosenPlace }) => {


    return (
        <div className='cart'>
            <h3>Select 4 Destination</h3>
            {
                cart.map(selectedPlace => <SelectedPlace key={selectedPlace.id} selectedPlace={selectedPlace}  ></SelectedPlace>)
            }
            <ChoosenPlace choosenPlace={choosenPlace}></ChoosenPlace>
            <button onClick={chooseBtn} className='cart-btn'>Lucky One</button>
            <button onClick={clearBtn} className='cart-btn'>Clear All</button>
        </div>
    );
};

export default Cart;