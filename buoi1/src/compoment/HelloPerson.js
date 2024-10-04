import React from 'react';

function Hello(){
    const person = { name: 'Peter',
        theme: { backgroundColor : "green",
            color:'white'
        }
    };
    return(
        <div style={person.theme}>
            <h1>Hello : {person.name}</h1>
        </div>
    );
}

function HelloPerson(props){
    return(
        <h1>Xin chào bạn : {props.name}</h1>
    );
}

export {Hello , HelloPerson};
