import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserslist) => {
    return [...prevUserslist, 
      { name:uName, age: uAge, id:Math.random().toString()}
    ];
  });
};
  //take an old list and append a new element to it
  //when state update relies on the previous state, use an alternative form of set UsersList 
  //use function form where you pass a function to setUsersLis
  //function will automatically get the previous latest state snapchot, when React perform state update
  //add a pseudo unique id 

  return (
    <div>
    <AddUser onAddUser={addUserHandler} />
    <UsersList users={usersList}/>
    </div>
  );
}
//when add user button is clicked, a function that is passed onto AddUser will be triggered

export default App;
