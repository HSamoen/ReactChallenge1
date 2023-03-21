//IMPORTS:
// import './App.css';
// import React from 'react'; 

// //ex3
// import ExerciseComponent from './exercises/ex3/ExerciseComponent'; 

// //ex4
// import Product from './exercises/ex4/Product'
// //import Product from Product.js
// import './exercises/ex4/styles.css'

// //ex5
// import './exercises/ex5/styles.css'

// //ex6
// import './exercises/ex6/styles.css'
// import React, { useState } from 'react';
// //to use state 

// //ex7
// import './exercises/ex7/styles.css'
// import React from 'react'; 

// //ex8
// import './exercises/ex8/styles.css'
// import React from 'react'; 

// //ex9
// import React from 'react';
// import Todo from './exercises/ex9/Todo';
// import './exercises/ex9/styles.css';

// //ex10
// import './exercises/ex10/styles.css'
// import React from 'react';

// //ex11
// import './exercises/ex11/styles.css'
// import React from 'react';

// //ex12
// import './exercises/ex12/styles.css'
// import React from 'react';

//ex13
import './exercises/ex13/styles.css'





//EXERCISES:

//// Exercise 1: Array Methods ---> src/exercises/ex1/index.js





//// Exercise 2: Working with JSX Code
////edit the JSX code of a provided React component such that it displays a h1 element with the text "Exercise done!" on the page.

// function App() {
//     return (
//         <div>
//         <h1>Exercise done!</h1> 
//             <p>Practicing React...</p>
//         </div>
//     );
// }





////Exercise 3: Building a First Component
// function App() {
//     return (
//         <div>
//             <ExerciseComponent />
//         </div>
//     )
// }
 
//import the component ExerciseComponent above
//to use the component function, use the the syntax <ExerciseComponent /> to call it into the function App which will allow it be rendered to the browser





//// Exercise 4: Passing Data via "props"
// function App() {
//     return (
//         <div>
//             <h1>HSamoen's Demo Shop</h1>
//             <Product title="Item 1" price="5.99" description="Book" />
//             <Product title="Item 2" price="10.99" description="Movie" />
//         </div>
//     );
// }
// //to use product --> insert <Product /> into our app func
// //props allow us to use <product /> more than once

// //inside <Product /> --> define our titles, prices, and descriptions to be displayed 





// //Exercise 5: Listening to Events
// //"connect" a click event listener to an already existing button and output "Stored!" via console.log()

// const clickHandler = () => {
//     console.log('Stored!');
// }
// //create a function for the onClick event --->in this case we want the message 'Stored!' to be displayed on the console when the button is clicked
// //creating the function outside of the function makes our code more readable 
// //function can be called into the onClick event which is attached to the button below

// function App() {
// return <button onClick={clickHandler}>Bookmark</button>;
// }
// //to add event listener to a button add---> onClick
// //call in the clickHandler function to onClick; so that in the event that the button is clicked the message logged into our clickHandler function will be displayed in our console





// //Exercise 6: Working with "State"
// //add an event listener to listen for clicks on the button that's already included in the App component.
// //Upon a button click, the price should change from $100 to $75.
// //Add a state value to the existing App component function and make sure the state value is both updated upon button clicks and output as part of the JSX code.

// function App() {
// //to work with state-->use the useState() Hook
// const [price, setPrice] = useState(100); // default price state: 100
// //price: current state value
// //setPrice: function to be called to update the value of the state 

// //state updating function
// function clickHandler() {
//       setPrice(75);
//     }
// //set the price to 75 for the clickHandler ---> this function will be used for the event listner, so that when the button is clicked the current state value of 100 will be updated to 75
    
//     return (
//         <div>
//             <p>${price}</p>
//             <button onClick={clickHandler}>Apply Discount</button>
//         </div>
//     );
// }
// //replace the hardcoded price to the current state element defined with state (which was set to 100 as the default value)
// //when button is clicked the price will be set to what is defined in the clickHandler function which conatins the updated price (setPrice-->75)
// //state allows for dynamic code





// // //Exercise 7: Using State with Form Inputs
// // //validate the text entered by a user whilst the user is typing.
// // //If the text message entered is valid (for this example: if it's at least 3 characters long), the text "Valid message" should be displayed below the input field. If it's invalid (i.e., shorter than 3 characters), the text "Invalid message" should be displayed.

// function App() {
    
//     const [msgValidity, setMsgValidity] = React.useState('Invalid');
//        //React.useState--> alternative to importing useState 
//     //using state hooks
//     //msgValidity: current state is set to 'Invalid'
//     //setMsgValidity: updated state
    
//     function msgChangeHandler(event) {
//        const value = event.target.value;
//             if (value.trim().length < 3) {
//                 setMsgValidity('Invalid')
//             } else {
//                 setMsgValidity('Valid');
//             }
//         }
// //function for our Event listener
// //the function states that while the user is typing in a word with less than 3 letters the message 'Invalid' will be displayed
// //else if the word is 3 or more letters the message 'Valid' will be displayed
// //simply, the function contains the 'updated state' based on the conditions set
    
//     return (
//         <form>
//             <label>Your message</label>
//             <input type="text" onChange={msgChangeHandler}/>
//             <p>{msgValidity} message</p>
//         </form>
//     );
// }
// // //eventlistener: onChange event in React detects when the value of an input element changes
// // //call in msgChangeHandler to onChange-->listens to the activity of user input and displays the messages based on the conditions set in msgChangeHandler
// // //{msgValidity} displays the state of the messasge from default value of 'Invalid' to updated state 'valid' (when conditions are met)




