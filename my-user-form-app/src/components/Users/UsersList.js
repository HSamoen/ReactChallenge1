import React from "react";

import Card from "../UI/Card";
import classes from './UsersList.module.css';

const UsersList = props => {
    return (
    <Card className={classes.users}>
         <ul>
        {props.users.map((user) => (
            <li key={user.id}>
                {user.name} ({user.age} years old)
            </li>
            ))}
        </ul>
    </Card>
   );
};
//{props.users} holds array of user data and map() to map that array of users to an array of JSX elements, which are then rendered into the DOM
//map() executes a function on every item in the user's array and will get that item as input
//users is an array of user objects where every object has a name and age property
//key: every user should have a unique id


export default UsersList;