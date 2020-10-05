import React from "react";
import classes from './Header.module.css';

const header = (props) => {
    return (
        <header style={{backgroundColor: props.color}}>
            <h1 className={classes.logoIcon}>Weather App</h1>
        </header>
    )
}

export default header;