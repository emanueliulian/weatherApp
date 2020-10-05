import React from "react";
import Aux from "../../hoc/auxiliary";

import classes from "./InputField.module.css";
import assetMapping from '../../assets/assetMapping.json';

const inputField = (props) => {
    return (
        <Aux>
            <label htmlFor={props.name}>{props.label}</label>
            <input
                type={props.type}
                id={props.name}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.handleChange}
                style={(props.error) ? {'borderBottomColor' : assetMapping.colors.error } : null}
                className={classes.searchField} />
        </Aux>
    )
}

export default inputField;