// //Exercise 8: Updating State Based On Older State
// //build a basic counter that should increment whenever the "Increment" button is clicked.
 
// function App() {
//     const [counter, setCounter] = React.useState(0);
//     //default value is set to 0: Increment starts at 0
//     function incrementCounterHandler() {
//         setCounter(prevCounter => prevCounter + 1);
//     }
//     //function sets the increment conditions:
//     //updated state (setCounter) takes the previous state and add it by 1 to equal the current state
    
//     return (
//       <div>
//         <p id="counter">{counter}</p>
//         <button onClick={incrementCounterHandler}>Increment</button>
//       </div>
//     );
// }
// //{counter} holds the default value of 0 and displays the state of the value everytime the button is clicked: displays the incremented values
// //button contains the eventlistener that is attched to the function that holds how the updated state is incremented 




// //Exercise 9: Rendering Lists of Data
// //output a list of dummy todo items dynamically
// //transform the DUMMY_TODOS array that's provided to you (which must not be changed!) to a list of JSX elements (<Todo> elements to be precise). Every Todo component item must receive and output the todo text via a prop called text.

// const DUMMY_TODOS = [
//     'Learn React',
//     'Practice React',
//     'Profit!'
// ];
// //dummy data

// function App() {
//     return (
//         <ul>
//           {DUMMY_TODOS.map(todo => <Todo text={todo} />)}
//         </ul>
//     );
// }
// //DUMMY_TODOS function is passed to map() method
// //allows for strings to transform to <Todo /> JSX elements
// //text property is set to pass the todo item text to the Todo component




// //Exercise 10: Outputting Conditional Content
// //conditionally show a warning box once a user has clicked a specific button. Inside that warning dialog, another button allows users to dismiss the warning (i.e., remove the warning box from the screen).
 
// function App() {
//     const [isDeleting, setIsDeleting] = React.useState(false);
//     //to set current and update state of box 
//     //default state is set to false-->box will not be shown
    
//     function deleteHandler() {
//         setIsDeleting(true);
//     }
//     //deleteHandler contains the update state set to true --->box will be shown
    
//     function proceedHandler() {
//         setIsDeleting(false);
//     }
//     //deleteHandler contains the update state set to false --->box will not be shown
    
//     let warning;
    
//     if (isDeleting) {
//         warning = (
//             <div id="alert">
//               <h2>Are you sure?</h2>
//               <p>These changes can't be reverted!</p>
//               <button onClick={proceedHandler}>Proceed</button>
//             </div>
//         );
//     }
//     //function updates the isDeleting state: 
//     //button takes in proceedHandler function -->when clicked the box will not be shown
    
    
//     return (
//       <div>
//         {warning}
//         <button onClick={deleteHandler}>Delete</button>
//       </div>    
//     );
// }
//   //{warning} displays the update state of the box 
//   //onClick={deleteHandler} set to display the box when the button is clicked 




// //Exercise 11: Dynamic Styles
// //dynamically apply a style (color: red) to the <p>Style me</p> element in the provided React app.
// //The style should be applied as an inline style (i.e., via the style attribute / prop) when the <button> is clicked for the first time. Once the button is clicked again, the styling should switch back to color: white, which should also be the initial style.
// //Make sure that the button toggles between these two styles (color: white <=> color: red).

// function App() {
//     const [colored, setColored] = React.useState(false);
//     // current state is set to false--> no color

//     function clickHandler() {
//         setColored(colored=> !colored);
//     }
//     //updated state (text color) is set to the opposite of the old state 

//     return (
//         <div>
//             <p style={{color: colored? 'red' : 'white'}}>Style me!</p>
//             <button onClick={clickHandler}>Toggle style</button>
//         </div>
//     );
// }
// //inline style is used to set the color of the text in the event that the button is clicked




// //Exercise 12: Dynamic CSS Classes
// //dynamically apply a CSS class (active) to the <p>Style me</p> element in the provided React app. 
// //The style should be applied as an CSS class (i.e., via the className attribute / prop) when the <button> is clicked for the first time. Once the button is clicked again, all CSS classes should be removed from the <p> element (this should also be the initial state).
// //Make sure that the button toggles between these two styles (no CSS class <=> active  CSS class).
 
// function App() {
//     const [colored, setColored] = React.useState(false);
    
//     function clickHandler() {
//         setColored(colored => !colored);
//     }
    
//     return (
//         <div>
//             <p className={colored ? 'active' : ''}>Style me!</p>
//             <button onClick={clickHandler}>Toggle style</button>
//         </div>
//     );
// }
// //style is applied as a CSS class: className is set to either 'active' or an empty string '' based on the value of colored
// //color of text is based on the state of the text; toggles between the initial state an update state-->add or remove the active CSS class




////Exercise 13: Fix Errors
//find and fix all errors that are hiding in the code.

//before:
// export default function App() {
//     const clickHandler = () => {
//         console.log('Clicked!');
//     };
    
//     return (
//         <Div>
//           <h2>You're logged in!</h2>
//           <p>Welcome to your user profile!</p>
//           <button onclick={clickHandler}>Click me!</button>
//         </Div>
//     );
// }


//after:
function App() {
    const clickHandler = () => {
        console.log('Clicked!');
    };
    
    return (
        <div>
          <h2>You're logged in!</h2>
          <p>Welcome to your user profile!</p>
          <button onClick={clickHandler}>Click me!</button>
        </div>
    );
}
//<Div> should be in lowercase --> <div>
//onclick should be ---> onClick


export default App;