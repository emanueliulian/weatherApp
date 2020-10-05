import React from "react";
import Aux from "../../hoc/auxiliary";

import classes from './Loading.module.css';

const loading = (props) => {
    return (
        <div className={classes.ldsGrid}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default loading;