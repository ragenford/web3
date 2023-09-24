import React from "react";
import Display from "../componentDisplay/componentDisplay";
import Button from "../componentButton/componentButton";
/*

DESTRCUTURING 


const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

*/

import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(localStorage.getItem("counter"));
  console.log("rendering with counter value", counter);

  const changeCount = (delta) => {
    setCounter(counter + delta);
    localStorage.setItem("counter", JSON.stringify(counter));
  };
  return (
    <div>
      <Display counter={counter} />
      <Button changeCount={changeCount} delta={1} text="plus" />
      <Button changeCount={changeCount} delta={-counter} text="zero" />
      <Button changeCount={changeCount} delta={-1} text="minus" />
    </div>
  );
};

export default App;
