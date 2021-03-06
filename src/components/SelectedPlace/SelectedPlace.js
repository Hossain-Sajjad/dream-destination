import React from 'react';
import './SelectedPlace.css'

const SelectedPlace = ({ selectedPlace }) => {
    const { name, img } = selectedPlace;
    // console.log(name)
    return (
        <div className='selectedPlace'>
            <img src={img} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default SelectedPlace;