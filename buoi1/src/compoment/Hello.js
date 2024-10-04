import React from "react";

function Hello(){
    const hiAll=()=>{
        alert("hello everyone")
    };
    
    const hiYou=(name)=>{
        alert("hello"+name)
    }
    return(
        <span>
            <button onClick={hiAll}>Hi All</button>
            <button onClick={() => hiYou("Bạn")}>Hi you</button>
        </span>
    )
}

export default Hello;