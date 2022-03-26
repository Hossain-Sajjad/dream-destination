import React from 'react';
import './ChoosenPlace.css'

const ChoosenPlace = (props) => {
    console.log(props.choosenPlace)
    if (props.choosenPlace === undefined || props.choosenPlace.length === 0) {
        return (
            <div>

            </div>
        );
    }
    else {
        return (
            <div className='choosen-place'>
                <p>Congratulations! You Won <span className='lucky-place'>{props.choosenPlace.days} {props.choosenPlace.name}</span> Luxary Tour...!</p>
            </div>
        );
    }
};

export default ChoosenPlace;