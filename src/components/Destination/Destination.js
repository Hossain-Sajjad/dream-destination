import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Destination.css'

const Destination = (props) => {
    const { name, img, price } = props.place;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='place'>
            <img src={img} alt=""></img>
            <div className='place-info'>
                <p className='place-name'>{name}</p>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => handleAddToCart(props.place)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Destination;