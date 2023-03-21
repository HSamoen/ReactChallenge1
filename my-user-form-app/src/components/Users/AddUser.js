import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal';
//for nonjavascript files add extention -->.css


const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('')
    //inital state is set to an empty string--> no input
    //[enteredUsername, setEnteredUsername] : a javascript syntax called array de-structuring and is used because useState() always returns an array with exactly two elements
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState();
    //set error state

    const AddUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            });
            return; 
        }
        //adding validation:
        //nothing is logged if one input is empty and age cannot be less than 1 
        //+ --> returns a number instead of a string
        
        props.onAddUser(enteredUsername, enteredAge);
        // console.log(enteredUsername, enteredAge)
        setEnteredUsername('');
        setEnteredAge('');
    };
//event.preventDefault() --> prevent default which for the submission event is that a request is sent
//setEnteredUsername/setEnteredAge to empty strings --->clear input area once button is clicked

        const usernameChangeHandler = (event) => {
            setEnteredUsername(event.target.value)
        };
        //set to what the user currently entered--> with help of event object; target event is the input and value property of that input to get the currently entered value

        const ageChangeHandler = (event) => {
            setEnteredAge(event.target.value)
        };

    const errorHandler = () => {
        setError(null);
    }
    //to get rid of the errormodal:
    //reset error to undefined or to null or any false value so that the error state condition to the error model is not longer met

    return (
        <div>
        {error && (
        <ErrorModal 
        title={error.title} 
        message={error.message} 
        onConfirm={errorHandler} 
        />
        )}
        <Card className={classes.input}>
            <form onSubmit={AddUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </div>
    )
}
//add in id for accessibility
//htmlFor is the prop name for assigning the 'for' attribute to a label
//onSubmit prop to specify a function that should be executed when the form is submitted
//bind usernameChangeHandler to onChange prop which ties the change event listener; function will be triggered for every keystroke in the input element
//error && : conditionally render the error modal 

export default AddUser;