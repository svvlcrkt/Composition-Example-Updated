import React from 'react';
import "./Card.css"

const Card = (props) => {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
        // props.children ensures that displaying whatever you 
        // include between the opening and closing tags when 
        // invoking a component
    );

    //with props.children we don't need to write 2 times
    //box-shadow and border-radius features
}

export default Card;