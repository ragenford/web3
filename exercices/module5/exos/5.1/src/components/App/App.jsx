import BadButton from "components/Button/BadButton";
import GoodButton from "components/Button/GoodButton";
import OkButton from "components/Button/OkButton";
import ResetButton from "components/Button/ResetButton";
import { Context as CounterContext } from "../../contexts/countersContext";
import { useContext } from "react";

const App = () => {
  const { counterGood, counterOk, counterBad } = useContext(CounterContext);
  return (
    <div>
      <ul>
        <li>
          <span>Good : {counterGood}</span> <GoodButton />
        </li>
        <li>
          <span>Ok : {counterOk}</span> <OkButton />
        </li>
        <li>
          <span>Bad : {counterBad}</span> <BadButton />
        </li>
      </ul>
      <ResetButton />
    </div>
  );
};

export default App;
