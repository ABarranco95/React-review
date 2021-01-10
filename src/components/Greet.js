import React from 'react';

function Greet(props) {
    console.log(props)
    return (
        <div>
            <h2>Welcome {props.name} a.k.a {props.heroName}</h2>
        </div>
    )
}

export default Greet;