//1. import react and react DOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
 
//2. get a reference to the div with ID root
const element = document.getElementById('root')

//3. tell react to take control of the element
const root = ReactDOM.createRoot(element);

//4. create a component
function App(){
  return <h1>Hi there</h1>
}

//5. show the component on the screen
root.render(<App />)
