import React from "react";

const date = (props) => {
    const dateTime = new Date();
    return (
        <div>{dateTime.getHours()+':'+dateTime.getMinutes()}</div>
    )
}

export default date;