import React from "react";
import classes from './Preview.module.css';

const preview = (props) => {
    return (
        <img
            src={require('../../assets/images/weather-preview.svg')}
            alt="weather app"
            className={classes.Preview}
        />
    )
}

export default preview;