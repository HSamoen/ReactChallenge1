import React from "react";

import classes from './Card.module.css'

const Card = props => {
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
};
//{props.children} will give us the content that is passed between the opening and closing tag of the card component
//add className to style 
//`${classes.card} ${props.className}` : to apply two CSS classes --->use template literals

export default Card;