import React from 'react';
import Dashboard from "./Dashboard";

function Display(props) {

    return (
        <div>
            <p>
               This is the strike Counter: 
            </p>
            {props.strikeCounter}
            <p>
                This is the foul Counter:
            </p>
            {props.foulCounter}
            <p>
                This is the ball Counter:
            </p>
            {props.ballCounter}
            <p>
                This will show if a hit has been completed:
            </p>
            {props.activateHit}
        </div>
    )

}

export default Display;