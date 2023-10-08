import { useState } from "react";
import History from "../compnentHistory/componentHistory";
import Button from "../componentButton/componentButton";
import Display from "../componentDisplay/componentDisplay";

/*
  const App = () => {
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [allClicks, setAll] = useState([]);

    const handleLeftClick = () => {
      setAll(allClicks.concat("L"));
      console.log("left before", left);
      const updatedLeft = left + 1;
      setLeft(updatedLeft);
      console.log("left after", left);
    };

    const handleRightClick = () => {
      setAll(allClicks.concat("R"));
      const updatedRight = right + 1;
      setRight(updatedRight);
    };

    return (
      <div>
        {left}
        <Button handleClick={handleLeftClick} text="left" />
        <Button handleClick={handleRightClick} text="right" />
        {right}
        <History allClicks={allClicks} />
      </div>
    );
  };
*/

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    console.log("value now", newValue);
    setValue(newValue);
  };

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  );
};

export default App;
