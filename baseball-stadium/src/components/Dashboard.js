import React from 'react'
import Display from "./Display";

const Dashboard = props => {

    let strikeCounter = 0;
    let ballCounter = 0;
    let foulCounter = 0;
    let hitMeasurer = false;

    function incrementStrike() {
        if (strikeCounter < 3) {
           console.log(strikeCounter);
            return strikeCounter++;
        }

        else {
            strikeCounter = 0;
            console.log(strikeCounter);
            return strikeCounter;
        }
    }

    function incrementBall() {
        if (ballCounter < 4) {
            console.log(ballCounter);
            return ballCounter++;
        }

        else {
            console.log(ballCounter);
            ballCounter = 0;
            return ballCounter;
        }
    }

    function incrementFoul() {
        if (foulCounter < 3) {
            console.log(foulCounter);
            return foulCounter++;
        }

        else {
            console.log(foulCounter);
            foulCounter = 0;
            return foulCounter;
        }
    }

    function activateHit() {
        
        strikeCounter = 0;
        ballCounter = 0;
        return hitMeasurer = true;
    }

    return (
        <div>
            <button className="button-styler" onClick={incrementStrike}>Strike</button>
            <button className="button-styler" onClick={incrementBall}>Ball</button>
            <button className="button-styler" onClick={incrementFoul}>Foul</button>
            <button className="button-styler" onClick={activateHit}>Hit</button>

            <Display
                strikeCounter={strikeCounter}
                ballCounter={ballCounter}
                foulCounter={foulCounter}
                hitMeasurer={hitMeasurer}
            />
        </div>
    )

}

export default Dashboard;