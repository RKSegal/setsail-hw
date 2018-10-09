import React from 'react';
import Timer from "react-compound-timer";
import './Header.css'

class Counter extends React.Component {
    render () {
        return (
            <div className="light-green-text">
            <p className="grey-text"> NEXT UPDATE IN </p>
            <span className="inline">
                <i className="large material-icons">timer</i>
                <Timer
                    initialTime={60000 * 60 * 12 + 5000}
                    lastUnit="h"
                    direction="backward"
                >
                    {() => (
                        <React.Fragment>
                            <Timer.Hours />:
                            <Timer.Minutes />:
                            <Timer.Seconds />
                        </React.Fragment>
                    )}
                </Timer>
            </span>
            </div>
        )
    }
}

export default Counter;