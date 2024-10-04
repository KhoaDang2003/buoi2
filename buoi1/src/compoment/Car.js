import React, {useState} from 'react';

function Car(){
    const [car, setCar] = useState({
        name: 'Vinfast',
        color: 'red',
        year : 2024
    });

    const updateYear = (event) =>{
        const newYear = event.target.value;
        setCar(preveCar => ({...preveCar, year: newYear}));
    };

return(
    <>
        <h2>show information of Car:</h2>
        <p>Name : {car.name}</p>
        <p>Color : {car.color}</p>
        <p>Year: {car.year}</p>
        Update Year of Car: 
        <input type="number" onChange={updateYear}/>
        <input type="button" value="Update Year" onClick={() => alert('Year updated to: ${car.year}')}/>
    </>
);
}

export default Car;