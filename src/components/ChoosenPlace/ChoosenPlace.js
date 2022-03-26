import React from 'react';
import './ChoosenPlace.css'

const ChoosenPlace = (props) => {
    if (props.choosenPlace.length === 0) {
        return <div></div>
    }
    else {
        return (
            <div className='choosen-place'>
                <p>Congratulations! You Won <span>{props.choosenPlace.days} {props.choosenPlace.name}</span> Luxary Tour...!</p>
            </div>
        );
    }
};

export default ChoosenPlace;