import React from 'react';
import SelectedPlace from '../SelectedPlace/SelectedPlace';

const Cart = ({ cart }) => {
    return (
        <div>
            <p>{cart.length}</p>
            {
                cart.map(selectedPlace => <SelectedPlace key={selectedPlace.id} selectedPlace={selectedPlace}  ></SelectedPlace>)
            }
        </div>
    );
};

export default Cart;