import React from "react";
import classes from './Temperature.module.css';

const temperature = (props) => {
    const temperature = Math.floor(props.degrees.temperature);
    const feelsLise = Math.floor(props.degrees.feelsLike);

    return (
        <div className={classes.TemperatureWrapper}>

            <h1>{temperature}°</h1>
            <h4>feels like: {feelsLise}°</h4>
        </div>
    )
}

export default temperature;