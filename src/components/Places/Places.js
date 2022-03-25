import React, { useEffect, useState } from 'react';

const Places = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('places.json')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, []);

    console.log(places);

    return (
        <div>

        </div>
    );
};

export default Places;
