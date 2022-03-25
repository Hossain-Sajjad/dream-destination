import React from 'react';

const SelectedPlace = ({ selectedPlace }) => {
    return (
        <div>
            <p>{selectedPlace.name}</p>
        </div>
    );
};

export default SelectedPlace;