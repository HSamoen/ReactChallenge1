import React from "react";

import classes from './Button.module.css'

const Button = props => {
    return <button 
    className={classes.button} 
    type={props.type || 'button'} 
    onClick={props.onClick}
    >
       {props.children} 
    </button>
}
//if props.type is undefined, the 'button' value will be used as a fallback type
//any function passed into onClick will be passed onto the built in button component

export default Button;