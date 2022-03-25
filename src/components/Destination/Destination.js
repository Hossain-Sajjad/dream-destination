import React from 'react';

const Destination = (props) => {
    const { name, img, price } = props.place;
    return (
        <div className='place'>
            <img src={img} alt=""></img>
            <div className='place-info'>
                <p className='place-name'>{name}</p>
                <p>Price: ${price}</p>
            </div>
            {/* <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button> */}
        </div>
    );
};

export default Destination;