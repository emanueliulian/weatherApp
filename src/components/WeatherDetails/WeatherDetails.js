import React from "react";
import classes from './WeatherDetails.module.css';

// components
import Temperature from "./Temperature/Temperature";
import Description from "./Description/Description";
import Date from "./Data/Date";
import Icon from "../../elements/Icon/Icon";

const weatherDetails = (props) => {
    return (
        <div className={classes.WeatherDetailsWrapper}>
            <div className={classes.WeatherIconWrapper}>
                <Icon type={props.data.description}/>
            </div>
            <div className={classes.WeatherDataWrapper}>
                <Temperature degrees={props.data} />
                <Description description={props.data.description}/>
                <Date />
            </div>
        </div>
    )
}

export default weatherDetails;