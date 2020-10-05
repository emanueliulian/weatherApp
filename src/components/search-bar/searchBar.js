import React from "react";
import InputField from "../../elements/inputField/InputField";
import Button from "../../elements/Button/Button";

import classes from './searchBar.module.css';

const searchBar = (props) => {
    return (
        <div className={classes.SearchBarWrapper}>
            <InputField
            type='text'
            name='city'
            label='Location'
            placeholder='Enter a city'
            value={props.value}
            handleChange={props.onChangeHandler}
            error={props.error}/>

            <Button type='submit' name='Search' position='onForm' clicked={props.onClickHandler}>Search</Button>
        </div>
    )
}

export default searchBar;